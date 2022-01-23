import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import ErrorImg from "../../assets/img/404.png";
import { Container ,Col, Button,Row} from "react-bootstrap";
const ErrorPage = () => {

  return (
    <>
     
    
      <Header/> 
      <Menu/> 
      <Container className="errorPage ta-center" fluid>
       <img src={ErrorImg} className="errorImg"/>
       <p className="errorPageText">
           صفحه مورد نظر یافت نشد !
       </p>
       <Button className="errorBtn">
           صفحه اصلی
       </Button>
      </Container>
      <RedBox/>
      <Footer />
    </>
  );
};
export default ErrorPage;
