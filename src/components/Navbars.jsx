import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Canvas from "./Canvas";

function Navbars({ appointments, handleDelete, handleDoubleClick }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand className="navbar text-white" href="#">
            Sahin Restaurants
          </Navbar.Brand>
          <Button variant="light" onClick={handleShow}>
            Appointments
          </Button>
        </Container>
      </Navbar>

      <Canvas
        appointments={appointments}
        show={show}
        handleClose={handleClose}
        handleDelete={handleDelete}
        handleDoubleClick={handleDoubleClick}
      />
    </>
  );
}

export default Navbars;
