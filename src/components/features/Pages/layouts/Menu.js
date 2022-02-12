import {react,useState} from "react";
import RedLogo from '../../../assets/img/redLogo.png';
import { FaChevronDown } from 'react-icons/fa';
import { Container ,Col, Button,Dropdown,DropdownButton} from "react-bootstrap";
import AssembleMenu from "../../../assets/icons/assembleMenu";
import GuideMenu from "../../../assets/icons/guideMenu";
import MenuCase from "../../../assets/icons/menuCase";
import MouseMenu from "../../../assets/icons/mouseMenu";
import RedMenuLogo from "../../../assets/icons/redMenuIcon";
import UpdateMenu from "../../../assets/icons/updateMenu";
import MegaMenuCamera from "../../../assets/icons/MegaMenuCamera";
import MegaMenuCase from "../../../assets/icons/MegaMenuCase";
import MegaMenuConsole from "../../../assets/icons/MegaMenuConsole";
import MegaMenuLapTop from '../../../assets/icons/MegaMenuLapTop';
import MegaMenuMobile from "../../../assets/icons/MegaMenuMobile";
import MegaMenuPrinter from "../../../assets/icons/MegaMenuPrinter";
import MegaMenuServer from "../../../assets/icons/MegaMenuServer";
import MegaMenuTablet from "../../../assets/icons/MegaMenuTablet";


const Menu = () => {
   const [showMega, setShowMega] = useState(false);
const onClick = () =>{
   setShowMega(!showMega);
};
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
     <Button className="MainMenuBtn borderRight1" onClick={onClick}>
  <MouseMenu className="marginLeft15"/>
  مشاهده محصولات
  <FaChevronDown/>
  </Button>

     <Button className="MainMenuBtn borderLeft1">
      <RedMenuLogo/>
     </Button>
      
     </div>
   </div>
   {showMega ?<div className="megaMenu">
      <div className="MegaMenuFirstRow">
         <a className="megaMenuFirstRowBox" href="#">
            <MegaMenuCase/>
         </a>
         <a className="megaMenuFirstRowBox" href="#">
            <MegaMenuLapTop/>
         </a>
         <a className="megaMenuFirstRowBox" href="#">
            <MegaMenuTablet/>
         </a>
         <a className="megaMenuFirstRowBox" href="#">
            <MegaMenuMobile/>
         </a>
         <a className="megaMenuFirstRowBox" href="#">
            <MegaMenuServer/>
         </a>
         <a className="megaMenuFirstRowBox" href="#">
            <MegaMenuPrinter/>
         </a>
         <a className="megaMenuFirstRowBox" href="#">
            <MegaMenuCamera/>
         </a>
         <a className="megaMenuFirstRowBox" href="#">
            <MegaMenuConsole/>
         </a>
      </div>
      <div className="MegaMenuContainer">
         <div className="MegaMenuCol">
            <ul>
               <li className="listTitle">
                  <a href="#">
                     مانیتور
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ال جی
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور سامسونگ
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ویوسونیک
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور بنکیو
                  </a>
               </li>
             
            </ul>
            <ul>
               <li className="listTitle">
                  <a href="#">
                     سی پی یو
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     اینتل
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                    آی ام دی
                  </a>
               </li>
           
            
             
            </ul>
            <ul>
               <li className="listTitle">
                  <a href="#">
                     مادربورد
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد ام اس آی
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد گیگابایت
                  </a>
               </li>
        
            </ul>
         </div>
         <div className="MegaMenuCol">
            <ul>
               <li className="listTitle">
                  <a href="#">
                     مانیتور
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ال جی
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور سامسونگ
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ویوسونیک
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور بنکیو
                  </a>
               </li>
             
            </ul>
            <ul>
               <li className="listTitle">
                  <a href="#">
                     سی پی یو
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     اینتل
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                    آی ام دی
                  </a>
               </li>
           
            
             
            </ul>
            <ul>
               <li className="listTitle">
                  <a href="#">
                     مادربورد
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد ام اس آی
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد گیگابایت
                  </a>
               </li>
        
            </ul>
         </div>
         <div className="MegaMenuCol">
            <ul>
               <li className="listTitle">
                  <a href="#">
                     مانیتور
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ال جی
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور سامسونگ
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ویوسونیک
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور بنکیو
                  </a>
               </li>
             
            </ul>
            <ul>
               <li className="listTitle">
                  <a href="#">
                     سی پی یو
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     اینتل
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                    آی ام دی
                  </a>
               </li>
           
            
             
            </ul>
            <ul>
               <li className="listTitle">
                  <a href="#">
                     مادربورد
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد ام اس آی
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد گیگابایت
                  </a>
               </li>
        
            </ul>
         </div>
         <div className="MegaMenuCol">
            <ul>
               <li className="listTitle">
                  <a href="#">
                     مانیتور
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ال جی
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور سامسونگ
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ویوسونیک
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور بنکیو
                  </a>
               </li>
             
            </ul>
            <ul>
               <li className="listTitle">
                  <a href="#">
                     سی پی یو
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     اینتل
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                    آی ام دی
                  </a>
               </li>
           
            
             
            </ul>
            <ul>
               <li className="listTitle">
                  <a href="#">
                     مادربورد
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد ام اس آی
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد گیگابایت
                  </a>
               </li>
        
            </ul>
         </div>
         <div className="MegaMenuCol">
            <ul>
               <li className="listTitle">
                  <a href="#">
                     مانیتور
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ال جی
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور سامسونگ
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور ویوسونیک
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مانیتور بنکیو
                  </a>
               </li>
             
            </ul>
            <ul>
               <li className="listTitle">
                  <a href="#">
                     سی پی یو
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     اینتل
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                    آی ام دی
                  </a>
               </li>
           
            
             
            </ul>
            <ul>
               <li className="listTitle">
                  <a href="#">
                     مادربورد
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد ام اس آی
                  </a>
               </li>
               <li className="listItems">
                  <a href="#">
                     مادربورد گیگابایت
                  </a>
               </li>
        
            </ul>
         </div>
      </div>
   </div>:null}
   </Container>
     
   
  );
}; 
export default Menu;
