import React from "react";
import * as S from "./Navbar.Style";
export default function NavbarUI({ isLogin, onClickLogOut, navigate }) {
  return (
    <S.Wrapper>
      {isLogin ? (
        <S.LoginButton onClick={onClickLogOut}>Log Out</S.LoginButton>
      ) : (
        <S.Container>
          <S.LoginButton onClick={() => navigate("login")}>
            Log In
          </S.LoginButton>
          <S.LoginButton onClick={() => navigate("register")}>
            Sign Up
          </S.LoginButton>
        </S.Container>
      )}
    </S.Wrapper>
  );
}
