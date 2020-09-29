import styled from "styled-components";

const CHATTING_DATA = [
  {
    userName: "고은",
    content: "안녕",
  },
  {
    userName: "정시원",
    content: "빨리해",
  },
  {
    userName: "고은",
    content: "안녕",
  },
  {
    userName: "정시원",
    content: "빨리해",
  },
];

export default function Messenger() {
  return (
    <div>
      <Wrapper>
        <LeftNav></LeftNav>
        <ContentWrapper>
          <ContentHeader>채팅</ContentHeader>
          <ChattingList>
            {CHATTING_DATA.map((chatting) => (
              <Chatting>
                <UserImage></UserImage>
                <ChattingContent>
                  <div>{chatting.userName}</div>
                  <div>{chatting.content}</div>
                </ChattingContent>
              </Chatting>
            ))}
          </ChattingList>
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
`;
const ContentWrapper = styled.div`
  height: 600px;
  width: 300px;
  background: white;
`;

const ContentHeader = styled.div`
  width: 400px;
  height: 70px;
  padding: 10px;
  font-size: 20px;
`;

const ChattingList = styled.div``;

const UserImage = styled.div`
  height: 50px;
  width: 50px;
  border: solid 2px black;
  margin-right: 15px;
`;

const Chatting = styled.div`
  height: 70px;
  padding: 5px;
  border: solid black 1px;
  display: flex;
  align-items: center;
`;

const ChattingContent = styled.div``;
