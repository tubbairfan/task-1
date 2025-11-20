import "./Destination.css";
import build1 from "../assets/images/build1.png";
import build2 from "../assets/images/build2.png";
import build3 from "../assets/images/build3.png";

const destinations = [
  {
    img: build1,
    name: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
  },
  {
    img: build2,
    name: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    img: build3,
    name: "Full Europe",
    price: "$15k",
    duration: "10 Days Trip",
  },
];

const Destination = () => {
  return (
    <section className="destination-section">
      <div className="destination-header">
        <h2>Top Sellings</h2>
        <p>Top Destinations</p>
      </div>

      <div className="destination-cards">
        {destinations.map((dest, index) => (
          <div key={index} className="destination-card">
            <img src={dest.img} alt={dest.name} className="destination-img" />
            <h3 className="destination-name">{dest.name}</h3>
            <p className="destination-price">{dest.price}</p>
            <p className="destination-duration">{dest.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
