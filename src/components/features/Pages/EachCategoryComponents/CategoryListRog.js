
import { Container ,Col, Button,Row} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import './Styles/categoryList.css';
const CategoryListRog = (props) => {
  const history = useHistory();

  return (
    <>
     <ul className="categoryList">
              <li>
                <button onClick={()=>{props.cat(1);history.push("/ProductsRog/1")}} className="categoryBTN">
                  کیس
                </button>
              </li>
              <li>
                <button onClick={()=>{props.cat(2);history.push("/ProductsRog/2")}} className="categoryBTN">
                  کیبورد
                </button>
              </li>
              <li>
                <button onClick={()=>{props.cat(3);history.push("/ProductsRog/3")}} className="categoryBTN">
                 موس
                </button>
              </li>
              <li>
                <button onClick={()=>{props.cat(4); history.push("/ProductsRog/4") }} className="categoryBTN">
                  مانیتور
                </button>
              </li>
              <li>
                <button onClick={()=>{props.cat(5); history.push("/ProductsRog/5") }} className="categoryBTN">
                 لپ تاپ
                </button>
              </li>
              <li>
                <button onClick={()=>{props.cat(6); history.push("/ProductsRog/6") }} className="categoryBTN">
                 کارت گرافیک
                </button>
              </li>
              <li>
                <button onClick={()=>{props.cat(7); history.push("/ProductsRog/7") }} className="categoryBTN">
                 مادربورد
                </button>
              </li>
              <li>
                <button onClick={()=>{props.cat(8); history.push("/ProductsRog/8") }} className="categoryBTN">
                 موبایل
                </button>
              </li>
              <li>
                <button onClick={()=>{props.cat(9); history.push("/ProductsRog/9") }} className="categoryBTN">
                 پاور
                </button>
              </li>
              <li>
                <button onClick={()=>{props.cat(10); history.push("/ProductsRog/10") }} className="categoryBTN">
                 هدفون
                </button>
              </li>
            </ul>
    </>
  );
};
export default CategoryListRog;
