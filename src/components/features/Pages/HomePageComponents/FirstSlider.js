import React from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Styles/firstSlider.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import Case from "../../../assets/img/case.png";
import Plus1 from "../../../assets/img/plus1.png";
import Plus2 from "../../../assets/img/plus2.png";
import sliderManitor from "../../../assets/img/sliderManitor.png";
import sliderCase from "../../../assets/img/sliderCase.png";
import sliderMouse from "../../../assets/img/sliderMouse.png";
SwiperCore.use([Navigation]);
// if you want to use array


const FirstSlider = ({data}) => {
  return (
    <div>
      <Swiper

        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}


        className="firstSlider"
      >
       <SwiperSlide>
        <div className="row sliderRow">

        <Col md={6} className="firstCol">
          <p className="sliderTitle">راگ استریکس</p>
          <p className="sliderSlogan">
          Republic of Gaming
          </p>
          <p className="sliderDescription">
          بزرگترین مرجع تخصصی محصولات گیمینگ شرکت ایسوس با جدیدترین  محصولات تخصصی گیمینگ ویژه گیمرهای حرفه‌ای و آماتور. سیستم‌های مناسب رندرینگ و کارهای سنگین گرافیکی
          </p>
          <Button className="sliderBtn">
            پر طرفدارها
          </Button>
          <div className="blackBoxRow">

              <div className="blackBox">
                <img src={sliderMouse}/>
              </div>


            <div className="blackBox">
                <img src={sliderCase}/>
              </div>


            <div className="blackBox">
                <img src={sliderMouse}/>
              </div>

          </div>
        </Col>
        <Col md={6} className="secondCol">
          <img src={Plus1} className="plus1Img"/>
          <img src={Plus2} className="plus2Img"/>
          <img src={Case} className="sliderImg"/>
        </Col>
        </div>

       </SwiperSlide>
       <SwiperSlide>
        <div className="row sliderRow">

        <Col md={6} className="firstCol">
          <p className="sliderTitle">راگ استریکس</p>
          <p className="sliderSlogan">
          Republic of Gaming
          </p>
          <p className="sliderDescription">
          بزرگترین مرجع تخصصی محصولات گیمینگ شرکت ایسوس با جدیدترین  محصولات تخصصی گیمینگ ویژه گیمرهای حرفه‌ای و آماتور. سیستم‌های مناسب رندرینگ و کارهای سنگین گرافیکی
          </p>
          <Button className="sliderBtn">
            پر طرفدارها
          </Button>
          <div className="blackBoxRow">

              <div className="blackBox">
                <img src={sliderMouse}/>
              </div>


            <div className="blackBox">
                <img src={sliderCase}/>
              </div>


            <div className="blackBox">
                <img src={sliderMouse}/>
              </div>

          </div>
        </Col>
        <Col md={6} className="secondCol">
          <img src={Plus1} className="plus1Img"/>
          <img src={Plus2} className="plus2Img"/>
          <img src={Case} className="sliderImg"/>
        </Col>
        </div>

       </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FirstSlider;