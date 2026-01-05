import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

const footerLinks = [
  {
    title: "Gallery",
    links: ["Collection", "Exhibitions", "Artists", "Events"],
  },
  {
    title: "Visit",
    links: ["Hours & Location", "Private Tours", "Accessibility", "Parking"],
  },
  {
    title: "Support",
    links: ["Membership", "Donate", "Corporate Partners", "Volunteer"],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-3xl tracking-[0.15em] text-foreground mb-4">
                AURORA
              </h3>
              <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
                A sanctuary for contemporary art, dedicated to fostering creative 
                dialogue and celebrating visionary artists from around the world.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <social.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((column, columnIndex) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: columnIndex * 0.1 }}
                >
                  <h4 className="text-sm tracking-widest uppercase text-foreground mb-6">
                    {column.title}
                  </h4>
                  <ul className="space-y-4">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Aurora Art Gallery. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
