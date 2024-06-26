import React from "react";
import "./Programs.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import ProgramIcon1 from "../../assets/program-icon-1.png";
import ProgramIcon2 from "../../assets/program-icon-2.png";
import ProgramIcon3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs" id="Programs">
      <div className="program">
        <img src={program1} alt="Program 1" />
        <div className="caption">
          <img src={ProgramIcon1} alt="Program Icon 1" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="Program 2" />
        <div className="caption">
          <img src={ProgramIcon2} alt="Program Icon 2" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="Program 3" />
        <div className="caption">
          <img src={ProgramIcon3} alt="Program Icon 3" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
