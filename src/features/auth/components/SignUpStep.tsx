import { useForm, SubmitHandler } from "react-hook-form";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { useAppDispatch } from "@/hooks/useAppHook";
import { setStep } from "../slice";

interface SignUpMethodValues {
  email: string;
}

const SignUpStep = () => {
  const dispatch = useAppDispatch();

  const form = useForm<SignUpMethodValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<SignUpMethodValues> = (data) => {
    console.log("Email submitted:", data.email);
  };

  return (
    <div className="w-full bg-transparent flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-serif text-zinc-100 mb-1">
          Create Your Account
        </h1>
        <p className="text-gray-400 text-sm">
          Sign up and explore everything we offer
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-xs space-y-5"
        >
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1 ">
                <FormLabel className="text-gray-300 ml-1">Email</FormLabel>
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

          {/* Continue Button */}
          <Button
            type="submit"
            className="w-full bg-[#0097b2] hover:bg-[#00869d] text-white rounded-lg h-10 font-medium shadow-lg shadow-cyan-950/10"
          >
            Continue
          </Button>

          {/* --- Or Divider --- */}
          <div className="flex items-center w-full my-2">
            <div className="grow h-px bg-zinc-600"></div>
            <span className="px-4 text-gray-400 text-[12px] font-normal">
              Or
            </span>
            <div className="grow h-px bg-zinc-600"></div>
          </div>

          {/* Github Button */}
          <Button
            type="button"
            variant="outline"
            className="w-full border-zinc-200/50 text-gray-200 bg-transparent hover:bg-zinc-500/50 hover:text-gray-200 rounded-lg h-10 flex items-center justify-center gap-2 cursor-pointer mt-6"
          >
            <Github size={18} className="text-gray-300" />
            <span className="font-normal">Sign up with github</span>
          </Button>
        </form>
      </Form>

      {/* Login Link */}
      <p className="mt-8 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => dispatch(setStep("login"))}
          className="text-cyan-500 hover:text-cyan-400 font-medium cursor-pointer ml-1"
        >
          Sign in here
        </button>
      </p>
    </div>
  );
};

export default SignUpStep;
