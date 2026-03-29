import { useAppSelector } from "@/hooks/useAppHook";
import { AuthToIndicator, IndicatorStep } from "../config/indicatorSteps";
import type { IndicatorStepkey } from "../types/authSteps";

export default function useStepIndicator():
  | { shouldShow: false; activeSteps: []; currentStepKey: undefined }
  | {
      shouldShow: true;
      activeSteps: typeof IndicatorStep;
      currentStepKey: IndicatorStepkey;
    } {
  const step = useAppSelector((state) => state.auth.step);
  const authMethod = useAppSelector((state) => state.auth.authMethod);

  const currentIndicatorKey = AuthToIndicator[step];

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
    (item) => !item.skipFor.includes(authMethod),
  );
  return {
    shouldShow: true,
    activeSteps,
    currentStepKey: currentIndicatorKey,
  };
}
