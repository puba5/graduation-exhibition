import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectSniffetList from "./projectSniffetList";
import axios from "axios";

const COLUMN_LIST = ["Projects", "Developer", "Professor", "Sort"];

export default function ProjectList() {
  const [checkCount, setCheckCount] = useState(0);
  const [titleList, setTitleList] = useState([]);

  const getTitleList = () => {
    axios
      .get("http://101.101.216.23:4000/select")
      .then((response) => {
        setTitleList(response.data.titleList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTitleList();
  }, []);

  return (
    <Wrapper>
      <Header>
        <PropsCount>
          {titleList.length}개 중 {checkCount}개의 졸업 프로젝트를 선택하셨습니다.
        </PropsCount>
        <ButtonList>
          {COLUMN_LIST.map((column) => (
            <FilterButton>{column} ▼</FilterButton>
          ))}
        </ButtonList>
      </Header>
      <ProjectSniffetList
        checkCount={checkCount}
        setCheckCount={setCheckCount}
        titleList={titleList}
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
