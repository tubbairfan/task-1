import { useState, useEffect } from "react";
import tag from "../assets/images/tag.png";
import tag1 from "../assets/images/tag1.png";
import tag2 from "../assets/images/tag2.png";
import tag3 from "../assets/images/tag3.png";
import tag4 from "../assets/images/tag4.png";

const Images = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      display: "flex",
      gap: windowWidth > 1024 ? "60px" : windowWidth > 768 ? "40px" : "20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: windowWidth < 768 ? "wrap" : "nowrap",
      padding: windowWidth < 480 ? "10px 5%" : "10px",
      margin: windowWidth < 480 ? "0 auto" : "0px 0px 0px 90px",
      boxSizing: "border-box",
    },
    image: {
      width:
        windowWidth > 1024
          ? "100px"
          : windowWidth > 768
          ? "80px"
          : "60px",
      height: "auto",
      objectFit: "contain",
    },
  };

  const imageList = [tag, tag1, tag2, tag3, tag4];

  return (
    <div style={styles.container}>
      {imageList.map((img, index) => (
        <img key={index} src={img} alt={`tag-${index}`} style={styles.image} />
      ))}
    </div>
  );
};

export default Images;
