import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroArtwork from "@/assets/hero-artwork.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroArtwork}
          alt="Featured abstract artwork with burgundy and gold tones"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-6"
          >
            Contemporary Art Gallery
          </motion.p>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 leading-[1.1]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block"
              >
                Where Art
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block text-gradient-gold"
              >
                Meets Soul
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
          >
            Discover extraordinary contemporary artworks that challenge perspectives 
            and ignite emotions. A curated experience for the discerning collector.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button variant="aurora-solid" size="xl">
              Explore Collection
            </Button>
            <Button variant="aurora" size="xl">
              Current Exhibitions
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>

      {/* Side decorative elements */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent origin-top"
      />
    </section>
  );
};
