import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useAppDispatch } from "@/hooks/useAppHook";
import { setStep } from "../slice";

const ForgotPasswordStep = () => {
  const dispatch = useAppDispatch()
  
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <div className="w-full bg-transparent">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-serif text-zinc-100">
          Forgot Your Password?
        </h1>
        <p className="text-gray-400 text-base mt-1">
          Enter your email to receive OTP code.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            console.log(data);
          })}
          className="space-y-4 max-w-xs m-auto"
        >
          {/* Email */}
          {/* real validation rules will be implemented later */}
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: "Email is required",
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="bg-transparent border-zinc-200/50 text-gray-200 rounded-lg h-10"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#0097b2] hover:bg-[#00869d] text-white rounded-lg h-10 mt-4"
          >
            Send
          </Button>
        </form>
      </Form>

      <p className="mt-5 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <Button type="button" variant={"link"} onClick={() => dispatch(setStep("signUpMethod"))} className="no-underline hover:no-underline text-cyan-500 hover:text-cyan-400 font-medium">
          Signup here
        </Button>
      </p>
    </div>
  );
};

export default ForgotPasswordStep;
