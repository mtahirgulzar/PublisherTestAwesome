import React from "react";
import { MarkedTick } from "../icons/marked-tick";
import { Dot } from "../icons/dot";

export const ProfileLogo = () => {
  return (
    <div className=" profile-logo">
      <div className="profile-logo-description  ">
        <div>
          <img src="/images/profileLogo.png" alt="" />
        </div>
        <div>
          <div className=" profile-logo-title">
            <div className="Profile-hello">
              <span className="com_title Noto-ff">안녕 나 응애 </span>
              <MarkedTick />
              <span className="com-day-ago Noto-ff">1일전</span>
            </div>
          </div>
          <span className="profile-logo-timeLine Roboto-ff">
            165cm <Dot /> 53kg
          </span>
        </div>
      </div>
    </div>
  );
};
