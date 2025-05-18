
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <MapSection />
      <ContactSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
