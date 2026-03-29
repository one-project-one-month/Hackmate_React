import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Github, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAppDispatch } from "@/hooks/useAppHook";
import { setStep, setIsOpen } from "../slice";
import { useNavigate } from "@tanstack/react-router";
import { loginSchema, type LoginValues } from "../types/loginSchema";
import { loginUser } from "../api/api";

const LoginStep = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: LoginValues) => {
    setLoading(true);
    setError(null);

    try {
      // TODO: Implement actual login API call
      const response = await loginUser(data);
      console.log("Login response:", response);

      // Simulate API delay

      // TODO: Handle successful login
      // dispatch(loginSuccess(data));
      dispatch(setIsOpen(false));
      navigate({ to: "/browse" });

      console.log("Login successful!");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-transparent">
      <div className="text-center  mb-1">
        <h1 className="text-3xl font-serif text-zinc-100 mb-1">
          Sign In Your Account
        </h1>
        <p className="text-gray-400 text-base">
          Welcome back! Please sign in to your account.
        </p>
      </div>

      {error && (
        <div className="flex items-center justify-center gap-2  text-red-500 py-2 ">
          <AlertCircle size={18} />
          <span className="text-sm font-medium">{error}</span>
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 max-w-xs m-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1 ">
                <FormLabel className="text-gray-300 ml-1">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="aye50677@gmail.com"
                    className="bg-transparent border-zinc-200/50 text-gray-200 rounded-lg h-10 focus-visible:ring-cyan-500/50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-gray-300 ml-1">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder=". . . . . . . "
                      className="bg-transparent border-zinc-200/50 text-gray-200 rounded-lg h-10 focus-visible:ring-cyan-500/50"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 cursor-pointer"
                    >
                      {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          
          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-zinc-200/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                    />
                  </FormControl>
                  <FormLabel className="text-gray-400 text-sm cursor-pointer font-normal">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />
            <button
              type="button"
              onClick={() => dispatch(setStep("forgotPassword"))}
              className="text-cyan-500 hover:text-cyan-400 text-sm font-medium transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <div className="space-y-5 pt-2 mt-6">
            <Button
              type="submit"
              className="w-full bg-[#0097b2] hover:bg-[#00869d] text-white  rounded-lg h-10 shadow-lg shadow-cyan-900/20 cursor-pointer"
            >
            {loading ? "Signing in..." : "Sign in"}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full border-zinc-200/50 text-gray-200 bg-transparent hover:bg-zinc-500/50 hover:text-gray-200 rounded-lg h-10 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Github size={20} />
              Sign in with github
            </Button>
          </div>
        </form>
      </Form>

      <p className="mt-5 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <a
          onClick={() => {
            dispatch(setStep("signUpMethod"));
          }}
          className="text-cyan-500 hover:text-cyan-400 font-medium cursor-pointer"
        >
          Signup here
        </a>
      </p>
    </div>
  );
};

export default LoginStep;
