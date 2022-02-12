import react from "react";
import User from "../../../assets/icons/user";
import Search from "../../../assets/icons/search";
import Basket from "../../../assets/icons/basket";
import LogoBlack from "../../../assets/img/Logo-black.png"
import { Container ,Col, Button} from "react-bootstrap";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";

const MainPageHeader = ({data}) => {
  return (

      <div className="mainHeader">
       <Container className="d-flex-center" fluid>
         <Col md={6} sm={6} xs={6}>
         <div className="d-flex-start-start">
         <img src={LogoBlack} className="logo-light"/>
         {/* <img src={apiAsset+data?.MainRogSlider1} className="logo-light"/> */}
         </div>
         </Col>
         <Col md={6} sm={6} xs={6}>
         <div className="d-flex-end-end">
          <Button className="headerBTN">
          <User/>
          </Button>
          <Button className="headerBTN">
          <Search className="mar-des-right-1"/>
          </Button>
          <Button className="headerBTN">
          <Basket className="mar-des-right-1"/>
          </Button>
         </div>
         </Col>
       </Container>
      </div>

  );
};
export default MainPageHeader;
