import React from "react";

import "./Styles/blog.css";
import { Container ,Col, Button,Row} from "react-bootstrap";
import {FaCaretLeft,FaStar,FaRegStar} from 'react-icons/fa';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
import { Link } from "react-router-dom";
// if you want to use array


const Category = ({data,cat}) => {
  return (
      <>
  <div className="whiteCategory BCategoryResNone">
  <div className="categoryTitle">
      <p>
          دسته بندی
      </p>
  </div>
  <hr className="dashedBlackHr w100"/>
  <div className="categoryTitle pt-1">
      <p className="boldText mt-3">
          تازه
      </p>
      <ul className="categoryBlog">
              {
                  data?.map((item)=>{
                      return(
                      <li>

              <Link onClick={()=>cat(item.BlogTypeID)}>
{item.TypeName}              </Link>
          </li>
                      )
                  }
                  )
              }


      </ul>
  </div>
  </div>
  <div className="BCategoryDesNone">
  <Accordion allowZeroExpanded ={true}>
            <AccordionItem className="productAccardion mb-4">
                <AccordionItemHeading>
                    <AccordionItemButton>
                       دسته بندی ها
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
               <div className="pad2">


               </div>
      <div className="pad2">
      <div className="scrollBar">

      </div>
      </div>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
  </div>
  </>
  );
};

export default Category;