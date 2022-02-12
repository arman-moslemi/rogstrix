import react from "react";
import RedLogo from '../../../assets/img/redLogo.png';
import { FaChevronDown } from 'react-icons/fa';
import { Container ,Col, Button,Dropdown,DropdownButton} from "react-bootstrap";
import AssembleMenu from "../../../assets/icons/assembleMenu";
import GuideMenu from "../../../assets/icons/guideMenu";
import MenuCase from "../../../assets/icons/menuCase";
import MouseMenu from "../../../assets/icons/mouseMenu";
import RedMenuLogo from "../../../assets/icons/redMenuIcon";
import UpdateMenu from "../../../assets/icons/updateMenu";
import ReactMegaMenu from "react-mega-menu";
const Test1 = () => {
   return <div className="">

<div className="row" style={{marginRight:"0px",marginLeft:"0px"}}>
 <Col md={12}>
    <p>salam</p>
 </Col>
</div>
   </div>

 }
const dataMegaMenu = [
   {
     label: 'لامپ', key: 1, items: <Test1 />
   }
 
 ]
const Menu = () => {
  return (
   <Container fluid className="pad0">
   <div className="mainBack">
   <div className="MainMenu d-flex">
     <Button className="MainMenuBtn borderRight1">
     
        <MenuCase className="marginLeft15"/>
        سیستم‌های تکمیل شده
     </Button>
     <Button className="MainMenuBtn borderRight1">
     
      <AssembleMenu className="marginLeft15"/>
         ساخت سیستم
     </Button>
     <Button className="MainMenuBtn borderRight1">
     
         <GuideMenu className="marginLeft15"/>
         راهنمای ساخت سیستم
     </Button>
     <Button className="MainMenuBtn borderRight1">
     
        <UpdateMenu className="marginLeft15"/>
        ارتقائ لپ تاپ
     </Button>
     <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" className="MainMenuBtn borderRight1">
  <MouseMenu className="marginLeft15"/>
  مشاهده محصولات
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <ReactMegaMenu
    data={dataMegaMenu}
    />
  </Dropdown.Menu>
</Dropdown>
     <Button className="MainMenuBtn borderLeft1">
      <RedMenuLogo/>
     </Button>
      
     </div>
   </div>
   </Container>
     
   
  );
}; 
export default Menu;
