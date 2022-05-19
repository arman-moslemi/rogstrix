import React from "react";

import "./Styles/blog.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaCaretLeft,FaStar,FaRegStar} from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";

// if you want to use array


const SuggestionBlogs = ({data}) => {
    const history = useHistory();

  return (
 <div className="suggestionBlogBox">
     <p className="SuggestionTitle">
         پیشنهاد ویژه
     </p>
     <ul>
         {
             data.map((item)=>{
                 return(
         <li>
             {/* <Link onClick={()=>history.push("/singleProduct/"+item.ProductID)}> */}
             <Link onClick={()=>history.push("/singleProduct/"+item.EngProductName.replace(" ","_"))}>
                 
{item.ProductName+" "+item.BrandName}             </Link>
         </li>

                 )
             })
         }

     </ul>
     </div>
  );
};

export default SuggestionBlogs;