import React from "react";
import { Box } from "@mui/material";

function Rightbar() {
  return (
    <>
      <Box
        bgcolor="green"
        flex={2}
        p={2}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        Rightbar
      </Box>
    </>
  );
}

export default Rightbar;
