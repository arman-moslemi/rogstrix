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
import { useTranslation } from 'react-i18next';


const CommentBox = ({data,id,type,token}) => {
  const {t,i18n} = useTranslation();

  const [releated,setRel]=useState()
  const [rate,setRate]=useState(5)
  const [open,setOpen]=useState(false)
  const [title,setTitle]=useState("")
  const mainSlider=async()=>{
    const axios = require("axios");
    console.log(token)
    if(token )
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
        {t("نظرات و دیدگاه")}    
                </p>
                <hr className="dottedH" id="borderRed"/>
           <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
          <img className="profileComment" src={UserProfile}/>
             <p className="commenterName">
{t("کاربر" )}            </p>
<CustomizedDialogs Title={title} open={open} setOpen={setOpen}/>

          </div>
          <div className="d-flex align-items-center">
            <p className='commenterName' style={{marginTop:8,marginLeft:10}}>
              {t("امتیاز شما به این محصول")} :
            </p>
            <StartRate  setRate={setRate} />
          </div>
           </div>
           <textarea type="text" onChange={(e)=>setRel(e.target.value)} placeholder={"نظرتان را بنویسید"} className="commentInput"/>
            <div className="row mt-2">
              <Col md={12} className="ta-left pd0">
                <Button onClick={()=>mainSlider()} className="addComment">
                 {t("ارسال نظر")}
                </Button>
              </Col>
            </div>
            {
              data?.map((item)=>{
return(
item.Agree?
<>
  <div className="mt-3" style={{border:'1px dotted #f6303f',padding:25,borderRadius:5}}>
    <div className="d-flex align-items-center">
        <div>
        <img className="profileComment" src={UserProfile}/>
        </div>
        <div>
        <p className="commenterName font12">
{item.NameFamily?.split(',')[0]+" "+item.NameFamily?.split(',')[1]?item.NameFamily?.split(',')[1]:""} </p>
 <div className="d-flex align-items-center">
    <p className="commentDate">
{item.Date}    </p>

    <div className="starRate">
    {
                      [...new Array(5)].map((item2,index)=>{
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
        
        {
          item.AnswerText?
          <div style={{display:'flex',marginTop:20}}>
          <img src={UserProfile} style={{width:50,height:50,marginLeft:10}}/>
          <div style={{display:'flex',flexDirection:'column'}}>
          <p style={{fontFamily:'IRANSans-Medium',marginBottom:5}}>
            {item.Username}
          </p>
          <p style={{fontFamily:'IRANSans-Light',color:'#898989',fontSize:12}}>
{item.DateAnswer}          </p>
          </div>
                     <div style={{backgroundColor:'#fff',height:120,width:'90%',border:'1px dotted #d7d7d7',borderRadius:5,marginRight:'auto',padding:10}}>
                     <p className="commentText">
                     {item.AnswerText}  
</p>
          </div>
                     </div>
                 
          :
          null
        }
            </>
:null


          
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