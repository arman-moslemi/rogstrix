import React from "react";

import "./Styles/blog.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaCaretLeft,FaStar,FaRegStar} from 'react-icons/fa';

// if you want to use array


const SuggestionBlogs = () => {
  return (
 <div className="suggestionBlogBox">
     <p className="SuggestionTitle">
         پیشنهاد ویژه
     </p>
     <ul>
         <li>
             <a href="#">
             گوشی موبایل اپل آیفون SE نسل دوم
             </a>
         </li>
         <li>
             <a href="#">
             لپ تاپ لنوو 15 اینچی مدل V15 پرد
             </a>
         </li>
         <li>
             <a href="#">
             مادربرد ورک استیشن ایسوس مدل
             </a>
         </li>
         <li>
             <a href="#">
             گوشی موبایل اپل آیفون SE نسل دوم
             </a>
         </li>
         <li>
             <a href="#">
             لپ تاپ لنوو 15 اینچی مدل V15 پرد
             </a>
         </li>
         <li>
             <a href="#">
             مادربرد ورک استیشن ایسوس مدل
             </a>
         </li>
         <li>
             <a href="#">
             هارد لپ تاپ وسترن دیجیتال مدل 
             </a>
         </li>
         <li>
             <a href="#">
             رم کامپیوتر کینگستون DDR2 با 
             </a>
         </li>
         <li>
             <a href="#">
             گوشی موبایل اپل آیفون SE نسل دوم 
             </a>
         </li>
     </ul>
     </div>
  );
};

export default SuggestionBlogs;