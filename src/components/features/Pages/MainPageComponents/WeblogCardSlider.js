import react from "react";
import "./Styles/weblogSlider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRegUser ,FaRegEye,FaCircle} from 'react-icons/fa';
import blog1 from "../../../assets/img/blog1.png"
import { Container ,Col, Button,Row} from "react-bootstrap";

export const truncate = (str, len) => {
  console.log("truncate", str, str.length, len);
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};
const WeblogSliderCard = () => {
  return (
   
      <div className="weblogSliderCard">
        <div className="row">
            <Col md={4}>
                <img src={blog1}/>
            </Col>
            <Col md={8} className="ta-right">
                <p className="blogCardTitle">
                {truncate("سلامسلامسلامسلامسلامسلامسلامسلامسلام",35)}
                </p>
                <div className="d-flex justify-content-start align-items-center">
                    <div className="blogCardDetail d-flex align-items-center mr10">
                    <FaRegUser color={'#b2b2b2'}/>
                    <p>حسین رهنما</p>
                    </div>
                    <div className="mr10">
                        <FaCircle color={'#b2b2b2'} size={5}/>
                    </div>
                    <div className="blogCardDetail d-flex align-items-center mr10">
                    <FaRegEye color={'#b2b2b2'} />
                    <p>2875</p>
                    </div>
                    <div className="mr10">
                        <FaCircle color={'#b2b2b2'} size={5}/>
                    </div>
                    <div className="blogCardDetail d-flex align-items-center mr10">
                    
                    <p>14 مرداد 1400</p>
                    </div>
                </div>
                <p className="blogDescription">
               {truncate(" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",250)} 
                
               </p>
            </Col>
        </div>

      </div>
   
  );
}; 
export default WeblogSliderCard;
