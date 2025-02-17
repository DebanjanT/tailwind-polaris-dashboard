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
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
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
    <div className="grid place-items-center min-h-screen bg-gradient-to-r from-colorBgFillMagic to-colorBgFillSuccess p-2">
      <div className="max-w-md mx-auto mt-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-start items-center gap-1">
              <DoorOpen /> Log In
            </CardTitle>
            <CardDescription>
              {" "}
              Enter account to access all premium features and exclusive offers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Banner */}
            <Banner
              tone="success"
              title="Join Us Today!"
              inCard
              icon={<Sparkles className="w-5 h-5" />}
              extended={true}
            >
              <p>Use any valid E-mail & Password to login to dashboard!</p>
            </Banner>

            {/* Signup Form */}
            <div className="mt-6 space-y-2" onSubmit={handleSubmit}>
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

              <Button
                onClick={handleSubmit}
                variantType="primary"
                style={{
                  marginTop: "1.5rem",
                }}
                className="w-full py-space-300"
                type="submit"
                icon={<InspectIcon />}
              >
                Log In
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between text-sm">
            <a href="#" className="text-colorStringLink hover:underline">
              Not registered? Sign up
            </a>
            <a href="#" className="text-colorStringLink hover:underline">
              Forgot password?
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
