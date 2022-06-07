
import ErrorImg from "../../assets/img/404.png";
import { Container ,Col, Button,Row} from "react-bootstrap";
import AlertModal from './layouts/AlertModal';
import { useTranslation } from 'react-i18next';

const CommingSoon = () => {
  const {t,i18n} = useTranslation();

  return (
    <>
     
    
     
      <Container className="errorPage ta-center" fluid style={{height:'100vh'}}>
       <img src={ErrorImg} className="errorImg" style={{marginTop:60}}/>
       <p style={{color:'#f6303f',fontFamily:'IRANSans-Bold',fontSize:40,marginTop:30}} className="commingsoonText" >
       {t("در حال به روز رسانی !")}
       </p>
     
      </Container>
      
    </>
  );
};
export default CommingSoon;
