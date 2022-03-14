import react from "react";
import "./Styles/completedCard.css"
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaCommentDots , FaLongArrowAltUp} from "react-icons/fa";
import MadeSystem from "../../../assets/img/madeSystem.png";
import userProfile from "../../../assets/img/userProfile.png";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";

export const truncate = (str, len) => {
  // console.log("truncate", str, str.length, len);
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};
const CompletedCards = (props) => {
  const history = useHistory();

  return (

    <div className="completedCard">
       <Link onClick={()=>history.push("/AssembleMain/"+props.data.SystemID)} >
       <div className="imgBox marginBottom15">
       {
  props?.viewOverlay==true?
         <div className="grayOverlay">
           <div className="userProfile">
             <img src={apiAsset+props.data.Pic}/>
           </div>
           <div className="userName">
             <p>{truncate("",20)}</p>
           </div>
         </div>
 :
 null
 }

       <img src={props?.data?.Pic?apiAsset+props?.data?.Pic:MadeSystem} className="madeSystemImg"/>
       </div>
       <p className="completeProductTitle">
       {truncate(props?.data?.SystemName?props?.data?.SystemName:"",100)}
       </p>
      <p className="completeProductDetail">
       {truncate(props?.data?.Description?props?.data?.Description:"",20)}
      </p>
      <hr className="bottomDashed7070"/>
      <div className="row">
        <Col md={5} className="pd0">
        <div className="d-flex align-items-center">
          {/* <div>
            <p className="bottomIcon">
              <FaCommentDots size={18} className="marginLeft10"/>
              5
            </p>
          </div> */}
          {/* <div style={{marginRight:15}}>
            <p className="bottomIcon">
              <FaLongArrowAltUp size={18} className="marginLeft10"/>
             12
            </p>
          </div> */}
          <div>

          </div>
        </div>
        </Col>
        <Col md={7} className="pd0 ta-left">
          <p className="completedPrice">
          {props?.data?.Cost} تومان
          </p>
        </Col>
      </div>
     </Link>
    </div>

  );
};
export default CompletedCards;
