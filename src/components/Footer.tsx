import footerImage from "@/assets/logo/footer-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1E2126] text-white">
      {/* Top Section: Background Image */}
      <div
        className="relative w-full bg-center bg-no-repeat overflow-hidden"
        style={{ fontFamily: "serif-Scotch, serif",
          backgroundImage: `url(${footerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "65vh",
        }}
      >
        {/* Bottom Gradient Blend */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1E2126] to-transparent" />
      </div>

      {/* Bottom Section */}
      <div className="w-full text-center px-6 py-8 bg-[#1E2126]">
        
        {/* Disclaimer */}
        <p className="text-s text-gray-400 max-w-3xl mx-auto leading-relaxed mb-3"
        style={{ fontFamily: "serif-Scotch, serif" }}>
          ITM is a privately managed account running discretionary macro strategies
          on different portfolios.
        </p>

        {/* Copyright */}
        <p className="text-s text-gray-500 max-w-5xl mx-auto leading-relaxed"
        style={{ fontFamily: "serif-Scotch, serif" }}>
          © 2025 ITM Capital Management. All rights reserved. <br />This website is for
          informational purposes only and does not constitute an offer to sell or
          solicitation of an offer to buy any securities.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
