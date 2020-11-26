import styled from "styled-components";
import Review from "./components/review";
import Header from "./components/header";

const EXHIBITION_INFO = {
  title: "POTY",
  link: "http://poty.1000ship.me/#/",
  description:
    "POTY is short of play of the youtube. 댓글을 분류하여 보여주는 프로젝트입니다. POTY is short of play of the youtube. 댓글을 분류하여 보여주는 프로젝트입니다.POTY is short of play of the youtube. 댓글을 분류하여 보여주는 프로젝트입니다.",
  maker: ["B511126 유현우", "B 천성혁", "B 백경현"],
  imageLink:
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0f6ad50d-2113-4398-a32e-10ab4ad32249/_2020-10-11__4.13.23.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201018%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201018T133951Z&X-Amz-Expires=86400&X-Amz-Signature=51d4ae5e025f3c45bbed5ed762e7ee7b8cbfd0089b8b27fbd2524f8c1ed8450c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22_2020-10-11__4.13.23.png%22",
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
