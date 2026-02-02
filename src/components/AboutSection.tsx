const AboutSection = () => {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "3", label: "Team Members" },
    { value: "3", label: "Portfolios" },
    { value: "25+", label: "Current Investors" },
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(185deg, rgba(214, 255, 255, 0.15), rgba(177, 252, 252, 0.15))",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Crystal Glow Effects */}
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="w-72 h-72 bg-white/30 blur-3xl rounded-full absolute -top-20 -left-10"></div>
        <div className="w-96 h-96 bg-blue-200/25 blur-3xl rounded-full absolute bottom-0 right-0"></div>
        <div className="w-80 h-80 bg-blue-100/20 blur-2xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="relative">
            <span className="section-number absolute -top-8 -left-4 lg:-left-12 opacity-40"></span>

            <div className="relative z-10 space-y-6">
              <h2
                className="text-xs md:text-sm font-semibold tracking-[0.3em] text-muted-foreground uppercase"
                style={{ fontFamily: "serif-Scotch, serif" }}
              >
                About Us
              </h2>

              <h3
                className="text-3xl lg:text-4xl font-semibold text-foreground leading-snug"
                style={{ fontFamily: "serif-Scotch, serif" }}
              >
                What Is ITM
              </h3>

              <p
                className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify"
                style={{ fontFamily: "serif-Scotch, serif" }}
              >
                At ITM, we have an intense desire to understand the world around us, and our boundless curiosity has led us to continuously observe the spectacularly intricate interplay of powerful nations across the planet. Observations that continuously build upon our knowledge of global macroeconomics, central bank, government & trade policies, and industries across the world. ITM is the purest expression of that very knowledge.
              </p>

              <h3
                className="text-3xl lg:text-4xl font-semibold text-foreground leading-snug"
                style={{ fontFamily: "serif-Scotch, serif" }}
              >
                What We Trade
              </h3>

              <p
                className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify"
                style={{ fontFamily: "serif-Scotch, serif" }}
              >
                The assets we trade include but are not limited to <br />
<br />• Short-term interest rate products, FX, commodities, fixed income, and equity futures & options.
<br />• We remain flexible, operating multiple portfolios that strategically focus on select asset classes without being limited by any one category.

              </p>

              <h3
                className="text-3xl lg:text-4xl font-semibold text-foreground leading-snug"
                style={{ fontFamily: "serif-Scotch, serif" }}
              >
                How We Do It
              </h3>

              <p
                className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify"
                style={{ fontFamily: "serif-Scotch, serif" }}
              >
                We live and breathe the markets. Our relentless focus on macroeconomic indicators, interest rates, and the fiscal and monetary policies of nations worldwide forms the backbone of our approach. This commitment allows us to cut through the noise and pinpoint highly profitable inflection points. We analyze the economy, anticipate policy shifts, and strategically position ourselves to capitalize on them.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-9 lg:gap-19 lg:pt-40">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border-l border-border/60 pl-6 py-9 space-y-4"
              >
                <div
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground"
                  style={{ fontFamily: "serif-Scotch, serif" }}
                >
                  {stat.value}
                </div>

                <div
                  className="text-[11px] md:text-xs text-muted-foreground uppercase tracking-[0.18em]"
                  style={{ fontFamily: "serif-Scotch, serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
