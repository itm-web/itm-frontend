import { Globe, TrendingUp, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApproachSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: TrendingUp,
      title: "Signature Fund",
      path: "/login",
      description:
        "Our flagship leveraged fund harnesses our insights and outlooks across global economies to capitalize on policy differentials and diverse economic trends. Asset classes: Short-term Interest Rate products, FX, US Treasury Futures, Oil, Equity & ETF options.",
    },
    {
      icon: Globe,
      title: "Malliam Fund",
      path: "/login",
      description:
        "A carefully curated expression of our insights into macro themes that we believe will emerge as winners over the next 5-7 years. MC is a strategic in-house view of the global economy. With investments focused on finding value opportunities across geographies, sectors, industries and market-caps, the fund tries to maximize alpha compared to a 60/40 portfolio in Total World Stocks + Total World Bonds with an allocation to Gold.",
    },
    {
      icon: Shield,
      title: "Arivu Fund",
      path: "/login",
      description:
        "Our focused portfolio that employs meticulous research to analyze businesses across diverse industries in India, identifying high-potential investment opportunities grounded in fundamental insights. Asset classes: Equities",
    },
  ];

  return (
    <section
      id="approach"
      className="relative py-24 lg:py-32 
                bg-gradient-to-b from-[#1B2A41] via-[#1E293B] to-[#111827]
                overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-80 h-80 bg-blue-500/10 blur-3xl rounded-full absolute -top-16 left-0"></div>
        <div className="w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full absolute bottom-0 right-0"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 lg:mb-20">
          

          <h4
            className="text-3xl lg:text-4xl font-semibold text-slate-100 leading-snug max-w-4xl"
            style={{ fontFamily: "serif-Scotch, serif" }}
          >
            Our Portfolios
          </h4>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => navigate(feature.path)}
              className="cursor-pointer group relative rounded-2xl
                         bg-white/5 backdrop-blur-sm
                         border border-white/10
                         px-8 py-10
                         flex flex-col justify-between
                         transition-all duration-300
                         hover:-translate-y-1.5
                         hover:shadow-2xl hover:shadow-blue-500/10
                         hover:border-white/20"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 
                           group-hover:opacity-100 blur-md
                           transition-opacity duration-300
                           bg-gradient-to-br from-white/10 via-transparent to-white/20"
              />

              <div className="relative z-10">
                <feature.icon
                  className="w-10 h-10 text-slate-100 mb-6
                             transition-transform duration-300
                             group-hover:scale-110"
                  strokeWidth={1.4}
                />

                <h4 className="text-lg font-semibold text-slate-100 mb-3">
                  {feature.title}
                </h4>

                {/* JUSTIFIED TEXT */}
                <p className="text-sm text-slate-400 leading-relaxed text-justify text-left">
                  {feature.description}
                </p>
              </div>

              <div
                className="relative z-10 mt-6 h-[2px] w-12
                           bg-slate-500/50
                           group-hover:bg-slate-100
                           transition-colors duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
