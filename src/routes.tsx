import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DtLogoSvg from "./assets/logo";

// Lazy load components
const Login = lazy(() => import("./pages/auth/Login"));
const App = lazy(() => import("./App"));
const LoginForm = lazy(() => import("./components/ui/LoginForm"));
const BranchLocator = lazy(() => import("./components/ui/AtmLocatorForm"));
const NewCustomerForm = lazy(() => import("./components/ui/CustomerAddForm"));
const InvoiceList = lazy(() => import("./components/ui/InvoiceList"));
const BlogPage = lazy(() => import("./pages/Land"));

// Loading component
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <DtLogoSvg className="animate-pulse" />
    <p className="text-gray-500">Loading...</p>
  </div>
);

const MainRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/comps/form-1" element={<LoginForm />} />
        <Route path="/comps/form-2" element={<BranchLocator />} />
        <Route path="/comps/form-3" element={<NewCustomerForm />} />
        <Route path="/comps/list-1" element={<InvoiceList />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
