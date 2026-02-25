import { useState } from 'react'; 
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import * as Form from '@radix-ui/react-form';
import { Check, Eye, EyeOff, Github, AlertCircle } from 'lucide-react'; 

const LoginStep = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md p-8 bg-[#1c1c1e] border border-gray-800 shadow-2xl rounded-2xl">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-serif text-zinc-100 mb-2">
          Sign In Your Account
        </h1>
        <p className="text-gray-400 text-sm">
          Welcome back! Please sign in to your account.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-4 text-red-500">
        <AlertCircle size={18} />
        <span className="text-sm font-medium">Email has not been found</span>
      </div>

      <Form.Root className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Email Field */}
        <Form.Field name="email" className="space-y-2">
          <div className="flex items-baseline justify-between">
            <Form.Label asChild>
              <Label.Root className="text-sm font-medium text-gray-300 ml-1">
                Email
              </Label.Root>
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              type="email"
              placeholder="aye50677@gmail.com"
              className="w-full px-4 py-3 rounded-xl bg-[#2c2c2e] border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-gray-500"
            />
          </Form.Control>
        </Form.Field>

        <Form.Field name="password" style={{ marginTop: '1.5rem' }}>
          <Form.Label asChild>
            <Label.Root className="text-sm font-medium text-gray-300 ml-1 block mb-2">
              Password
            </Label.Root>
          </Form.Label>
          <div className="relative">
            <Form.Control asChild>
              <input
                type={showPassword ? "text" : "password"}
                placeholder='. . . . . . . '
                className="w-full px-4 py-3 rounded-xl bg-[#2c2c2e] border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
              />
            </Form.Control>
            <button 
              type="button" 
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
        </Form.Field>
        
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Checkbox.Root
              id="remember"
              className="flex h-5 w-5 appearance-none items-center justify-center rounded bg-[#2c2c2e] border border-gray-700 outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <Checkbox.Indicator className="text-cyan-400">
                <Check size={14} strokeWidth={3} />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Label.Root htmlFor="remember" className="text-gray-400 cursor-pointer">
              Remember me
            </Label.Root>
          </div>
          <a href="#" className="text-cyan-500 hover:text-cyan-400 font-medium">
            Forgot Password?
          </a>
        </div>

        <Form.Submit asChild>
          <button className="w-full py-3 px-4 bg-[#0097b2] hover:bg-[#00869d] text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-900/20 cursor-pointer">
            Sign in
          </button>
        </Form.Submit>

        <button className="w-full py-3 px-4 bg-transparent border border-gray-700 hover:bg-gray-800 text-gray-200 font-medium rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer">
          <Github size={20} />
          Sign in with github
        </button>
      </Form.Root>

      <p className="mt-8 text-center text-sm text-gray-400">
        Don't have an account?{' '}
        <a href="#" className="text-cyan-500 hover:text-cyan-400 font-medium">
          Signup here
        </a>
      </p>
    </div>
  );
};

export default LoginStep;