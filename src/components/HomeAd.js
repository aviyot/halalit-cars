import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import car1 from "../../src/assets/car1.png";
import maincover from "../../src/assets/maincover.png";

function HomeAd() {
  const [index, setIndex] = useState(0);
  const [homeAd, setHomeAd] = useState([
    {
      imgSrc: car1,
      words: " שירות על - מקבלים רק אצלנו",
      deteilSrc: "",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1610399214658-52b9fdea4627?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600",
      words: " שירות על - מקבלים רק אצלנו",
      deteilSrc: "",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1555353540-64580b51c258?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600",
      words: " שירות על - מקבלים רק אצלנו",
      deteilSrc: "",
    },
  ]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imgStyle = {
    height: "200px",
  };
  return (
    <div className="carousel" style={{ backgroundImage: `url(${maincover})` }}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-50"
        style={{ margin: "0 auto" }}
      >
        {homeAd.map((item) => (
          <Carousel.Item key={item.imgSrc}>
            <img
              style={imgStyle}
              className="d-block w-100"
              src={item.imgSrc}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>
                <button src={item.deteilSrc} className="btn btn-warning">
                  לפרטים
                </button>
                <span style={{ color: "#469AE8" }}>
                  {" "}
                  {item.words.split("-")[0]}
                </span>
                <span style={{ color: "white" }}>
                  -{item.words.split("-")[1]}
                </span>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeAd;
