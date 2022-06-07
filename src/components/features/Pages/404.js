import FooterMain from "./layouts/FooterMain";
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";
import RedBox from "./layouts/RedBox";
import ErrorImg from "../../assets/img/404.png";
import { Container ,Col, Button,Row} from "react-bootstrap";
import React,{useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const [language,setLanguage]=useState();
  const {t,i18n} = useTranslation();

  return (
    <>
     
    
     <Header setLanguage={setLanguage}/>
      <Menu/> 
      <Container className="errorPage ta-center" fluid>
       <img src={ErrorImg} className="errorImg"/>
       <p className="errorPageText">
       {t("صفحه مورد نظر یافت نشد !")}
       </p>
       <Button className="errorBtn">
       {t("صفحه اصلی")}
       </Button>
      </Container>
      <RedBox/>
      <FooterMain/>
    </>
  );
};
export default ErrorPage;
