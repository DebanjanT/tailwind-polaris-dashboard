import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-11/12 md:w-1/2">
        <img
          src="https://dtewary.blr1.digitaloceanspaces.com/logo/dtewary-brand-logo.png"
          alt="logo"
          className="w-28 md:w-32 h-auto mb-3 -ml-2"
        />
        {/* Login Method Toggle */}
        <h2 className="text-base font-semibold text-gray-900 mb-3">
          Login using
        </h2>
        <div className="flex space-x-2 mb-4">
          <button className="px-3 py-1.5 bg-[#891B3F] text-white text-sm font-medium rounded-full">
            Login ID / Customer ID
          </button>
          <button className="px-3 py-1.5 bg-gray-200 text-gray-900 text-sm font-medium rounded-full">
            Debit Card No.
          </button>
        </div>

        {/* Login ID Field */}
        <div className="mb-3">
          <label className="flex items-center text-[#891B3F] text-sm font-medium mb-1">
            Login ID / Customer ID{" "}
            <IoInformationCircleOutline className="ml-1" />
          </label>
          <input
            type="text"
            placeholder="Enter ID"
            className="w-full px-3 py-1.5 border border-red-500 rounded-md text-sm focus:outline-none"
          />
          <p className="text-red-500 text-sm mt-1">
            ❗ Please enter your Customer ID
          </p>
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="text-gray-900 text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Login Directly To */}
        <div className="mb-3">
          <label className="text-gray-900 text-sm font-medium">
            Login directly to
          </label>
          <select className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none appearance-none">
            <option>Dashboard</option>
          </select>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#891B3F] text-white py-2 rounded-md text-sm font-medium">
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-700 text-sm mt-3">
          First time user?{" "}
          <a href="#" className="text-[#891B3F] font-semibold hover:underline">
            REGISTER HERE
          </a>
        </p>
        <Link
          to="/"
          className="block text-[#891B3F] text-xs mt-3 font-semibold hover:underline mb-3"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
