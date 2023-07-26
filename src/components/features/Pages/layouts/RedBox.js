
import { Container ,Col, Button,Row} from "react-bootstrap";
import Boxcalender from "../../../assets/img/Boxcalender.png";
import Boxcompare from "../../../assets/img/Boxcompare.png";
import Boxgarantee from "../../../assets/img/Boxgarantee.png";
import Boxguide from "../../../assets/img/Boxguide.png";
import Boxlocation from "../../../assets/img/Boxlocation.png";
import { useTranslation } from 'react-i18next';

const RedBox = () => {
    const { t, i18n } = useTranslation();

  return (
  <Container fluid className="redBox">
      <div className="innerRedBox">
          <div>
            <img src={Boxlocation} width={30} height={50}/>
            <p>{t("ارسال به سراسر کشور")}</p>
          </div>
          <div>
              <img src={Boxgarantee} width={35} height={49}/>
              <p>
              {t("تضمین اصالت کالا")}
              </p>
              </div>
              <div>
                  <img src={Boxcompare} width={39} height={52}/>
                  <p>
                  {t("مقایسه محصول")}
                  </p>
              </div>
              <div>
                  <img src={Boxcalender} width={50} height={48}/>
                  <p>
                  {t("ضمانت بازگشت ۷ روزه")}
                  </p>
              </div>
              <div>
                  <img src={Boxguide} width={39} height={49}/>
                  <p>
                  {t("راهنمای خرید")}
                      </p>
              </div>
      </div>
  </Container>
  );
};
export default RedBox;
