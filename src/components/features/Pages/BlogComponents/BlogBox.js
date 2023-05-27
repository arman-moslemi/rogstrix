import React from "react";

import "./Styles/blog.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaRegUser,FaRegEye} from 'react-icons/fa';
import Blog3 from "../../../assets/img/Blog3.png";
import { Link, useHistory } from "react-router-dom";
import { apiAsset } from "../../../../commons/inFormTypes";
import parse  from 'html-react-parser';

// if you want to use array

export const truncate = (str, len) => {
    if (str?.length > len && str?.length > 0) {
      let new_str = str + " ";
      new_str = str?.substr(0, len);
      new_str = str?.substr(0, new_str?.lastIndexOf(" "));
      new_str = new_str?.length > 0 ? new_str : str?.substr(0, len);
      return new_str + "...";
    }
    return str;
  };
const BlogBox = ({data}) => {
    const history = useHistory();

  return (
  <div className="blogBox mb-3">
      <div className="blackRow">
          <div>
              <p className="blogBoxTitle">
{data.Title}              </p>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center borderRight1">
                <FaRegUser color={'#a0a0a0'}/>
                <p className="userName">
                   {data.Username}
                </p>
            </div>
            <div className="d-flex align-items-center borderRight1">
                <FaRegEye color={'#a0a0a0'}/>
                <p className="userName">
                   {data.TotalVisits}
                </p>
            </div>
            <div className="d-flex align-items-center borderRight1">

                <p className="userName">
{data.Date}                </p>
            </div>
          </div>
          </div>
          <div className="row mt-4 pdrightleft2">
              <Col md={3} xs={12} sm={12}>
                  <img src={apiAsset+data.Pic} className="Blogimg"/>
              </Col>
              <Col md={9} xs={12} sm={12}>
                  <p className="blogDes">
{ 
truncate(
    
//      data.Text?
        parse (data.Text?.substring(0,300))
    //     :
    //     "123"  
    
    ,200)
}....             
         </p>
              </Col>
          </div>
          <hr className="grayHr"/>
          <div className="row pdrightleft2">
              <Col md={12} className="ta-left">
                  <Button onClick={()=>history.push("/SingleBlog/"+data.EngTitle.replace(/%20/g, " "))} className="addComment  mb-3">
                      ادامه مطلب
                  </Button>
              </Col>
          </div>
  </div>
  );
};

export default BlogBox;