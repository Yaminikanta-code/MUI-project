import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar.jsx";
import Navbar from "./components/Navbar.jsx";
import Add from "./components/Add.jsx";
import { Stack } from "@mui/material";
function App() {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={0} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </>
  );
}

export default App;
