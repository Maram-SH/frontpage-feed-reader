import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import AppLayout from "./layouts/AppLayout/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;