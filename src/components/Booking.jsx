import React from "react";
import image1 from "../assets/images/image1.svg";
import build3 from "../assets/images/build3.png";
import { FiMapPin, FiCreditCard, FiSend } from "react-icons/fi";

const steps = [
  {
    id: 1,
    title: "Choose Destination",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FiMapPin size={50} color="#ff6b3d" />,
  },
  {
    id: 2,
    title: "Make Payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FiCreditCard size={50} color="#ff6b3d" />,
  },
  {
    id: 3,
    title: "Reach Airport on Selected Date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FiSend size={50} color="#ff6b3d" />,
  },
];
const Booking = () => {
  return (
    <section className="booking-section">
      <div className="booking-header">
        <h2>Easy and Fast</h2>
        <p>Book your next trip in 3 easy steps</p>
      </div>

       <div className="booking-steps">
      {steps.map((step) => (
        <div key={step.id} className="step-card">
          {step.icon}
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
      {/* Trips / Ongoing */}
      <div className="booking-trips">
        <div className="trip-card">
          <img src={image1} alt="Trip to Greece" />
          <h3>Trip to Greece</h3>
          <p>Explore the beauty of Greece with our curated packages.</p>
        </div>

        <div className="trip-card ongoing">
          <img src={build3} alt="Trip to Rome" />
          <h3>Ongoing</h3>
          <p>Trip to Rome</p>
          <p>40% Complete</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "40%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
