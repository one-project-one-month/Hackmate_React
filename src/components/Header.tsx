import React from "react";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/hooks/useAppHook";
import { setIsOpen, setStep } from "@/features/auth/slice";
import logo from "@/assets/logo.png";

export default function Header() {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full py-5 px-12 flex justify-between items-center fixed top-0">
      <img src={logo} alt="Hackmate_logo" className="h-15 w-auto" />
      <div className="flex gap-5">
        <Button
          type="button"
          className="md:px-6 ring ring-cyan-500 bg-transparent hover:bg-cyan-600 hover:shadow-2xl"
          onClick={() => {
            dispatch(setIsOpen(true));
            dispatch(setStep("login"));
          }}
        >
          Log In
        </Button>
        <Button
          type="button"
          className="md:px-6 bg-cyan-600 hover:bg-zinc-400 hover:shadow-2xl"
          onClick={() => {
            dispatch(setIsOpen(true));
            dispatch(setStep("signUpMethod"));
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
