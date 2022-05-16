import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { logout } from "../../_action/user_action";
import NavbarUI from "./Navbar.Presenter";

const LoadingNavBar = styled.div`
  height: 33px;
`;

// 5. 로그인 여부에 따른 네비게이션바 UI변경

export default function Nabar() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const onClickLogOut = () => {};

  useEffect(() => {}, [navigate]);

  return (
    <NavbarUI
      isLogin={isLogin}
      onClickLogOut={onClickLogOut}
      navigate={navigate}
    />
  );
}
