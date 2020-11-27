import React, { useState } from "react";
import styled from "styled-components";
import UserInput from "./components/Login/userInput";
import Header from "./components/header";

const Login = () => {
  const [userLoginInfo, setUserLoginInfo] = useState({ id: null, pw: null });

  return (
    <Wrapper>
      <Header />
      <Title>졸업 전시회 회원가입</Title>
      <Content>
        <UserInput userLoginInfo={userLoginInfo} setUserLoginInfo={setUserLoginInfo} />
        <ContentNav>
          <LoginButton>회원가입하기</LoginButton>
        </ContentNav>
      </Content>
    </Wrapper>
  );
};

const BORDER_GREY = "#aaaaaa";

const Wrapper = styled.div`
  height: 100vh;
`;

const Title = styled.h1`
  width: fit-content;
  margin: 100px auto;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 30px;
`;

const Content = styled.div`
  width: fit-content;
  margin: 0 auto;
  background: white;
  width: 350px;
  padding: 35px 25px;
  border-radius: 10px;
  border: 1px solid ${BORDER_GREY};
`;

const ContentNav = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LoginButton = styled.button`
  background-color: white;
  cursor: pointer;
  border: none;
  outline: none;
  color: blue;
  font-size: 16px;
`;

export default Login;
