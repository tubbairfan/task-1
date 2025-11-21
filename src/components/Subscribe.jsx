import { FiMail } from "react-icons/fi";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-wrapper">
      <div className="subscribe-box">
        <h2 className="subscribe-title">
          Subscribe to get information, latest news and other
          <br /> interesting offers about Jadoo
        </h2>

        <form className="subscribe-form">
          <div className="input-wrapper">
            <FiMail className="mail-icon" />
            <input type="email" placeholder="Your email" />
          </div>

          <button className="subscribe-btn">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
