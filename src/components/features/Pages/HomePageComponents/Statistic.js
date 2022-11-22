import react from "react";
import "./Styles/statistic.css"

import { Container ,Col, Button,Row} from "react-bootstrap";
const Header = ({data}) => {



  return (
   
      <div className="whyRogstrix">
       <Container className="row pad-right-6 pad-left-6 grayBack" fluid>
        
            <Col md={3} className="ta-center">
            <p className="firstLineStatistic">
                   {data?.Product} +
                </p>
                <p className="secondLineStatistic">
کل محصولات                </p>
            </Col>
            <Col md={3} className="ta-center">
            <p className="firstLineStatistic">
            {data?.ROGProduct} + 
                </p>
                <p className="secondLineStatistic">
محصولات راگ                </p>
            </Col>
            <Col md={3} className="ta-center">
            <p className="firstLineStatistic">
                    {data?.Customer} + 
                </p>
                <p className="secondLineStatistic">
                    مشتری یکتا
                </p>
            </Col>
            <Col md={3} className="ta-center">
            <p className="firstLineStatistic">
                    {data?.Factor} + 
                </p>
                <p className="secondLineStatistic">
فروش محصول                </p>
            </Col>
     
          
        
       </Container>
      </div>
   
  );
}; 
export default Header;
