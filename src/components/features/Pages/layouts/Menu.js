import React,{useState,useEffect} from 'react'
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
import { Link, useHistory } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import {useParams } from "react-router-dom";
// import CustomizedDialogs from './layouts/AlertModal';

const Menu = () => {
   const [showMega, setShowMega] = useState(false);
   const [menu, setMenu] = useState(false);
   const [pak, setPak] = useState(1);
const onClick = () =>{
   setShowMega(!showMega);
};
const history = useHistory();
const [data,setData]=useState()

const groups=()=>{
   const axios = require("axios");


   // axios.get(apiUrl + "AllMainGroup")
   axios.get(apiUrl + "GroupBrand")
   .then(function (response) {
     if (response.data.result == "true") {

      //   setData(response.data.GroupData)
        setData(response.data.Data)

        console.log(response.data.Data)

       // history.push("/RegisterVerify/"+mobile)

   }
   else{

   }})
   .catch(function (error) {
     console.log(error);
   });


 }
 useEffect(() => {
   groups();
// alert(val)
 }, []);
  return (
   <Container fluid className="pad0">
   <div className="desktopMenu">
   <div className="mainBack">
   <div className="MainMenu d-flex">
     <Button onClick={()=>history.push("/CompletedSystems")} className="MainMenuBtn borderRight1">

        <MenuCase  className="marginLeft15 menuResponsiveNone"/>
        سیستم‌های تکمیل شده
     </Button>
     <Button onClick={()=>history.push("/AssembleSecond")} className="MainMenuBtn borderRight1">
 
      <AssembleMenu  className="marginLeft15 menuResponsiveNone"/>
         ساخت سیستم
     </Button>

     <Button onClick={()=>history.push("/SystemGuide")} className="MainMenuBtn borderRight1">

         <GuideMenu className="marginLeft15 menuResponsiveNone"/>
         سیستم های پیشنهادی 
              </Button>
     {/* <Button className="MainMenuBtn borderRight1">

        <UpdateMenu className="marginLeft15 menuResponsiveNone"/>
        ارتقائ لپ تاپ
     </Button> */}
     <Button className="MainMenuBtn borderRight1" onClick={onClick}>
  <MouseMenu className="marginLeft15 menuResponsiveNone"/>
  مشاهده محصولات
  <FaChevronDown/>
  </Button>

     <Button onClick={()=>history.push("/Home")} className="MainMenuBtn borderLeft1">
      <RedMenuLogo/>
     </Button>

     </div>
   </div>
   {showMega ?<div className="megaMenu">
      <div className="MegaMenuFirstRow">
         <Link onClick={()=>history.push("/EachCategory/1")} onMouseOver={()=>{setMenu(true);setPak(1)}} className="megaMenuFirstRowBox" >
            <p className='menuTextBack'>
            قطعات کامپیوتر              </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/2")}  onMouseOver={()=>{setMenu(true);setPak(2)}}className="megaMenuFirstRowBox" >
            {/* <MegaMenuLapTop/> */}
            <p className='menuTextBack'>
            لپتاپ  
            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/3")} onMouseOver={()=>{setMenu(true);setPak(3)}} className="megaMenuFirstRowBox" >
            {/* <MegaMenuTablet/> */}
            <p className='menuTextBack'>
           تبلت
            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/4")} onMouseOver={()=>{setMenu(true);setPak(4)}} className="megaMenuFirstRowBox" >
            {/* <MegaMenuMobile/> */}
            <p className='menuTextBack'>
              موبایل و گجت   
            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/5")} onMouseOver={()=>{setMenu(true);setPak(5)}} className="megaMenuFirstRowBox" >
            <p className='menuTextBack'>
             شبکه و سرور
            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/6")} className="megaMenuFirstRowBox" >
            <p className='menuTextBack'>
            کالای اداری            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/7")} className="megaMenuFirstRowBox" >
            <p className='menuTextBack'>
            تصویربرداری            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/8")} className="megaMenuFirstRowBox" >
            <p className='menuTextBack'>
کنسول بازی            </p>
         </Link>
      </div>
      {/* <div className="MegaMenuSecondRow">
         <Link onClick={()=>history.push("/EachCategory/1")} className="megaMenuSecondRowBox" >
            <p className='menuTextBack2'>
            قطعات کامپیوتر            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/2")} className="megaMenuSecondRowBox" >
            <p className='menuTextBack2'>
لپتاپ            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/3")} className="megaMenuSecondRowBox" >
            <p className='menuTextBack2'>
تبلت            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/4")} className="megaMenuSecondRowBox" >
            <p className='menuTextBack2'>
موبایل و گجت            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/5")} className="megaMenuSecondRowBox" >
            <p className='menuTextBack2'>
شبکه و سرور            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/6")} className="megaMenuSecondRowBox" >
            <p className='menuTextBack2'>
کالای اداری            تصویربرداری</p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/7")} className="megaMenuSecondRowBox" >
            <p className='menuTextBack2'>
            </p>
         </Link>
         <Link onClick={()=>history.push("/EachCategory/8")} className="megaMenuSecondRowBox" >
            <p className='menuTextBack2'>
کنسول بازی            </p>
         </Link>
      </div> */}
      {
         menu?


      <div className="MegaMenuContainer">
         {
            data?.filter(t=>t[0].MainGroupID==pak).map((item)=>{
               return(
      <div className="MegaMenuCol">

            <ul>
               <li className="listTitle">
                  <Link onClick={()=>history.push("/products/"+item[0].GroupID)}>
{item[0].Title}                  </Link>
               </li>
{
   item.map((item2)=>{
      return(
               <li className="listItems">
                  <Link onClick={()=>history.push("/products/"+item2.GroupID+"/"+item2.BrandID)}>
{item2.BrandName }                 </Link>
               </li>

      )
   })
}


            </ul>
         </div>
   )
})
         }

         {/* <div className="MegaMenuCol">
            <ul>
               <li className="listTitle">
                  <a >
                     مانیتور
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ال جی
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور سامسونگ
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ویوسونیک
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور بنکیو
                  </a>
               </li>

            </ul>
            <ul>
               <li className="listTitle">
                  <a >
                     سی پی یو
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     اینتل
                  </a>
               </li>
               <li className="listItems">
                  <a >
                    آی ام دی
                  </a>
               </li>



            </ul>
            <ul>
               <li className="listTitle">
                  <a >
                     مادربورد
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد ام اس آی
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد گیگابایت
                  </a>
               </li>

            </ul>
         </div>
         <div className="MegaMenuCol">
            <ul>
               <li className="listTitle">
                  <a >
                     مانیتور
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ال جی
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور سامسونگ
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ویوسونیک
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور بنکیو
                  </a>
               </li>

            </ul>
            <ul>
               <li className="listTitle">
                  <a >
                     سی پی یو
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     اینتل
                  </a>
               </li>
               <li className="listItems">
                  <a >
                    آی ام دی
                  </a>
               </li>



            </ul>
            <ul>
               <li className="listTitle">
                  <a >
                     مادربورد
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد ام اس آی
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد گیگابایت
                  </a>
               </li>

            </ul>
         </div>
         <div className="MegaMenuCol">
            <ul>
               <li className="listTitle">
                  <a >
                     مانیتور
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ال جی
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور سامسونگ
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ویوسونیک
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور بنکیو
                  </a>
               </li>

            </ul>
            <ul>
               <li className="listTitle">
                  <a >
                     سی پی یو
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     اینتل
                  </a>
               </li>
               <li className="listItems">
                  <a >
                    آی ام دی
                  </a>
               </li>



            </ul>
            <ul>
               <li className="listTitle">
                  <a >
                     مادربورد
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد ام اس آی
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد گیگابایت
                  </a>
               </li>

            </ul>
         </div>
         <div className="MegaMenuCol">
            <ul>
               <li className="listTitle">
                  <a >
                     مانیتور
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ال جی
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور سامسونگ
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور ویوسونیک
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مانیتور بنکیو
                  </a>
               </li>

            </ul>
            <ul>
               <li className="listTitle">
                  <a >
                     سی پی یو
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     اینتل
                  </a>
               </li>
               <li className="listItems">
                  <a >
                    آی ام دی
                  </a>
               </li>



            </ul>
            <ul>
               <li className="listTitle">
                  <a >
                     مادربورد
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد ایسوس
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد ام اس آی
                  </a>
               </li>
               <li className="listItems">
                  <a >
                     مادربورد گیگابایت
                  </a>
               </li>

            </ul>
         </div> */}
      </div>
         :
         null
      }
   </div>:null}
   </div>
   <div className="responsiveHeader">
   <div className="d-flex align-items-center justify-content-around pdTB10">
      <div className="responsiveMenuBox">
         <button>
         <MenuCase/>
         </button>
      </div>
      <div className="responsiveMenuBox">
         <button>
         <AssembleMenu/>
         </button>
      </div>
      <div className="responsiveMenuBox">
         <button>
         <GuideMenu/>
         </button>

      </div>
      <div className="responsiveMenuBox">
         <button>
         <UpdateMenu/>
         </button>

      </div>
      <div className="responsiveMenuBox">
         <button>
         <RedMenuLogo/>
         </button>

      </div>
   </div>
   </div>
   </Container>


  );
};
export default Menu;
