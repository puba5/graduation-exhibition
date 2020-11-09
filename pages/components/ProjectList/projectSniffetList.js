import React from "react";
import styled from "styled-components";

export default function ProjectSniffetList({ checkCount, setCheckCount, PROJECT_SNIFFET_INFO }) {
  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckCount(checkCount + 1);
    } else {
      setCheckCount(checkCount - 1);
    }
  };

  return (
    <Wrapper>
      {PROJECT_SNIFFET_INFO.map((sniffetInfo, index) => {
        return (
          <ProjectSniffet key={index}>
            <SniffetTitle>
              <input onClick={handleChange} type="checkbox"></input>
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
