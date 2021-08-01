import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { UserContext } from "../../contexts/userContext";

import CardProfile from "../cards/CardProfile";
import ScoreClass from "../tables/ScoreClass";
import Transaction from "../cards/Transaction";

export default function ProfileContent() {
  const [state, dispatch] = useContext(UserContext);

  return (
    <Container className="mt-3" style={{ marginBottom: "60px" }}>
      <Row>
        <Col xs="3" className="border-end">
          <CardProfile />
        </Col>
        <Col xs="5" className="border-end">
          <div className="h4">Score</div>
          <ScoreClass />
        </Col>
        <Col xs="4">
          <div className="h4">Transaction</div>
          <Transaction />
        </Col>
      </Row>
    </Container>
  );
}
