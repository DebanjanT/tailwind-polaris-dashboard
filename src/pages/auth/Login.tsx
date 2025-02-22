/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  TextField,
} from "@dtewary/tw-polaris";
import { InspectIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
    };
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    if (!newErrors.fullName && !newErrors.email && !newErrors.password) {
      navigate(`/dashboard?email=${formData.email}`, {});
    }
  };
  return (
    <div className="grid place-items-center min-h-screen bg-gray-100 p-2">
      <div className="max-w-md mx-auto mt-10">
        <Link
          to="/"
          className="block text-[#891B3F] text-xs mt-3 font-semibold hover:underline mb-3"
        >
          ← Back to Home
        </Link>
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-start items-center ">
              <img
                src="https://dtewary.blr1.digitaloceanspaces.com/logo/dtewary-brand-logo.png"
                alt="logo"
                className="w-24 h-auto"
              />
            </CardTitle>
            <CardDescription>
              {" "}
              Enter account to access all premium features and exclusive offers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Banner */}

            {/* Signup Form */}
            <div className="space-y-2" onSubmit={handleSubmit}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                className="rounded sm:rounded"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                className=" rounded sm:rounded"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />

              <Button
                onClick={handleSubmit}
                style={{
                  marginTop: "1.5rem",
                }}
                variantType="primary"
                icon={<InspectIcon />}
                className="w-full py-space-200"
                type="submit"
              >
                Log In{" "}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between text-sm">
            <a href="www.google.com" className="text-blue-600 hover:underline">
              Not registered? Sign up
            </a>
            <a href="www.google.com" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
