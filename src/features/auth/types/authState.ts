import type { AuthFormData } from "./authModel";
import type { AuthStep } from "./authSteps";

export interface AuthState {
  isOpen: boolean;
  step: AuthStep;
  data: AuthFormData;
  loading: boolean;
  error?: string;
}
