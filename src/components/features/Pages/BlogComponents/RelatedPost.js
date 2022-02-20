
import "./Styles/blog.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaCaretLeft,FaStar,FaRegStar} from 'react-icons/fa';
import Blog4 from "../../../assets/img/Blog4.png";
// if you want to use array
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";

const RelatedPost = (props) => {
    const [releated,setRel]=useState([])

    const mainSlider=()=>{
        const axios = require("axios");

        axios.post(apiUrl + "SingleBlogRelated ",{BlogTypeID:props.BlogTypeID})
        .then(function (response) {
          if (response.data.result == "true") {

            setRel(response.data.Data)
            console.log(159786)
            console.log(response.data.Data)

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
 <div className="RelatedPostBox mt-4 mb-4">
    <div className="RelatedPost1">
        <p>
            مطالب مرتبط
        </p>
    </div>
    <hr className="whiteDashed"/>
    <div className="RelatedPost2">
        {
            releated.map((item)=>{
                return(

        <div className="d-flex align-items-center mt-3 mb-3">
            <div>
            <img src={apiAsset+item.Pic} className="RelatedPostImg"/>
            </div>
            <div className="ml-4">
                <p className="RelatedTitle">
{item.Title}                </p>
                <p className="RelatedDate">
               {item.Date}              </p>
            </div>
        </div>
                )
            })
        }

    </div>
     </div>
  );
};

export default RelatedPost;