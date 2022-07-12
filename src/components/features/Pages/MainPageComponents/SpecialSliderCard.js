import react,{useEffect,useState} from "react";
import "./Styles/specialOfferSlider.css"
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import { apiAsset } from "../../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";

export const truncate = (str, len) => {
  if (str.length > len && str.length > 0) { 
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};
const SpecialSliderCard = ({data}) => {
    const history = useHistory();
    const [time, setTime] = useState(() => new Date().getTime());
    const [main, setMainTime] = useState(data.DistanceTime);
    const [ minutes, setMinutes ] = useState(data.DistanceTime.split(':')[1]);
    const [seconds, setSeconds ] =  useState(1);
    const [hour, setHour ] =  useState(data.DistanceTime.split(':')[0]);
    useEffect(() => {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            if (minutes === 0) {
              if (hour === 0) {
                clearInterval(myInterval)
            } else {
                setHour(hour - 1);
                setMinutes(59);
            }            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        } 
    }, 1000)
    return ()=> {
        clearInterval(myInterval);
      };
    }, [seconds]);
  return (

      <div className="SpecialSliderCard">
                {/* <Link onClick={()=>history.push("/singleProduct/"+data.ProductID)} > */}
                <Link onClick={()=>history.push("/singleProduct/"+data.EngProductName.replace(/%20/g, " "))} >

  <div className="specialSliderCardBox">
  <img src={apiAsset+data.Pic1}/>
      {/* <ul className="colorList">
        <li>
          <div id="color1"></div>
        </li>
        <li>
          <div id="color2"></div>
        </li>
        <li>
          <div id="color3"></div>
        </li>
      </ul> */}
  </div>
  <p className="productName">
    {truncate(data.ProductName+" "+data.BrandName,30)}
  </p>
  <hr className="redHr"/>
  <div className="row">
    <Col md={4} className="pd0">
      <div className="timeSpecialOffer">
        {/* <p>{data.SpecialTime- new Date().getHours()}:00:00</p> */}
        {/* <p>{data.SpecialDate}-{data.SpecialTime}</p> */}
        <p>{hour+":"+minutes+":"+seconds}</p>
      </div>
    </Col>
    <Col md={8} className="ta-left pd0">
      <p className="specialPrice">
      {(parseInt(data.Cost)-parseInt(data.SpecialCost)).toLocaleString("en-de")}
  </p>
      <p className="strokeOutPrice">
      {data.Cost.toLocaleString("en-de")}
      </p>
    </Col>
  </div>
  </Link>

      </div>

  );
};
export default SpecialSliderCard;
