

const EmailVerificationStep = () => {
  const userEmail = "user@email.com";

  const handleResendEmail = () => {
    console.log("Resending email to:", userEmail);
  };

  return (
    <div className="w-full bg-transparent flex flex-col items-center justify-center p-4">
      {/* Email Illustration Icon */}
      <div className="mb-6 relative">
        <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center">
          <Mail size={48} className="text-yellow-500 fill-yellow-500/20" />
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-serif text-zinc-100 mb-4">
          Verify your Email Address
        </h1>
        <div className="space-y-1">
          <p className="text-gray-300 text-base">
            We've sent a confirmation link to{" "}
            <span className="font-semibold text-zinc-100">[{userEmail}]</span>.
          </p>
          <p className="text-gray-300 text-base">
            Please check your inbox and click the link to complete your
            registration.
          </p>
        </div>
      </div>

      {/* Resend Section */}
      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          Didn't receive the email? Check your spam folder or
        </p>
        <button
          onClick={handleResendEmail}
          className="mt-2 text-[#0097b2] hover:text-[#00869d] font-semibold text-lg transition-colors cursor-pointer"
        >
          Resend Email
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationStep;
