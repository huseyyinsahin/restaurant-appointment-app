import { Row, Container, Col } from "react-bootstrap";
import RestaurantModal from "./RestaurantModal";
import { useState } from "react";

function Restaurant({ restaurantData, handleAddAppointment }) {
  const [show, setShow] = useState(false);
  const [restaurant, setRestaurant] = useState("");
  const handleShow = (name) => {
    setShow(true);
    setRestaurant(name);
  };
  const handleClose = () => setShow(false);
  return (
    <Container>
      <Row className="my-5 text-center">
        {restaurantData.map(({ id, name, img }) => {
          return (
            <Col className="my-2" xs={12} sm={6} md={4} lg={4} key={id}>
              <h3 className="text-center">{name}</h3>
              <img
                onClick={() => handleShow(name)}
                className="rest-img"
                src={img}
                alt={name}
              />
            </Col>
          );
        })}
      </Row>
      <RestaurantModal
        show={show}
        handleClose={handleClose}
        restaurant={restaurant}
        handleAddAppointment={handleAddAppointment}
      />
    </Container>
  );
}

export default Restaurant;
