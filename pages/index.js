import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import "@fontsource/manrope"; // Import Manrope font family
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Template from "@/components/Template";
import Cards from "@/components/Cards";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import BTA from "@/components/BTA";
import Blog from "@/components/Blog";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Easy Pay</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="" href="" />
      </Head>

      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      <Banner />
      <Feature />
      <Template />
      <Cards />
      <Testimonials />
      <CTA />
      <BTA />
      <Blog />
      <Demo />
      <Footer />
      {/* Hero */}
      {/* About */}
      {/* Header */}
      {/* Header */}
      {/* Header */}
      {/* Header */}
    </div>
  );
}
