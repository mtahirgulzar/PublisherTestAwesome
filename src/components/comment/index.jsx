import React from "react";
import { Heart } from "../common/icons/back-arrow/heart";
import { Message } from "../common/icons/message";
import { Bookmark } from "../common/icons/bookmark";
import { ThreeDots } from "../common/icons/three-dots";
import { ImageMode } from "../common/icons/image-mode";
import { MarkedTick } from "../common/icons/marked-tick";

export const Comment = () => {
  return (
    <div className="comment">
      <div className="comment_top com_content-center">
        <button className="comment_common-btn com_btn_hover">
          <Heart />5
        </button>
        <button className="comment_common-btn com_btn_hover">
          <Message />5
        </button>
        <button className="comment_common-btn com_btn_hover">
          <Bookmark />
        </button>
        <button className="comment_common-btn com_btn_hover">
          <ThreeDots />
        </button>
      </div>

      <div className="comment_comment-post">
        <div className="comment-post_description  ">
          <div>
            <img src="/images/profileLogo.png" alt="" />
          </div>
          <div className="">
            <div className="com_content-between comment-title">
              <div className="comment-hello">
                <span className="com_title">안녕 나 응애 </span>
                <MarkedTick />
                <span className="com-day-ago">1일전</span>
              </div>
              <button className="com_btn_hover">
                <ThreeDots />
              </button>
            </div>
            <p className="comment_actual-comment">
              어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
              아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런
              제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브
              리뷰 올라온다고 하니 꼭 봐주세용~!
            </p>
            <div className="actual-comment_react">
              <button className="comment_common-btn  com_btn_hover">
                <Heart />5
              </button>
              <button className="comment_common-btn com_btn_hover">
                <Message />5
              </button>
            </div>
            <div className="comment_reply-section">
                <div>
                  <img src="/images/receiverProfile.png" alt="" />
                </div>
                <div className="reply_section">
                  <div className="com_content-between comment-title">
                    <div className="comment-hello">
                      <span className="com_title">ㅇㅅㅇ </span>
                      <span className="com-day-ago">1일전</span>
                    </div>
                    <button className="com_btn_hover">
                      <ThreeDots />
                    </button>
                  </div>
                  <p className="comment_actual-comment">
                  오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
                  </p>
                  <div className="actual-comment_react">
                    <button className="comment_common-btn com_btn_hover">
                      <Heart />5
                    </button> 
                  </div>
                  <div className="comment_reply-section"></div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comment_register-comment com_content-between ">
        <div className="image-mode com_content-between">
          <ImageMode />
          <div>
            <p className="comment-description-text">댓글을 남겨주세요.</p>
          </div>
        </div>
        <div>
          <button className="comment_register-btn com_btn_hover">등록</button>
        </div>
      </div>
    </div>
  );
};
