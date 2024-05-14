import React from "react";
import "./About.css";
import About_img from "../../assets/about.png";
import Play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="About">
      <div className="about-left">
        <img src={About_img} alt="About_img" className="about-img" />
        <img
          src={Play_icon}
          alt="About_img"
          className="Play_icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a Transformative education journey with our university's
          comprehensiv education programs. Our Cutting-edge curriculum is
          designed to empower students with the knowledge,skills, and
          experiences needed to excel in the dynamic field of education.{" "}
        </p>
        <p>
          with a focus on innovation, hands-on learning, and personalized
          mentorship, our program prepare aspiring educators to make a
          meaningful impact in classroom, schools,and communities.
        </p>
        <p>
          whether you aspire to become a teachaer, administrator, counselor,or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
