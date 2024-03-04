import React from "react";
import { Button } from "@mui/material";
const Header = () => {
  const scrollToHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAboutMe = () => {
    document.getElementById("aboutMe").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="w-full flex justify-center bg-current mb-12">
      <div className="p-0 m-0 w-1/3 flex justify-between fixed">
        <Button onClick={scrollToHome}>Home</Button>
        <Button variant="text" onClick={scrollToAboutMe}>
          About Me
        </Button>
        <Button onClick={scrollToPortfolio}>Portfolio</Button>
        <Button>Contacts</Button>
      </div>
    </header>
  );
};

export default Header;
