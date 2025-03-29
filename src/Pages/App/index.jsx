import Navigation from "../Navigation";
import HeroSection from "../Navigation/Hero-section";
// import PricingSection from "../Navigation/Pricing-section";
import ResumeSection from "../Navigation/Resume-section";
import FeaturesSection from "../Navigation/Features-section";
import PortfolioSection from "../Navigation/Portofolio-section";
import ClientsSection from "../Navigation/Clients-section";
import ContactsSection from "../Navigation/Contacts-section";
import BlogsSection from "../Navigation/Blogs-section";
import Testimonial from "../Navigation/TestimonailSection";
import Footer from "../Navigation/Footer";

const App = () => {
  return (
    <div className="bg-DarkBGround min-h-screen w-full text-text font-medium  ">
      <Navigation />
      <div className="container mx-auto">
        <HeroSection />
        <FeaturesSection />
        <PortfolioSection />
        <ResumeSection />
        <ClientsSection />
        <Testimonial />
        <BlogsSection />
        <ContactsSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
