import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your inquiry. We'll be in touch shortly.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Madrid",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+41 782676763",
    },
    {
      icon: Mail,
      label: "Email",
      value: "itmcapitalmgmt@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{fontFamily: "serif-Scotch, serif",
        background:
          "linear-gradient(185deg, rgba(214, 255, 255, 0.15), rgba(177, 252, 252, 0.15))",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Crystal Glow Effects – SAME AS ABOUT */}
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="w-72 h-72 bg-white/30 blur-3xl rounded-full absolute -top-20 -left-10" />
        <div className="w-96 h-96 bg-blue-200/25 blur-3xl rounded-full absolute bottom-0 right-0" />
        <div className="w-80 h-80 bg-blue-100/20 blur-2xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="relative mb-16 lg:mb-24">
          <div className="relative z-10">
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4"
            style={{ fontFamily: "serif-Scotch, serif" }}>
              Contact
            </h2>
            <h3 className="text-3xl lg:text-4xl font-semibold text-foreground max-w-2xl leading-tight"
            style={{ fontFamily: "serif-Scotch, serif" }}>
              Get in touch with our team
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <p className="text-muted-foreground mb-10 max-w-md leading-relaxed">
              We welcome inquiries from qualified investors and partners.
              <br />Please reach out to learn more about our investment strategies and partnership opportunities.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <item.icon
                    className="w-5 h-5 text-foreground mt-1 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-foreground whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form – INTACT */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="Subject of inquiry"
              />
            </div>

            <div>
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-charcoal-light transition-colors"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
