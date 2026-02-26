import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

const AccountInfoStep = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = form.watch("password");
  const { errors } = form.formState;

  // Get first error message
  const firstError =
    errors.email?.message ||
    errors.password?.message ||
    errors.confirmPassword?.message;

  return (
    <div className="w-full bg-transparent">
       {/* Step Indicator */}
      <div className="flex justify-center mb-6">
        <div className="flex gap-3 w-70">
          <div className="h-1 flex-1 bg-cyan-500 rounded-full" />
          <div className="h-1 flex-1 bg-zinc-300 rounded-full" />
          <div className="h-1 flex-1 bg-zinc-300 rounded-full" />
          <div className="h-1 flex-1 bg-zinc-300 rounded-full" />
        </div>
      </div>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-serif text-zinc-100">
          Create Your Account
        </h1>
        <p className="text-gray-400 text-base mt-1">
          Sign up and explore everything we offer
        </p>
      </div>

      {/* Top Error Alert */}
      {firstError && (
        <div className="flex items-center justify-center gap-2 text-red-500 py-2">
          <AlertCircle size={18} />
          <span className="text-sm font-medium">{firstError}</span>
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            console.log(data);
          })}
          className="space-y-4 max-w-xs m-auto"
        >
          {/* Email */}
          {/* real validation rules will be implement later */}
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: "Email is required",
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="bg-transparent border-zinc-200/50 text-gray-200 rounded-lg h-10"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Password */}
          {/* real validation rules will be implement later */}
          <FormField
            control={form.control}
            name="password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="bg-transparent border-zinc-200/50 text-gray-200 rounded-lg h-10"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                    >
                      {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          {/* real validation rules will be implement later */}
          <FormField
            control={form.control}
            name="confirmPassword"
            rules={{
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="bg-transparent border-zinc-200/50 text-gray-200 rounded-lg h-10"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                    >
                      {showConfirm ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#0097b2] hover:bg-[#00869d] text-white rounded-lg h-10 mt-4"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AccountInfoStep;