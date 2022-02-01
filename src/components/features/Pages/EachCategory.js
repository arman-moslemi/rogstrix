import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { NavLink } from "react-router-dom";
import { Container ,Col, Button,Row} from "react-bootstrap";
import CardBox from '../Pages/EachCategoryComponents/CardBox';
import Sorts from './EachCategoryComponents/Sorts';
import CategoryList from "./EachCategoryComponents/CategoryList";
const EachCategory = () => {

  return (
    <div className="EachCategoryBody">
      <Header />
    

   
      <Container className="EachCategoryContainer" fluid>
        <div className="breadCrumbs">
          <ul>
            <li>
              <a>
                سایت راگ استریکس
              </a>
            </li>
            /
            <li>
              <a>
                سی پی یو
              </a>
            </li>
            /
            <li>
              <a>
              AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <Col md={2}>
          
          </Col>
          <Col md={10}>
          <Sorts/>
          </Col>
         
        </div>
       <div className="row marginTop3">
       <Col md={2}>
          <CategoryList/>
          </Col>
          <Col md={10}>
           
           <div className="whiteBoxCategory">
          <p className="BoxTitle">
            همه مانیتورها
          </p>

          <div className="row margin-top-3">
            <Col md={4} className="colmar-top-3">
              <CardBox className="test"/>
            </Col>
            <Col md={4} className="colmar-top-3">
            <CardBox/>
            </Col>
            <Col md={4} className="colmar-top-3">
            <CardBox/>
            </Col>
            <Col md={4} className="colmar-top-3">
              <CardBox/>
            </Col>
            <Col md={4} className="colmar-top-3">
            <CardBox/>
            </Col>
            <Col md={4} className="colmar-top-3">
            <CardBox/>
            </Col>
          </div>
        </div>
          </Col>
       </div>
      </Container>
      <Footer />
    </div>
  );
};
export default EachCategory;
