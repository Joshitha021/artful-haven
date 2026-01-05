import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork5 from "@/assets/artwork-5.jpg";

const exhibitions = [
  {
    id: 1,
    title: "Depths of Perception",
    description: "An immersive journey through abstract expressionism, featuring works that challenge the boundaries between reality and imagination.",
    dates: "Jan 15 - Mar 30, 2025",
    location: "Main Gallery",
    image: artwork2,
    featured: true,
  },
  {
    id: 2,
    title: "Emerald Horizons",
    description: "Marcus Chen's latest solo exhibition explores themes of nature, technology, and human connection.",
    dates: "Feb 1 - Apr 15, 2025",
    location: "East Wing",
    image: artwork5,
    featured: false,
  },
];

export const Exhibitions = () => {
  return (
    <section id="exhibitions" className="py-24 lg:py-32 bg-aurora-surface noise-overlay relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Now Showing
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
              Current Exhibitions
            </h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block w-32 h-px bg-primary origin-left mt-8 lg:mt-0"
          />
        </motion.div>

        {/* Exhibitions */}
        <div className="space-y-24">
          {exhibitions.map((exhibition, index) => (
            <motion.article
              key={exhibition.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </motion.div>

                {/* Featured Badge */}
                {exhibition.featured && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 text-xs tracking-widest uppercase"
                  >
                    Featured
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {exhibition.dates}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    {exhibition.location}
                  </span>
                </div>

                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                  {exhibition.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {exhibition.description}
                </p>

                <div>
                  <Button variant="aurora" size="lg" className="group">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
