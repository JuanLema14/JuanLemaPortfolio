// pages/index.tsx
import Education from "@/components/frames/Education";
import Footer from "@/components/frames/Footer";
import Hero from "@/components/frames/HeroSection";
import MyKnowledge from "@/components/frames/MyKnowledge";
import Portfolio from "@/components/frames/Portfolio";
import HomeLayout from "@/components/layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <div className="flex flex-col items-center m-0 gap-[42px]">
        <Hero />
        <MyKnowledge/>
        <Education/>
        <Portfolio/>
        <Footer/>
      </div>
    </HomeLayout>
  );
}
