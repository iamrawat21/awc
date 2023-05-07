import React from "react";
import { Container, UncontrolledCarousel } from "reactstrap";


const carouselItems = [
  {
    src: require("assets/img/photo-1.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/photo-2.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/photo-3.jpg"),
    altText: "Slide 3",
    caption: ""
  }
];

export default function FullPageCarousel() {
    const mystyle = {
        ".full-page-carousel": {
          position: "fixed",
          top: 0,
          left: 0,
          width: "80%",
          height: "100%",
          zIndex: -1
        },
        ".carousel-item": {
          height: "50vh",
          minHeight: "350px",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative"
        },
        ".carousel-item:after": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }
      };
      
  return (
    <div className="full-page-carousel">
      <UncontrolledCarousel
        items={carouselItems}
        indicators={false}
        autoPlay={false}
      />
    </div>
  );
}
