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

const ResetPasswordStep = () => {
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
      <div className="text-center mb-6">
        <h1 className="text-3xl font-serif text-zinc-100">
          Reset Your Password
        </h1>
        <p className="text-gray-400 text-base mt-1">
          Please create a new password to continue
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
          {/* new Password */}
          {/* real validation rules will be implemented later */}
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
                <FormLabel className="text-gray-300">New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your new password"
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

          {/* Confirm new Password */}
          {/* real validation rules will be implemented later */}
          <FormField
            control={form.control}
            name="confirmPassword"
            rules={{
              required: "Please confirm your new password",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Confirm New Password
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
            Confirm
          </Button>
        </form>
      </Form>

      <p className="mt-5 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <a href="#" className="text-cyan-500 hover:text-cyan-400 font-medium">
          Signup here
        </a>
      </p>
    </div>
  );
};

export default ResetPasswordStep;
