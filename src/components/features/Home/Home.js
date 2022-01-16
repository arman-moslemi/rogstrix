import MainPageHeader from "./layouts/MainPageHeader";
import Footer from "./layouts/Footer";
import WhyRogstrix from "./HomePageComponents/WhyRogstrix";
import FirstSlider from "./HomePageComponents/FirstSlider";
import Statistic from "./HomePageComponents/Statistic";
import BestSellerSlider from "./HomePageComponents/BestSellerSlider";
const Home = () => {

  return (
    <>
      <MainPageHeader />
    
    <FirstSlider/>
     <Statistic/>
      <WhyRogstrix/>
      <BestSellerSlider/>
      <Footer />
    </>
  );
};
export default Home;
