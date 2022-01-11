import MainPageHeader from "./layouts/MainPageHeader";
import Footer from "./layouts/Footer";
import WhyRogstrix from "./HomePageComponents/WhyRogstrix";
const Home = () => {

  return (
    <>
      <MainPageHeader />
      <div className="heroSlider">
     {/*slider is here */}
      </div>
      <WhyRogstrix/>
      <Footer />
    </>
  );
};
export default Home;
