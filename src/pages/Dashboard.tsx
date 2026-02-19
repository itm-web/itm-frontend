import { useLocation, useNavigate } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Wallet, Banknote, FileChartColumn } from "lucide-react";
import itmLogo from "@/assets/logo/black_rlogo.png";
import { useEffect, useMemo, useState } from "react"; // ✅ (only addition here: useMemo)
import { BASE_URL } from "@/config";

/* ================= HELPERS ================= */

const getInitials = (name: string | undefined) => {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

/**
 * Decimal Fixer: Formatting only numbers to 4 decimal places
 * No Currency Symbols Added
 */
const formatValue = (val: any) => {
  const num = parseFloat(val);
  if (isNaN(num)) return val;
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });
};

/* ================= COMPONENT ================= */

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    username,
    last_login,
    investor_name: initialInvestorName,
    chart: initialChart,
    summary: initialSummary,
  } = location.state || {};

  const [chartData, setChartData] = useState<any[]>(initialChart || []);
  const [summary, setSummary] = useState<any>(initialSummary || {});
  const [investorName, setInvestorName] = useState(initialInvestorName);
  const [loading, setLoading] = useState(!initialChart);

  const actions = [
    {
      title: "Add Money",
      icon: <Wallet className="h-7 w-7" />,
      bg: "bg-sky-500/10 border-sky-500/30 text-sky-700",
      tooltip: "Deposit funds into your investment account",
    },
    {
      title: "Withdraw",
      icon: <Banknote className="h-7 w-7" />,
      bg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700",
      tooltip: "Withdraw funds to your linked bank account",
    },
    {
      title: "Full Report",
      icon: <FileChartColumn className="h-7 w-7" />,
      bg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-700",
      tooltip: "Download your complete investment statement",
    },
  ];

  /* ================= API DASHBOARD FETCH ================= */
  useEffect(() => {
    // If we already have data from login state, don't fetch again unless name changed
    if (initialChart && initialInvestorName === investorName) {
      setLoading(false);
      return;
    }

    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/dashboard-data?investor=${encodeURIComponent(investorName)}`,
        );
        if (!response.ok) throw new Error("Failed to fetch dashboard data");

        const result = await response.json();
        if (result.success) {
          setChartData(result.chart);
          setSummary(result.summary);
          setInvestorName(result.investor_name);
        }
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [initialInvestorName]);

  if (!username) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500 font-medium">
        Session expired. Please login again.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-sky-600 animate-pulse">
        Loading portfolio data...
      </div>
    );
  }

  const initials = getInitials(investorName || username);

  // ✅ ADDED: Monthly data ONLY for the chart (does NOT change chartData)
  const monthlyChartData = useMemo(() => {
    const parseMDY = (s: string) => {
      const [m, d, y] = String(s).split("/");
      const dt = new Date(Number(y), Number(m) - 1, Number(d));
      return isNaN(dt.getTime()) ? null : dt;
    };

    const map = new Map<string, any>();

    for (const row of chartData) {
      const dt = parseMDY(row.date);
      if (!dt) continue;

      const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}`;
      const monthTs = new Date(dt.getFullYear(), dt.getMonth(), 1).getTime();

      const existing = map.get(key);

      if (!existing) {
        map.set(key, {
          ts: monthTs, // monthly x-axis value
          portfolio_value: row.portfolio_value ?? 0, // will become "last in month"
          depositRange: row.depositRange ?? 0, // summed in month
          withdrawalRange: row.withdrawalRange ?? 0, // summed in month
          _last: dt.getTime(),
        });
      } else {
        existing.depositRange += row.depositRange ?? 0;
        existing.withdrawalRange += row.withdrawalRange ?? 0;

        // keep last portfolio value of the month
        const t = dt.getTime();
        if (t >= existing._last) {
          existing._last = t;
          existing.portfolio_value = row.portfolio_value ?? existing.portfolio_value;
        }
      }
    }

    return Array.from(map.values())
      .sort((a, b) => a.ts - b.ts)
      .map(({ _last, ...rest }) => rest);
  }, [chartData]);

  return (
    <div className="min-h-screen bg-[#e9f0f9] text-[#0f2940] flex flex-col font-sans">
      {/* NAVBAR */}
      <header className="border-b bg-[#f3f8ff] sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-6">
            <img src={itmLogo} alt="Logo" className="h-12" />
            <div className="flex items-center gap-3 border-l pl-6 border-slate-300">
              <div className="h-10 w-10 rounded-full bg-sky-600 flex items-center justify-center text-white text-sm font-bold shadow-inner">
                {initials}
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">
                  {investorName || username}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#5a6d85] font-semibold">
                  Investor
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="border border-slate-300 px-6 py-2 rounded-md bg-white text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-all"
          >
            Logout
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-8 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* TOP SUMMARY */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div>
              <h1 className="text-3xl font-bold">Welcome, {username}</h1>
              <p className="text-sm text-[#5a6d85] mt-1">
                Last Logged In: {last_login}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <SummaryItem
                label="Current Equity"
                value={formatValue(summary.current_equity)}
                isPrimary
              />
              <Divider />
              <SummaryItem
                label="Total Deposits"
                value={formatValue(summary.deposits)}
              />
              <Divider />
              <SummaryItem label="Shares" value={formatValue(summary.shares)} />
              <Divider />
              <SummaryItem
                label="NAV / Share"
                value={formatValue(summary.nav_per_share)}
              />
            </div>
          </div>

          {/* GRAPH SECTION */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl mb-10">
            <h2 className="text-xl font-bold mb-6 text-center md:text-left">
              Investment Performance
            </h2>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                {/* ✅ CHANGED ONLY FOR GRAPH: use monthlyChartData */}
                <ComposedChart data={monthlyChartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e2e8f0"
                  />

                  {/* ✅ CHANGED ONLY FOR GRAPH: monthly X axis */}
                  <XAxis
                    dataKey="ts"
                    type="number"
                    scale="time"
                    tick={{ fontSize: 11 }}
                    tickFormatter={(ts) =>
                      new Date(ts).toLocaleDateString("en-US", {
                        month: "short",
                        year: "2-digit",
                      })
                    }
                    minTickGap={25}
                  />

                  <YAxis
                    domain={[0, "auto"]}
                    tick={{ fontSize: 11 }}
                    tickFormatter={(value) =>
                      new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(value)
                    }
                  />

                  <Tooltip
                    // ✅ small add: keep tooltip date readable even with ts
                    labelFormatter={(label: any) =>
                      new Date(Number(label)).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    }
                    formatter={(v: any, n: any, props: any) => {
                      const { payload } = props;
                      if (n === "portfolio_value") return [v, "Portfolio"];
                      if (n === "depositRange") return [payload?.amt_in ?? v, "Deposit"];
                      if (n === "withdrawalRange") return [payload?.amt_out ?? v, "Withdrawal"];
                      return [v, n];
                    }}
                  />

                  <Bar
                    dataKey="depositRange"
                    fill="#3b82f6"
                    stroke="#1e40af"
                    strokeWidth={8}
                    barSize={35} // Increased overall thickness
                    // radius={[2, 2, 2, 2]}
                  />

                  {/* Withdrawal Range (Red) */}
                  <Bar
                    dataKey="withdrawalRange"
                    fill="#ef4444"
                    stroke="#991b1b"
                    strokeWidth={6}
                    barSize={25}
                    // radius={[2, 2, 2, 2]}
                  />

                  <Line
                    type="monotone"
                    dataKey="portfolio_value"
                    stroke="#22c55e"
                    strokeWidth={4}
                    dot={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {actions.map((action, idx) => (
              <div
                key={idx}
                title={action.tooltip}
                className={`flex items-center gap-4 p-5 rounded-2xl border cursor-pointer transition-all hover:shadow-md ${action.bg}`}
              >
                <div className="p-3 bg-white/50 rounded-xl shadow-sm">
                  {action.icon}
                </div>
                <div className="font-bold text-lg">{action.title}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-[#1E2129] text-white mt-auto">
        <div className="w-full text-center px-6 py-10">
          <p className="text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
            © 2025 ITM Capital Management. All rights reserved. This website is
            for informational purposes only and does not constitute an offer to
            sell or solicitation of an offer to buy any securities. Investment
            involves risks.
          </p>
        </div>
      </footer>
    </div>
  );
};

/* ================= SUB-COMPONENTS ================= */

const SummaryItem = ({ label, value, isPrimary }: any) => (
  <div className="flex flex-col px-2">
    <span className="text-[10px] uppercase tracking-wider text-[#5a6d85] font-bold mb-1">
      {label}
    </span>
    <span
      className={`text-lg font-bold ${
        isPrimary ? "text-green-600" : "text-[#0f2940]"
      }`}
    >
      {value}
    </span>
  </div>
);

const Divider = () => (
  <div className="hidden md:block h-10 w-px bg-slate-200 self-center" />
);

export default Dashboard;
