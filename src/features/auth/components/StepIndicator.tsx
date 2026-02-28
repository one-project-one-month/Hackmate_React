import type { IndicatorStepkey, StepDef } from "../types/authSteps";

type StepIndicatorProps = {
  step: StepDef[];
  currentStep: IndicatorStepkey;
};

import React from "react";

export default function StepIndicator({
  step,
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="flex justify-center mb-6 gap-3 w-70">
      {step.map((item) => (
        <div
          key={item.key}
          className={`${item.key === currentStep ? "bg-cyan-500" : "bg-zinc-300"} h-1 flex-1 rounded-full`}
        ></div>
      ))}
    </div>
  );
}
