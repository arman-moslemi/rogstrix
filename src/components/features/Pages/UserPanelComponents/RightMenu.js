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
import { Link, useHistory } from "react-router-dom";

const RightMenu = ({data,id}) => {
    const history = useHistory();

  return (
  <div className="rightMenu">
      <div className="rightMenuBox1">
        <div className="d-flex align-items-center">
            <PanelUser className="rightMenuImg"/>
            <div className="ml-4">
                <p className="fontWeightBold">
{data?.NameFamily?.split(',')[0]+" "+data?.NameFamily?.split(',')[1]}
</p>
                {/* <p className="fontWeightNormal">
                    تاریخ عضویت : 00/01/02
                </p> */}
            </div>
        </div>

      </div>
      <hr className="grayDashed" />
      <div className="rightMenuBox1">
      <div className="d-flex align-items-center mb-4 mt-4">
      <PanelInformation className="rightMenuImg"/>
      <Link onClick={()=>history.push("/EditInformation/"+id)} className="fontWeightMedium ml-4" >
                    مشخصات کاربری
                </Link>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelAddress className="rightMenuImg"/>
      <Link onClick={()=>history.push("/Address/"+id)} className="fontWeightMedium ml-4"  >
                    آدرس های من
                </Link>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelPassword className="rightMenuImg"/>
      <Link onClick={()=>history.push("/ChangePassword/"+id)} className="fontWeightMedium ml-4"  >
                    تغییر کلمه عبور
                </Link>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelOrder className="rightMenuImg"/>
      <Link onClick={()=>history.push("/TicketList/"+id)} className="fontWeightMedium ml-4"  >
                    سفارش های من
                </Link>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelComment className="rightMenuImg"/>
      <Link onClick={()=>history.push("/SavedProducts/"+id)} className="fontWeightMedium ml-4"  >
                    سیستم های ذخیره شده
                </Link>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelSeen className="rightMenuImg"/>
      <Link onClick={()=>history.push("/ProductsViewed/"+id)} className="fontWeightMedium ml-4"  >
                    محصولات مشاهده شده
                </Link>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelAlert className="rightMenuImg"/>
      <Link onClick={()=>history.push("/SystemGuide")} className="fontWeightMedium ml-4"  >
                    لیست اطلاع رسانی
                </Link>
          </div>
          <div className="d-flex align-items-center mb-4 mt-4">
      <PanelExit className="rightMenuImg"/>
      <Link onClick={()=>history.push("/Login")} className="fontWeightMedium ml-4"  >
                    خروج
                </Link>
          </div>
      </div>
      </div>
  );
};
export default RightMenu;
