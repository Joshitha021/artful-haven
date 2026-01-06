import { motion } from "framer-motion";
import { Award, Users, Calendar, Heart, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/gallery/Navbar";
import { Footer } from "@/components/gallery/Footer";
import { Button } from "@/components/ui/button";
import heroArtwork from "@/assets/hero-artwork.jpg";
import artwork2 from "@/assets/artwork-2.jpg";

const stats = [
  { icon: Calendar, value: "25+", label: "Years of Excellence" },
  { icon: Award, value: "500+", label: "Exhibitions Hosted" },
  { icon: Users, value: "200+", label: "Featured Artists" },
  { icon: Heart, value: "50K+", label: "Art Lovers Served" },
];

const team = [
  {
    name: "Victoria Sterling",
    role: "Founder & Director",
    bio: "With over 30 years in the art world, Victoria founded Aurora to bridge the gap between emerging artists and discerning collectors.",
  },
  {
    name: "James Whitmore",
    role: "Chief Curator",
    bio: "James brings his expertise from leading European galleries to curate exhibitions that challenge and inspire.",
  },
  {
    name: "Sophie Chen",
    role: "Artist Relations",
    bio: "Sophie nurtures relationships with artists worldwide, ensuring Aurora remains at the forefront of contemporary art.",
  },
  {
    name: "Michael Torres",
    role: "Exhibition Director",
    bio: "Michael transforms our gallery spaces into immersive experiences that tell compelling visual stories.",
  },
];

const values = [
  {
    title: "Artistic Excellence",
    description: "We seek out works that push boundaries and redefine what art can be, maintaining the highest standards of curation.",
  },
  {
    title: "Accessibility",
    description: "Art should inspire everyone. We're committed to making contemporary art approachable and engaging for all visitors.",
  },
  {
    title: "Artist Support",
    description: "We champion artists at every stage of their careers, providing platforms and resources to help them thrive.",
  },
  {
    title: "Community",
    description: "Aurora is more than a gallery—it's a gathering place for art lovers, collectors, and creators to connect and grow.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroArtwork}
            alt="Gallery interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
              Where Vision<br />
              <span className="text-gradient-gold">Becomes Legacy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over two decades, Aurora Art Gallery has been a beacon for contemporary art, 
              nurturing talent and connecting visionary artists with passionate collectors worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-aurora-surface border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-heading text-4xl md:text-5xl text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm tracking-widest uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                Our Mission
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
                Elevating Contemporary Art
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Aurora Art Gallery was founded in 1999 with a singular vision: to create a 
                  space where contemporary art could flourish, where emerging voices could be 
                  heard alongside established masters, and where every visitor could experience 
                  the transformative power of art.
                </p>
                <p>
                  Today, we continue that mission across our three gallery spaces, hosting 
                  over 20 exhibitions annually and representing artists from more than 40 countries. 
                  Our commitment to excellence has made us a trusted destination for collectors 
                  and institutions alike.
                </p>
                <p>
                  We believe art has the power to challenge, inspire, and connect us. Every 
                  exhibition, every artist partnership, and every visitor interaction is guided 
                  by this fundamental belief.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={artwork2}
                  alt="Aurora Gallery Exhibition"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card border border-border p-8 max-w-xs">
                <p className="font-heading text-2xl text-foreground mb-2">
                  "Art is the lie that enables us to realize the truth."
                </p>
                <p className="text-muted-foreground text-sm">— Pablo Picasso</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-aurora-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              What Drives Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-border p-8 lg:p-10 hover:border-primary/50 transition-colors"
              >
                <span className="text-primary/30 font-heading text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-2xl text-foreground mt-4 mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              The People Behind Aurora
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              Our Leadership Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-heading text-4xl text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary text-sm tracking-widest uppercase mt-1 mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-aurora-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Experience Aurora
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Visit our gallery to discover extraordinary artworks and connect with 
              the vibrant contemporary art community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="aurora-solid" size="xl">
                Plan Your Visit
              </Button>
              <Button variant="aurora" size="xl" className="group">
                <span>View Exhibitions</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
