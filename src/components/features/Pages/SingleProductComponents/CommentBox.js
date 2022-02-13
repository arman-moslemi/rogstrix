import React from "react";
import UserProfile from "../../../assets/img/img5.png"

import "./Styles/singleProduct.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaCaretLeft,FaStar,FaRegStar} from 'react-icons/fa';

// if you want to use array


const CommentBox = ({data}) => {
  return (
    <>
       <p className="boxTitle2 BoldFont" id="colorRed">
            نظرات و دیدگاه
                </p>
                <hr className="dottedH" id="borderRed"/>
           <div className="d-flex align-items-center">
           <img className="profileComment" src={UserProfile}/>
             <p className="commenterName">
               حسین رهنما
             </p>
           </div>
           <textarea type="text" placeholder={"نظرتان را بنویسید"} className="commentInput"/>
            <div className="row mt-2">
              <Col md={12} className="ta-left pd0">
                <Button className="addComment">
                 ارسال نظر
                </Button>
              </Col>
            </div>
            {
              data.map((item)=>{
return(

<div className="mt-3">
    <div className="d-flex align-items-center">
        <div>
        <img className="profileComment" src={UserProfile}/>
        </div>
        <div>
        <p className="commenterName font12">
{item.NameFamily} </p>
 <div className="d-flex align-items-center">
    <p className="commentDate">
{item.Date}    </p>

    <div className="starRate">
      <FaRegStar className="mr-1 ml-1" color="#111111" size={10}/>
        <FaRegStar className="mr-1 ml-1" color="#111111" size={10}/>
        <FaStar className="mr-1 ml-1" color="#f6303f" size={10}/>
        <FaStar className="mr-1 ml-1" color="#f6303f" size={10}/>
        <FaStar className="mr-1 ml-1" color="#f6303f" size={10}/>

      </div>
 </div>

            </div>
    </div>
    <div className="mt-3">
     <p className="commentText">
{
  item.Text
}     </p>
 </div>


</div>
)
              })
            }
<hr className="dottedH" id="borderRed"/>
            {/* <div className="mt-3">
                <div className="d-flex align-items-center">
                    <div>
                    <img className="profileComment" src={UserProfile}/>
                    </div>
                    <div>
                    <p className="commenterName font12">
               حسین رهنما
             </p>
             <div className="d-flex align-items-center">
                <p className="commentDate">
                    18 فروردین
                </p>

                <div className="starRate">
                  <FaRegStar className="mr-1 ml-1" color="#111111" size={10}/>
                    <FaRegStar className="mr-1 ml-1" color="#111111" size={10}/>
                    <FaStar className="mr-1 ml-1" color="#f6303f" size={10}/>
                    <FaStar className="mr-1 ml-1" color="#f6303f" size={10}/>
                    <FaStar className="mr-1 ml-1" color="#f6303f" size={10}/>

                  </div>
             </div>

                        </div>
                </div>
                <div className="mt-3">
                 <p className="commentText">
                 (متن دیدگاه کاربر) سلام درسته قیمت محصول پایین هستش ولی چقدر خوبه باتماس گرفتن مشتری رواگاه کنید ازکیفیت محصول چون عکس چیزی نشون نمیده ممنون
                 </p>
             </div>


            </div>
            <hr className="dottedH" id="borderRed"/>
           */}
    </>
  );
};

export default CommentBox;