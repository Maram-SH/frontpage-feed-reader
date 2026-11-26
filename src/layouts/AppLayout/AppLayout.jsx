import { Outlet } from "react-router";
import { useState } from "react";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./AppLayout.css";

function AppLayout() {
  const [ isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(prev => !prev)
  };

  const closeSideBar = () => setIsSideBarOpen(false);

  return (
    <div className="app-layout">
      <Header
        isSideBarOpen={isSideBarOpen}
        toggleSideBar={toggleSideBar}
      />

      <div className="app-layout-body">
        {isSideBarOpen && (
          <div
            className="sidebar-backdrop"
            onClick={closeSideBar}
            aria-hidden="true"
          />
        )}

        <Sidebar
          isSideBarOpen={isSideBarOpen}
          closeSideBar={closeSideBar}
        />

        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
};

export default AppLayout;