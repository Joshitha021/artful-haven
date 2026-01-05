import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/gallery/Navbar";
import { Footer } from "@/components/gallery/Footer";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork6 from "@/assets/artwork-6.jpg";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-abstract-art",
    title: "The Future of Abstract Art in the Digital Age",
    excerpt: "Exploring how digital tools and AI are reshaping the landscape of abstract expressionism and what it means for traditional artists.",
    author: "Elena Vasquez",
    date: "January 2, 2025",
    readTime: "8 min read",
    category: "Art & Technology",
    image: artwork1,
    featured: true,
  },
  {
    id: 2,
    slug: "collecting-contemporary-art",
    title: "A Beginner's Guide to Collecting Contemporary Art",
    excerpt: "Essential tips for first-time collectors looking to build a meaningful art collection that grows in both value and personal significance.",
    author: "Marcus Chen",
    date: "December 28, 2024",
    readTime: "12 min read",
    category: "Collecting",
    image: artwork3,
    featured: false,
  },
  {
    id: 3,
    slug: "color-theory-emotions",
    title: "Color Theory and Emotional Response in Modern Paintings",
    excerpt: "Understanding how artists use color psychology to evoke specific emotional responses and create impactful visual narratives.",
    author: "Amara Okonkwo",
    date: "December 20, 2024",
    readTime: "6 min read",
    category: "Art Theory",
    image: artwork4,
    featured: false,
  },
  {
    id: 4,
    slug: "sustainable-art-practices",
    title: "Sustainable Art: Eco-Friendly Practices in Contemporary Studios",
    excerpt: "How modern artists are embracing sustainability through eco-conscious materials, processes, and studio practices.",
    author: "Yuki Tanaka",
    date: "December 15, 2024",
    readTime: "10 min read",
    category: "Sustainability",
    image: artwork6,
    featured: false,
  },
];

const categories = ["All", "Art & Technology", "Collecting", "Art Theory", "Sustainability", "Exhibitions"];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Insights & Stories
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              The Aurora Journal
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover articles on contemporary art, artist interviews, collecting guides, 
              and the latest trends shaping the art world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 text-sm tracking-widest uppercase transition-all ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className="relative overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 text-xs tracking-widest uppercase">
                  Featured
                </div>
              </div>

              <div>
                <span className="text-primary text-sm tracking-widest uppercase">
                  {featuredPost.category}
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-3 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <User size={16} className="text-primary" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-primary hover:text-accent transition-colors group"
                >
                  Read Article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden mb-6">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <span className="text-primary text-xs tracking-widest uppercase">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-2xl text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-aurora-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Stay Inspired
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive the latest articles, exhibition updates, and exclusive insights 
              from the world of contemporary art.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-secondary border border-border px-6 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-4 tracking-widest uppercase text-sm hover:bg-accent transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
