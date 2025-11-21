import tag from "../assets/images/tag.png";
import tag1 from "../assets/images/tag1.png";
import tag2 from "../assets/images/tag2.png";
import tag3 from "../assets/images/tag3.png";
import tag4 from "../assets/images/tag4.png";

const Images = () => {
  const imageList = [tag, tag1, tag2, tag3, tag4];

  return (
    <div style={styles.container}>
      {imageList.map((img, index) => (
        <img key={index} src={img} alt={`tag-${index}`} style={styles.image} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "60px", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap", 
    padding: "10px",
    margin:"0px 0px 0px 90px"
  },
  image: {
    width: "100px", 
    height: "auto",
    objectFit: "contain",
  },
};

export default Images;
