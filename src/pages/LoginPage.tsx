import heroImage from "@/assets/hero-skyscraper.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/config";
import { Eye, EyeOff } from "lucide-react"; // 👈 add this

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);

  const [showPassword, setShowPassword] = useState(false); // 👈 new state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        navigate("/dashboard", {
          state: {
            username: data.username,
            last_login: data.last_login,
            chart: data.chart,
            summary: data.summary,
            investor_name: data.investor_name,
          },
        });
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Login background"
          className="w-full h-full object-cover scale-105 animate-[slowZoom_18s_ease-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/95" />
      </div>

      {/* Glass Card */}
      <div className="relative z-10 w-[90%] max-w-md rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-[0_30px_100px_rgba(15,23,42,0.9)] p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-200 mb-8">
          Welcome to the ITM Investor Portal
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm text-slate-300 mb-2 text-left">
              Username
            </label>
            <input
              type="text"
              required
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-sky-300"
            />
          </div>

          {/* Password with Eye Icon */}
          <div>
            <label className="block text-sm text-slate-300 mb-2 text-left">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // 👈 toggle
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-sky-300"
              />

              {/* Eye Icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-sky-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full bg-sky-400/90 hover:bg-sky-500 text-slate-900 font-semibold py-3 rounded-lg transition-colors"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={() => setShowForgotModal(true)}
            className="text-sm text-sky-200 hover:text-sky-400 transition-colors"
          >
            Forgot Password?
          </button>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-slate-900 rounded-2xl p-6 w-[90%] max-w-sm text-center relative">
            <h3 className="text-lg font-semibold text-sky-200 mb-4">
              Forgot Password
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              Please contact the admin to reset your password.
            </p>
            <button
              className="px-6 py-2 bg-sky-400/80 hover:bg-sky-500 rounded-lg text-slate-900 font-medium"
              onClick={() => setShowForgotModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoginPage;
