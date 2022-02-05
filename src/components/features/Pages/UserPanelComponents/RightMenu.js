import React from "react";

import { Container ,Col, Button,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa';
import './Styles/userPanel.css';
import PanelAddress from "../../../assets/icons/panelAddress";
import PanelAlert from "../../../assets/icons/panelAlert";
import PanelComment from "../../../assets/icons/panelComment";
import PanelExit from "../../../assets/icons/panelExit";
import PanelInformation from "../../../assets/icons/panelInformation";
import PanelOrder from "../../../assets/icons/panelOrder";
import PanelPassword from "../../../assets/icons/panelPassword";
import PanelSeen from "../../../assets/icons/panelSeen";
import PanelUser from "../../../assets/icons/panelUser";
const RightMenu = () => {

  return (
  <div className="rightMenu">
      <div className="rightMenuBox1">
        <div className="d-flex align-items-center">
            <PanelUser className="rightMenuImg"/>
            <div className="ml-4">
                <p className="fontWeightBold">
                    کاربر شماره یک
                </p>
                <p className="fontWeightNormal">
                    تاریخ عضویت : 00/01/02
                </p>
            </div>
        </div>
        
      </div>
      <hr className="grayDashed" />
      <div className="rightMenuBox1">
      <div className="d-flex align-items-center mb-4 mt-4">
      <PanelInformation className="rightMenuImg"/>
      <a className="fontWeightMedium ml-4" href="#">
                    مشخصات کاربری
                </a>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelAddress className="rightMenuImg"/>
      <a className="fontWeightMedium ml-4" href="#">
                    آدرس های من
                </a>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelPassword className="rightMenuImg"/>
      <a className="fontWeightMedium ml-4" href="#">
                    تغییر کلمه عبور
                </a>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelOrder className="rightMenuImg"/>
      <a className="fontWeightMedium ml-4" href="#">
                    سفارش های من
                </a>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelComment className="rightMenuImg"/>
      <a className="fontWeightMedium ml-4" href="#">
                    سیستم های ذخیره شده
                </a>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelSeen className="rightMenuImg"/>
      <a className="fontWeightMedium ml-4" href="#">
                    محصولات مشاهده شده
                </a>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelAlert className="rightMenuImg"/>
      <a className="fontWeightMedium ml-4" href="#">
                    لیست اطلاع رسانی
                </a>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelExit className="rightMenuImg"/>
      <a className="fontWeightMedium ml-4" href="#">
                    خروج
                </a>
          </div>
      </div>
      </div>
  );
};
export default RightMenu;
