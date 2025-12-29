"use client";

import { FcGoogle } from "react-icons/fc";

interface LoginGoogleProps {
  buttonText?: string;
  disabled?: boolean;
}

export default function LoginGoogle({
  buttonText = "Continue with Google",
  disabled = false,
}: LoginGoogleProps) {
  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth
    console.log("Google login clicked");
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      disabled={disabled}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-gray-700"
    >
      <FcGoogle className="w-5 h-5" />
      {buttonText}
    </button>
  );
}
