import { useAppDispatch } from "@/hooks/useAppHook";
import { setStep, setAuthMethod, updateData } from "../slice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signUpMethodSchema,
  type SignUpMethodFormData,
} from "../types/signupSchemas";

export default function SignUpStep() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpMethodFormData>({
    resolver: zodResolver(signUpMethodSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: SignUpMethodFormData) => {
    dispatch(updateData({ email: data.email }));
    dispatch(setAuthMethod("email"));
    dispatch(setStep("accountInfo"));
  };

  return (
    <div className="w-full flex flex-col gap-5 bg-transparent ">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold font-serif text-white">
          Create Your Account
        </h2>
        <p className="text-zinc-400 text-sm mt-1">
          Sign up and explore everything we offer
        </p>
      </div>

      {/* Email form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label className="text-white text-sm font-medium">Email</label>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 backdrop-blur-lg border-zinc-600 text-white placeholder:text-zinc-500"
          />
          {errors.email && (
            <p className="text-red-400 text-xs z-50 relative">
              {errors.email.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
        >
          Continue
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-zinc-600" />
        <span className="text-zinc-400 text-sm">Or</span>
        <div className="flex-1 h-px bg-zinc-600" />
      </div>

      {/* GitHub button */}
      <Button
        onClick={() => {
          dispatch(setAuthMethod("github"));
          dispatch(setStep("githubProcess"));
        }}
        className="w-full bg-transparent border border-zinc-500 text-white hover:bg-zinc-700 flex items-center gap-2"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        Sign up with github
      </Button>

      {/* Sign in link */}
      <p className="text-center text-zinc-400 text-sm">
        Already have an account?{" "}
        <button
          onClick={() => dispatch(setStep("login"))}
          className="text-cyan-400 hover:text-cyan-300"
        >
          Sign in here
        </button>
      </p>
    </div>
  );
}
