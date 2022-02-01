import React from "react";

import "./Styles/blog.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaCaretLeft,FaStar,FaRegStar} from 'react-icons/fa';

// if you want to use array


const Category = () => {
  return (
  <div className="whiteCategory">
  <div className="categoryTitle">
      <p>
          دسته بندی
      </p>
  </div>
  <hr className="dashedBlackHr w100"/>
  <div className="categoryTitle pt-1">
      <p className="boldText mt-3">
          تازه های تکنولوژی
      </p>
      <ul className="categoryBlog">
          <li>
              <a href="#">
              زیردسته شماره ۱ (۲۷)
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره ۱ (۲۷)
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره ۱ (۲۷)
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره ۱ (۲۷)
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره ۱ (۲۷)
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره ۱ (۲۷)
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره ۱ (۲۷)
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره ۱ (۲۷)
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره ۱ (۲۷)
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره ۱ (۲۷)
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره 11 
              </a>
          </li>
          <li>
              <a href="#">
              زیردسته شماره 12 
              </a>
          </li>
      </ul>
  </div>
  </div>
  );
};

export default Category;