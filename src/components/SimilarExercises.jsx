import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Lodar from "./Lodar";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
    <Typography variant="h4" fontWeight="bold" color="#000" mb="33px" pl={5}>
      Similar{" "}
      <span style={{ color: "#FF9900", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Lodar />
      )}
    </Stack>
    <Typography
      variant="h4"
      fontWeight="bold"
      color="#000"
      mb="33px"
      mt={10}
      pl={5}
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Lodar />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
