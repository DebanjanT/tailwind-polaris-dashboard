import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import App from "./App";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<App />} />
    </Routes>
  );
};

export default MainRoutes;
