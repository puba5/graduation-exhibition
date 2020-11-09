import React, { useState } from "react";
import styled from "styled-components";
import ProjectSniffetList from "./projectSniffetList";

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

export default function ProjectList() {
  const [checkCount, setCheckCount] = useState(0);
  return (
    <Wrapper>
      <Header>
        <input type="checkbox" />
        <PropsCount>
          {checkCount} / {PROJECT_SNIFFET_INFO.length}
        </PropsCount>
        <ButtonList>
          <FilterButton>Author ▼</FilterButton>
          <FilterButton>Label ▼</FilterButton>
          <FilterButton>Projects ▼</FilterButton>
          <FilterButton>Milestones ▼</FilterButton>
          <FilterButton>Assignee ▼</FilterButton>
          <FilterButton>Sort ▼</FilterButton>
        </ButtonList>
      </Header>
      <ProjectSniffetList
        checkCount={checkCount}
        setCheckCount={setCheckCount}
        PROJECT_SNIFFET_INFO={PROJECT_SNIFFET_INFO}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1000px;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
`;

const FilterButton = styled.button`
  border: none;
  background: none;
`;

const ButtonList = styled.div`
  display: flex;
  gap: 5px;
`;

const PropsCount = styled.div``;
