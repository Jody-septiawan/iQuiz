import { Container, Row, Col, Button } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";

import Navbar from "../components/Navbar";

import imgLanding from "../assets/Landing.svg";

export default function Landing() {
  const { addToast, removeAllToasts } = useToasts();
  let d = new Date();

  const handleClick = () => {
    removeAllToasts();
    const content = "Please login";
    addToast(content, {
      appearance: "warning",
      autoDismiss: true,
    });
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
            <div className="card shadow card-landing fixed-bottom mx-5 mb-3">
              <div
                className="card-body text-secondary py-1 text-center"
                style={{ fontSize: "14px" }}
              >
                jedeye &copy; Copyright {d.getFullYear()}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
