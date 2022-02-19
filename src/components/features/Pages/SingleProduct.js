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
import {FaCaretLeft,FaStar,FaRegStar,FaEye ,FaPlus ,FaMapMarkerAlt,FaClipboardList} from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";

const SingleProduct = () => {
  const params = useParams().id;
  const history = useHistory();
  const [product,setProduct]=useState([])
  const [property,setProperty]=useState([])
  const [com,setCom]=useState([])
  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "SingleProduct",{
            ProductID:params
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setProduct(response.data.Data)
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
            ProductID:params
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setProperty(response.data.Data)
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
            ProductID:params
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

const images = [
  {
    original: product.Pic1,
    thumbnail: product.Pic1,
  },
  {
    original: product.Pic2,
    thumbnail: product.Pic2,
  },
  {
    original: product.Pic3,
    thumbnail: product.Pic3,
  },
  {
      original: product.Pic4,
      thumbnail: product.Pic4,
    }
];

  useEffect(() => {
    mainSlider();
// alert(val)
  }, []);
  return (
    <div className="SingleProduct">
        <Header/>
      <Menu/>



      <Container className="EachCategoryContainer" fluid>
        <div className="breadCrumbs">
          <ul>
            <li>
              <a>
                  <FaCaretLeft/>
                سایت راگ استریکس
              </a>
            </li>
            /
            <li>
              <a>
                سی پی یو
              </a>
            </li>
            /
            <li>
              <a>
              AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor
              </a>
            </li>
          </ul>
        </div>
        <div className="singleBox1">
        <div className="row">
        <Col md={3} id="singleOrder1">
        <ImageGallery items={images} showNav={false} showFullscreenButton={false} showPlayButton={false}/>
        </Col>
        <Col md={6} id="singleOrder3">
        <p className="boxTitle2 BoldFont">
{product.ProductName+" "+product.BrandName}                </p>
                <hr className="grayHr"/>
                <p className="boxTitle2 mediumFont">
                    رنگ : مشکی
                </p>
                <div className="d-flex">
                    <div className="colorBox" id="color6">
                    </div>
                    <div className="colorBox" id="color2">
                    </div>
                    <div className="colorBox" id="color3">
                    </div>
                    <div className="colorBox" id="color4">
                    </div>
                    <div className="colorBox" id="color5">
                    </div>
                </div>
                <p className="boxTitle2 NormalFont">ویژگی‌های محصول</p>
{
  property.map((item)=>{
    return(

                <div className="d-flex align-items-center mb-2">
                <FaCaretLeft/>
                <p className="detailTitle">
                   {item.MainTitle}:
                </p>
                <p className="detail2Title">
                    {item.Title}
                </p>
                </div>
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

                موارد بیشتر
                <FaPlus className="ml-2"/>
                </Button>
                <div className="d-flex align-items-center mt-4">
                  <FaMapMarkerAlt color="#f6303f" size={24} className="mr-2"/>
                  <p className="addressSingle">
                  ارسال به فارس / شیراز / خیابان فلان / کوچه فلان / فلانی
                  </p>
                </div>
                <hr className="dottedH"/>
                <div className="d-flex align-items-center">
                  <div  className="mr-3">
                      <FaClipboardList/>
                  </div>
                  <div>
                  <p className="reviewP mb-0" id="colorGray">
                    + 12 فروش
                    </p>
                  </div>
              </div>
        </Col>
        <Col md={3} id="singleOrder2">
            <div className="redLightBox">
                <p className="boxTitle2">
                    مشخصات فروش
                </p>
                <div className="d-flex align-items-center justify-content-between">

                  <div className="starRate">
                  <FaRegStar className="mr-1 ml-1" color="#111111"/>
                    <FaRegStar className="mr-1 ml-1" color="#111111"/>
                    <FaStar className="mr-1 ml-1" color="#f6303f"/>
                    <FaStar className="mr-1 ml-1" color="#f6303f"/>
                    <FaStar className="mr-1 ml-1" color="#f6303f"/>

                  </div>
                  <div>
                    <p className="reviewP" id="colorGray">
                    امتیاز: ۴ از ۵ (۲۴ نظر)
                    </p>
                  </div>

              </div>
              <hr className="grayHr"/>
              <div className="d-flex align-items-center">
                  <div  className="mr-3">
                      <FaStar/>
                  </div>
                  <div>
                  <p className="reviewP" id="colorGray">
                    ضمانت اصل بودن کالا
                    </p>
                  </div>
              </div>
              <hr className="grayHr"/>
              <div className="d-flex align-items-center">
                  <div  className="mr-3">
                      <FaStar/>
                  </div>
                  <div>
                  <p className="reviewP" id="colorGray">
                  از این کالا ۴ عدد در انبار موجود است
                                </p>
                  </div>
              </div>
              <div className="d-flex align-items-center">
                  <div  className="mr-3">
                      <FaStar/>
                  </div>
                  <div>
                  <p className="reviewP" id="colorGray">
                  ارسال تا ۳ روز دیگر                    </p>
                  </div>
              </div>
              <hr className="grayHr"/>
              <div className="d-flex align-items-center  justify-content-between">
                  <div  className="mr-3">
                  <p className="reviewP" id="colorGray">
                  قیمت محصول                   </p>

                  </div>
                  <div>
                      <div className="d-flex">
                          <div>
                          <p className="strokeOutPrice">
                           {product.Cost}
                            </p>
                          </div>
                          <div>
                              <div className="redBack ml-2">
                                  <p>{(parseInt(product.SpecialCost)/parseInt(product.Cost))*100}%</p>
                              </div>
                          </div>
                      </div>
                  <p className="specialPrice">
                  {parseInt(product.Cost)-parseInt(product.SpecialCost)}
                  </p>


                  </div>
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
              <Button className="addToCart mt-2">
                  افزودن به سبد خرید
              </Button>
            </div>
        </Col>
        </div>
        </div>
        <div className="row mt-4 mb-3">
          <Col md={3} id="singleOrder1">
            <SingleProductRedBox data={property}/>
          </Col>
          <Col md={9} id="singleOrder2">
            <div className="whiteBox3">
            <p className="boxTitle2 BoldFont">
            توضیحات درباره {product.ProductName+" "+product.BrandName}
                </p>
                <hr className="dottedH"/>
                <p className="productDetail">
{product.Description}                </p>
            </div>

         
          </Col>
        </div>
        <div className="whiteBox3 mt-3 pd30">
            <div className="row margin25 ">
                   <Col md={12}>
                   <div className="">
                        <p className="specialOfferTitle colorBlack">
                           محصولات مشابه
                        </p>
                    </div>
                    <div className="seeAllDiv" style={{paddingLeft:50}}>
                        <Button className="seeAll">مشاهده همه</Button>
                    </div>
                   </Col>
               </div>
              <SimilarSlider/>
            </div>
            <div className="whiteBox3 mt-3">
         <CommentBox data={com}/>
            </div>

      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default SingleProduct;
