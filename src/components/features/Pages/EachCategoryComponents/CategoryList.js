
import { Container ,Col, Button,Row} from "react-bootstrap";

import './Styles/categoryList.css';
const CategoryList = (props) => {

  return (
    <>
     <ul className="categoryList">
              <li>
                <button onClick={()=>props.cat(1)} className="categoryBTN">
                  کیس
                </button>
              </li>
              <li>
                <button onClick={()=>props.cat(2)} className="categoryBTN">
                  کیبورد
                </button>
              </li>
              <li>
                <button onClick={()=>props.cat(3)} className="categoryBTN">
                 موس
                </button>
              </li>
              <li>
                <button onClick={()=>props.cat(3)} className="categoryBTN">
                  مانیتور
                </button>
              </li>
              <li>
                <button onClick={()=>props.cat(3)} className="categoryBTN">
                 لپ تاپ
                </button>
              </li>
              <li>
                <button onClick={()=>props.cat(4)} className="categoryBTN">
                 کارت گرافیک
                </button>
              </li>
              <li>
                <button onClick={()=>props.cat(5)} className="categoryBTN">
                 مادربورد
                </button>
              </li>
              <li>
                <button onClick={()=>props.cat(6)} className="categoryBTN">
                 موبایل
                </button>
              </li>
              <li>
                <button onClick={()=>props.cat(7)} className="categoryBTN">
                 پاور
                </button>
              </li>
              <li>
                <button onClick={()=>props.cat(8)} className="categoryBTN">
                 هدفون
                </button>
              </li>
            </ul>
    </>
  );
};
export default CategoryList;
