import React from "react";

import "./Styles/blog.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaRegUser,FaRegEye,FaRegCopy} from 'react-icons/fa';
import Blog4 from "../../../assets/img/Blog4.png";
// if you want to use array
import parse  from 'html-react-parser';



const ShowBlog = ({data}) => {
    console.log(99)
    console.log(data)
  return (
    
    <div className="blogBox mb-3 mt-4">
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
              {data.Date}              </p>
          </div>
        </div>
        </div>
        <div className="row mt-4 pdrightleft2">
         <Col md={12}>
             <p className="blogDes">
          {   data.Text?
                          parse (data.Text)
                          :
                          null}
             {/* {data?.Text}              */}
             
                  </p>


            <div className="ta-left d-flex justify-content-end mb-3">
                <div className="grayBox d-flex align-items-center">
                <Button className="addToClipboard" onClick={() =>      {
                    // navigator.clipboard.writeText(' http://rogstrix.com/singleBlog/'+data?.EngTitle?.replace(/%20/g, " "))
                    navigator.clipboard
                    .writeText( ' http://rogstrix.com/singleBlog/'+data?.EngTitle?.replace(/%20/g, " "))
                    .then(() => {
                      alert("successfully copied");
                    })
                    .catch(() => {
                      alert("something went wrong");
                    });
                    // ;alert('copied!')
                }}
                    >
                <FaRegCopy className="colorGray"/>
                </Button>
                    <p className="urlCopy">
                    http://rogstrix.com/singleBlog/{data?.EngTitle?.replace(/%20/g, " ")}
                    </p>

                </div>

            </div>


         </Col>
        </div>

</div>
  );
};

export default ShowBlog;