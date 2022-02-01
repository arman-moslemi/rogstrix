import MainPageHeader from "./layouts/MainPageHeader";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import ImageGallery from 'react-image-gallery';
import { Container ,Col, Button,Row} from "react-bootstrap";
import SimilarSlider from "./SingleProductComponents/SimilarSlider";
import CommentBox from "./SingleProductComponents/CommentBox";
import SingleProductRedBox from "./SingleProductComponents/SingleProductRedBox";
import {FaCaretLeft,FaStar,FaRegStar,FaEye ,FaPlus ,FaMapMarkerAlt,FaClipboardList} from 'react-icons/fa';
const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      }
  ];
const SingleProduct = () => {

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
        <Col md={3}>
        <ImageGallery items={images} showNav={false} showFullscreenButton={false} showPlayButton={false}/>
        </Col>
        <Col md={6}>
        <p className="boxTitle2 BoldFont">
        Razer Gaming Computer Mouse
                </p>
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

                <div className="d-flex align-items-center mb-2">
                <FaCaretLeft/>
                <p className="detailTitle">
                    نوع اتصال :
                </p>
                <p className="detail2Title">
                    بی سیم
                </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                <FaCaretLeft/>
                <p className="detailTitle">
                    نوع :
                </p>
                <p className="detail2Title">
                    آرگونومیک
                </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                <FaCaretLeft/>
                <p className="detailTitle">
                    مناسب برای :
                </p>
                <p className="detail2Title">
                    بازی
                </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                <FaCaretLeft/>
                <p className="detailTitle">
                    رابط :
                </p>
                <p className="detail2Title">
                   بلوتوث
                </p>
                </div>
                <div className="d-flex align-items-center mb-2">
                <FaCaretLeft/>
                <p className="detailTitle">
                    باتری :
                </p>
                <p className="detail2Title">
                    دارد
                </p>
                </div>
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
        <Col md={3}>
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
                            ۵۰،۰۰۰،۰۰۰
                            </p>
                          </div>
                          <div>
                              <div className="redBack ml-2">
                                  <p>10%</p>
                              </div>
                          </div>
                      </div>
                  <p className="specialPrice">
                 ۵۶،۰۰۰،۰۰۰
                  </p>


                  </div>
              </div>
              <div className="d-flex align-items-center mt-5">
                  <div  className="mr-3">
                      <FaEye/>
                  </div>
                  <div>
                  <p className="reviewP" id="colorGray">
                10 نفر در حال مشاهده این محصول هستند                </p>
                  </div>
              </div>
              <Button className="addToCart mt-2">
                  افزودن به سبد خرید
              </Button>
            </div>
        </Col>
        </div>
        </div>
        <div className="row mt-4 mb-3">
          <Col md={3}>
            <SingleProductRedBox/>
          </Col>
          <Col md={9}>
            <div className="whiteBox3">
            <p className="boxTitle2 BoldFont">
            توضیحات درباره Razer Gaming Computer Mouse 
                </p>
                <hr className="dottedH"/>
                <p className="productDetail">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>

            <div className="whiteBox3 mt-3 pd0">
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
         <CommentBox/>
            </div>
          </Col>
        </div>
   
      </Container>
      <RedBox/>
      <Footer />
    </div>
  );
};
export default SingleProduct;
