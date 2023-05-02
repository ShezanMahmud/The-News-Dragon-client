import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import Header from "../pages/Home/Home/Shared/Header";
import LeftNav from "../pages/Home/Home/Shared/leftNav/LeftNav";
import RightNav from "../pages/Home/Home/Shared/RightNav/RightNav";


const Main = () => {
   return (
      <div>
         <Header />
         <Container>
            <Row>
               <Col lg={3}>
                  <LeftNav />
               </Col>
               <Col lg={6}>
                  <h2>Main content Comming</h2>
               </Col>
               <Col lg={3}>
                  <RightNav />
               </Col>
            </Row>
         </Container>
         <Footer />
      </div>
   );
};

export default Main;