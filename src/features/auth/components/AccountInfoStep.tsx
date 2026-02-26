import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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

      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-serif text-zinc-100">
          Create Your Account
        </h1>
        <p className="text-gray-400 text-base mt-1">
          Sign up and explore everything we offer
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => {})}
          className="space-y-4 max-w-xs m-auto"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="bg-transparent border-zinc-200/50 text-gray-200 rounded-lg h-10 focus-visible:ring-cyan-500/50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="bg-transparent border-zinc-200/50 text-gray-200 rounded-lg h-10 focus-visible:ring-cyan-500/50"
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
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
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
                      className="bg-transparent border-zinc-200/50 text-gray-200 rounded-lg h-10 focus-visible:ring-cyan-500/50"
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
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Continue Button */}
          <Button
            type="submit"
            className="w-full bg-[#0097b2] hover:bg-[#00869d] text-white rounded-lg h-10 mt-4"
          >
            Continue
          </Button>
        </form>
      </Form>

      <p className="mt-5 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <a href="#" className="text-cyan-500 hover:text-cyan-400 font-medium">
          Sign in here
        </a>
      </p>
    </div>
  );
};

export default AccountInfoStep;