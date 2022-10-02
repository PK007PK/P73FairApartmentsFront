import React from "react";
import { IoMdLogOut } from "@react-icons/all-files/io/IoMdLogOut";
import { ButtonLogoutStyle } from "./ButtonLogout.style";
import { navigate } from "gatsby";
import { detectEnvForApiCalls } from "src/utils/detectEnvForApiCalls";

export const ButtonLogout: React.FunctionComponent = (): JSX.Element => {
  const prefix = detectEnvForApiCalls();
  const logout = async () => {
    try {
      await fetch(`${prefix}/api/logout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ButtonLogoutStyle onClick={logout}>
      <IoMdLogOut />
    </ButtonLogoutStyle>
  );
};
