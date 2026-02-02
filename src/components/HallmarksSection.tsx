import {
  Brain,
  Lock,
  Link2,
  Clock,
  BookOpen,
  Settings,
} from "lucide-react";

const HallmarksSection = () => {
  const hallmarks = [
    {
      icon: Brain,
      title: "In- depth research",
      description:
        "We dive into extensive research by reviewing a wide range of reports, news articles, and opinion pieces. Additionally, we produce our own research publications to share our insights and perspectives.",
    },
    {
      icon: Lock,
      title: "Thoughtful analysis",
      description:
        "We dedicate significant time to contemplating trade ideas, exploring various scenarios, and assessing their potential impacts on specific assets and our portfolios. We believe that deep, solitary reflection is an art form that has been overshadowed over time, yet it is essential for uncovering profound insights and enhancing our understanding.",
    },
    {
      icon: Link2,
      title: "Discuss",
      description:
        "The three founders of ITM come from different backgrounds and think in unique ways. This diversity encourages us to view challenges from various angles and engage in meaningful discussions that strengthen our ideas. These conversations help us understand the world through different lenses, allowing us to make more practical decisions at ITM.",
    },
    {
      icon: Clock,
      title: "Risk Management",
      description:
        "Risk management is central to everything we do. Each trade execution is analyzed through our proprietary quantitative model, which assesses the key fundamentals behind every trade. We also leverage our insights and judgment to manage risk effectively, ensuring a balanced approach to our strategies",
    },
  ];

  return (
    <section
      id="hallmarks"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        fontFamily: "serif-Scotch, serif",
        background:
          "linear-gradient(185deg, rgba(214,255,255,0.15), rgba(177,252,252,0.15))",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Crystal Glow Effects */}
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="w-72 h-72 bg-white/30 blur-3xl rounded-full absolute -top-20 -left-10" />
        <div className="w-96 h-96 bg-blue-200/25 blur-3xl rounded-full absolute bottom-0 right-0" />
        <div className="w-80 h-80 bg-blue-100/20 blur-2xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        
        {/* Section Header */}

        <div className="relative mb-14 lg:mb-20 max-w-3xl">
          <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-snug"
          style={{ fontFamily: "serif-Scotch, serif" }}>
            Hallmarks
          </h3>
        </div>

        {/* Cards Grid (2 x 2) */}
        <div className="grid gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2">
          {hallmarks.map((hallmark, index) => (
            <div
              key={index}
              className="
                group relative rounded-2xl
                bg-[rgba(199,204,226,0.39)] backdrop-blur-md
                border border-slate-400/30
                px-6 py-8
                flex flex-col justify-between
                transition-all duration-300 ease-out
                hover:-translate-y-1.5
                hover:shadow-[0_30px_60px_rgba(100,100,100,0.35)]
                hover:border-slate-500/50
              "
            >
              {/* Hover glow */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-br
                  from-white/40 via-white/10 to-transparent
                "
              />

              <div className="relative z-10">
                <hallmark.icon
                  className="w-10 h-10 text-slate-800 mb-5
                             transition-transform duration-300
                             group-hover:scale-110"
                  strokeWidth={1.4}
                />

                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {hallmark.title}
                </h4>

                <p className="text-sm text-slate-700 leading-relaxed text-justify text-left">
                  {hallmark.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="
                  relative z-10 mt-5 h-[2px] w-12
                  bg-slate-500/50
                  group-hover:bg-slate-800
                  transition-colors duration-300
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallmarksSection;
