import styled from "styled-components";
import Chatting from "../components/chatting";
import Link from "next/link";

export default function User() {
  return (
    <div>
      <Wrapper>
        <LeftNav>
          <Link href="/messenger/user">
            <NavIcon></NavIcon>
          </Link>
          <Link href="/messenger/messenger">
            <NavIcon></NavIcon>
          </Link>
          <Link href="/messenger/setting">
            <NavIcon></NavIcon>
          </Link>
        </LeftNav>
        <ContentWrapper>
          <div>설정탭</div>
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
