import HeroSection from "@/components/landing-page/heroSection";
import TopBar from "@/components/landing-page/topbar";
import TemplateSection from "@/components/templateSection";
import Image from "next/image";

export default function Home() {
  return (
<div>
<TopBar/>
<HeroSection/>
<TemplateSection/>
</div>
  );
}
