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
{item[0].ParentTitle}       </p>
     </div>
     <hr className="whiteDotted"/>
     <div className="redBox2">

    

              <div className="mt-4">
                  <p className="firstLine">
                  {item[0].MainTitle}:
                  </p>
                  {
                  item.map((item2,index2)=>{
                    return(
                  <p className="secondLine">
{                  index2==item.length-1?
  item2.Title

:
  item2.Title+","
}   
                  </p>
                  )})}
              </div>



     </div>
     </>
  )
})
              }
         

    </div>
  );
};

export default SingleProductRedBox;