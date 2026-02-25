import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAppSelector } from "@/hooks/useAppHook";
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

const AuthPortal = () => {
  const step = useAppSelector((state) => state.auth.step);
  const isOpen = useAppSelector((state) => state.auth.isOpen); //for current setup, it is not used because we want the dialog to open from the start, we will chane it back onece we have proper header

  return (
    <Dialog open={true}>
      <DialogContent>
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
      </DialogContent>
    </Dialog>
  );
};

export default AuthPortal;
