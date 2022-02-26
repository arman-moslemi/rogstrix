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
const SingleProduct = () => {
  const params = useParams().id;
  const history = useHistory();
  const [product,setProduct]=useState([])
  const [property,setProperty]=useState([])
  const [com,setCom]=useState([])
  const [similar,setSimilar]=useState([])
  const [rate,setRate]=useState(0)
  const [color,setColor]=useState()
  const { isLoggedIn, token } = useContext(AuthContext);
  const ProductSave=()=>{
    const axios = require("axios");

    axios
        .post(apiUrl + "AddCustomerProductSave",{
          ProductID:params,
          CustomerID:token
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
  const AddToCart=()=>{
    const axios = require("axios");
console.log(555)
console.log(token)
    axios
        .post(apiUrl + "ShoppingBasketAdd",{
          ProductID:params,
          CustomerID:token,
          Cost:parseInt(product.Cost)-parseInt(product.SpecialCost),
          ColorID:color,
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
  const mainSlider=()=>{
    const axios = require("axios");

      axios
          .post(apiUrl + "SingleProduct",{
            ProductID:params,
            CustomerID:isLoggedIn?token:""
          })
      .then(function (response) {
        if (response.data.result == "true") {

          setProduct(response.data.Data)
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

      axios
          .post(apiUrl + "SimilarProduct",{
            ProductID:params,
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
      .post(apiUrl + "ProductRateShow",{
        ProductID:params,
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
  const [count,setCount]=useState(1)
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
              <Link onClick={()=>history.push("/EachCategory/"+product.MainGroupID)}>
{product.MainTitle}              </Link>
            </li>
            /
            <li>
              <Link onClick={()=>history.push("/products/"+product.GroupID)}>
{product.Title}              </Link>
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
                {/* <p className="boxTitle2 mediumFont">
                    رنگ : مشکی
                </p> */}
                <div className="d-flex">
                  {
                    product?.ColorID?.split(',').map((item)=>{
                      return(
                    <div onClick={()=>setColor(item)} className="colorBox" style={{backgroundColor:"#"+item}} i>
                    </div>

                      )
                    })
                  }

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
              {
                isLoggedIn?

                <Button onClick={()=>ProductSave()} className="save-btn-single" id="save-btn">
                                                    <svg className="save-svg" xmlns="http://www.w3.org/2000/svg" width="27.45"
                                                        height="29.652" viewBox="0 0 27.45 29.652">
                                                        <g id="save" transform="translate(0.5 0.489)">
                                                            <path id="Icon_material-label" data-name="Icon material-label"
                                                                d="M26.445,9.087A2.865,2.865,0,0,0,24,7.5H5.6c-1.65,0-1.1,1.7-1.1,3.779V30.171c0,2.078-.554,3.779,1.1,3.779H24a2.865,2.865,0,0,0,2.445-1.587L33,20.725Z"
                                                                transform="translate(33.95 -4.411) rotate(90)" fill="none"
                                                                stroke="#e74868" stroke-width="1" />
                                                            <path className="Icon_awesome-plus" id="Icon_awesome-plus"
                                                                data-name="Icon awesome-plus"
                                                                d="M14.585,8.421H9.536V3.372A1.122,1.122,0,0,0,8.414,2.25H7.293A1.122,1.122,0,0,0,6.171,3.372V8.421H1.122A1.122,1.122,0,0,0,0,9.543v1.122a1.122,1.122,0,0,0,1.122,1.122H6.171v5.049a1.122,1.122,0,0,0,1.122,1.122H8.414a1.122,1.122,0,0,0,1.122-1.122V11.786h5.049a1.122,1.122,0,0,0,1.122-1.122V9.543A1.122,1.122,0,0,0,14.585,8.421Z"
                                                                transform="translate(23.501 3.545) rotate(90)"
                                                                fill="#e74868" />
                                                        </g>
                                                    </svg>
                                                </Button>
                :
                null
              }
                {
                isLoggedIn?

                <Button  className="save-btn-single left5" id="save-btn">
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
                :
                null
              }
                <p className="boxTitle2">
                    مشخصات فروش
                </p>
                <div className="d-flex align-items-center justify-content-between">

                  <div className="starRate">

                    {
                      [...new Array(5)].map((item,index)=>{
                        return(
index+1>rate?
<FaRegStar className="mr-1 ml-1" color="#111111"/>
                          :
                          <FaStar className="mr-1 ml-1" color="#f6303f"/>

                        )
                      })
                    }


                  </div>
                  <div>
                    <p className="reviewP" id="colorGray">
                    امتیاز: {rate} از ۵ ({com.length} نظر)
                    </p>
                  </div>

              </div>
              <hr className="grayHr"/>
              <div className="d-flex align-items-center">
                  <div  className="mr-3">
                      <Garantee2/>
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
                      <Box/>
                  </div>
                  <div>
                  <p className="reviewP" id="colorGray">
                  از این کالا {product.Number} عدد در انبار موجود است
                                </p>
                  </div>
              </div>
              <div className="d-flex align-items-center">
                  <div  className="mr-3">
                      <Truck/>
                  </div>
                  <div>
                  <p className="reviewP" id="colorGray">
                  ارسال تا ۳ روز دیگر                    </p>
                  </div>
              </div>
              <hr className="grayHr"/>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                <p className="reviewP" id="colorGray">تعداد : </p></div>
              <div className="counterDiv d-flex justify-content-center">
              <button onClick={()=>decrement()} className="decBTN">-</button>
              <span style={{marginRight:'0'}}>{count}</span>
              <button onClick={()=>increment()} className="inBTN">+</button>
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
                  {parseInt(product.Cost)-parseInt(product.SpecialCost)}تومان
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
              <Button onClick={()=>AddToCart()} className="addToCart mt-4">
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
              <SimilarSlider data={similar}/>
            </div>
            <div className="whiteBox3 mt-3">
         <CommentBox token={token} data={com} id={params} type={"product"}/>
            </div>

      </Container>
      <RedBox/>
      <FooterMain />
    </div>
  );
};
export default SingleProduct;
