import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";

import { FaTimes , FaSearch ,FaChevronLeft } from 'react-icons/fa';

import PageTitle from "../../assets/img/pageTitle.png"
const AssembleMain = () => {

  return (
    <div className="EachCategoryBody">
      <Header />
    

   
      <Container className="EachCategoryContainer" fluid>
      <div className="pageTitle">
            <div>
            <img src={PageTitle}/>
            </div>
            <div>
                <p>
                سیستم عالی گیمینگ AMD                </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
        
      </Container>
      <RedBox/>
      <Footer />
    </div>
  );
};
export default AssembleMain;
