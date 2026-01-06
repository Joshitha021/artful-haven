import { motion } from "framer-motion";
import { useState } from "react";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";

const artworks = [
  {
    id: 1,
    title: "Ethereal Flow",
    artist: "Elena Vasquez",
    year: "2024",
    medium: "Oil on Canvas",
    image: artwork1,
    size: "large",
  },
  {
    id: 2,
    title: "Midnight Cascade",
    artist: "Marcus Chen",
    year: "2024",
    medium: "Mixed Media",
    image: artwork2,
    size: "tall",
  },
  {
    id: 3,
    title: "Terra Forms",
    artist: "Amara Okonkwo",
    year: "2023",
    medium: "Acrylic on Panel",
    image: artwork3,
    size: "medium",
  },
  {
    id: 4,
    title: "Silent Mountains",
    artist: "Yuki Tanaka",
    year: "2024",
    medium: "Digital Painting",
    image: artwork4,
    size: "wide",
  },
  {
    id: 5,
    title: "Emerald Dreams",
    artist: "Marcus Chen",
    year: "2024",
    medium: "Oil on Canvas",
    image: artwork5,
    size: "tall",
  },
  {
    id: 6,
    title: "Rose Whispers",
    artist: "Elena Vasquez",
    year: "2024",
    medium: "Mixed Media",
    image: artwork6,
    size: "medium",
  },
];

const ArtworkCard = ({ artwork, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getSizeClasses = () => {
    switch (artwork.size) {
      case "large":
        return "col-span-2 row-span-2";
      case "tall":
        return "col-span-1 row-span-2";
      case "wide":
        return "col-span-2 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative overflow-hidden group cursor-pointer ${getSizeClasses()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={artwork.image}
          alt={`${artwork.title} by ${artwork.artist}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-background/80 flex flex-col justify-end p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-primary text-xs tracking-widest uppercase mb-2">
            {artwork.medium} · {artwork.year}
          </p>
          <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-1">
            {artwork.title}
          </h3>
          <p className="text-muted-foreground">
            by {artwork.artist}
          </p>
        </motion.div>
      </motion.div>

      {/* Border animation */}
      <motion.div
        className="absolute inset-0 border border-primary/50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export const GalleryGrid = () => {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Curated Selection
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            The Collection
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-4">
          {artworks.map((artwork, index) => (
            <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>View Full Collection</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
