import React from "react";
import { LuMail, LuUser2 } from "react-icons/lu";

interface TextProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  icon: React.JSX.Element | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthText({
  id = "email",
  name = "",
  label = "",
  value = "",
  placeholder = "",
  icon = (
    <LuUser2
      className={`absolute top-1/2 -translate-y-1/2 left-2 text-white/70`}
      size={18}
    />
  ),
  onChange,
}: TextProps) {
  return (
    <article>
      <label htmlFor={name} className={`text-xs font-light`}>
        {label}
      </label>
      <div className={`relative w-full`}>
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`px-8 pt-2.5 pb-1.5 w-full bg-white/20 border border-white rounded-md outline-none font-light text-sm text-black/80 placeholder:text-white/60`}
        />
        {icon}
      </div>
    </article>
  );
}
