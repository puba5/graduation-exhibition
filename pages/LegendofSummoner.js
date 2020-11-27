import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Review from "./components/Review/review";
import Header from "./components/header";
import axios from "axios";

export default function POTY() {
  const [projectInfo, setProjectInfo] = useState({
    developer: [],
    link: "http://poty.1000ship.me/#/",
    imageLink:
      "https://user-images.githubusercontent.com/37804777/100363974-d1c01a00-3040-11eb-86ad-daf5c5015c6c.png",
  });
  const getData = () => {};

  console.log(projectInfo);
  useEffect(() => {
    getData();
    axios
      .get("http://101.101.216.23:4000/pages/LegendofSummoner")
      .then(function (response) {
        setProjectInfo({ ...projectInfo, ...response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <Header />
      <Title>{projectInfo.title}를 소개합니다.</Title>
      <SiteLink href={projectInfo.link}>사이트 연결 링크( 클릭 )</SiteLink>
      <WebexLink href={projectInfo.addr}>Webex로 연결</WebexLink>
      <ProjectMaker>
        개발자 :{" "}
        {projectInfo.developer.reduce((acc, dev) => {
          return acc + dev.id + " " + dev.password + ", ";
        }, "")}
      </ProjectMaker>

      <MainVideo src={projectInfo.imageLink}></MainVideo>
      <div>작품 설명</div>
      <ProjectDescription>{projectInfo.content}</ProjectDescription>
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
  color: white;
  border-radius: 20px;
  padding: 5px 20px;
  background-color: red;
  margin: 10px;
`;

const WebexLink = styled.a`
  color: white;
  border-radius: 20px;
  padding: 5px 20px;
  background-color: darkblue;
  margin: 10px;
`;

const ProjectMaker = styled.p`
  font-size: 20px;
  font-weight: bolder;
  background-color: #eeeeee;
  padding: 5px 10px;
`;

const MainVideo = styled.img`
  width: 1000px;
  border: 2px solid green;
  margin: 10px;
`;

const ProjectDescription = styled.div`
  width: 1000px;
  font-size: 20px;
  margin: 40px;
  padding: 10px;
  border: 2px solid black;
`;
