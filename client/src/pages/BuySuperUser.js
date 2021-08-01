import { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import convertRupiah from "rupiah-format";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { UserContext } from "../contexts/userContext";

import dataPackageSuperUser from "../fakedata/packageSuperUser";

import ImgDiamond from "../assets/diamond.svg";

export default function BuySuperUser() {
  const [state, dispatch] = useContext(UserContext);
  const { addToast, removeAllToasts } = useToasts();

  let history = useHistory();

  const handleClick = (id) => {
    if (state.isLogin === true) {
      history.push("/super-user/" + id);
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
          {dataPackageSuperUser.map((item) => (
            <Col
              md="3"
              className="mt-5"
              data-aos="zoom-in"
              data-aos-delay={item.id + "00"}
            >
              <Card
                className="card-package-super-user"
                onClick={() => handleClick(item.id)}
              >
                <Card.Img src={item.image} style={{ height: "300px" }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.duration}</Card.Text>
                  <Card.Text>
                    <img
                      src={ImgDiamond}
                      style={{ maxWidth: "23px" }}
                      className="me-1 "
                    />
                    {item.diamond}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
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
