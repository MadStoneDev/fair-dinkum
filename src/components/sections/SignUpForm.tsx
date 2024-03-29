"use client";

import React, { useState } from "react";
import AuthEmail from "@/components/AuthEmail";
import AuthPassword from "@/components/AuthPassword";
import Link from "next/link";
import { LuAlertCircle } from "react-icons/lu";

export default function SignUpForm() {
  // States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    level: 0,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ level: 0, message: "" });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async () => {
    if (formData.password !== formData.confirmPassword)
      setErrors({ level: 1, message: "Oops! Passwords don't match." });
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
      <AuthPassword
        id={"confirm-password"}
        label={"Confirm your password"}
        name={"confirmPassword"}
        value={formData.confirmPassword}
        placeholder={"eg. loisLane/1234"}
        onChange={handleChange}
      />
      {errors.level > 0 && (
        <article className={`p-3 flex items-center gap-2 bg-red-500`}>
          <LuAlertCircle size={17} className={`text-white/80`} />
          <p className={`pt-0.5 text-xs text-white/80`}>{errors.message}</p>
        </article>
      )}
      <button
        className={`p-2 pt-2.5 pb-1.5 bg-white rounded-md`}
        onClick={handleSignUp}
      >
        Create Account
      </button>
      <p className={`text-xs text-center font-light`}>
        Already have an account?{" "}
        <Link href={"/auth/login"} className={`font-bold`}>
          Login here
        </Link>
        .
      </p>
    </main>
  );
}
