import { CardHover } from "@/components/custom/card-hover";
import { Desc } from "@/components/custom/desc";
import HighlightSection from "@/components/custom/highlight";
import { HoverEffect } from "@/components/custom/hover-effect";
import MyTimeline from "@/components/custom/my-timeline";

export default function Home() {
  return (
    <>
      <HoverEffect />
      <HighlightSection />
      <MyTimeline />
      <Desc />
      <CardHover />
    </>
  );
}
