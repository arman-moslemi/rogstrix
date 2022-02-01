import MainPageHeader from "./layouts/MainPageHeader";
import Footer from "./layouts/Footer";
import WhyRogstrix from "./HomePageComponents/WhyRogstrix";
import FirstSlider from "./HomePageComponents/FirstSlider";
import Statistic from "./HomePageComponents/Statistic";
import CategoryList from "./EachCategoryComponents/CategoryList";
import BestSellerSlider from "./HomePageComponents/BestSellerSlider";
import { Container ,Col, Button,Row} from "react-bootstrap";
const Home = () => {

  return (
    <>
      <MainPageHeader />
    
    <FirstSlider/>
    <div className="row mt-5">
      <Col md={2}>
      <CategoryList/>
      </Col>
      <Col md={10}>
      <div className="bestsliderBox bestSellerContainerCol2">
          <BestSellerSlider/>
        </div>
      </Col>
    </div>
     <Statistic/>
      <WhyRogstrix/>
      <Container className="bestSellerContainer" fluid>
        <div className="row">
        <Col md={1} className="rightBoxCol">
          <div>
            <p>
            محصولات پرفروش راگ
            </p>
          </div>
        </Col>
        <Col md={11} className="">
        <div className="bestsliderBox bestSellerContainerCol2">
          <BestSellerSlider/>
        </div>
        </Col>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default Home;
