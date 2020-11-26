import { useEffect, useState } from "react";
import styled from "styled-components";
import Socket, { deleteComment, putComment } from "../../api/socket/Socket";

const REVIEW_LIST = [
  { name: "1번 방문자", content: "너무 프로젝트가 멋지네요" },
  { name: "2번 방문자", content: "잘 보고 갑니다" },
  { name: "3번 방문자", content: "고생했다 얘들아" },
  { name: "4번 방문자", content: "서버는 어떤 기술스택을 사용하셨나요?" },
  { name: "주인장", content: "Express 사용했습니다" },
];

export default function Review() {
  const projectId = "poty";

  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    const comments = await Socket.getComments(projectId);
    setReviewList(comments);
  };

  const write = () => {
    putComment(projectId, { name: "주인장", content: "Express 사용했습니다" });
    refresh();
  };

  const remove = () => {
    deleteComment(projectId, {key: 1});
    refresh();
  };

  return (
    <>
      <ReviewListWrapper>
        {reviewList.map((reviewData, index) => {
          return (
            <ReviewWrapper key={index}>
              <Reviewer>{reviewData.name}</Reviewer>
              <ReviewContent>{reviewData.content}</ReviewContent>
            </ReviewWrapper>
          );
        })}
      </ReviewListWrapper>
      <WriteReviewWrapper>
        <WriteReviewHeader>
          <WriteReviewWriter>
            <p>닉네임</p>
            <WriteReviewWriterInput />
          </WriteReviewWriter>
          <WriteReviewButton onClick={() => write()}>작성하기</WriteReviewButton>
        </WriteReviewHeader>
        <div>내용</div>
        <WriteReviewContent></WriteReviewContent>
      </WriteReviewWrapper>
    </>
  );
}

const ReviewListWrapper = styled.div`
  width: 1000px;
  margin-top: 20px;
`;

const ReviewWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid black;
`;

const Reviewer = styled.div`
  margin-right: 10px;
  color: white;
  background: blueviolet;
  padding: 2px 10px;
  border-radius: 10px;
`;

const ReviewContent = styled.div``;

const WriteReviewWrapper = styled.div`
  width: 1000px;
  padding: 20px;
  border-radius: 20px;
  border: solid black 2px;
  margin-top: 20px;
`;

const WriteReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WriteReviewWriter = styled.div`
  display: flex;
  align-items: center;
`;

const WriteReviewWriterInput = styled.textarea`
  height: 25px;
  margin-left: 10px;
`;

const WriteReviewButton = styled.button`
  height: 30px;
  width: 100px;
  font-size: 18px;
  background-color: pink;
  border: none;
  border-radius: 10px;
`;

const WriteReviewContent = styled.textarea`
  width: 100%;
  height: 100px;
`;
