import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import convertRupiah from "rupiah-format";
import dateFormat from "dateformat";

import dataTransaction from "../../fakedata/transaction";

export default function Transaction() {
  return (
    <div className="group-card-transaction">
      {dataTransaction?.map((item) => (
        <div className="card-transaction">
          <Row>
            <Col xs="8">
              <div>{item.package}</div>
              <div>{convertRupiah.convert(item.price)}</div>
              <div>{item.duration}</div>
              <div>
                {dateFormat(
                  item.orderAt + item.id,
                  "dddd, d mmmm yyyy, HH:MM "
                )}{" "}
                WIB
              </div>
            </Col>
            <Col xs="4" className="text-end">
              <img
                src={item.image}
                className="img-fluid"
                style={{ height: "90px" }}
              />
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
