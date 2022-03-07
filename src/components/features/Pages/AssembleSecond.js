import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import Img1 from "../../assets/img/img1.png";
import { FaTimes , FaShareAlt ,FaArrowUp ,FaLink,FaPlus,FaRegCommentAlt,FaRegCheckCircle } from 'react-icons/fa';
import AssembleSlidr from "./AssemblePageComponents/AssembleSlider";
import CommentBox from "./SingleProductComponents/CommentBox";
import PageTitle from "../../assets/img/pageTitle.png";
import { Link, useHistory } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";

const AssembleSecond = () => {
  
  const history = useHistory();
  const [data,setData]=useState()
  
  const groups=()=>{
     const axios = require("axios");
  
  
     axios.get(apiUrl + "AllMainGroup")
     .then(function (response) {
       if (response.data.result == "true") {
  
          setData(response.data.GroupData)
  
          console.log(response.data.GroupData[0])
  
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
    <div className="EachCategoryBody">
      <Header />
    <Menu/>

   
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
     
        <div className="assembleBox">
          <div className="topBarBox">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center colorWhite">
                <Button>
                <FaPlus color={'#fff'}/>
                <p className="userName">
                    شخصی سازی این سیستم
                </p>
                </Button>
            </div>
            <div className="d-flex align-items-center borderRight1 colorWhite" >
                <FaArrowUp color={'#fff'}/>
                <p className="userName">
                   2
                </p>
            </div>
            <div className="d-flex align-items-center borderRight1 colorWhite">
                <FaRegCommentAlt color={'#fff'}/>
                <p className="userName">
                    10
                </p>
            </div>
            <div className="d-flex align-items-center borderRight1 colorWhite">
             <Button>
             <FaShareAlt color={'#fff'}/>
                <p className="userName">
                    اشتراک گذاری
                </p>
             </Button>
            </div>
          </div>
            <div className="d-flex align-items-center">
            <p className="linkCopy">
            https://rogstrix.ir/list/bRDXKB
            </p>
           <Button className="attachBtn">
           <FaLink color={'#fff'}/>
           </Button>
         
            </div>
          </div>
          <div className="secondBox d-flex justify-content-between pd0">
            <div className="d-flex align-items-center colorWhite pd20">
              <FaRegCheckCircle color={'#fff'}/>
              <p className="fontWeightBold">
                سازگاری قطعات :
              </p>
              <p className="fontWeightLight">
                هیچ ناسازگاری یا مشکلی وجود ندارد.
              </p>
            </div>
            <div className="d-flex align-items-center colorWhite backBlue pd20">
              <FaRegCheckCircle color={'#fff'}/>
              <p className="fontWeightBold">
                تخمین مصرف انرژی : 
              </p>
              <p className="fontWeightLight">
                340 وات
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between tRow">
            <div className="d-flex">
            <p className="tableFirstRowText">
              قطعه
            </p>
            <div className="vl"></div>
            </div>
            <p className="tableFirstRowText">
              انتخاب قطعه
            </p>
            <p className="tableFirstRowText">
              قیمت(ریال)
            </p>
            <p className="tableFirstRowText">
              خرید
            </p>
            <p className="tableFirstRowText">
              حذف
            </p>
          </div>
          <hr className="grayHr"/>
          <div className="d-flex align-items-center justify-content-between tRow">
            <div>
              <p className="tableFirstRowText">
                سی پی یو
              </p>
              <p className="miniText2">
                CPU
              </p>
            </div>
           <div className="d-flex">
           <div>
              <img src={Img1} className="assembleImg"/>
            </div>
            <div>
              <p className="productAssembleName">
              MSI B550-A PRO ATX AM4 Motherboard
              </p>
              <p className="miniText2">
              مشخصات خنک کننده: دور فن: ۲۰۰تا۲۱۰۰ - بدون آب
              </p>
            </div>
           </div>
            <div>
              <p className="productAssembleName">
              ۷۵،۰۰۰،۰۰۰
              </p>
              </div>
              <div>
                <button className="buyAssembleBtn">
                  خرید
                </button>
              </div>
              <div>
                <button className="glassBtn">
                  <FaTimes/>
                </button>
              </div>
        
          
          
          </div>
{
  data[0].map((item)=>{
    return(
      <div>
  <hr className="grayHr"/>
          <div className="d-flex align-items-center  tRow">
            <div className="w240">
              <p className="tableFirstRowText">
{item.Title}              </p>
              <p className="miniText2">
{item.EngTitle}              </p>
            </div>
         
           
              <div className="">
                <button className="buyAssembleBtn">
                 + {item.Title}
                </button>
              </div>
            
        
          
          </div>
          </div>
          
)
  })
}
          {/* <div className="d-flex align-items-center  tRow">
            <div className="w240">
              <p className="tableFirstRowText">
               مادربورد
              </p>
              <p className="miniText2">
                mother board
              </p>
            </div>
         
           
              <div className="">
                <button className="buyAssembleBtn">
                 + انتخاب مادربورد
                </button>
              </div>
            
        
          
          
          </div>
          <hr className="grayHr"/>
          <div className="d-flex align-items-center  tRow">
            <div className="w240">
              <p className="tableFirstRowText">
              مموری (رم)
              </p>
              <p className="miniText2">
               Memory
              </p>
            </div>
         
           
              <div className="">
                <button className="buyAssembleBtn">
                + انتخاب مموری
                </button>
              </div>
            
        
          
          
          </div>
          <hr className="grayHr"/>
          <div className="d-flex align-items-center  tRow">
            <div className="w240">
              <p className="tableFirstRowText">
              هارد اینترنال
              </p>
              <p className="miniText2">
               Storage
              </p>
            </div>
         
           
              <div className="">
                <button className="buyAssembleBtn">
                + انتخاب هارد
                </button>
              </div>
            
        
          
          
          </div>
          <hr className="grayHr"/>
          <div className="d-flex align-items-center  tRow">
            <div className="w240">
              <p className="tableFirstRowText">
              کارت گرافیک
              </p>
              <p className="miniText2">
              Video Card
              </p>
            </div>
         
           
              <div className="">
                <button className="buyAssembleBtn">
                + انتخاب کارت گرافیک
                </button>
              </div>
            
        
          
          
          </div>
          <hr className="grayHr"/>
          <div className="d-flex align-items-center justify-content-between tRow">
            <div>
              <p className="tableFirstRowText">
                سی پی یو
              </p>
              <p className="miniText2">
                CPU
              </p>
            </div>
           <div className="d-flex">
           <div>
              <img src={Img1} className="assembleImg"/>
            </div>
            <div>
              <p className="productAssembleName">
              MSI B550-A PRO ATX AM4 Motherboard
              </p>
              <p className="miniText2">
              مشخصات خنک کننده: دور فن: ۲۰۰تا۲۱۰۰ - بدون آب
              </p>
            </div>
           </div>
            <div>
              <p className="productAssembleName">
              ۷۵،۰۰۰،۰۰۰
              </p>
              </div>
              <div>
                <button className="buyAssembleBtn">
                  خرید
                </button>
              </div>
              <div>
                <button className="glassBtn">
                  <FaTimes/>
                </button>
              </div>
        
          
          
          </div>
          <hr className="grayHr"/>
          <div className="d-flex align-items-center  tRow">
            <div className="w240">
              <p className="tableFirstRowText">
              منبع تغذیه (پاور)
              </p>
              <p className="miniText2">
              Power Supply
              </p>
            </div>
         
           
              <div className="">
                <button className="buyAssembleBtn">
                + انتخاب منبع تغذیه
                </button>
              </div>
            
        
          
          
          </div>
          <hr className="grayHr"/>
          <div className="d-flex align-items-center  tRow">
            <div className="w240">
              <p className="tableFirstRowText">
              سیستم عامل
              </p>
              <p className="miniText2">
              operating system
              </p>
            </div>
         
           
              <div className="">
                <button className="buyAssembleBtn">
                + انتخاب سیستم عامل
                </button>
              </div>
            
        
          
          
          </div>
          <hr className="grayHr"/>
          <div className="d-flex align-items-center  tRow">
            <div className="w240">
              <p className="tableFirstRowText">
              نمایشگر
              </p>
              <p className="miniText2">
              monitor
              </p>
            </div>
         
           
              <div className="">
                <button className="buyAssembleBtn">
               + انتخاب نمایشگر
                </button>
              </div>
            
        
          
          
          </div>
          <hr className="grayHr"/> */}
          <div className="d-flex justify-content-end tRow mb-4 pb-4">
            <div className="d-flex mr-4">
            <p className="miniText2">
              قیمت کل :
              </p>
            <p className="productAssembleName">
              225.000.000 تومان
              </p>
             
            </div>
            <div>
            <button className="buyAssembleBtn">
                  خرید کل قطعات
                </button>
            </div>
          </div>
          <p class="boxTitle2 BoldFont pr-4 pl-4">در خصوص ناسازگاری‌ها و مشکلات احتمالی</p>
          <hr class="dottedH"></hr>
          <div className="padding20">
            <div className="d-flex">
              <p className="hoshdar">
                هشدار !
              </p>
              <p className="productAssembleName MediumFont" >
              برخی از چیپست‌های مادربورد فلان با سی‌پی‌یوهای فلان سازگاری ندارند و باید فلان چیز را هم نصب کنید تا مشکل برطرف شود.
              </p>
            </div>
            <div className="d-flex">
              <p className="hoshdar orange">
                توجه !
              </p>
              <p className="productAssembleName MediumFont" >
              توجه داشته باشید که برخی از قطعات ممکن است از نظر اندازه با هم سازگار نباشند و با هم جور نشوند. در حال حاضر هنوز این نوع سازگاری قابل بررسی نیست. </p>
            </div>
          </div>
        </div>
        <div className="whiteBox3 mt-3">
            <p className="boxTitle2 BoldFont">
           توضیحات
                </p>
                <hr className="dottedH"/>
                <p className="productDetail">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>
        <div className="whiteBox3 mt-3">
          <CommentBox/>
          </div>
      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default AssembleSecond;
