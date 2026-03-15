import { useState, type KeyboardEvent } from "react";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppHook";
import { updateData, setStep, addCompletedSteps, setIsOpen } from "../slice";
import { useNavigate } from "@tanstack/react-router";
import useStepIndicator from "../hooks/useStepIndicator";
import StepIndicator from "./StepIndicator";

export default function TechStackStep() {
  const dispatch = useAppDispatch();
  const techStack = useAppSelector((state) => state.auth.data.techStack ?? []);
  const { shouldShow, activeSteps, currentStepKey } = useStepIndicator();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    const trimmed = inputValue.trim().toUpperCase();

    // validation — empty or duplicate
    if (!trimmed || techStack.includes(trimmed)) return;

    dispatch(updateData({ techStack: [...techStack, trimmed] }));
    setInputValue("");
  };

  const handleRemove = (tag: string) => {
    dispatch(
      updateData({
        techStack: techStack.filter((t) => t !== tag),
      }),
    );
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleSubmit = () => {
    dispatch(addCompletedSteps("techStack"));
    dispatch(setStep("success"));
    dispatch(setIsOpen(false));
    navigate({ to: "/browse" });
  };

  return (
    <div className="w-full bg-transparent max-w-150">
      {shouldShow && (
        <StepIndicator step={activeSteps} currentStep={currentStepKey} />
      )}

      <div className="text-center mb-6">
        <h1 className="text-3xl font-serif text-zinc-100">
          Create Your Account
        </h1>
        <p className="text-gray-400 text-base mt-1">
          Sign up and explore everything we offer
        </p>
      </div>

      {/* Tech Stack Input */}
      <div className="flex flex-col gap-3 w-full mb-6  ">
        <label className="text-white text-sm font-medium">Tech stack</label>

        {/* Input + Add button */}
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. React, TypeScript..."
            className="bg-white/10 backdrop-blur-lg border-zinc-600 text-white placeholder:text-zinc-500 flex-1"
          />
          <Button
            type="button"
            onClick={handleAdd}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-3"
          >
            <Plus size={18} />
          </Button>
        </div>

        {/* Tags */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 max-w-70 max-h-40 overflow-scroll no-scrollbar">
            {techStack.map((tag) => (
              <Badge
                key={tag}
                className="bg-cyan-600 text-zinc-200 text-sm border rounded-md border-cyan-600 hover:bg-cyan-900 px-3 py-1 flex items-center gap-1"
              >
                {tag}
                <button
                  onClick={() => handleRemove(tag)}
                  className="ml-1 hover:text-white transition text-red-500"
                >
                  <X size={16} />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Submit */}
      <Button
        onClick={handleSubmit}
        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white mb-2"
      >
        Create account
      </Button>

      {/* Sign in link */}
      <p className="text-center text-zinc-400 text-sm">
        Already have an account?{" "}
        <button
          onClick={() => dispatch(setStep("login"))}
          className="text-cyan-400 hover:text-cyan-300"
        >
          Sign in here
        </button>
      </p>
    </div>
  );
}
