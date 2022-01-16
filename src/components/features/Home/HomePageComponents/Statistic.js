import react from "react";
import "./Styles/statistic.css"

import { Container ,Col, Button,Row} from "react-bootstrap";
const Header = () => {
  return (
   
      <div className="whyRogstrix">
       <Container className="row pad-right-6 pad-left-6 grayBack" fluid>
        
            <Col md={3} className="ta-center">
            <p className="firstLineStatistic">
                   200 +
                </p>
                <p className="secondLineStatistic">
                    محصول جدید
                </p>
            </Col>
            <Col md={3} className="ta-center">
            <p className="firstLineStatistic">
                   800 + 
                </p>
                <p className="secondLineStatistic">
                   کل محصولات
                </p>
            </Col>
            <Col md={3} className="ta-center">
            <p className="firstLineStatistic">
                    1.500 + 
                </p>
                <p className="secondLineStatistic">
                    مشتری یکتا
                </p>
            </Col>
            <Col md={3} className="ta-center">
            <p className="firstLineStatistic">
                    5.000 + 
                </p>
                <p className="secondLineStatistic">
                    خرید محصول
                </p>
            </Col>
     
          
        
       </Container>
      </div>
   
  );
}; 
export default Header;
