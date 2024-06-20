
import { Footer, Header } from "../../layouts";
import {
  CTA,
  Category,
  HeroSection,
} from "./ui";

export function Home() {
  return (
    <>
      <Header/>
      <HeroSection />
      <CTA />
      <Category />
      <Footer/>
    </>
  );
}
