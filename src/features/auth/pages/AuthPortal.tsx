import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppHook";
import React from "react";
import LoginStep from "../components/LoginStep";
import SignUpStep from "../components/SignUpStep";
import EmailVerificationStep from "../components/EmailVerificationStep";
import AccountInfoStep from "../components/AccountInfoStep";
import AvatarStep from "../components/AvatarStep";
import NameRoleStep from "../components/NameRoleStep";
import TechStackStep from "../components/TechStackStep";
import ForgotPasswordStep from "../components/ForgotPasswordStep";
import OTPVerificationStep from "../components/OTPVerificationStep";
import ResetPasswordStep from "../components/ResetPasswordStep";
import { setIsOpen } from "../slice";

const AuthPortal = () => {
  const step = useAppSelector((state) => state.auth.step);
  const isOpen = useAppSelector((state) => state.auth.isOpen); //for current setup, it is not used because we want the dialog to open from the start, we will chane it back onece we have proper header

  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        dispatch(setIsOpen(open));
      }}
    >
      <DialogContent className="sm:max-w-150 sm:max-h-150 aspect-square p-8 md:p-0 rounded-2xl md:rounded-full bg-zinc-600/40 backdrop-blur-2xl border-none flex justify-center items-center">
        <div className="aspect-square flex justify-center items-center">
          {step === "login" && <LoginStep />}
          {step === "signUpMethod" && <SignUpStep />}
          {step === "emailVerification" && <EmailVerificationStep />}
          {step === "accountInfo" && <AccountInfoStep />}
          {step === "avatar" && <AvatarStep />}
          {step === "nameRole" && <NameRoleStep />}
          {step === "techStack" && <TechStackStep />}
          {step === "forgotPassword" && <ForgotPasswordStep />}
          {step === "otpVerification" && <OTPVerificationStep />}
          {step === "resetPassword" && <ResetPasswordStep />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthPortal;
