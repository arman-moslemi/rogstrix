import React from "react";

import "./Styles/blog.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaRegUser,FaRegEye} from 'react-icons/fa';
import Blog3 from "../../../assets/img/Blog3.png";
// if you want to use array


const BlogBox = () => {
  return (
  <div className="blogBox mb-3">
      <div className="blackRow">
          <div>
              <p className="blogBoxTitle">
              معرفی چهار برند برتر لپ تاپ ...
              </p>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center borderRight1">
                <FaRegUser color={'#a0a0a0'}/>
                <p className="userName">
                    حسین رهنما
                </p>
            </div>
            <div className="d-flex align-items-center borderRight1">
                <FaRegEye color={'#a0a0a0'}/>
                <p className="userName">
                   4845
                </p>
            </div>
            <div className="d-flex align-items-center borderRight1">
                
                <p className="userName">
                    15 مرداد 1400
                </p>
            </div>
          </div>
          </div>
          <div className="row mt-4 pdrightleft2">
              <Col md={3}>
                  <img src={Blog3} className="Blogimg"/>
              </Col>
              <Col md={9}>
                  <p className="blogDes">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، ری 
                  </p>
              </Col>
          </div>
          <hr className="grayHr"/>
          <div className="row pdrightleft2">
              <Col md={12} className="ta-left">
                  <Button className="addComment  mb-3">
                      ادامه مطلب
                  </Button>
              </Col>
          </div>
  </div>
  );
};

export default BlogBox;