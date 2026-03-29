import type { AuthFormData } from "./authModel";
import type { AuthMethod, AuthStep, IndicatorStepkey } from "./authSteps";

export interface AuthState {
  isOpen: boolean;
  isAuthenticated: boolean;
  step: AuthStep;
  data: AuthFormData;
  loading: boolean;
  error?: string;
  authMethod?: AuthMethod;
  completedSteps: IndicatorStepkey[];
}
