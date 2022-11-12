import React from "react";

import "./Styles/singleProduct.css";
import { Container ,Col, Button,Row} from "react-bootstrap";

// if you want to use array


const SingleProductRedBox = ({data}) => {
  return (
    <div className="SingleProductRedBox">
                {
data?.map((item)=>{
  return(
    <>
     <div className="redBoxTitle">
       <p>
{item[0][0].ParentTitle}       </p>
     </div>
     <hr className="whiteDotted"/>
     <div className="redBox2">

    

                  {
                  item.map((item2)=>{
                    return(
              <div className="mt-4">
                  <p className="firstLine">
                  {item2[0].MainTitle}:
                  </p>
                  {
                    item2.map((item3,index2)=>{
                      return(

                  <p className="secondLine">
{                  index2==item2.length-1?
 item3.Title

:
   item3.Title+","
 }   
                  </p>
                      )
                    })
                  }
              </div>
                  )})}



     </div>
     </>
  )
})
              }
         

    </div>
  );
};

export default SingleProductRedBox;