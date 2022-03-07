import React,{useState,useEffect} from 'react'
import UserProfile from "../../../assets/img/img5.png"

import "./Styles/singleProduct.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaCaretLeft,FaStar,FaRegStar} from 'react-icons/fa';
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import CustomizedDialogs from '../layouts/AlertModal';
import StartRate from './StarRate';
// if you want to use array


const CommentBox = ({data,id,type,token}) => {
  const [releated,setRel]=useState()
  const [rate,setRate]=useState(5)
  const [open,setOpen]=useState(false)
  const [title,setTitle]=useState("")
  const mainSlider=()=>{
    const axios = require("axios");
    console.log(token)
    if(token)
{type=="product"?
axios.post(apiUrl + "InsertProductComment",{ProductID:id,CustomerID:token,Title:"",Text:releated,Rate:rate})
.then(function (response) {
  if (response.data.result == "true") {

    console.log(159786)
    console.log(response.data.Data)
setTitle("پیام با موفقیت اضافه شد")
setOpen(true)
}
else{
  console.log(response.data.result)

}})
.catch(function (error) {
  console.log(error);
})
:type="system"?
axios.post(apiUrl + "InsertSystemComment",{SystemID:id,CustomerID:token,Title:"",Text:releated,Rate:rate})
.then(function (response) {
  if (response.data.result == "true") {

    console.log(159786)
    console.log(response.data.Data)
setTitle("پیام با موفقیت اضافه شد")
setOpen(true)
}
else{
  console.log(response.data.result)

}})
.catch(function (error) {
  console.log(error);
})
:
      axios.post(apiUrl + "InsertBlogComment",{BlogID:id,CustomerID:token,Title:"",Text:releated,Rate:rate})
      .then(function (response) {
        if (response.data.result == "true") {

          console.log(159786)
          console.log(response.data.Data)
setTitle("پیام با موفقیت اضافه شد")
setOpen(true)
      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });}
      else{
        setTitle("ابتدا وارد شوید")
setOpen(true)
      }
  }
  return (
    <>
       <p className="boxTitle2 BoldFont" id="colorRed">
            نظرات و دیدگاه
                </p>
                <hr className="dottedH" id="borderRed"/>
           <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
          <img className="profileComment" src={UserProfile}/>
             <p className="commenterName">
کاربر             </p>
<CustomizedDialogs Title={title} open={open} setOpen={setOpen}/>

          </div>
          <div className="d-flex align-items-center">
            <p className='commenterName' style={{marginTop:8,marginLeft:10}}>
              امتیاز شما به این محصول :
            </p>
            <StartRate  setRate={setRate} />
          </div>
           </div>
           <textarea type="text" onChange={(e)=>setRel(e.target.value)} placeholder={"نظرتان را بنویسید"} className="commentInput"/>
            <div className="row mt-2">
              <Col md={12} className="ta-left pd0">
                <Button onClick={()=>mainSlider()} className="addComment">
                 ارسال نظر
                </Button>
              </Col>
            </div>
            {
              data?.map((item)=>{
return(

<div className="mt-3">
    <div className="d-flex align-items-center">
        <div>
        <img className="profileComment" src={UserProfile}/>
        </div>
        <div>
        <p className="commenterName font12">
{item.NameFamily.split(',')[0]+" "+item.NameFamily.split(',')[1]} </p>
 <div className="d-flex align-items-center">
    <p className="commentDate">
{item.Date}    </p>

    <div className="starRate">
    {
                      [...new Array(5)].map((item2,index)=>{
                        console.log(index)
                        return(
index+1>item.Rate?
<FaRegStar className="mr-1 ml-1" color="#111111"/>
                          :
                          <FaStar className="mr-1 ml-1" color="#f6303f"/>

                        )
                      })
                    }
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