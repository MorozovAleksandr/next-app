import React from "react";
import { Metadata } from "next";
import { Htag } from "@/components";

export const metadata: Metadata = {
  title: "Login",
  description: "Generated Login by create next app",
};

const Login = (): React.JSX.Element => {
  return (
    <div>
      <Htag tag="h1">Login</Htag>
    </div>
  );
};

export default Login;
