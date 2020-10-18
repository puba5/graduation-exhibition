import styled from "styled-components";

const REVIEW_LIST = [
  { name: "1번 방문자", content: "너무 프로젝트가 멋지네요" },
  { name: "2번 방문자", content: "잘 보고 갑니다" },
  { name: "3번 방문자", content: "고생했다 얘들아" },
  { name: "4번 방문자", content: "서버는 어떤 기술스택을 사용하셨나요?" },
  { name: "주인장", content: "Express 사용했습니다" },
];

export default function Review() {
  return (
    <>
      <ReviewListWrapper>
        {REVIEW_LIST.map((reviewData) => {
          return (
            <ReviewWrapper>
              <Reviewer>{reviewData.name}</Reviewer>
              <ReviewContent>{reviewData.content}</ReviewContent>
            </ReviewWrapper>
          );
        })}
      </ReviewListWrapper>
      <div>
        <div>닉네임</div>
        <div>내용</div>
        <div>작성하기 버튼</div>
      </div>
    </>
  );
}

const ReviewListWrapper = styled.div`
  width: 1000px;
`;

const ReviewWrapper = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid black;
`;

const Reviewer = styled.div`
  margin-right: 10px;
  color: white;
  background: blueviolet;
  padding: 2px 10px;
  border-radius: 10px;
`;

const ReviewContent = styled.div``;

const WriteReviewWrapper = styled.div``;
const WriteReviewHeader = styled.div``;
