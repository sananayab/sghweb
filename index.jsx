import React from "react";
import Menu2 from "../Menu2";
import Request from "../Request";
import SignupBtn3 from "../SignupBtn3";
import "./X1.sass";

function X1(props) {
  const { menu2Props, signupBtn2Props, signupBtn22Props, signupBtn23Props } = props;

  return (
    <div className="x1">
      <div className="header-1">
        <div className="group-87-1">
          <div className="overlap-group1-14">
            <Menu2 x3={menu2Props.x3} buttonSmallPrimaryProps={menu2Props.buttonSmallPrimaryProps} />
            <Request className={signupBtn2Props.className}>{signupBtn2Props.children}</Request>
            <Request className={signupBtn22Props.className}>{signupBtn22Props.children}</Request>
            <div className="how-it-works roboto-normal-cararra-18px">How it Works</div>
            <div className="explore-lessons roboto-normal-cararra-18px">Explore Lessons</div>
            <div className="schools-homes roboto-normal-cararra-18px">Schools &amp; Homes</div>
            <div className="students roboto-normal-cararra-18px">Students</div>
            <Request className={signupBtn23Props.className}>{signupBtn23Props.children}</Request>
            <SignupBtn3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default X1;
