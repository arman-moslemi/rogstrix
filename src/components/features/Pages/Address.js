import { Container ,Col, Button,Row} from "react-bootstrap";
import {React,useState,useEffect} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaPlus } from 'react-icons/fa';
import '../../../components/assets/css/styles.css';
import RightMenu from "./UserPanelComponents/RightMenu";
import Header from "./layouts/Header";
import FooterMain from "./layouts/FooterMain";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import PanelAddress from "../../assets/icons/panelAddress";
import Checkbox from '@mui/material/Checkbox';
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { Link, useHistory } from "react-router-dom";
import {useParams } from "react-router-dom";
import CustomizedDialogs from './layouts/AlertModal';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
const Address = () => {
    const [data,setData]=useState([])
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const history = useHistory();
    const params = useParams().id;
    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const getData=()=>{
        const axios = require("axios");


        axios.post(apiUrl + "OneCustomer",{CustomerID:params})
        .then(function (response) {
          if (response.data.result == "true") {

             setData(response.data.Data)
             console.log(response.data.Data)

            // history.push("/RegisterVerify/"+mobile)

        }
        else{
          setTitle("شماره ورودی نادرست می باشد")
          setOpen(true)
        }})
        .catch(function (error) {
          console.log(error);
        });




      }
    useEffect(() => {
  getData()
    }, []);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: "none",
    borderRadius:5,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="">
    <Header />
  <Menu/>


    <Container className="UserPanelContainer" fluid>
     <div className="row">
         <Col md={3} xs={12}>
             <RightMenu data={data} id={params}/>
         </Col>
         <Col md={9} xs={12}>
             <div className="panelWhiteBox">
             <div className="rightMenuBox1">
             <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
      <PanelAddress className="rightMenuImg"/>
      <p className="fontWeightBold ml-4" href="#">
                   آدرس های من
                </p>
      </div>
      <Button className="addressAdd" onClick={handleOpen1}>
          <FaPlus className="mr-2"/>
          افزودن آدرس جدید
      </Button>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            افزودن آدرس جدید
          </Typography>
          <hr/>
         <div className="row">
             <Col md={4}>

                                <p className="fontWeightMedium mb-2">
                                   استان
                                </p>
                                <select name="state" id="state" className="informationSelect">
                                   <option value="man">تهران</option>
                                    <option value="woman">اصفهان</option>

                                  </select>

             </Col>
             <Col md={4}>

            <p className="fontWeightMedium mb-2">
               شهر
            </p>
            <select name="state" id="state" className="informationSelect">
               <option value="man">تهران</option>
                <option value="woman">اصفهان</option>

              </select>

</Col>
             <Col md={4}>
             <p className="fontWeightMedium mb-2">
                                   کد پستی
                                </p>
                                <input className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
                                   کد پستی
                                </p>
                                <textarea className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button className="saveBtn mt-4">
                     ذخیره
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
          </div>
                 </div>
                 <hr className="grayDashed" />
                 <div className="rightMenuBox1">
                     {
                         data.Address1?

                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
{data.Address1}                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue" onClick={handleOpen2}>
                             ویرایش
                         </Button>
                         <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ویرایش آدرس
          </Typography>
          <hr/>
         <div className="row">
             <Col md={4}>

                                <p className="fontWeightMedium mb-2">
                                   استان
                                </p>
                                <select name="state" id="state" className="informationSelect">
                                   <option value="man">تهران</option>
                                    <option value="woman">اصفهان</option>

                                  </select>

             </Col>
             <Col md={4}>

            <p className="fontWeightMedium mb-2">
               شهر
            </p>
            <select name="state" id="state" className="informationSelect">
               <option value="man">تهران</option>
                <option value="woman">اصفهان</option>

              </select>

</Col>
             <Col md={4}>
             <p className="fontWeightMedium mb-2">
                                   کد پستی
                                </p>
                                <input className="EditInformationInput w100"/>
             </Col>
             <Col md={12}>
             <p className="fontWeightMedium mb-2 mt-4">
                                   کد پستی
                                </p>
                                <textarea className="EditInformationInput w100"/>
             </Col>
             <Col md={12} className="ta-left">
                 <Button className="saveBtn mt-4">
                     ذخیره
                 </Button>
             </Col>
         </div>
        </Box>
      </Modal>
                         <Button className="glassBtn" id="colorRed">
                             حذف
                         </Button>
                     </div>
                 </div>
                         :
null
                     }
                     {
                         data.Address2?
                 <div className="shadowBox mb-4">
                     <p className="fontWeightNormal">
                     {data.Address2}
                     </p>
                     <div className="d-flex align-items-center justify-content-end">
                         <Button className="glassBtn" id="colorBlue">
                             ویرایش
                         </Button>
                         <Button className="glassBtn" id="colorRed">
                             حذف
                         </Button>
                     </div>
                 </div>
                 :
                 null
                 }
                 </div>
             </div>
         </Col>
     </div>

    </Container>
    <RedBox/>
    <FooterMain/>
  </div>
  );
};
export default Address;
