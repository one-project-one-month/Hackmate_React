import React, { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { ImagePlus, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import useStepIndicator from "../hooks/useStepIndicator";
import StepIndicator from "./StepIndicator";
import { useAppDispatch } from "@/hooks/useAppHook";
import { addCompletedSteps, setStep, updateData } from "../slice";

interface AvatarFormValues {
  avatar: File | null;
}

const AvatarStep: React.FC = () => {

  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const { shouldShow, activeSteps, currentStepKey } = useStepIndicator();

  const form = useForm<AvatarFormValues>({
    defaultValues: {
      avatar: null,
    },
  });

  const { errors } = form.formState;

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (value: File | null) => void,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  const onSubmit = () => {
    dispatch(updateData({ avatar: preview }));
    dispatch(addCompletedSteps("avatar"));
    dispatch(setStep("nameRole"));
  };

  const handleSkip = () => {
    dispatch(updateData({ avatar: null }));
    dispatch(addCompletedSteps("avatar"));
    dispatch(setStep("nameRole"));
  };

  return (
    <div className="w-full bg-transparent">
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

      {errors.avatar && (
        <div className="flex items-center justify-center gap-2 text-red-500 py-2">
          <AlertCircle size={18} />
          <span className="text-sm font-medium">
            {errors.avatar.message as string}
          </span>
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-xs m-auto flex flex-col items-center"
        >
          <FormField
            control={form.control}
            name="avatar"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormControl>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="relative w-44 h-44 rounded-full border border-zinc-200/50 bg-zinc-500/40 flex items-center justify-center cursor-pointer overflow-hidden hover:bg-zinc-800/60 transition-all group"
                  >
                    {preview ? (
                      <img
                        src={preview}
                        alt="Avatar preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-zinc-400 flex flex-col items-center gap-2">
                        <ImagePlus
                          size={48}
                          strokeWidth={1.2}
                          className="text-zinc-200 opacity-80 group-hover:scale-110 transition-transform"
                        />
                      </div>
                    )}

                    <input
                      {...field}
                      value=""
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, onChange)}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="w-full flex flex-col space-y-0">
            <button
              type="button"
              className="text-zinc-200 text-xs hover:text-zinc-300 transition-colors cursor-pointer"
              onClick={() => handleSkip()}
            >
              Skip&gt;&gt;
            </button>

            <Button
              type="submit"
              className="w-full bg-[#0097b2] hover:bg-[#00869d] text-white rounded-lg h-10 mt-4"
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>

      <p className="mt-4 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <button
          onClick={() => dispatch(setStep("login"))}
          className="text-cyan-500 hover:text-cyan-400 font-medium transition-colors"
        >
          Sign in here
        </button>
      </p>
    </div>
  );
};

export default AvatarStep;
