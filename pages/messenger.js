import styled from "styled-components";
import Chatting from "./components/chatting";

export default function Messenger() {
  return (
    <div>
      <Wrapper>
        <LeftNav>
          <NavIcon></NavIcon>
          <NavIcon></NavIcon>
          <NavIcon></NavIcon>
        </LeftNav>
        <ContentWrapper>
          <Chatting></Chatting>
        </ContentWrapper>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #cccccc;
`;

const LeftNav = styled.div`
  height: 600px;
  width: 80px;
  background: #964b00;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const NavIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background: burlywood;
  margin-bottom: 10px;
`;

const ContentWrapper = styled.div`
  height: 600px;
  width: 300px;
  background: white;
`;
