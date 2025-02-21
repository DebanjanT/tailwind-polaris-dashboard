/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Banner,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  TextField,
} from "@dtewary/tw-polaris";
import { DoorOpen, InspectIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="grid place-items-center min-h-screen grad-bg p-2">
      <div className="max-w-md mx-auto mt-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-start items-center ">
             <img src="https://dtewary.blr1.digitaloceanspaces.com/logo/dtewary-brand-logo.png" alt="logo" className="w-28 md:w-32 h-auto"/>
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
                className="rounded-md"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                className="rounded-md"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />

              <button
                onClick={handleSubmit}
                style={{
                  marginTop: "1.5rem",
                }}
                className="flex justify-center items-center font-semibold bg-[#97144d] hover:bg-[#96294e] shadow-inner text-white w-full rounded py-3 px-3 my-3"
                type="submit"
              >
                <InspectIcon className="w-5 h-5 mr-2"/> Log In
              </button>
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
