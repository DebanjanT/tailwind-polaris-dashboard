import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import App from "./App";
import LoginForm from "./components/ui/LoginForm";
import BranchLocator from "./components/ui/AtmLocatorForm";
import NewCustomerForm from "./components/ui/CustomerAddForm";
import InvoiceList from "./components/ui/InvoiceList";
import BlogPage from "./pages/Land";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<App />} />
      <Route path="/comps/form-1" element={<LoginForm />} />
      <Route path="/comps/form-2" element={<BranchLocator />} />
      <Route path="/comps/form-3" element={<NewCustomerForm />} />
      <Route path="/comps/list-1" element={<InvoiceList />} />
    </Routes>
  );
};

export default MainRoutes;
