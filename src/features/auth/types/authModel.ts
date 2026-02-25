export interface AuthFormData {
  // method
  authMethod?: "email" | "github";

  // email sign up
  email?: string;
  password?: string;
  confirmPassword?: string;
  otp?: string;

  //   nameRole
  username?: string;
  role?: string;

  //   avatar
  avater?: File | null;

  //   techStack
  techStack?: string[];

  //   github sign up
  githubUserName?: string;
}
