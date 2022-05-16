import React, { ComponentType, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { auth } from "../_action/user_action";
import { useNavigate } from "react-router-dom";

export const withAuth =
  (Component: ComponentType, option: boolean | null, adminRoute = null) =>
  <P extends {}>(props: P) => {
    // option : true => 로그인한 유저만, false => 로그인한 유저는 불가능
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      // @ts-ignore
      // 4. 로그인한 유저 막기
    }, []);

    return <Component {...props} />;
  };
