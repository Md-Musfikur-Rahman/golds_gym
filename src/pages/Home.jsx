import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExcercises from "../components/SearchExcercises";
import Excercises from "../components/Excercises";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExcercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;

const bodyParts = [
  "All",
  "Back",
  "Cardio",
  "Chest",
  "Lower Arms",
  "Lower Legs",
  "Neck",
  "Shoulders",
  "Upper Arms",
  "Upper Legs",
  "Waist",
];
