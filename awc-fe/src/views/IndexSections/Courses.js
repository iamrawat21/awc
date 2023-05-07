import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";
import CourseCard from "./Coursescard";

const coursesData = [
  {
    id: "01",
    title: "Photo-1",
    imgUrl: "./assets/img/photo-4.jpg",
  },

  {
    id: "02",
    title: "Photo-2",
    imgUrl: "./assets/img/photo-5.jpg",
  },

  {
    id: "03",
    title: "Photo-3",
    imgUrl: "./assets/img/photo-6.jpg",
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
