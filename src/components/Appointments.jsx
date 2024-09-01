import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../assets/appointment.jpg";
import { TiDelete } from "react-icons/ti";

function Appointments({ appointments, handleDelete, handleDoubleClick }) {
  return (
    <div>
      <Container>
        {appointments.length === 0 && (
          <img width="100%" src={img} alt="Finish" />
        )}
        {appointments.map(
          ({ id, reservation, day, completed, restaurant, people }) => {
            return (
              <div key={id} className="appointment">
                <Row
                  className="align-items-center"
                  onDoubleClick={() => handleDoubleClick(id)}
                >
                  <Col xs={12} md={3}>
                    <p className="fw-bold mb-1">Reservation:</p>
                    <p className="text-muted mb-0">{reservation}</p>
                  </Col>
                  <Col xs={12} md={3}>
                    <p className="fw-bold mb-1">Restaurant:</p>
                    <p className="text-muted mb-0">{restaurant}</p>
                  </Col>
                  <Col xs={6} md={3}>
                    <p className="fw-bold mb-1">Number of People:</p>
                    <p className="text-muted mb-0">{people}</p>
                  </Col>
                  <Col xs={12} md={2}>
                    <p className="fw-bold mb-1">Date:</p>
                    <p className="text-muted mb-0">
                      {new Date(day).toLocaleDateString("tr")}
                    </p>
                    <p className="fw-bold mb-1">Time:</p>
                    <p className="text-muted mb-0">
                      {new Date(day).toLocaleTimeString("tr")}
                    </p>
                  </Col>
                  <Col xs={12} md={1} className="text-center">
                    <TiDelete
                      type="button"
                      className="text-danger fs-1"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(id)}
                    />
                  </Col>
                  {completed && (
                    <div className="completedDiv">
                      Completed on {new Date().toLocaleDateString("tr")}
                    </div>
                  )}
                </Row>
                <hr />
              </div>
            );
          }
        )}
      </Container>
    </div>
  );
}

export default Appointments;
