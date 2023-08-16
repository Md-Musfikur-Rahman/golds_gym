import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" p="24px">
        <img src={Logo} alt="logo" />
      </Stack>
      <div className=" flex flex-row justify-center items-center gap-2 m-2">
        <p className="max-w-md font-normal text-gray-600 text-base">
          Made by{" "}
          <a
            className="font-bold "
            href="https://github.com/Md-Musfikur-Rahman"
            target="_blank"
            rel="noopener noreferrer"
          >
            MMR
          </a>{" "}
          with
        </p>

        <a
          href="https://legacy.reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="react"
            width={25}
            height={25}
          />
        </a>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="tailwind css"
            width={25}
            height={25}
          />
        </a>
      </div>
    </Box>
  );
};

export default Footer;
