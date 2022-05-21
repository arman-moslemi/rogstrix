import react from "react";

import { Container ,Col, Button,Row} from "react-bootstrap";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import parse  from 'html-react-parser';

const AboutUs = () => {
  const [data,setData]=useState([])
  const params = useParams().id;

  const mainSlider=async()=>{
    const axios = require("axios");

axios.get(apiUrl + "Information")
    .then(function (response) {
      if (response.data.result == "true") {

        setData(response.data.Data[params])
        console.log(11)
        console.log(response.data.Data)
        console.log(response.data.Data[params])

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
 


  }
  useEffect(() => {
    mainSlider();
// alert(val)
  }, []);
  return (
   
  
       <Container className="about pad-right-6 pad-left-6" >
           {/* <p className="aboutHeader">
               درباره ما
           </p> */}
        <p className="aboutText">
        {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. */}
        {   data.length!=0?
                          parse (data)
                          :
                          null}
       
        </p>
      
       </Container>
     
   
  );
}; 
export default AboutUs;
