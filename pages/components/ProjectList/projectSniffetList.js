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
          <ProjectSniffet key={index} href={`/${sniffetInfo.link}`}>
            <SniffetTitle>
              <input onClick={handleChange} type="checkbox"></input>
              <Title>{sniffetInfo.title}</Title>
              <SniffetTag>{sniffetInfo.tag}</SniffetTag>
            </SniffetTitle>
            <SniffetDetail>{sniffetInfo.detail}</SniffetDetail>
          </ProjectSniffet>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ProjectSniffet = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #aaaaaa;
  width: 100%;
  padding: 12px 20px;
`;

const SniffetTitle = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;

const Title = styled.div``;

const SniffetTag = styled.div`
  padding: 0 5px;
  background: midnightblue;
  color: white;
  border-radius: 5px;
`;

const SniffetDetail = styled.div`
  color: #aaaaaa;
`;
