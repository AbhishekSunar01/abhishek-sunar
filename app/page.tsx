import { CardHover } from "@/components/custom/card-hover";
import { Desc } from "@/components/custom/desc";
import { Footer } from "@/components/custom/footer";
import HighlightSection from "@/components/custom/highlight";
import MyTimeline from "@/components/custom/my-timeline";
import { RainDrop } from "@/components/custom/rain-drop";

export default function Home() {
  return (
    <>
      <RainDrop />
      {/* <HoverEffect /> */}
      <HighlightSection />
      <MyTimeline />
      <Desc />
      <CardHover />
      <Footer />
    </>
  );
}
