import react from "react";
import "./Styles/weblogSlider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRegUser ,FaRegEye,FaCircle} from 'react-icons/fa';
import blog1 from "../../../assets/img/blog1.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiAsset } from "../../../../commons/inFormTypes";
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
const WeblogSliderCard = ({data}) => {
  const history = useHistory();
console.log(66)
console.log(data)
  return (

      <div className="weblogSliderCard">
        <div  onClick={()=>history.push("/SingleBlog/"+data.BlogID)} className="row">
            <Col md={4}>
                <img src={apiAsset+data.Pic}/>
            </Col>
            <Col md={8} className="ta-right">
                <p className="blogCardTitle">
                {truncate(data.Title,35)}
                </p>
                <div className="d-flex justify-content-start align-items-center">
                    <div className="blogCardDetail d-flex align-items-center mr10">
                    <FaRegUser color={'#b2b2b2'}/>
                    <p>{data.Username}</p>
                    </div>
                    <div className="mr10">
                        <FaCircle color={'#b2b2b2'} size={5}/>
                    </div>
                    <div className="blogCardDetail d-flex align-items-center mr10">
                    <FaRegEye color={'#b2b2b2'} />
                    <p>{data.TotalVisits}</p>
                    </div>
                    <div className="mr10">
                        <FaCircle color={'#b2b2b2'} size={5}/>
                    </div>
                    <div className="blogCardDetail d-flex align-items-center mr10">

                    <p>{data.Date}</p>
                    </div>
                </div>
                <p className="blogDescription">
               {truncate(data.Title,250)}

               </p>
            </Col>
        </div>

      </div>

  );
};
export default WeblogSliderCard;
