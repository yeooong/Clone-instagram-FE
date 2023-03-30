import React from 'react';
import {
  SSideFooter,
  SSideFooterCopyright,
  SSideFooterH1,
  SSideFooterLi,
  SSideFooterP,
  SSideFooterTeamUserImg,
  SSideFooterTeamUserNickname,
  SSideFooterUserImg,
  SSideFooterUserNickname,
  SSideFooterUserWrap,
  SSideFooterWrap,
} from 'src/styles/SideFooter.styled';

import profileImage from 'src/assets/weasel.png';
import cat from 'src/assets/cat.jpeg';
import junscat from 'src/assets/junscat.jpeg';
import jjanggu from 'src/assets/jjanggu.jpeg';
import node from 'src/assets/node.png';

function SideFooter() {
  return (
    <SSideFooter>
      <div>
        <SSideFooterH1>회원님을 위한 추천</SSideFooterH1>
        <ul>
        <SSideFooterLi>
            <SSideFooterWrap>
              <SSideFooterTeamUserImg
                src={profileImage}
                alt="유저 프로필 사진"
              />
              <div>
                <SSideFooterTeamUserNickname>
                리액트 개발자 엄진식
                </SSideFooterTeamUserNickname>
                <SSideFooterP>회원님을 위한 추천</SSideFooterP>
              </div>
            </SSideFooterWrap>
            <a href="https://github.com/MyungAe" target="_blank">깃허브</a>
          </SSideFooterLi>
          <SSideFooterLi>
            <SSideFooterWrap>
              <SSideFooterTeamUserImg
                src={jjanggu}
                alt="유저 프로필 사진"
              />
              <div>
                <SSideFooterTeamUserNickname>
                  리액트 개발자 김은영
                </SSideFooterTeamUserNickname>
                <SSideFooterP>회원님을 위한 추천</SSideFooterP>
              </div>
            </SSideFooterWrap>
            <a href="https://github.com/yeooong" target="_blank">깃허브</a>
          </SSideFooterLi>
          <SSideFooterLi>
            <SSideFooterWrap>
              <SSideFooterTeamUserImg
                src={cat}
                alt="유저 프로필 사진"
              />
              <div>
                <SSideFooterTeamUserNickname>
                  노드 개발자 류현주
                </SSideFooterTeamUserNickname>
                <SSideFooterP>회원님을 위한 추천</SSideFooterP>
              </div>
            </SSideFooterWrap>
            <a href="https://github.com/ryu820" target="_blank">깃허브</a>
          </SSideFooterLi>
          <SSideFooterLi>
            <SSideFooterWrap>
              <SSideFooterTeamUserImg
                src={junscat}
                alt="유저 프로필 사진"
              />
              <div>
                <SSideFooterTeamUserNickname>
                  노드 개발자 조준석
                </SSideFooterTeamUserNickname>
                <SSideFooterP>회원님을 위한 추천</SSideFooterP>
              </div>
            </SSideFooterWrap>
            <a href="https://github.com/Bruni95" target="_blank">깃허브</a>
          </SSideFooterLi>
          <SSideFooterLi>
            <SSideFooterWrap>
              <SSideFooterTeamUserImg
                src={node}
                alt="유저 프로필 사진"
              />
              <div>
                <SSideFooterTeamUserNickname>
                  노드 개발자 박찬웅
                </SSideFooterTeamUserNickname>
                <SSideFooterP>회원님을 위한 추천</SSideFooterP>
              </div>
            </SSideFooterWrap>
            <a href="https://github.com/chanwoongpark97" target="_blank">깃허브</a>
          </SSideFooterLi>
        </ul>
      </div>
      <SSideFooterCopyright>
        &copy; 2023 DEVSTARGRAM FROM HANGHAE99
      </SSideFooterCopyright>
    </SSideFooter>
  );
}

export default SideFooter;
