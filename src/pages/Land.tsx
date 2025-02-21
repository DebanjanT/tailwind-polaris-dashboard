import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const routes = [
  { path: "/login", name: "Login Form 1" },
  { path: "/comps/form-1", name: "Login Form 2" },
  { path: "/dashboard", name: "Dashboard" },
  { path: "/comps/form-2", name: "Branch Locator" },
  { path: "/comps/form-3", name: "New Customer Form" },
  { path: "/comps/list-1", name: "Invoice List" },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-full md:w-[600px] p-4 rounded-lg shadow-md">
        <img
          src="https://dtewary.blr1.digitaloceanspaces.com/logo/dtewary-brand-logo.png"
          alt="logo"
          className="w-28 md:w-32 h-auto  mb-3 -ml-1"
        />
        <h2 className="text-base font-semibold text-gray-900 mb-3">
          Available Component Routes
        </h2>
        <div className="border rounded-md overflow-hidden">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition group"
            >
              <span className="text-sm font-medium text-gray-800 group-hover:text-[#891B3F]">
                {route.name}
              </span>
              <FaArrowRight className="text-gray-600 group-hover:text-[#891B3F] group-hover:-translate-x-2 group-active:translate-x-2 transition duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
