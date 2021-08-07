import { Link } from "react-router-dom";

import { Table, Button } from "react-bootstrap";
import { BsFillTrash2Fill } from "react-icons/bs";
import { GrScorecard } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { ImEnter } from "react-icons/im";

export default function TableCourse({ courses }) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th width="1%">#</th>
          <th width="10%">Image</th>
          <th width="30%">Name</th>
          {/* <th width="9%">Status</th> */}
          <th width="20%">Publish</th>
          <th width="15%">Action</th>
        </tr>
      </thead>
      <tbody>
        {courses?.map((item, idx) => (
          <tr>
            <td className="align-middle">{idx + 1}</td>
            <td className="align-middle">
              <img
                src={item.image}
                className="img-fluid bg-light"
                style={{ objectFit: "cover" }}
              />
            </td>
            <td className="align-middle">{item.name}</td>
            {/* <td className="align-middle">{typeof item.status}</td> */}
            <td className="align-middle">
              {item.isPublish ? "publish" : "not publish"}
            </td>
            <td className="align-middle">
              <Button
                as={Link}
                to={`/level-course/` + item.id}
                className="btn-success btn-sm py-0 px-1 mx-1"
              >
                <ImEnter />
              </Button>
              <Button className="btn-info btn-sm py-0 px-1 mx-1">
                <MdEdit />
              </Button>
              <Button className="btn-warning btn-sm py-0 px-1 mx-1">
                <GrScorecard />
              </Button>
              <Button className="btn-danger btn-sm py-0 px-1 mx-1">
                <BsFillTrash2Fill />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
