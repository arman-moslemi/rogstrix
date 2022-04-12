import react from "react";
import User from "../../../assets/icons/user";
import Search from "../../../assets/icons/search";
import Basket from "../../../assets/icons/basket";
import RedLogo from "../../../assets/img/redLogo.png"
import { Container ,Col, Button,ToggleButton} from "react-bootstrap";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import useDarkMode from 'use-dark-mode';
const MainPageHeader = ({data}) => {
  const darkMode = useDarkMode(false);
  return (

      <div className="mainHeader">
       <Container className="d-flex-center" fluid>
         <Col md={6} sm={6} xs={6}>
         <div className="d-flex-start-start">
         <img src={RedLogo} className="logo-light"/>
         {/* <img src={apiAsset+data?.MainRogSlider1} className="logo-light"/> */}
         <div className="mi">
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <ToggleButton checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
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
