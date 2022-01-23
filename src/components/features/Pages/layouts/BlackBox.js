
import { Container ,Col, Button,Row} from "react-bootstrap";
import Boxcalender from "../../../assets/img/Boxcalender.png";
import Boxcompare from "../../../assets/img/Boxcompare.png";
import Boxgarantee from "../../../assets/img/Boxgarantee.png";
import Boxguide from "../../../assets/img/Boxguide.png";
import Boxlocation from "../../../assets/img/Boxlocation.png";
const RedBox = () => {

  return (
  <Container fluid className="redBox" style={{backgroundColor:"#2b2b2b"}}>
      <div className="innerRedBox">
          <div>
            <img src={Boxlocation} width={30} height={50}/>
            <p>ارسال به سراسر کشور</p>
          </div>
          <div>
              <img src={Boxgarantee} width={35} height={49}/>
              <p>
                  تضمین اصالت کالا
              </p>
              </div>
              <div>
                  <img src={Boxcompare} width={39} height={52}/>
                  <p>
                      مقایسه محصول
                  </p>
              </div>
              <div>
                  <img src={Boxcalender} width={50} height={48}/>
                  <p>
                  ضمانت بازگشت ۷ روزه
                  </p>
              </div>
              <div>
                  <img src={Boxguide} width={39} height={49}/>
                  <p>
                  راهنمای خرید
                      </p>
              </div>
      </div>
  </Container>
  );
};
export default RedBox;
