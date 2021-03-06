import { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router";

import { UserContext } from "../contexts/userContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import imgLanding from "../assets/Landing.svg";

export default function Landing() {
  const [state, dispatch] = useContext(UserContext);
  let history = useHistory();
  const { addToast, removeAllToasts } = useToasts();

  const handleClick = () => {
    if (state.isLogin == true) {
      history.push("/dashboard");
    } else {
      removeAllToasts();
      const content = "Please login";
      addToast(content, {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  };
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs="6" className="d-flex align-items-center pt-5">
            <div className="mt-4 text-poppins card-header-left">
              <div className="h2" data-aos="fade-right">
                Master IT skills with topic centered tests for your career
                advancement
              </div>
              <div className="mt-4 h5" data-aos="fade-up">
                Begin with your First test !
                <Button className="ms-4 btn-get-started" onClick={handleClick}>
                  Get Started
                </Button>
              </div>
            </div>
          </Col>
          <Col xs="6" className="pt-5">
            <img src={imgLanding} className="img-fluid" data-aos="fade-up" />
          </Col>
        </Row>
        <Row className="">
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}
