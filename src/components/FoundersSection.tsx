import founder1 from "@/assets/william.jpeg";
import founder2 from "@/assets/mashooq.jpeg";
import founder3 from "@/assets/shonak.jpeg";

const FoundersSection = () => {
  const founders = [
    {
      name: "William Collard",
      title: "Operations",
      image: founder1,
      linkedin: "https://www.linkedin.com/in/wcollard/",
    },
    {
      name: "Mashooq Nasser",
      title: "Portfolio",
      image: founder2,
      linkedin: "https://www.linkedin.com/in/amaanmn/",
    },
    {
      name: "Shonak Khan",
      title: "Research",
      image: founder3,
      linkedin: "https://www.linkedin.com/in/khanshonak/",
    },
  ];

  return (
    <section
      id="founders"
      className="relative py-24 lg:py-32 
                 bg-gradient-to-b from-[#1B2A41] via-[#1E293B] to-[#111827]
                 overflow-hidden"
    
     style={{ fontFamily: "serif-Scotch, serif" }}>
      {/* Background Effects – SAME AS APPROACH */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-80 h-80 bg-blue-500/10 blur-3xl rounded-full absolute -top-16 left-0" />
        <div className="w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full absolute bottom-0 right-0" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="relative mb-16 lg:mb-24">
          <div className="relative z-10">
          
            <h3 className="text-3xl lg:text-4xl font-semibold text-slate-100 max-w-2xl leading-tight"
             style={{ fontFamily: "serif-Scotch, serif" }}>
              Meet the Founders
            </h3>
          </div>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="group">
              {/* Image (Clickable → LinkedIn) */}
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden mb-6 aspect-[4/5]"
              >
                <img
                  src={founder.image}
                  alt={`${founder.name}, ${founder.title}`}
                  className="w-full h-full object-cover grayscale transition-all duration-500 
                             group-hover:grayscale-0 group-hover:scale-105"
                />
              </a>

              {/* Info */}
              <h4 className="text-xl font-semibold text-slate-100 mb-1">
                {founder.name}
              </h4>
              <p className="text-sm text-slate-400">
                {founder.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
