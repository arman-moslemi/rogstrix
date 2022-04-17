import FooterMain from "./layouts/FooterMain";
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
import AboutUs from "./Information/AboutUs"
import { Container ,Col, Button,Row} from "react-bootstrap";
const AboutUsPage = () => {

  return (
    <>
     
    
      <Header/> 
      <Menu/> 
      <Container className="ta-center grayB" fluid >
    <AboutUs/>
      </Container>
     
      <FooterMain/>
    </>
  );
};
export default AboutUsPage;
