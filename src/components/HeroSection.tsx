import heroImage from "@/assets/herobg.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Image with subtle zoom + gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern glass skyscraper representing ITM Capital's global reach"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_18s_ease-out_infinite_alternate]"
          />
        </div>

        {/* Dark + blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/95" />

        {/* Circular ripple pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="absolute -left-1/4 -top-1/4 h-[140%] w-[140%] rounded-full border border-white/5" />
          <div className="absolute -left-1/4 -top-1/4 h-[140%] w-[140%] rounded-full border border-white/10 animate-pulse" />
        </div>
      </div>

      {/* Content card */}
      <div className="relative z-10 max-w-5xl px-6">
        <div
          className="
            mx-auto w-full
            h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px]
            rounded-3xl border border-white/10 bg-slate-900/40
            backdrop-blur-xl shadow-[0_30px_120px_rgba(15,23,42,0.9)]
            flex items-center justify-center
            px-6 sm:px-10
          "
        >
          <p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed tracking-[0.3em] text-sky-200/90 uppercase text-center"
            style={{ fontFamily: "serif-Scotch, 'serif-Scotch', serif" }}
          >
            GLOBAL MACRO
            <br />
            THINK ITM
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
