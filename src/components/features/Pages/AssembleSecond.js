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
import React,{useState,useEffect,useContext} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { AuthContext } from "../../../context/auth-context";

const AssembleSecond = () => {
  const { isLoggedIn, token } = useContext(AuthContext);

  const history = useHistory();
  const [data,setData]=useState()
  const [product,setProduct]=useState()
  const [agree,setAgree]=useState()
  const [energy,setEnergy]=useState()
  const [inc,setInc]=useState([])
  var Guest=localStorage.getItem("guest")

  const groups=()=>{
     const axios = require("axios");
  
     axios.get(apiUrl + "AllMainGroup")
     .then(function (response) {
       if (response.data.result == "true") {
  
          setData(response.data.GroupData[0])
  
          console.log(77)
          console.log(response.data.GroupData[0])
  
         // history.push("/RegisterVerify/"+mobile)
  
     }
     else{
      console.log(1111)

     }})
     .catch(function (error) {
      console.log(55)

       console.log(error);
     });
     
   
  
  
   }
  const groups2=async()=>{
     const axios = require("axios");
     const storedData = JSON.parse(localStorage.getItem("userData"))?.token
  console.log(555)
  console.log(storedData?.toString().length)
  // console.log(storedData.length)
  console.log(isLoggedIn)
     axios.post(apiUrl + "SingleSystemImperfect",{
       CustomerID:storedData?.toString().length<10 && storedData?storedData:0,
       GuestID:storedData?.toString().length<10 && storedData?0:Guest
     })
     .then(function (response) {
       if (response.data.result == "true") {
  
        setProduct(response.data.Data)
        setAgree(response.data.Data2)
        setEnergy(response.data.Energy)
  var ss=[]
          console.log(666)
          console.log(response.data)
          response.data.Data.map((item)=>{
ss.push(item.GroupID)
          }
          )
          setInc(ss)
          // console.log(  response.data.Data.indexOf(el=>el.GroupID==2))
          console.log(response.data.Data)
    
     }
     else{
      console.log(999)

     }})
     .catch(function (error) {
      console.log(999)

       console.log(error);
     });
  
  
   }

   const deleteProduct=(id)=>{
    const axios = require("axios");
    const storedData = JSON.parse(localStorage.getItem("userData"))?.token

    axios.post(apiUrl + "DeleteSystemCustomer",{
      CustomerID:storedData?.toString().length<10 && storedData?storedData:0,
      GuestID:storedData?.toString().length<10 && storedData?0:Guest,
      ProductID:id
    })
    .then(function (response) {
      if (response.data.result == "true") {
        setProduct(response.data.Data)
        setAgree(response.data.Data2)
  
          console.log(response.data.Data)
  
    }
    else{
     console.log(1111)

    }})
    .catch(function (error) {
     console.log(55)

      console.log(error);
    });
    
  
 
 
  }
   const ProductSave=()=>{
    const axios = require("axios");
if(isLoggedIn)
   { axios.post(apiUrl + "SaveSystemCustomer",{
      CustomerID:token
     
    })
    .then(function (response) {
      if (response.data.result == "true") {
        setProduct(response.data.Data)
        setAgree(response.data.Data2)
  
          console.log(response.data.Data)
  
    }
    else{
     console.log(1111)

    }})
    .catch(function (error) {
     console.log(55)

      console.log(error);
    });}
    else{
      alert("ابتدا واردشوید")
    }
    
  
 
 
  }
   const again=()=>{
    const axios = require("axios");
    const storedData = JSON.parse(localStorage.getItem("userData"))?.token
 console.log(555)
 console.log(storedData?.toString().length)
 // console.log(storedData.length)
 console.log(isLoggedIn)
    axios.post(apiUrl + "CreateSystemCustomerAgain",{
      CustomerID:storedData?.toString().length<10 && storedData?storedData:0,
      GuestID:storedData?.toString().length<10 && storedData?0:Guest
    })
    .then(function (response) {
      if (response.data.result == "true") {
 
      window.location.reload()
   
    }
    else{
     console.log(999)

    }})
    .catch(function (error) {
     console.log(999)

      console.log(error);
    });
    
  
 
 
  }
   useEffect(() => {
     groups();
     groups2();
  // alert(val)
   }, []);
  
  const AddToCart=(id)=>{
    const axios = require("axios");
    var Guest=localStorage.getItem("guest")

    const storedData = JSON.parse(localStorage.getItem("userData"))?.token
console.log(555)
console.log(token)
    axios
        .post(apiUrl + "ShoppingBasketAdd",{
          SystemID:id,
          CustomerID:storedData?.toString().length<10 && storedData?storedData:0,
          GuestID:storedData?.toString().length<10 && storedData?0:Guest?Guest:0,
          Cost:parseInt(product[0].Cost)-parseInt(product[0].SpecialCost),
          // ColorID:color,
          Number:1

        })
    .then(function (response) {
      if (response.data.result == "true") {
alert("با موفقیت ذخیره شد")
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
                ساخت سیستم               </p>
            </div>
            <div>
            <img src={PageTitle}/>
            </div>
        </div>
     
        <div className="assembleBox">
          <div className="topBarBox">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center colorWhite">
                <Button onClick={()=>ProductSave()}>
                <FaPlus color={'#fff'}/>
                <p className="userName">
                    ذخیره این سیستم
                </p>
                </Button>
            </div>
            <div className="d-flex align-items-center colorWhite">
                <Button onClick={()=>again()}>
                <FaPlus color={'#fff'}/>
                <p className="userName">
شروع دوباره
                </p>
                </Button>
            </div>
            {/* <div className="d-flex align-items-center borderRight1 colorWhite" >
                <FaArrowUp color={'#fff'}/>
                <p className="userName">
                   
                </p>
            </div>
            <div className="d-flex align-items-center borderRight1 colorWhite">
                <FaRegCommentAlt color={'#fff'}/>
                <p className="userName">
                    
                </p>
            </div> */}
            {/* <div className="d-flex align-items-center borderRight1 colorWhite">
             <Button>
             <FaShareAlt color={'#fff'}/>
                <p className="userName">
                    اشتراک گذاری
                </p>
             </Button>
            </div> */}
          </div>
          {
            product?.length>0?
            <div className="d-flex align-items-center">
            <p className="linkCopy">
            https://rogstrix.ir/AssembleMain/{product[0]?.SystemID}
            </p>
           <Button className="attachBtn">
           <FaLink color={'#fff'}/>
           </Button>
         
            </div>
            :
            null
          }
          </div>
          <div className="secondBox d-flex justify-content-between pd0">
            <div className="d-flex align-items-center colorWhite pd20">
              <FaRegCheckCircle color={'#fff'}/>
              <p className="fontWeightBold">
                سازگاری قطعات :
              </p>
              {
                agree?
                <p className="fontWeightLight">

{agree}
</p>
                :
              <p className="fontWeightLight">
                هیچ ناسازگاری یا مشکلی وجود ندارد.
              </p>
              }
            </div>
            <div className="d-flex align-items-center colorWhite backBlue pd20">
              <FaRegCheckCircle color={'#fff'}/>
              <p className="fontWeightBold">
                تخمین مصرف انرژی : 
              </p>
              <p className="fontWeightLight">
             {energy?energy:0} وات
              </p>
            </div>
          </div>
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
            <p className="tableFirstRowText wR5">
              حذف
            </p>
          </div>
          {/* <hr className="grayHr"/> */}
        
{
  
  data?.map((item)=>{
    return(
product?.length>0?
 
inc.indexOf(item.GroupID)!=-1 ?
      <div>
      <hr className="grayHr"/>
      <div className="d-flex align-items-center tRow">
      <div className="wB15">
        <p className="tableFirstRowText">
{product[inc?.indexOf(item.GroupID)]?.Title}        </p>
        {/* <p className="miniText2">
          {item2.EngTitle}
        </p> */}
      </div>
     <div className="d-flex wB65">
     <div>
        <img src={apiAsset+product[inc?.indexOf(item.GroupID)]?.Pic1} className="assembleImg"/>
      </div>
      <div>
        <p className="productAssembleName">
{product[inc?.indexOf(item.GroupID)]?.ProductName}        </p>
        {/* <p className="miniText2">
        مشخصات خنک کننده: دور فن: ۲۰۰تا۲۱۰۰ - بدون آب
        </p> */}
      </div>
     </div>
      <div className="wB10">
        <p className="productAssembleName">
        {parseInt(product[inc?.indexOf(item.GroupID)]?.Cost)-parseInt(product[inc?.indexOf(item.GroupID)]?.SpecialCost)}تومان
        </p>
        </div>
        <div className="wB10 ta-center">
          {/* <button onClick={()=>history.push("/singleProduct/"+product[inc.indexOf(item.GroupID)]?.ProductID)} className="buyAssembleBtn"> */}
          <button onClick={()=>history.push("/singleProduct/"+product[inc.indexOf(item.GroupID)]?.EngProductName.replace(" ","_"))} className="buyAssembleBtn">
            خرید
          </button>
        </div>
        <div className="wR5">
          <button onClick={()=>deleteProduct(product[inc.indexOf(item.GroupID)]?.ProductID)} className="glassBtn">
            <FaTimes/>
          </button>
        </div>
  
    
    
    </div>
</div>
      :
    
            <div>
  <hr className="grayHr"/>
          <div className="d-flex align-items-center  tRow">
            <div className="w240">
              <p className="tableFirstRowText">
             {item.Title}         
             </p>
              <p className="miniText2">
             {item.EngTitle}             
              </p>
            </div>
         
           
              <div className="">
                <button onClick={()=>history.push("/SelectPowerSupply/"+item.GroupID)} className="buyAssembleBtn">
                 + {item.Title}
                </button>
              </div>
            
        
          
          </div>
          </div>          


  :
  
  <div>
  <hr className="grayHr"/>
          <div className="d-flex align-items-center  tRow">
            <div className="w240">
              <p className="tableFirstRowText">
             {item.Title}         
             </p>
              {/* <p className="miniText2">
             {item.EngTitle}             
              </p> */}
            </div>
         
           
              <div className="">
                <button onClick={()=>history.push("/SelectPowerSupply/"+item.GroupID)} className="buyAssembleBtn">
                 + {item.Title}
                </button>
              </div>
            
        
          
          </div>
          </div>  
    )
})

}
        
          <div className="d-flex justify-content-end tRow mb-4 pb-4">
            <div className="d-flex mr-4">
            <p className="miniText2">
              قیمت کل :
              </p>
            <p className="productAssembleName">
             {product?.length>0?product[0].SystemCost:0} تومان
              </p>
             
            </div>
            <div>
            <button onClick={()=>AddToCart(product[0]?.SystemID)} className="buyAssembleBtn">
                  خرید کل قطعات
                </button>
            </div>
          </div>
          {/* <p class="boxTitle2 BoldFont pr-4 pl-4">در خصوص ناسازگاری‌ها و مشکلات احتمالی</p>
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
          </div> */}
        </div>
        {/* <div className="whiteBox3 mt-3">
            <p className="boxTitle2 BoldFont">
           توضیحات
                </p>
                <hr className="dottedH"/>
                <p className="productDetail">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div> */}
        {/* <div className="whiteBox3 mt-3">
          <CommentBox/>
          </div> */}
      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default AssembleSecond;
