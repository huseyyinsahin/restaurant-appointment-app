import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Appointments from "./Appointments";

function Canvas({
  show,
  handleClose,
  appointments,
  handleDelete,
  handleDoubleClick,
}) {
  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} style={{ width: "45%" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Appointments</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Appointments
            appointments={appointments}
            handleDelete={handleDelete}
            handleDoubleClick={handleDoubleClick}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Canvas;
