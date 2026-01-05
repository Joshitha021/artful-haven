import { motion } from "framer-motion";
import { useState } from "react";

const artists = [
  {
    id: 1,
    name: "Elena Vasquez",
    specialty: "Abstract Expressionism",
    bio: "Known for her ethereal compositions that blend organic forms with geometric precision.",
    works: 24,
  },
  {
    id: 2,
    name: "Marcus Chen",
    specialty: "Contemporary Mixed Media",
    bio: "Explores the intersection of nature and technology through bold, textural works.",
    works: 18,
  },
  {
    id: 3,
    name: "Amara Okonkwo",
    specialty: "Modern Minimalism",
    bio: "Creates powerful statements through restrained palettes and essential forms.",
    works: 31,
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    specialty: "Digital & Traditional Fusion",
    bio: "Bridges the gap between digital innovation and classical painting techniques.",
    works: 15,
  },
];

const ArtistCard = ({ artist, index }: { artist: typeof artists[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative border border-border hover:border-primary/50 transition-colors duration-500 p-8 lg:p-10">
        {/* Number */}
        <span className="absolute -top-4 left-8 bg-background px-3 text-5xl font-heading text-primary/30 group-hover:text-primary/60 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="pt-6">
          <p className="text-primary text-xs tracking-widest uppercase mb-3">
            {artist.specialty}
          </p>
          <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
            {artist.name}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {artist.bio}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">{artist.works}</span> works in collection
            </span>
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              className="text-primary"
            >
              →
            </motion.span>
          </div>
        </div>

        {/* Decorative corner */}
        <motion.div
          className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "bottom right" }}
        />
      </div>
    </motion.div>
  );
};

export const Artists = () => {
  return (
    <section id="artists" className="py-24 lg:py-32 bg-background">
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
            Featured Creators
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our Artists
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We collaborate with visionary artists who push the boundaries of contemporary expression.
          </p>
        </motion.div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {artists.map((artist, index) => (
            <ArtistCard key={artist.id} artist={artist} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
