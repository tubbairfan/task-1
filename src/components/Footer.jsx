import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import googlePlay from "../assets/images/google-play.svg"; 
import appStore from "../assets/images/play-store.svg";
import "./Footer.css";
const Footer = () => {
  const columns = [
    {
      title: "Company",
      links: ["About", "Careers", "Mobile"],
    },
    {
      title: "Contact",
      links: ["Help/FAQ", "Press", "Affiliates"],
    },
    {
      title: "More",
      links: ["Airlinefees", "Airline", "Low fare tips"],
    },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <h1 className="logo-text">Jadoo.</h1>
        <p className="logo-desc">
          Book your trip in minutes, get full <br />
          control for much longer.
        </p>
      </div>
      {columns.map((col, index) => (
        <div key={index} className="footer-col">
          <h3>{col.title}</h3>
          {col.links.map((item, i) => (
            <p
              key={i}
              className="footer-link"
              onClick={() => console.log(item + " clicked")}
            >
              {item}
            </p>
          ))}
        </div>
      ))}
      <div className="footer-right">
        <div className="social-icons">
          <div><FiFacebook size={18} /></div>
          <div><FiInstagram size={18} /></div>
          <div><FiTwitter size={18} /></div>
        </div>
        <p className="app-title">Discover our app</p>
        <div className="app-buttons">
          <img src={googlePlay} alt="Google Play" className="app-img" />
          <img src={appStore} alt="App Store" className="app-img" />
        </div>
      </div>
      <p className="footer-copy">All rights reserved @jadoo.co</p>
    </footer>
  );
};
export default Footer;
