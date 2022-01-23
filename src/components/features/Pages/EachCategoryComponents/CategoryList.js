
import { Container ,Col, Button,Row} from "react-bootstrap";

import './Styles/categoryList.css';
const CategoryList = () => {

  return (
    <>
     <ul className="categoryList">
              <li>
                <button className="categoryBTN">
                  کیس
                </button>
              </li>
              <li>
                <button className="categoryBTN">
                  کیبورد
                </button>
              </li>
              <li>
                <button className="categoryBTN">
                 موس
                </button>
              </li>
              <li>
                <button className="categoryBTN">
                  مانیتور
                </button>
              </li>
              <li>
                <button className="categoryBTN">
                 لپ تاپ
                </button>
              </li>
              <li>
                <button className="categoryBTN">
                 کارت گرافیک
                </button>
              </li>
              <li>
                <button className="categoryBTN">
                 مادربورد
                </button>
              </li>
              <li>
                <button className="categoryBTN">
                 موبایل
                </button>
              </li>
              <li>
                <button className="categoryBTN">
                 پاور
                </button>
              </li>
              <li>
                <button className="categoryBTN">
                 هدفون
                </button>
              </li>
            </ul>
    </>
  );
};
export default CategoryList;
