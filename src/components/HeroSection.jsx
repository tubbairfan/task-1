import "./HeroSection.css";
import heroImage from "../assets/images/image1.svg";
import playIcon from "../assets/images/play-button.svg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="tagline">Best Destinations around the world</div>
        <h2 className="hero-heading">Travel, enjoy and live a new and full life</h2>
        <p className="hero-description">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Find Out More</button>

          <div className="play-demo">
            <img src={playIcon} alt="Play Demo" />
            <span>Play Demo</span>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
