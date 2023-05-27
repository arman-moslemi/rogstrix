import MainPageHeader from "./layouts/MainPageHeader";
import FooterMain from "./layouts/FooterMain";
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import ImageGallery from 'react-image-gallery';
import { Container ,Col, Button,Row} from "react-bootstrap";
import SimilarSlider from "./SingleProductComponents/SimilarSlider";
import CommentBox from "./SingleProductComponents/CommentBox";
import SingleProductRedBox from "./SingleProductComponents/SingleProductRedBox";
import {FaCaretLeft,FaStar,FaRegStar,FaEye ,FaPlus ,FaMapMarkerAlt,FaClipboardList,FaRandom} from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import React,{useState,useEffect,useContext} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { AuthContext } from "../../../context/auth-context";
import Truck from "../../assets/icons/truck";
import Box from "../../assets/icons/box";
import Garantee2 from "../../assets/icons/garantee2";
import parse  from 'html-react-parser';
import { useTranslation } from 'react-i18next';

const SingleProduct = () => {
  const {t,i18n} = useTranslation();

  const params = useParams().id;
  const history = useHistory();
  const [product,setProduct]=useState([])
  const [property,setProperty]=useState([])
  const [propertyNew,setPropertyNew]=useState([])
  const [com,setCom]=useState([])
  const [similar,setSimilar]=useState([])
  const [rate,setRate]=useState(0)
  const [color,setColor]=useState()
  const [maxOrder,setMaxOrder]=useState(0)
  const [list,setList]=useState()
  const [cost,setCost]=useState()
  const [specialCost,setSpecialCost]=useState()
  const [count,setCount]=useState(1)
  const [id,setID]=useState()
  const [warID,setWarID]=useState()
  var Guest=localStorage.getItem("guest")
  const [language,setLanguage]=useState();

  const { isLoggedIn, token } = useContext(AuthContext);
  const goCompare=()=>{
 
  
    localStorage.setItem("compare",localStorage.getItem("compare")+"T"+id) ;
    
      history.push("/CompareSupplyProduct/"+localStorage.getItem("compare"))
    
  }
  const ProductSave=()=>{
    var Guest=localStorage.getItem("guest")

    const axios = require("axios");

    axios
        // .post(apiUrl + "AddCustomerProductSave",{
        .post(apiUrl + "CreateSystemCustomer",{
          ProductID:id,
          CustomerID:isLoggedIn?token:0,
          GuestID:isLoggedIn?0:Guest?Guest:0
        })
    .then(function (response) {
      if (response.data.result == "true") {
alert("با موفقیت ذخیره شد")
        console.log(222)
        console.log(response.data.Data2)
        // response.data.Data2?
if(!Guest || Guest==0){

  localStorage.setItem("guest",response.data.Data2?response.data.Data2:0)
}

        
        history.push("/AssembleSecond")
    }
    else{
      console.log(888)
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
  }
  const AddToCart=()=>{
    const axios = require("axios");
    const storedData = JSON.parse(localStorage.getItem("userData"))?.token
if(warID==""){
  return alert("گارانتی را وارد نماپید")
}
if(count>maxOrder){
 return alert("سفارش شما از سقف بیشتر میباشد")
}

console.log(555)
console.log(id)
console.log(token)
    axios
        .post(apiUrl + "ShoppingBasketAdd",{
          ProductID:id,
          CustomerID:storedData?.toString().length<10 && storedData?storedData:0,
          GuestID:storedData?.toString().length<10 && storedData?0:Guest?Guest:0,
          Cost:parseInt(cost)-parseInt(specialCost),
          ColorID:color,
          Number:count,
          WarrantyID:warID

        })
    .then(function (response) {
      if (response.data.result == "true") {
alert("با موفقیت ذخیره شد")
        console.log(777)
        console.log(response.data.Data)
        if(response.data.Data)
{    
   localStorage.setItem("guest",response.data.Data)
}
    }
    else{
      console.log(888)
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
  }
  const mainSlider=async()=>{
    const axios = require("axios");
    const lang=await localStorage.getItem("lang")
    i18n.changeLanguage(lang)

      axios
          .post(apiUrl + "SingleProductByName",{
            // ProductID:params,
            // ProductName:params.replace('-'," "),
            ProductName:params,
            CustomerID:isLoggedIn?token:""
          },{ headers: {
            lang: i18n.language
          }})
      .then(function (response2) {
        console.log(response2.data)
        if (response2.data.result == "true") {

          setProduct(response2.data.Data)
          setID(response2.data.Data.ProductID)
          console.log(777)
          console.log(response2.data.Data)
          setList(response2.data.CostData)
setCost(response2.data.Data.Cost)
setSpecialCost(response2.data.Data.SpecialCost)
 setWarID(response2.data.Data.WarrantyID)
 setColor(response2.data.Data.ColorID)
 setMaxOrder(response2.data.Data.MaxOrder)

axios
.post(apiUrl + "SinglePropertyNew",{
  ProductID:response2.data.Data.ProductID
},{ headers: {
  lang: i18n.language
}})
.then(function (response) {
if (response.data.result == "true") {

setPropertyNew(response.data.Data)
console.log(45678)
console.log(response.data.Data)

}
else{
console.log(response.data.result)

}})
.catch(function (error) {
console.log(error);
});

axios
.post(apiUrl + "SingleProperty",{
  ProductID:response2.data.Data.ProductID
},{ headers: {
  lang: i18n.language
}})
.then(function (response) {
if (response.data.result == "true") {

setProperty(response.data.Data)
console.log(45678)
console.log(response.data.Data)

}
else{
console.log(response.data.result)

}})
.catch(function (error) {
console.log(error);
});
axios
.post(apiUrl + "SingleProductComment ",{
  ProductID:response2.data.Data.ProductID
})
.then(function (response) {
if (response.data.result == "true") {

setCom(response.data.Data)
console.log(111)
console.log(response.data.Data)

}
else{
console.log(response.data.result)

}})
.catch(function (error) {
console.log(error);
});

axios
.post(apiUrl + "SimilarProduct",{
  ProductID:response2.data.Data.ProductID,
},{ headers: {
  lang: i18n.language
}})
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
.post(apiUrl + "ProductRateShow",{
ProductID:response2.data.Data.ProductID,
})
.then(function (response) {
if (response.data.result == "true") {

setRate(response.data.Data)
console.log(222)
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
      else{
        console.log(888)
        console.log(response2.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });

  }

const images = [
  {
    original: apiAsset+product.Pic1,
    thumbnail: apiAsset+product.Pic1,
  },
  {
    original: apiAsset+product.Pic2,
    thumbnail: apiAsset+product.Pic2,
  },
  {
    original: apiAsset+product.Pic3,
    thumbnail: apiAsset+product.Pic3,
  },
  {
      original: apiAsset+product.Pic4,
      thumbnail: apiAsset+product.Pic4,
    }
];

  useEffect(() => {
    mainSlider();
    document.title = product?.ProductName;
    // document.title = params;
    document.getElementsByTagName("META")[2].content="Product";


// alert(val)
  }, []);
  const [open1, setOpen1] = useState(false);
  const increment = () => {
    setCount(count+1)
    console.log(count)

      }

      const   decrement = () => {
        // this.setState({
        //   count: this.state.count - 1
        // });
        if(count!=0)
        setCount(count-1)
      }
  return (
    <div className="SingleProduct">
      <Header setLanguage={setLanguage}/>
      <Menu/>



      <Container className="EachCategoryContainer" fluid>
        <div className="breadCrumbs">
          <ul>
            <li>
              <a>
                  <FaCaretLeft/>
                  {t("سایت راگ استریکس")}
              </a>
            </li>
            /
            <li>
              <Link onClick={()=>history.push("/EachCategory/"+product.MainGroupID)}>
{product.MainTitle}              </Link>
            </li>
            /
            <li>
              <Link onClick={()=>history.push("/products/"+product.GroupID)}>
{product.GroupName}              </Link>
            </li>
            /
            <li>
              <Link onClick={()=>history.push("/Subproduct/"+product.SubGroupID)}>
{product.SubTitle}              </Link>
            </li>
          </ul>
        </div>
        <div className="singleBox1">
        <div className="row">
        <Col md={3} id="singleOrder1" style={{paddingLeft:0}}>
        <ImageGallery items={images} showNav={false} showFullscreenButton={true} showPlayButton={false}/>
        </Col>
        <Col md={6} id="singleOrder3">
        <div className="d-flex justify-content-between">
        <p className="boxTitle2 BoldFont">
{product.ProductName+" "+product.BrandName}                </p>

<Button onClick={()=>ProductSave()} className="addAseembleBtn" >
                                            +  {t("افزودن به ساخت سیستم")}
                                                </Button>
        </div>
        <p className="reviewP" id="colorGray">
                  {product?.EngProductName}
                    </p>
                <hr className="grayHr"/>
                {/* <p className="boxTitle2 mediumFont">
                    رنگ : مشکی
                </p> */}
                <div className="d-flex" style={{flexWrap:'wrap'}}>
                  {
                    // product?.ColorID?.split(',').map((item)=>{
                    list?.map((item)=>{
                      return(
                        item?
                        <>
                    <div onClick={()=>{setColor(item[0].ColorID);setCost(parseInt(item[0].Cost));setSpecialCost(parseInt(item[0].SpecialCost))}} className="colorBox" style={{backgroundColor:"#"+item[0].ColorHex}} i>
                    </div>
                        <p>{item[0].ColorName}</p>
                    </>
                    :
                    null

                      )
                    })
                  }

                </div>
                <p className="boxTitle2 NormalFont">{t("ویژگی‌های محصول")}</p>
{
  property.map((item,index)=>{
    return(
    index<5?

                <div className="d-flex align-items-center mb-2" style={{flexWrap:'wrap'}}>
                <FaCaretLeft/>
                <p className="detailTitle">
                   {item[0].MainTitle}:
                </p>
                {
                  item.map((item2,index2)=>{
                    return(

                <p className="detail2Title">
{                  index2==item.length-1?
  item2.Title

:
  item2.Title+","
}                  

                </p>
                    )
                  })
                }
                </div>
    :
    null
    )
  })
}
                {/* <div className="d-flex align-items-center mb-2">
                <FaCaretLeft/>
                <p className="detailTitle">
                    نوع :
                </p>
                <p className="detail2Title">
                    آرگونومیک
                </p>
                </div> */}

                <Button className="mavaredBishtar mt-3">

                {t("موارد بیشتر")}
                <FaPlus className="ml-2"/>
                </Button>
                {/* <div className="d-flex align-items-center mt-4">
                  <FaMapMarkerAlt color="#f6303f" size={24} className="mr-2"/>
                  <p className="addressSingle">
                  ارسال به فارس / شیراز / خیابان فلان / کوچه فلان / فلانی
                  </p>
                </div> */}
                {/* <hr className="dottedH"/>
                <div className="d-flex align-items-center">
                  <div  className="mr-3">
                      <FaClipboardList/>
                  </div>
                  <div>
                  <p className="reviewP mb-0" id="colorGray">
                    + 12 فروش
                    </p>
                  </div>
              </div> */}
        </Col>
        <Col md={3} id="singleOrder2">

            <div className="redLightBox" style={{position:'relative'}}>
           
<div>
               
                                               
                                                </div>
               
                {
             

                <Button onClick={()=>goCompare()}  className="save-btn-single left5" id="save-btn">
                                                    <svg className="save-svg" xmlns="http://www.w3.org/2000/svg" width="27.45"
                                                        height="29.652" viewBox="0 0 27.45 29.652">
                                                        <g id="save" transform="translate(0.5 0.489)">
                                                            <path id="Icon_material-label" data-name="Icon material-label"
                                                                d="M26.445,9.087A2.865,2.865,0,0,0,24,7.5H5.6c-1.65,0-1.1,1.7-1.1,3.779V30.171c0,2.078-.554,3.779,1.1,3.779H24a2.865,2.865,0,0,0,2.445-1.587L33,20.725Z"
                                                                transform="translate(33.95 -4.411) rotate(90)" fill="none"
                                                                stroke="#e74868" stroke-width="1" />
                                                           
                                                           <FaRandom color="#ff004e" style={{margin:50}}/>
                                                          
                                                        </g>
                                                    </svg>
                                                </Button>
             
              }
                <p className="boxTitle2">
                {t("مشخصات فروش")}
                </p>
                <div className="d-flex align-items-center justify-content-between">

                  <div className="starRate">

                    {
                      [...new Array(5)].map((item,index)=>{
                        return(
index+1>rate?
<FaRegStar className="mr-1 ml-1 sd4s" color="#111111"/>
                          :
                          <FaStar className="mr-1 ml-1 sd5s" color="#f6303f"/>

                        )
                      })
                    }


                  </div>
                  <div>
                    <p className="reviewP" id="colorGray">
                    {t("امتیاز")}: {rate} {t("از ۵")} ({com.length} {t("نظر")})
                    </p>
                  </div>

              </div>
              <hr className="grayHr"/>
              <div className="d-flex align-items-center">
                  <div  className="mr-3 sd3s">
                      <Garantee2/>
                  </div>
                  <div>
                  <p className="reviewP" id="colorGray">
                  {t("از ضمانت اصل بودن کالا")}
                    </p>
                  </div>
              </div>
              <hr className="grayHr"/>
              <div className="d-flex align-items-center">
                  <div  className="mr-3 sd3s">
                      <Box/>
                  </div>
                  <div>
                  <p className="reviewP" id="colorGray">
                  {/* {t("از این کالا")} {maxOrder} {t("از عدد در انبار موجود است")} */}
                {t("کالا آماده ارسال به سراسر کشور")}
                                </p>
                  </div>
              </div>
              <div className="d-flex align-items-center">
                  <div  className="mr-3 sd3s">
                      <Truck/>
                  </div>
                  <div>
                  <p className="reviewP" id="colorGray">
                  {product.Type==3?
                  t("کپی")
                  :
                  product.Type==2?
                  t("ریفر"):
                  t("اصلی")
                
                }                    </p>
                  </div>
              </div>
              <hr className="grayHr"/>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                <p className="reviewP" id="colorGray">{t("تعداد")} : </p></div>
              <div className="counterDiv d-flex justify-content-center">
              <button onClick={()=>decrement()} className="decBTN">-</button>
              <span style={{marginRight:'0'}}>{count}</span>
              <button onClick={()=>increment()} className="inBTN">+</button>
            </div>
              </div>
              <hr className="grayHr"/>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                <p className="reviewP" id="colorGray">{t("گارانتی")} : </p></div>
              <div className="d-flex justify-content-center">
              <select  onChange={(e)=>{setCost(parseInt(e.target.value.split('T')[0]));setSpecialCost(parseInt(e.target.value.split('T')[1]));setWarID(parseInt(e.target.value.split('T')[2]));setMaxOrder(parseInt(e.target.value.split('T')[3]))}} 
              name="waranty" id="waranty" className="w100 informationSelect" style={{fontSize:12}}>
              {/* <option value="" >{"انتخاب کنید"}</option> */}

 
  {
    list?.map((item)=>{

      return(
      // item[0]?.ColorID==color?
      item.map((item2)=>{
        // console.log(888889999)
        // console.log(item2)
        return(
          <option value={item2.Cost+"T"+item2.SpecialCost+"T"+item2.WarrantyID+"T"+item2.MaxOrder} >{item2.WarrantyName}</option>
        )
        }
      )
      // :
      // null
      )


    })
  }

              </select>
            </div>
              </div>
              <hr className="grayHr"/>
              <div className="d-flex align-items-center  justify-content-between">
                  <div  className="mr-3">
                  <p className="reviewP" id="colorGray">
                  {t("قیمت محصول")}                   </p>

                  </div>
                  {
                    product?.Available?

                  <div>
                      <div className="d-flex">
                          <div>
                            {
                              specialCost!=0?
                              <p className="strokeOutPrice">
                              {cost}
                               </p>
                              :
null
                            }
                        
                          </div>
                          {
                              specialCost!=0?
                          <div>
                              <div className="redBack ml-2">
                                  <p>{(parseInt((parseInt(specialCost)/parseInt(cost))*100)).toLocaleString("en-de")}%</p>
                              </div>
                          </div>
                          :
                          null}
                      </div>
                  <p className="specialPrice">
                  {(parseInt(cost)-parseInt(specialCost)).toLocaleString("en-de")}{t("تومان")}
                  </p>


                  </div>
                    :
                    null
                  }
              </div>
              {/* <div className="d-flex align-items-center mt-5">
                  <div  className="mr-3">
                      <FaEye/>
                  </div>
                  <div>
                  <p className="reviewP" id="colorGray">
                10 نفر در حال مشاهده این محصول هستند                </p>
                  </div>
              </div> */}
              {
product?.Available?
              <Button onClick={()=>AddToCart()} className="addToCart mt-4">
              {t("افزودن به سبد خرید")}
              </Button>

:

<p>ناموجود</p>
              }
            </div>
        </Col>
        </div>
        </div>
        <div className="row mt-4 mb-3">
          <Col md={3} id="singleOrder1">
            <SingleProductRedBox data={propertyNew}/>
          </Col>
          <Col md={9} id="singleOrder2">
            <div className="whiteBox3">
            <p className="boxTitle2 BoldFont">
            {t("توضیحات درباره")} {product.ProductName+" "+product.BrandName}
                </p>
                <hr className="dottedH"/>
                <p className="productDetail">
                {   product.Description?
                          parse (product.Description)
                          :
                          null}
{/* {product.Description}          */}
       </p>
            </div>


          </Col>
        </div>
        <div className="whiteBox3 mt-3 pd30">
            {/* <div className="row margin25 ">
                   <Col md={12}>
                   <div className="">
                        <p className="specialOfferTitle colorBlack">
                        {t("محصولات مشابه")}
                        
                        </p>
                    </div>
                    <div className="seeAllDiv" style={{paddingLeft:50}}>
                        <Button className="seeAll">{t("مشاهده همه")}</Button>
                    </div>
                   </Col>
               </div> */}
              <SimilarSlider data={similar}/>
            </div>
            <div className="whiteBox3 mt-3">
         <CommentBox token={token} data={com} id={id} type={"product"}/>
            </div>

      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default SingleProduct;
