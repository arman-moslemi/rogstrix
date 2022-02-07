import React from "react";
import redBanner from "../../../assets/img/redBanner.png";
import blackBanner from "../../../assets/img/blackBanner.png";
import "./Styles/specialOffer.css";
import SpecialOfferSlider from "./SpecialOfferSlider";
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";

// if you want to use array


const SpecialOffer = ({data}) => {
  return (
    <div className="MainPageSpecialOffer">
        <div className="row margin25">
                   <Col md={12}>
                   <div className="">
                        <p className="specialOfferTitle">
                            پیشنهادهای ویژه
                        </p>
                    </div>
                    <div className="seeAllDiv">
                        <Button className="seeAll">مشاهده همه</Button>
                    </div>
                   </Col>
               </div>
        <div className="row">
        <Col md={2} className="pdTop15">
            <ul className="specialOfferUl">
            <li>
                    <a href="#">
                        کامپیوتر
                    </a>
                </li>
                <li>
                    <a href="#">
                        لپ تاپ
                    </a>
                </li>
                <li>
                    <a href="#">
                        تبلت
                    </a>
                </li>

                <li>
                    <a href="#">
                       موبایل و گجت
                    </a>
                </li>
                <li>
                    <a href="#">
                        شبکه و سرور
                    </a>
                </li>
                <li>
                    <a href="#">
                       کالای اداری
                    </a>
                </li>
                <li>
                    <a href="#">
                        تصویربرداری
                    </a>
                </li>
                <li>
                    <a href="#">
                        کنسول بازی
                    </a>
                </li>
            </ul>
            </Col>
            <Col md={8}>

                <SpecialOfferSlider/>
            </Col>
            <Col md={2} className="pdTop15">
                <div className="redBanner">
                    <img src={apiAsset+data?.LeftSlider1}/>
                    <p>ایسوس</p>
                </div>
                <div className="blackBanner">
                    <img src={apiAsset+data?.LeftSlider2}/>
                    <p>سامسونگ</p>
                </div>
                </Col>
        </div>
    </div>
  );
};

export default SpecialOffer;