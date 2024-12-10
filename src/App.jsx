import { useState } from "react"; // Import useState
import { Box, createTheme, Stack } from "@mui/material"; // Import Box
import { ThemeProvider } from "@emotion/react";
import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar.jsx";
import Navbar from "./components/Navbar.jsx";
import Add from "./components/Add.jsx";

function App() {
  const [mode, setMode] = useState("light"); // State for theme mode
  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // Create a theme based on the mode
  const darkMode = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkMode}>
      {/* Dynamic background and text color */}
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* Navbar with potential mode toggle */}
        <Navbar setMode={setMode} mode={mode} />
        <Stack direction="row" spacing={0} justifyContent="space-between">
          <Sidebar changeMode={changeMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
