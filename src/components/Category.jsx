import "./Category.css";
import img1 from "../assets/images/img1.svg";
import img2 from "../assets/images/img2.svg";
import img3 from "../assets/images/img3.avif";
import img4 from "../assets/images/img4.svg";

const categories = [
  {
    img: img1,
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    img: img2,
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    img: img3,
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
  },
  {
    img: img4,
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers.",
  },
];

const Category = () => {
  return (
    <section className="category-section">
      <div className="category-header">
        <h2>CATEGORY</h2>
        <p>We Offer Best Services</p>
      </div>

      <div className="category-cards">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.img} alt={cat.title} />
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
