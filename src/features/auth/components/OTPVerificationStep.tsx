import { useRef } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const OtpVerificationStep = () => {
  const form = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    form.setValue(`otp.${index}`, value);

    // move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    // move back on backspace
    if (e.key === "Backspace" && !form.getValues(`otp.${index}`) && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-full bg-transparent text-center">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-serif text-zinc-100">
          Verify Your Account
        </h1>
        <p className="text-gray-400 text-base mt-1">
          Enter the code we sent to your email to verify.
        </p>
      </div>

      <Form {...form}>
        {/* real submit function will be implemented later */}
        <form
          onSubmit={form.handleSubmit((data) => {
            const otpCode = data.otp.join("");
            console.log("OTP:", otpCode);
          })}
          className="space-y-6 max-w-xs m-auto"
        >
          {/* OTP Boxes */}
          <div className="flex justify-center gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <FormField
                key={index}
                control={form.control}
                name={`otp.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        maxLength={1}
                        ref={(el) => {
                          field.ref(el);
                          inputsRef.current[index] = el;
                        }}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-10 h-12 text-center text-lg bg-transparent border-zinc-200/50 text-gray-200 rounded-md"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
          </div>

          {/* Resend */}
          <p className="text-sm text-gray-400 text-center">
            Didn’t receive OTP code?{" "}
            <span className="text-cyan-500 hover:text-cyan-400 cursor-pointer">
              Resend
            </span>
          </p>

          {/* Verify Button */}
          <Button
            type="submit"
            className="w-full bg-[#0097b2] hover:bg-[#00869d] text-white rounded-lg h-10"
          >
            Verify
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default OtpVerificationStep;
