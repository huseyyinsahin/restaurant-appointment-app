import React, { useEffect, useState } from "react";
import Restaurant from "../components/Restaurant";
import { restaurantData, appointmentData } from "../helpers/data";
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";

function Home() {
  const [appointments, setAppointments] = useState(appointmentData);

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments"));
    if (savedAppointments) {
      setAppointments(savedAppointments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleAddAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };
  const handleDelete = (id) => {
    const filteredAppointment = appointments.filter((item) => item.id != id);
    setAppointments(filteredAppointment);
  };
  const handleDoubleClick = (id) => {
    const filteredCompleted = appointments.map((item) =>
      item.id == id ? { ...item, completed: !item.completed } : item
    );
    setAppointments(filteredCompleted);
  };

  return (
    <>
      <Navbars
        appointments={appointments}
        handleDelete={handleDelete}
        handleDoubleClick={handleDoubleClick}
      />
      <Restaurant
        restaurantData={restaurantData}
        handleAddAppointment={handleAddAppointment}
      />
      <Footer />
    </>
  );
}

export default Home;
