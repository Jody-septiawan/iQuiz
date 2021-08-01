import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import convertRupiah from "rupiah-format";

import { UserContext } from "../contexts/userContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import dataPackageSuperUser from "../fakedata/packageSuperUser";

export default function SuperUser() {
  const { id } = useParams();
  const [state, dispatch] = useContext(UserContext);
  const { addToast, removeAllToasts } = useToasts();

  const [data, setData] = useState({});

  useEffect(() => {
    if (data) {
      const newData = dataPackageSuperUser.find((item) => item.id == id);
      console.log(newData);
      setData(newData);
    }
  }, []);

  const handleClick = () => {
    removeAllToasts();
    const content = "Coming soon";
    addToast(content, {
      appearance: "info",
      autoDismiss: true,
    });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row className="pt-5" style={{ marginBottom: "60px" }}>
          <Col xs="3"></Col>
          <Col xs="6">
            <div className="card" data-aos="zoom-in">
              <div className="card-body p-2">
                <Row>
                  <Col xs="6" className="text-center">
                    <img
                      src={data.image}
                      className="img-fluid"
                      style={{ height: "270px" }}
                    />
                  </Col>
                  <Col xs="6" className="border-start">
                    <div className="h6" style={{ fontWeight: "bolder" }}>
                      Package
                    </div>
                    <div>Name : {data.title}</div>
                    <div>Duration : {data.duration}</div>
                    <div>Total : {convertRupiah.convert(data.price)}</div>
                    <hr className="my-2" />
                    <div className="h6" style={{ fontWeight: "bolder" }}>
                      Buyer
                    </div>
                    <div>Name : {state.user.name}</div>
                    <div>Email : {state.user.email}</div>
                    <div className="d-grid gap-2 mt-5">
                      <Button
                        onClick={handleClick}
                        className="btn-pay"
                        type="submit"
                        size="sm"
                      >
                        Pay
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
