import React, { useState } from "react";
import styled from "styled-components";
import { Grey2 } from "../../styles/color";
import { LoginButton } from "../login/LoginSection";
import { instance } from "../../api/instance";
import { useNavigate } from "react-router-dom";

function WritePostSection() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onPostClick = async () => {
    const token = localStorage.getItem("accessToken");
    const body = {
      title,
      content,
    };
    const headers = {
      //key : value
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await instance.post("board/post-create/", body, { headers });
    } catch (e) {
      alert(e);
    } finally {
      navigate("/");
      alert("글 작성 완료!");
    }
  };

  return (
    <WritePostSectionWrapper>
      <TitleInput
        onChange={onTitleChange}
        placeholder="제목을 입력해주세요"
        maxLength={30}
      />
      <ContentTextArea
        onChange={onContentChange}
        placeholder="내용을 입력해주세요"
        maxLength={200}
      />
      <PostButton onClick={onPostClick}>글 작성하기</PostButton>
    </WritePostSectionWrapper>
  );
}
const WritePostSectionWrapper = styled.section`
  padding: 1rem 3.7rem 0;
`;

const TitleInput = styled.input`
  display: inline-block;
  width: 100%;
  background-color: ${Grey2};
  padding: 0.3rem 1rem;
  height: 4rem;
  margin-top: 0.6rem;
  border-radius: 1rem;
`;
const ContentTextArea = styled.textarea`
  display: inline-block;
  width: 100%;
  height: 40rem;
  background-color: ${Grey2};
  padding: 1rem 1rem;
  outline: none;
  border: none;
  resize: none;
  font-family: Pretendard;
  margin-top: 0.6rem;
  border-radius: 1rem;
`;

const PostButton = styled(LoginButton)``;

export default WritePostSection;
