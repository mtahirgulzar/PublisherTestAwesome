import React from "react";
import { MarkedTick } from "../icons/marked-tick";
import { Dot } from "../icons/dot"; 

export const ProfileLogo = () => {
  return (
    <div className=" ">
      <div className="profile-logo-description  ">
        <div>
          <img src="/images/profileLogo.png" alt="" />
        </div>
        <div>
          <div className=" profile-logo-title">
            <div className="Profile-hello">
              <span className="com_title">안녕 나 응애 </span>
              <MarkedTick />
              <span className="com-day-ago">1일전</span>
            </div>
          </div>
          <span className="profile-logo-timeLine">
            165cm <Dot /> 53kg
          </span>
        </div>
      </div>
    </div>
  );
};
