import SellersSection from "../components/SellersSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import NavBar from "../components/NavBar.jsx";
import CategorySection from "../components/CategorySection";
import DealsSection from "../components/DealsSection.jsx";
import DiscountSection from "../components/DiscountSection.jsx";
import NewsLetterSection from "../components/NewsLetterSection.jsx";
import GamesStack from "../components/GamesStack.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SellersSection mainHeading={"BEST SELLERS"} />
      <CategorySection />
      <DealsSection />
      <SellersSection mainHeading={"UPGRADE YOUR GEAR"} />
      <DiscountSection />
      <SellersSection mainHeading={"TRENDING GAMES"} />
      <NewsLetterSection />
      <GamesStack />
      <Footer />
    </>
  );
};

export default HomePage;
