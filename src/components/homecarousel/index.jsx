import React from "react";
import { Carousel } from "antd";
import { Consumer } from "../../context/context";
import "./carousel.css";

const HomeCarousel = () => {
  return (
    <Consumer>
      {({ articles }) => (
        <Carousel autoplay>
          {articles.map((items) => (
            <div key={items.id}>
              <img src={items.img} className="carousel-img" alt={items.title} />
            </div>
          ))}
        </Carousel>
      )}
    </Consumer>
  );
};

export default HomeCarousel;
