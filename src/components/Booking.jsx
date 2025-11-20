import { FiMapPin, FiCreditCard, FiSend } from "react-icons/fi";
import tripImg from "../assets/images/image1.svg";
import romeImg from "../assets/images/build3.png";
import "./Booking.css";

const steps = [
  {
    icon: <FiMapPin size={26} color="#fff" />,
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    bg: "#F4A100",
  },
  {
    icon: <FiCreditCard size={26} color="#fff" />,
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    bg: "#F2614C",
  },
  {
    icon: <FiSend size={26} color="#fff" />,
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    bg: "#0D6A7A",
  },
];

const Booking = () => {
  return (
    <div className="booking-section">
      {/* LEFT SIDE */}
      <div className="booking-left">
        <p className="booking-small-title">Easy and Fast</p>
        <h2 className="booking-main-title">Book Your Next Trip<br />In 3 Easy Steps</h2>

        <div className="steps-container">
          {steps.map((item, i) => (
            <div className="step-box" key={i}>
              <div className="step-icon" style={{ background: item.bg }}>
                {item.icon}
              </div>

              <div>
                <h4 className="step-title">{item.title}</h4>
                <p className="step-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="booking-right">
        <div className="trip-card">
          <img src={tripImg} className="trip-img" />

          <h3 className="trip-title">Trip To Greece</h3>
          <p className="trip-date">14–29 June | by Robbin joseph</p>

          <div className="trip-icons">
            <FiMapPin />
            <FiSend />
            <FiCreditCard />
          </div>

          <p className="people-going">24 people going</p>
        </div>

        {/* FLOATING SMALL CARD */}
        <div className="floating-card">
          <img src={romeImg} className="float-img" />

          <div>
            <p className="ongoing-label">Ongoing</p>
            <h4 className="float-title">Trip to Rome</h4>
            <p className="float-progress">
              <span>40%</span> completed
            </p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
