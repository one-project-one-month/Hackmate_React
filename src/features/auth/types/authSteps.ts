export type AuthStep =
  | "signUpMethod"

  //   sign up email setup
  | "emailVerification"
  | "accountInfo"
  | "avatar"
  | "nameRole"
  | "techStack"

  //   sign up github
  | "githubProcess"

  // sign in email
  | "login"

  // sign in forgot password
  | "forgotPassword"
  | "otpVerification"
  | "resetPassword"

  // success
  | "succes";
