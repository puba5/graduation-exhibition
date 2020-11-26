import { useEffect, useState } from "react";
import styled from "styled-components";
import Socket, { deleteComment, putComment } from "../../../api/socket/Socket";

export default function Review() {
  const projectId = "poty";

  const [nickName, setNickname] = useState("");
  const [commentContent, setCommentContent] = useState("");

  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    const comments = await Socket.getComments(projectId);
    setReviewList(comments);
  };

  const write = () => {
    if (!nickName || !commentContent) return;
    putComment(projectId, { name: nickName, content: commentContent });
    setNickname("");
    setCommentContent("");
    refresh();
  };

  const remove = () => {
    deleteComment(projectId, { key: 1 });
    refresh();
  };

  const handleCommentInput = (value, setValue) => (event) => {
    setValue(event.target.value);
    console.log(value);
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
            <WriteReviewWriterInput
              value={nickName}
              onChange={handleCommentInput(nickName, setNickname)}
            />
          </WriteReviewWriter>
          <WriteReviewButton onClick={() => write()}>작성하기</WriteReviewButton>
        </WriteReviewHeader>
        <div>내용</div>
        <WriteReviewContent
          value={commentContent}
          onChange={handleCommentInput(commentContent, setCommentContent)}
        />
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
