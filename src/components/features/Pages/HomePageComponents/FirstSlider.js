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
import { apiAsset } from "../../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

SwiperCore.use([Navigation]);
// if you want to use array


const FirstSlider = ({data}) => {
  const history = useHistory();
  const {t,i18n} = useTranslation();

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
          <p className="sliderTitle">{t("راگ استریکس")}</p>
          <p className="sliderSlogan">
          {t("جمهوری گیمرها")}
          </p>
          <p className="sliderDescription">
          {t("بزرگترین مرجع تخصصی محصولات گیمینگ شرکت ایسوس با جدیدترین  محصولات تخصصی گیمینگ ویژه گیمرهای حرفه‌ای و آماتور.")}
          </p>
          <Button onClick={()=>history.push("EachCategory/1")} className="sliderBtn">
          {t("پر طرفدارها")}
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
          <img src={apiAsset+data.MainRogSlider1} className="sliderImg"/>
        </Col>
        </div>

       </SwiperSlide>
       <SwiperSlide>
        <div className="row sliderRow">

        <Col md={6} className="firstCol">
          <p className="sliderTitle">{t("راگ استریکس")}</p>
          <p className="sliderSlogan">
          {t("جمهوری گیمرها")}
          </p>
          <p className="sliderDescription">
          {t("بزرگترین مرجع تخصصی محصولات گیمینگ شرکت ایسوس با جدیدترین  محصولات تخصصی گیمینگ ویژه گیمرهای حرفه‌ای و آماتور.")}
          </p>
          <Button onClick={()=>history.push("EachCategory/1")} className="sliderBtn">
          {t("پر طرفدارها")}
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
          <img src={apiAsset+data.RogSlider1} className="sliderImg"/>
        </Col>
        </div>

       </SwiperSlide>
       <SwiperSlide>
        <div className="row sliderRow">

        <Col md={6} className="firstCol">
          <p className="sliderTitle">{t("راگ استریکس")}</p>
          <p className="sliderSlogan">
          {t("جمهوری گیمرها")}
          </p>
          <p className="sliderDescription">
          {t("بزرگترین مرجع تخصصی محصولات گیمینگ شرکت ایسوس با جدیدترین  محصولات تخصصی گیمینگ ویژه گیمرهای حرفه‌ای و آماتور.")}
          </p>
          <Button onClick={()=>history.push("EachCategory/1")} className="sliderBtn">
          {t("پر طرفدارها")}
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
          <img src={apiAsset+data.RogSlider2} className="sliderImg"/>
        </Col>
        </div>

       </SwiperSlide>
       <SwiperSlide>
        <div className="row sliderRow">

        <Col md={6} className="firstCol">
          <p className="sliderTitle">{t("راگ استریکس")}</p>
          <p className="sliderSlogan">
          {t("جمهوری گیمرها")}
          </p>
          <p className="sliderDescription">
          {t("بزرگترین مرجع تخصصی محصولات گیمینگ شرکت ایسوس با جدیدترین  محصولات تخصصی گیمینگ ویژه گیمرهای حرفه‌ای و آماتور.")}

          </p>
          <Button onClick={()=>history.push("EachCategory/1")} className="sliderBtn">
          {t("پر طرفدارها")}
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
          <img src={apiAsset+data.RogSlider3} className="sliderImg"/>
        </Col>
        </div>

       </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FirstSlider;