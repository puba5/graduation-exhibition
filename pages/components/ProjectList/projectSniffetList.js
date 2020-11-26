import React from "react";
import styled from "styled-components";

export default function ProjectSniffetList({ checkCount, setCheckCount, titleList }) {
  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckCount(checkCount + 1);
    } else {
      setCheckCount(checkCount - 1);
    }
  };

  return (
    <Wrapper>
      {titleList.map((title, index) => {
        return (
          <ProjectSniffet key={index} href={`/${title}`}>
            <SniffetTitle>
              <input onClick={handleChange} type="checkbox"></input>
              <Title>{title}</Title>
              <SniffetTag>CE</SniffetTag>
            </SniffetTitle>
            <SniffetDetail>홍익대학교 4-2 졸업 프로젝트입니다.</SniffetDetail>
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
