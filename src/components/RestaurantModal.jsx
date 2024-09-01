import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function RestaurantModal({
  show,
  restaurant,
  handleClose,
  handleAddAppointment,
}) {
  const [nameSurname, setNameSurname] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: new Date().getTime(),
      reservation: nameSurname,
      day: date,
      completed: false,
      restaurant: restaurant,
      people: people,
    };
    handleAddAppointment(newAppointment);
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment For Restaurant {restaurant} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name & Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name & surname"
                required
                onChange={(e) => setNameSurname(e.target.value)}
              />
              <Form.Label className="mt-2">How many people are you?</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter"
                required
                onChange={(e) => setPeople(e.target.value)}
              />
              <Form.Label className="mt-2">Day & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <div className="text-center mt-3">
              <Button
                className="me-2 btn-success"
                variant="secondary"
                type="submit"
              >
                Submit
              </Button>
              <Button
                className="btn-danger"
                variant="primary"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RestaurantModal;
