import React from "react";
import { Metadata } from "next";
import { Htag } from "@/components";

export const metadata: Metadata = {
  title: "About",
  description: "Generated About by create next app",
};

const About = (): React.JSX.Element => {
  return (
    <div>
      <Htag tag="h1">About</Htag>
    </div>
  );
};

export default About;
