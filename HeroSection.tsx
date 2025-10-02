import { HeroSection } from "../HeroSection";
import { ThemeProvider } from "../ThemeProvider";

export default function HeroSectionExample() {
  return (
    <ThemeProvider>
      <div className="pt-16">
        <HeroSection />
      </div>
    </ThemeProvider>
  );
}
