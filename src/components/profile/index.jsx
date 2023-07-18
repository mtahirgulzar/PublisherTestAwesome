import React from "react";
import { BackArrow } from "../common/icons/back-arrow";
import { Notification } from "../common/icons/notification";
import { ProfileLogo } from "../common/profile-logo";
import { Button } from "../common/button";
const TagsButton = [
  { tag: "#2023" },
  { tag: "#TODAYISMONDAY" },
  { tag: "#TOP" },
  { tag: "#POPS!" },
  { tag: "#WOW" },
  { tag: "#ROW" },
];

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-top">
        <div>
          <BackArrow />
        </div>
        <div>
          <h1 className="profile-top_title">자유톡</h1>
        </div>
        <div>
          <Notification />
        </div>
      </div>
      <div className="com_content-between">
        <div>
          <ProfileLogo />
        </div>
        <div>
          <button className="follow-btn com_btn_hover ">팔로우</button>
        </div>
      </div>
      <div>
        <h2 className="com_title">
          지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
        </h2>
        <p className="com_normal-text">
          지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시
          어떤 상품이 제일 괜찮았어? 후기 올라오는거 보면 로우라이즈? 그게 제일
          반응 좋고 그 테이블이 제일 재밌었다던데 맞아??? 올해 로우라이즈가
          트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘
          어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면
          어땠는지 후기 좀 공유해주라~~!
        </p>
        <div className="button-parents">
          {TagsButton?.map((item) => (
            <div>
              <Button item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
