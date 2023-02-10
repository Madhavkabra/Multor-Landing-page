import AboutSection from "@/components/AboutSection";
import BenefitsAndAppointment from "@/components/BenefitsAndAppointment";
import CoverPage from "@/components/CoverPage";
import FeaturesSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import ReviewSection from "@/components/ReviewSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <CoverPage />
      <BenefitsAndAppointment />
      <VideoSection />
      <ReviewSection />
      <FeaturesSection />
      <AboutSection />
      <Footer />
    </>
  );
}
