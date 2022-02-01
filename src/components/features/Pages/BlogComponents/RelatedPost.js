import React from "react";

import "./Styles/blog.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaCaretLeft,FaStar,FaRegStar} from 'react-icons/fa';
import Blog4 from "../../../assets/img/Blog4.png";
// if you want to use array


const RelatedPost = () => {
  return (
 <div className="RelatedPostBox mt-4 mb-4">
    <div className="RelatedPost1">
        <p>
            مطالب مرتبط
        </p>
    </div>
    <hr className="whiteDashed"/>
    <div className="RelatedPost2">
        <div className="d-flex align-items-center mt-3 mb-3">
            <div>
            <img src={Blog4} className="RelatedPostImg"/>
            </div>
            <div className="ml-4">
                <p className="RelatedTitle">
                معرفی چهار برند برتر لپ تاپ های گیمینگ
                </p>
                <p className="RelatedDate">
                20 فروردین 1400                </p>
            </div>
        </div>
        <div className="d-flex align-items-center mt-3 mb-3">
            <div>
            <img src={Blog4} className="RelatedPostImg"/>
            </div>
            <div className="ml-4">
                <p className="RelatedTitle">
                معرفی چهار برند برتر لپ تاپ های گیمینگ
                </p>
                <p className="RelatedDate">
                20 فروردین 1400                </p>
            </div>
        </div>
        <div className="d-flex align-items-center mt-3 mb-3">
            <div>
            <img src={Blog4} className="RelatedPostImg"/>
            </div>
            <div className="ml-4">
                <p className="RelatedTitle">
                معرفی چهار برند برتر لپ تاپ های گیمینگ
                </p>
                <p className="RelatedDate">
                20 فروردین 1400                </p>
            </div>
        </div>
    </div>
     </div>
  );
};

export default RelatedPost;