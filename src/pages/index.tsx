// pages/index.tsx
import Hero from "@/components/frames/HeroSection";
import MyKnowledge from "@/components/frames/MyKnowledge";
import HomeLayout from "@/components/layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <div className="flex flex-col items-center m-0 gap-[42px]">
        <Hero />
        <MyKnowledge/>
      </div>
    </HomeLayout>
  );
}
