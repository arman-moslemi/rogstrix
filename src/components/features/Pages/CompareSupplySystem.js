import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaAngleDoubleRight ,FaAngleDoubleLeft  } from 'react-icons/fa';

import PageTitle from "../../assets/img/pageTitle.png"

import CompareCards from "./CompareComponents/CompareCards";
const CompareSupplySystem = () => {

  return (
    <div className="EachCategoryBody">
     <Header/> 
    <Menu/>

   
      <Container className="EachCategoryContainer" fluid>
      
        <div className="pageTitle">
            <div>
            <img src={PageTitle}/>
            </div>
            <div>
                <p>
                مقایسه منبع تغذیه             </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
        <div className="productsWhiteBox radius10">
          <div className="compareCardDiv">
           
              <CompareCards/>
           
              <CompareCards/>
          
              <CompareCards/>
            
           
              <CompareCards/>
           
          </div>
        </div>
   
      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default CompareSupplySystem;
