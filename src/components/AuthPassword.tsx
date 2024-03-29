import React, { useState } from "react";
import { LuEye, LuEyeOff, LuLock } from "react-icons/lu";

interface PasswordProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthPassword({
  id = "password",
  name = "",
  label = "",
  value = "",
  placeholder = "",
  onChange,
}: PasswordProps) {
  // States
  const [showPassword, setShowPassword] = useState(false);

  return (
    <article>
      <label htmlFor={name} className={`text-xs font-light`}>
        {label}
      </label>
      <div className={`relative w-full`}>
        <input
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          className={`px-8 pt-2.5 pb-1.5 w-full bg-white/20 border border-white rounded-md outline-none font-light text-sm text-black/80 placeholder:text-white/60`}
          onChange={onChange}
        />
        <LuLock
          className={`absolute top-1/2 -translate-y-1/2 left-2 text-white/70`}
          size={17}
        />
        <div
          className={`cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 text-white/70`}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <LuEyeOff size={17} /> : <LuEye size={17} />}
        </div>
      </div>
    </article>
  );
}
