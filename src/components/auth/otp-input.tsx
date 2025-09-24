// app/components/auth/otp-input.tsx
"use client";

import {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ClipboardEvent,
} from "react";

interface OtpInputProps {
  onComplete: (otp: string) => void;
  loading: boolean;
  error: string;
}

export default function OtpInput({
  onComplete,
  loading,
  error,
}: OtpInputProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Auto-focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take the last character
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Submit when complete
    const otpString = newOtp.join("");
    if (otpString.length === 6) {
      onComplete(otpString);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Focus previous input on backspace when current input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, ""); // Remove non-digits

    if (pastedData.length === 6) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      onComplete(pastedData);
      // Focus the last input
      inputRefs.current[5]?.focus();
    }
  };

  const handleInputFocus = (index: number) => {
    // Select all text when input is focused
    inputRefs.current[index]?.select();
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3 justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={() => handleInputFocus(index)}
            disabled={loading}
            className={`w-12 h-12 text-center text-xl font-medium bg-light dark:bg-gray border-2 rounded-xl transition-all duration-500 ease-in-out focus:outline-none ${
              error
                ? "border-red-500 text-red-600 dark:text-red-400"
                : digit
                  ? "border-accent text-dark dark:text-light"
                  : "border-dark/20 dark:border-light/20 text-dark dark:text-light focus:border-accent"
            } disabled:opacity-50`}
          />
        ))}
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      <div className="text-center">
        <p className="text-xs font-light text-dark/60 dark:text-light/60">
          Didn't receive the code? Check your spam folder or try again in 60
          seconds
        </p>
      </div>

      {loading && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-sm font-light text-dark/60 dark:text-light/60">
            <div className="w-4 h-4 border-2 border-accent/20 border-t-accent rounded-full animate-spin"></div>
            Verifying code...
          </div>
        </div>
      )}
    </div>
  );
}
