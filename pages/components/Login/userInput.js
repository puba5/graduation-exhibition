import React, { useState } from "react";
import styled from "styled-components";

export default function UserInput() {
  const [isIdRight, setIsIdRight] = useState(false);
  const [isPasswordRight, setIsPasswordRight] = useState(false);

  const idChangeHandler = (event) => {
    const changed = event.target.value;

    if (changed.length === 0) {
      setIsIdRight(false);
      return;
    }

    if (changed.length >= 6 && changed.length <= 16) {
      setIsIdRight(false);
      return;
    }

    setIsIdRight(true);
  };

  const pwdChangeHandler = (event) => {
    const changed = event.target.value;

    if (changed.length === 0) {
      setIsPasswordRight(false);
      return;
    }

    if (changed.length >= 6 && changed.length <= 16) {
      setIsPasswordRight(false);
      return;
    }

    setIsPasswordRight(true);
  };

  return (
    <>
      <ContentWrapper>
        <InputTitle>아이디</InputTitle>
        <Textarea isInputRight={isIdRight} onChange={idChangeHandler} type="text" />
        {isIdRight && <WarningMessage>아이디는 6자리에서 16자리 사이로 입력하세요.</WarningMessage>}
      </ContentWrapper>
      <ContentWrapper>
        <InputTitle>비밀번호</InputTitle>
        <Textarea isInputRight={isPasswordRight} onChange={pwdChangeHandler} type="password" />
        {isPasswordRight && (
          <WarningMessage>비밀번호는 6자리에서 16자리 사이로 입력하세요.</WarningMessage>
        )}
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  position: relative;
`;

const WarningMessage = styled.div`
  color: red;
  font-size: 12px;
  position: absolute;
  top: 84px;
`;

const Textarea = styled.input`
  border: 1px solid black;
  border-radius: 5px;

  width: 100%;
  height: 40px;
  font-size: 16px;

  padding: 3.2px 8px;
  margin: 3.2px 0 40px 0;

  resize: none;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => (props.isInputRight ? "red" : "green")};
  }
`;

const InputTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
`;
