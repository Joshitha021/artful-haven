import { Navbar } from "@/components/gallery/Navbar";
import { Hero } from "@/components/gallery/Hero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Exhibitions } from "@/components/gallery/Exhibitions";
import { Artists } from "@/components/gallery/Artists";
import { Visit } from "@/components/gallery/Visit";
import { Footer } from "@/components/gallery/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GalleryGrid />
      <Exhibitions />
      <Artists />
      <Visit />
      <Footer />
    </main>
  );
};

export default Index;
