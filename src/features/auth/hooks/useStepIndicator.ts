import { useAppSelector } from "@/hooks/useAppHook";
import React from "react";
import { AuthToIndicator, IndicatorStep } from "../config/indicatorSteps";

export default function useStepIndicator() {
  const currentStep = useAppSelector((state) => state.auth.step);
  const authMethod = useAppSelector((state) => state.auth.authMethod);

  const currentIndicatorKey = AuthToIndicator[currentStep];

  if (!currentIndicatorKey || !authMethod) {
    return {
      shouldShow: false,
      activeSteps: [],
      currentStepKey: undefined,
    };
  }
  // decide to show or not
  // const shouldShow = currentIndicatorKey !== undefined && authMethod !== null;

  const activeSteps = IndicatorStep.filter(
    (step) => !step.skipFor.includes(authMethod),
  );
  return {
    shouldShow: true,
    activeSteps,
    currentstepKey: currentIndicatorKey,
  };
}
