import React from "react";
import { Button, Table } from "react-bootstrap";

import { dataScoreClass } from "../../fakedata/score";

export default function ScoreClass() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th width="1%">No</th>
          <th width="60%">Class</th>
          <th width="20%">Score</th>
          <th width="19%">Action</th>
        </tr>
      </thead>
      <tbody className="body-table-score-class">
        {dataScoreClass?.map((item, index) => (
          <tr>
            <td className="text-center">{index + 1}</td>
            <td>{item.class}</td>
            <td>{Math.random().toString().slice(4, 6)}</td>
            <td>
              <Button size="sm" className="py-0 me-1">
                Detail
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
