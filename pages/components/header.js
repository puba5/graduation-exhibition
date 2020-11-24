import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <div />
      <UserInfo>
        <div>로그인</div>
      </UserInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const UserInfo = styled.div``;
