import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "123 Gallery Avenue, Art District",
    detail: "New York, NY 10001",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Tue - Sun: 10AM - 6PM",
    detail: "Closed Mondays",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    detail: "Reservations recommended",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@auroragallery.com",
    detail: "General inquiries",
  },
];

export const Visit = () => {
  return (
    <section id="visit" className="py-24 lg:py-32 bg-aurora-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Plan Your Visit
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              Experience Art<br />In Person
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Step into a world where every corner reveals a new perspective. 
              Our gallery offers an intimate encounter with contemporary masterpieces, 
              guided by experts who share the stories behind each creation.
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-sm group-hover:bg-primary/10 transition-colors">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-foreground font-medium">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 lg:p-12"
          >
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
              Book a Private Tour
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Any special requests or interests..."
                />
              </div>

              <Button variant="aurora-solid" size="xl" className="w-full">
                Request Booking
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
