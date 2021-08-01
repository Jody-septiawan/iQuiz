import { Card, Button, Container, Row, Col } from "react-bootstrap";
import convertRupiah from "rupiah-format";
import { useToasts } from "react-toast-notifications";

import Navbar from "../components/Navbar";

import dataPackageSuperUser from "../fakedata/packageSuperUser";

export default function BuySuperUser() {
  const { addToast, removeAllToasts } = useToasts();

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
          {dataPackageSuperUser.map((item) => (
            <Col
              md="3"
              className="mt-5"
              data-aos="zoom-in"
              data-aos-delay={item.id + "00"}
            >
              <Card className="card-package-super-user" onClick={handleClick}>
                <Card.Img
                  src={item.image}
                  style={{ height: "300px" }}
                  className=""
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.duration}</Card.Text>
                  <Card.Text>{convertRupiah.convert(item.price)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
