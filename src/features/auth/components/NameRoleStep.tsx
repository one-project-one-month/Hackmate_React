import React from "react";
import { useForm } from "react-hook-form";
import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useStepIndicator from "../hooks/useStepIndicator";
import StepIndicator from "./StepIndicator";
import { zodResolver } from "@hookform/resolvers/zod";
import { nameRoleSchema, type NameRoleFormData } from "../types/signupSchemas";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppHook";
import { addCompletedSteps, setStep, updateData } from "../slice";

const ROLES = [
  { label: "Developer", value: "developer" },
  { label: "Designer", value: "designer" },
  { label: "Project Manager", value: "manager" },
  { label: "Other", value: "other" },
] as const;

const NameRoleStep: React.FC = () => {
  const { shouldShow, activeSteps, currentStepKey } = useStepIndicator();
  const dispatch = useAppDispatch();
  const { username, role } = useAppSelector((state) => state.auth.data);

  const form = useForm<NameRoleFormData>({
    defaultValues: {
      name: username || "",
      role: role || "",
    },
    resolver: zodResolver(nameRoleSchema),
  });

  const { errors } = form.formState;
  const firstError = errors.name?.message || errors.role?.message;

  const onSubmit = (data: NameRoleFormData) => {
    dispatch(updateData({ username: data.name, role: data.role }));
    dispatch(addCompletedSteps("nameRole"));
    dispatch(setStep("techStack"));
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

      {firstError && (
        <div className="flex items-center justify-center gap-2 text-red-500 py-2">
          <AlertCircle size={18} />
          <span className="text-sm font-medium">{firstError}</span>
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-xs m-auto"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-gray-300">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Name"
                    className="bg-transparent border-zinc-200/50 text-gray-200 rounded-lg h-10 w-full"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-gray-300">Preferred Role</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-transparent border-zinc-200/50 text-gray-400 rounded-lg h-10 w-full">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-zinc-900 border-zinc-700 text-gray-200">
                    {ROLES.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#0097b2] hover:bg-[#00869d] text-white rounded-lg h-10 mt-6"
          >
            Continue
          </Button>
        </form>
      </Form>

      <p className="mt-5 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <button
          onClick={() => dispatch(setStep("login"))}
          className="text-cyan-500 hover:text-cyan-400 font-medium"
        >
          Sign in here
        </button>
      </p>
    </div>
  );
};

export default NameRoleStep;
