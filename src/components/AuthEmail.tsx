import { LuMail } from "react-icons/lu";
import React from "react";

interface EmailProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthEmail({
  id = "email",
  name = "",
  label = "",
  value = "",
  placeholder = "",
  onChange,
}: EmailProps) {
  return (
    <article>
      <label htmlFor={name} className={`text-xs font-light`}>
        {label}
      </label>
      <div className={`relative w-full`}>
        <input
          type="email"
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`px-8 pt-2.5 pb-1.5 w-full bg-white/20 border border-white rounded-md outline-none font-light text-sm text-black/80 placeholder:text-white/60`}
        />
        <LuMail
          className={`absolute top-1/2 -translate-y-1/2 left-2 text-white/70`}
          size={18}
        />
      </div>
    </article>
  );
}
