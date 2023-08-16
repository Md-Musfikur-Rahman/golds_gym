import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExcerciseDetails from "./pages/ExcerciseDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box width="400px" m="auto" sx={{ width: { xl: "1488px" } }}>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/exercise/:id" Component={ExcerciseDetails} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
