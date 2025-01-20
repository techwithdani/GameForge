import SellersSection from "../components/SellersSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import NavBar from "../components/NavBar.jsx";
import CategorySection from "../components/CategorySection";
import DealsSection from "../components/DealsSection.jsx";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SellersSection mainHeading={"BEST SELLERS"} />
      <CategorySection />
      <DealsSection />
      <SellersSection mainHeading={"UPGRADE YOUR GEAR"} />
    </>
  );
};

export default HomePage;
