import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <a href="/">홈으로 가기</a>
      <UserInfo>
        <a href="/login">로그인</a>
        <a href="/signup">회원가입</a>
      </UserInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 10px;
`;
