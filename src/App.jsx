import { Routes, Route } from "react-router";
import { useState } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [ isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(prev => !prev)
  };

  return (
    <>
    <Header
    isSideBarOpen={isSideBarOpen}
    toggleSideBar={toggleSideBar}
    />

    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
    </>
  )
}

export default App;