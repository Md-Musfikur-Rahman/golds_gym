import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" p="24px">
        <img src={Logo} alt="logo" />
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
        gap="8px"
        m="8px"
      >
        <Typography maxWidth="448px" color="rgb(75 ,85, 99)">
          Made by{" "}
          <a
            style={{
              fontWeight: "bold",
              color: "#000",
            }}
            href="https://github.com/Md-Musfikur-Rahman"
            target="_blank"
            rel="noopener noreferrer"
          >
            MMR
          </a>{" "}
          with
        </Typography>

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
      </Stack>
    </Box>
  );
};

export default Footer;
