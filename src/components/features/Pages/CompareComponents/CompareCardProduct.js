import react,{useContext} from "react";
import "./Styles/compareCards.css"
import specialSliderImg from "../../../assets/img/specialSliderImg.png"
import { Container ,Col, Button,Row} from "react-bootstrap";
import MadeSystem from "../../../assets/img/madeSystem.png";
import {FaStar,FaRegStar} from 'react-icons/fa';
import { apiUrl,apiAsset } from "../../../../commons/inFormTypes";
import { AuthContext } from "../../../../context/auth-context";
import { useTranslation } from 'react-i18next';

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
const CompareCardProduct = ({data}) => {
  const { isLoggedIn, token } = useContext(AuthContext);
  const {t,i18n} = useTranslation();

  const AddToCart=()=>{
    const axios = require("axios");
console.log(555)
console.log(token)
    axios
        .post(apiUrl + "ShoppingBasketAdd",{
          ProductID:data[0].ProductID,
          CustomerID:token,
          Cost:parseInt(data[0]?.Cost)-parseInt(data[0]?.SpecialCost),
          ColorID:null,
          Number:1

        })
    .then(function (response) {
      if (response.data.result == "true") {
alert("با موفقیت ذخیره شد")
        console.log(777)
        console.log(response.data.Data)

    }
    else{
      console.log(888)
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
   
      <div className="compareCards mx-auto d-block">
          <div className="compareBox1">
              <img src={apiAsset+data[0].Pic} className="mx-auto d-block"/>
              <p className="compareTitle">
{data[0].ProductName} {data[0].BrandName}             </p>
              <div className="row mt-3">
                  <Col md={7}>
                    <p className="priceText">
                    {t("قیمت محصول :")}
                    </p>
                    <p className="price">
                        {data[0].Cost}{t("تومان")}
                    </p>
                  </Col>
                  <Col md={5}>
                      <Button onClick={()=>AddToCart()} className="addBtn">
                      {t("افزودن")}
                      </Button>
                  </Col>
              </div>
          </div>
          <hr className="dashedHr"/>
          <div className="compareBox1">
              <div className="d-flex align-items-center justify-content-between align-item-center">
                  <div>
                    <p className="reviewP">
                    ({data[0].Comments} نظر)
                    </p>
                  </div>
                  <div className="starRate">
                  {
                      [...new Array(5)].map((item,index)=>{
                        return(
index+1>data[0].Rate?
<FaRegStar className="mr-1 ml-1" color="#111111"/>
                          :
                          <FaStar className="mr-1 ml-1" color="#f6303f"/>

                        )
                      })
                    }
              
                    
                  </div>

              </div>
              {
data.map((item)=>{
  return(

              <div className="mt-4">
                  <p className="firstLine1">
                    {item.MainTitle}
                  </p>
                  <p className="secondLine2">
                    {item.SubTitle}
                  </p>
              </div>
  )
})
              }
              <hr className="compareHR2"/>
              {/* <div className="mt-4">
                  <p className="firstLine1">
                    Part #
                  </p>
                  <p className="secondLine2">
                    100-10000065BOX
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                   Core Count
                  </p>
                  <p className="secondLine2">
                    6
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Core Clock
                  </p>
                  <p className="secondLine2">
                    3.7 GHz
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Boost Clock
                  </p>
                  <p className="secondLine2">
                    4.6 GHz
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    TDP
                  </p>
                  <p className="secondLine2">
                   65 W
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                   Series
                  </p>
                  <p className="secondLine2">
                    AMD Ryzen 5
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Microarchitecture
                  </p>
                  <p className="secondLine2">
                    Zen 3
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Core Family
                  </p>
                  <p className="secondLine2">
                    Vermeer
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Socket
                  </p>
                  <p className="secondLine2">
                    AM4
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Integrated Graphics
                  </p>
                  <p className="secondLine2">
                    None
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Maximum Supported Memory
                  </p>
                  <p className="secondLine2">
                    128 GB
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    ECC Support
                  </p>
                  <p className="secondLine2">
                    No
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Packaging
                  </p>
                  <p className="secondLine2">
                    Boxed
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Includes CPU Cooler
                  </p>
                  <p className="secondLine2">
                    Yes
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    L1 Cache
                  </p>
                  <p className="secondLine2">
                    6 X 32 KB Instruction
                  </p>
                  <p className="secondLine2">
                    6 X 32 KB Data
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p ccachelassName="firstLine1">
                   L2 Cache
                  </p>
                  <p className="secondLine2">
                    6 X 512 KB
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    L3 Cache
                  </p>
                  <p className="secondLine2">
                    1 X 32 MB
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Lithography
                  </p>
                  <p className="secondLine2">
                    7 nm
                  </p>
              </div>
              <hr className="compareHR2"/><div className="mt-4">
                  <p className="firstLine1">
                    Simultaneous Multithreading
                  </p>
                  <p className="secondLine2">
                    Yes
                  </p>
              </div> */}
              
          </div>
      </div>
   
  );
}; 
export default CompareCardProduct;
