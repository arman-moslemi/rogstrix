import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import React,{useState,useEffect,useContext} from 'react'


import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container ,Col, Button,Row} from "react-bootstrap";
import Img1 from "../../assets/img/img1.png";
import { FaTimes , FaShareAlt ,FaArrowUp ,FaLink,FaPlus,FaRegCommentAlt,FaRegCheckCircle} from 'react-icons/fa';
import AssembleSlidr from "./AssemblePageComponents/AssembleSlider";
import CommentBox from "./SingleProductComponents/CommentBox";
import PageTitle from "../../assets/img/pageTitle.png";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { AuthContext } from "../../../context/auth-context";
import { Link, useHistory ,useParams} from "react-router-dom";

const AssembleMain = () => {
  const { isLoggedIn, token } = useContext(AuthContext);
  const params = useParams().id;
  const history = useHistory();
  const [product,setProduct]=useState([])
  const [com,setCom]=useState([])
  const [rate,setRate]=useState(0)

  const [similar,setSimilar]=useState([])
  const [property,setProperty]=useState([])

  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "CompareSystem",{
            SystemID:params,
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setProperty(response.data.Data)

          console.log(898989)
          console.log(response.data.Data)

      }
      else{
        console.log(888)
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
      axios
      .post(apiUrl + "SingleSystemRelated",{
        SystemID:params,
      })
  .then(function (response) {
    if (response.data.result == "true") {

      setSimilar(response.data.Data)
      console.log(777)
      console.log(response.data.Data)

  }
  else{
    console.log(888)
    console.log(response.data.result)

  }})
  .catch(function (error) {
    console.log(error);
  });
      axios
          .post(apiUrl + "SingleSystemComment",{
            SystemID:params
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setCom(response.data.Data)
          console.log(response.data.Data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });
    }
    const ProductSave=()=>{
      if( !isLoggedIn){
       alert("ابتدا وارد شوید")
   
      }
      else{
   
      
       const axios = require("axios");
   
       axios
           .post(apiUrl + "PersonalizeSystem",{
             SystemID:params,
             CustomerID:token
           })
       .then(function (response) {
         if (response.data.result == "true") {
   alert("با موفقیت ذخیره شد")
   history.push("/AssembleSecond")
           console.log(777)
           console.log(response.data.Data)
   
       }
       else{
         console.log(888)
         console.log(response.data.result)
   
       }})
       .catch(function (error) {
         console.log(error);
       });
     }
     }
    useEffect(() => {
      mainSlider();
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
                {property[0]?.SystemName}                </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
        <div className="assembleSliderBox">
          <AssembleSlidr data={ property}/>
        </div>
        <div className="assembleBox">
          <div className="topBarBox">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center colorWhite">
                <Button onClick={()=>ProductSave()}>
                <FaPlus color={'#fff'}/>
                <p className="userName">
                    شخصی سازی این سیستم
                </p>
                </Button>
            </div>
            {/* <div className="d-flex align-items-center borderRight1 colorWhite" >
                <FaArrowUp color={'#fff'}/>
                <p className="userName">
                   2
                </p>
            </div> */}
            <div className="d-flex align-items-center borderRight1 colorWhite">
                <FaRegCommentAlt color={'#fff'}/>
                <p className="userName">
                    {com?.length}
                </p>
            </div>
            {/* <div className="d-flex align-items-center borderRight1 colorWhite">
             <Button>
             <FaShareAlt color={'#fff'}/>
                <p className="userName">
                    اشتراک گذاری
                </p>
             </Button>
            </div> */}
          </div>
            <div className="d-flex align-items-center">
            <p className="linkCopy">
            https://rogstrix.com/AssembleMain/{property[0]?.SystemID}
            </p>
           <Button className="attachBtn">
           <FaLink color={'#fff'}/>
           </Button>
         
            </div>
          </div>
          {/* <div className="secondBox">
            <div className="d-flex align-items-center colorWhite">
              <FaRegCheckCircle color={'#fff'}/>
              <p className="fontWeightBold">
                سازگاری قطعات :
              </p>
              <p className="fontWeightLight">
                هیچ ناسازگاری یا مشکلی وجود ندارد.
              </p>
            </div>
          </div> */}
          <div className="d-flex align-items-center tRow">
            <div className="d-flex wB20">
            <p className="tableFirstRowText">
              گروه
            </p>
            <div className="vl"></div>
            </div>
            <p className="tableFirstRowText wB60">
              انتخاب قطعه
            </p>
            <p className="tableFirstRowText wB10">
              قیمت(تومان)
            </p>
            <p className="tableFirstRowText wB10 ta-center">
              خرید
            </p>
            {/* <p className="tableFirstRowText">
              حذف
            </p> */}
          </div>
          {
            property.map((item)=>{
              return(
                <div className="d-flex align-items-center tRow">
                <div className="wB15">
                  <p className="tableFirstRowText">
          {item.Group}        </p>
                  {/* <p className="miniText2">
                    {item.EngTitle}
                  </p> */}
                </div>
               <div className="d-flex wB65">
               <div>
                  <img src={apiAsset+item.Pic} className="assembleImg"/>
                </div>
                <div>
                  <p className="productAssembleName">
          {item.ProductName}        </p>
                  {/* <p className="miniText2">
                  مشخصات خنک کننده: دور فن: ۲۰۰تا۲۱۰۰ - بدون آب
                  </p> */}
                </div>
               </div>
                <div className="wB10">
                  <p className="productAssembleName">
                  {item.Cost}
                  </p>
                  </div>
                  <div className="wB10 ta-center">
                    <button onClick={()=>history.push("/singleProduct/"+item.ProductID)} className="buyAssembleBtn">
                      خرید
                    </button>
                  </div>
                  {/* <div>
                    <button className="glassBtn">
                      <FaTimes/>
                    </button>
                  </div> */}
            
              
              
              </div>
              )
            })
          }
                        <hr className="grayHr"/>
                        <div className="d-flex justify-content-end tRow mb-4 pb-4">
            <div className="d-flex mr-4">
            <p className="miniText2">
              قیمت کل :
              </p>
            <p className="productAssembleName">
             {property?.length>0?property[0].SystemCost:0} تومان
              </p>
             
            </div>
            {/* <div>
            <button className="buyAssembleBtn">
                  خرید کل قطعات
                </button>
            </div> */}
          </div>
          <p class="boxTitle2 BoldFont pr-4 pl-4">در خصوص ناسازگاری‌ها و مشکلات احتمالی</p>
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
{property[0]?.Description}                </p>
            </div>
        <div className="whiteBox3 mt-3">
        <CommentBox token={token} data={com} id={params} type={"system"}/>
          </div>
      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default AssembleMain;
