import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Body1 } from "../../styles/font";
import { Grey2, Red, White } from "../../styles/color";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/instance";

function LoginSection() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isPendingRequest, setIsPendingRequest] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "id") {
      setId(value);
    } else {
      setPw(value);
    }
  };
  const postLoginData = async () => {
    if (isPendingRequest) return;
    const body = {
      email: id,
      password: pw,
    };
    try {
      setIsPendingRequest(true);
      const res = await instance.post("accounts/login/", body);
      if (res.status === 200) {
        console.dir(res);
        localStorage.setItem("accessToken", res.data.access);
      } else {
        alert("아이디나 비번이 틀렸어용");
      }
    } catch (e) {
      alert("아이디나 비번이 틀렸어용2");
    } finally {
      setIsPendingRequest(false);
      navigate("/");
    }
  };

  return (
    <LoginSectionWrapper>
      <div className="id">
        <Body1>아이디</Body1>
        <LoginInput
          name="id"
          ref={inputRef}
          value={id}
          onChange={handleInputChange}
          placeholder="아이디를 입력해주세요."
        />
      </div>
      <div className="pw">
        <Body1>비밀번호</Body1>
        <LoginInput
          name="pw"
          value={pw}
          onChange={handleInputChange}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </div>
      <LoginButton onClick={postLoginData}>로그인</LoginButton>
    </LoginSectionWrapper>
  );
}

const LoginSectionWrapper = styled.section`
  padding: 3.6rem 3.7rem 0;
  .pw {
    margin-top: 2rem;
  }
`;

const LoginInput = styled.input`
  display: inline-block;
  width: 100%;
  background-color: ${Grey2};
  padding: 0.3rem 1rem;
  height: 4rem;
  margin-top: 0.6rem;
  border-radius: 1rem;
`;

export const LoginButton = styled.button`
  background-color: ${Red};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${White};
  border-radius: 2rem;
  height: 5rem;
  font-size: 2rem;
  font-family: "GmarketSans";
  margin-top: 2rem;
`;

export default LoginSection;
