"use client";

import { useState } from "react";
import AuthEmail from "@/components/AuthEmail";
import AuthPassword from "@/components/AuthPassword";
import Link from "next/link";

export default function LoginForm() {
  // States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className={`p-4 grid gap-6 w-full max-w-xs`}>
      <div className={`pb-3 w-full border-b border-white/40`}>
        <Link href={"/"} className={`text-xl`}>
          fair<span className={`pl-1 text-white font-medium`}>dinkum</span>
        </Link>
      </div>
      <AuthEmail
        id={"email"}
        label={"Enter your email"}
        name={"email"}
        value={formData.email}
        placeholder={"eg. clarkkent@dailyplanet.com"}
        onChange={handleChange}
      />
      <AuthPassword
        id={"password"}
        label={"Enter your password"}
        name={"password"}
        value={formData.password}
        placeholder={"eg. loisLane/1234"}
        onChange={handleChange}
      />
      <button className={`p-2 pt-2.5 pb-1.5 bg-white rounded-md`}>Login</button>
      <p className={`text-xs text-center font-light`}>
        Don't have an account yet?{" "}
        <Link href={"/auth/sign-up"} className={`font-bold`}>
          Sign up here
        </Link>
        .
      </p>
    </main>
  );
}
