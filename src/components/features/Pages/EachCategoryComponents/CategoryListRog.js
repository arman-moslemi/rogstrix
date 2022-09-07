
import { Container ,Col, Button,Row} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import './Styles/categoryList.css';
import { useTranslation } from 'react-i18next';

const CategoryListRog = (props) => {
  const history = useHistory();
  const [data,setData]=useState([])

  const mainSlider=async()=>{
    const axios = require("axios");

    
      axios
          .get(apiUrl + "GroupRefrence")
      .then(function (response) {
        if (response.data.result == "true") {

          setData(response.data.Data)
          console.log(44)
          console.log(response.data.Data)

      }
      else{
        console.log(response.data.result)

      }})
      .catch(function (error) {
        console.log(error);
      });



  }
  useEffect(() => {
    mainSlider();
// alert(val)
  }, []);
  return (
    <>
     <ul className="categoryList">
      {
        data.map((item)=>{
          return(

              <li>
                <button onClick={()=>{props.cat(item.GroupID);history.push("/ProductsRog/"+item.GroupID)}} className="categoryBTN">
                  {item.Title}
                </button>
              </li>
          )
        })
      }
         
            </ul>
    </>
  );
};
export default CategoryListRog;
