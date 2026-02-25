import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Github, AlertCircle } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const LoginStep = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  return (
    <div className="w-full max-w-md p-8 bg-[#1c1c1e] border border-gray-800 shadow-2xl rounded-2xl">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-serif text-zinc-100 mb-2">
          Sign In Your Account
        </h1>
        <p className="text-gray-400 text-sm">
          Welcome back! Please sign in to your account.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-4 text-red-500 py-2 ">
        <AlertCircle size={18} />
        <span className="text-sm font-medium">Email has not been found</span>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-gray-300 ml-1">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="aye50677@gmail.com" 
                    className="bg-[#2c2c2e] border-zinc-600 text-gray-200 rounded-lg h-12 focus-visible:ring-cyan-500/50" 
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
                      className="bg-[#2c2c2e] border-zinc-600 text-gray-200 rounded-lg h-12 focus-visible:ring-cyan-500/50" 
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
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                className="border-zinc-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
              />
              <Label htmlFor="remember" className="text-gray-400 text-sm cursor-pointer font-normal">
                Remember me
              </Label>
            </div>
            <a href="#" className="text-cyan-500 hover:text-cyan-400 text-sm font-medium transition-colors">
              Forgot Password?
            </a>
          </div>

          <div className="space-y-8 pt-2 mt-6">
            <Button 
              type="submit" 
              className="w-full bg-[#0097b2] hover:bg-[#00869d] text-white text-xl font-normal rounded-lg h-12 shadow-lg shadow-cyan-900/20 cursor-pointer"
            >
              Sign in
            </Button>

            <Button 
              type="button" 
              variant="outline" 
              className="w-full border-zinc-600 text-gray-200 bg-transparent hover:bg-gray-600 hover:text-gray-200 rounded-lg h-12 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Github size={20} />
              Sign in with github
            </Button>
          </div>
        </form>
      </Form>

      <p className="mt-8 text-center text-sm text-gray-400">
        Don't have an account?{' '}
        <a href="#" className="text-cyan-500 hover:text-cyan-400 font-medium">
          Signup here
        </a>
      </p>
    </div>
  );
};

export default LoginStep;