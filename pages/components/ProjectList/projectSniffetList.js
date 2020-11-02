import React from "react";
import styled from "styled-components";

const PROJECT_SNIFFET_INFO = [
  {
    title: "POTY",
    tag: "etc",
  },
  {
    title: "POTY",
    tag: "etc",
  },
  {
    title: "POTY",
    tag: "etc",
  },
];

export default function ProjectSniffetList() {
  return (
    <Wrapper>
      {PROJECT_SNIFFET_INFO.map((sniffetInfo, index) => {
        return (
          <ProjectSniffet key={index}>
            <SniffetTitle>
              <input type="checkbox"></input>
              <div>{sniffetInfo.title}</div>
              <SniffetTag>{sniffetInfo.tag}</SniffetTag>
            </SniffetTitle>
            <SniffetDetail>마지막 업데이트는 1일 전입니다.</SniffetDetail>
          </ProjectSniffet>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ProjectSniffet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #aaaaaa;
  width: 100%;
  height: 50px;
  padding: 0 20px;
`;

const SniffetTitle = styled.div`
  display: flex;
  gap: 10px;
`;

const SniffetTag = styled.div`
  padding: 0 5px;
  background: midnightblue;
  color: white;
  border-radius: 5px;
`;

const SniffetDetail = styled.div`
  color: #aaaaaa;
`;
