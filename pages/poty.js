import styled from "styled-components";
import Review from "./components/Review/review";
import Header from "./components/header";

const EXHIBITION_INFO = {
  title: "POTY",
  link: "http://poty.1000ship.me/#/",
  description:
    "POTY is short of play of the youtube. 댓글을 분류하여 보여주는 프로젝트입니다. POTY is short of play of the youtube. 댓글을 분류하여 보여주는 프로젝트입니다.POTY is short of play of the youtube. 댓글을 분류하여 보여주는 프로젝트입니다.",
  maker: ["B511126 유현우", "B 천성혁", "B 백경현"],
  imageLink:
    "https://user-images.githubusercontent.com/37804777/100363974-d1c01a00-3040-11eb-86ad-daf5c5015c6c.png",
};

export default function POTY() {
  return (
    <Wrapper>
      <Header />
      <Title>{EXHIBITION_INFO.title}를 소개합니다.</Title>
      <SiteLink href={EXHIBITION_INFO.link}>사이트 연결 링크( 클릭 )</SiteLink>
      <a href="/messenger/messenger">채팅으로 연결</a>
      <ProjectMaker>개발자 : {EXHIBITION_INFO.maker.join(", ")}</ProjectMaker>
      <MainVideo src={EXHIBITION_INFO.imageLink}></MainVideo>
      <ProjectDescription>{EXHIBITION_INFO.description}</ProjectDescription>
      <Review />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 0 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 80px;
`;

const SiteLink = styled.a`
  border: 1px solid red;
  padding: 5px;
`;
const ProjectMaker = styled.p``;

const MainVideo = styled.img`
  width: 1000px;
  height: 500px;
  border: 2px solid green;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.div`
  width: 1000px;
`;
