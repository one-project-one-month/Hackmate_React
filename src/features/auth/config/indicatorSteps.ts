import type { AuthStep, IndicatorStepkey, StepDef } from "../types/authSteps";

export const IndicatorStep: StepDef[] = [
  { key: "accountInfo", skipFor: ["github"] },
  { key: "avatar", skipFor: ["github"] },
  { key: "nameRole", skipFor: [] },
  { key: "techStack", skipFor: [] },
];

export const AuthToIndicator: Partial<Record<AuthStep, IndicatorStepkey>> = {
  accountInfo: "accountInfo",
  avatar: "avatar",
  nameRole: "nameRole",
  techStack: "techStack",
};
