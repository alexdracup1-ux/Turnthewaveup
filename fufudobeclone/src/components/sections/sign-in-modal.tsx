"use client";

import { useState, FormEvent, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"email" | "password">("email");
  const [error, setError] = useState<string | null>(null);

  const resetState = useCallback(() => {
    setEmail("");
    setPassword("");
    setStep("email");
    setError(null);
  }, []);

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setStep("password");
  };

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Redirect to adobe.com after password is entered
    window.location.href = "https://www.adobe.com/";
  };

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && resetState()}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full border border-[#757575] bg-transparent text-[#2C2F36] h-auto px-5 py-1 text-sm font-bold tracking-wide transition-colors hover:bg-gray-100 focus-visible:ring-1 focus-visible:ring-ring"
        >
          Sign in
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white border-none text-[#2C2F36] w-[90vw] max-w-[460px] rounded-lg p-12">
        <div className="flex flex-col items-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/24a2c4e9-a79a-4cc9-ab49-7943b561b083-adobe-com/assets/svgs/adobe-logo-1.svg"
            alt="Adobe Logo"
            width={36}
            height={32}
            className="mb-4"
          />
          <h2 className="text-[32px] font-bold mb-2 text-[#2C2F36]">Sign in</h2>
          
          {step === "email" && (
            <>
              <p className="text-sm text-[#2C2F36] mb-6">
                New user?{" "}
                <a href="#" className="text-[#1473E6] hover:underline font-normal">
                  Create an account
                </a>
              </p>

              <form onSubmit={handleEmailSubmit} className="w-full space-y-4">
                <div className="grid w-full items-center gap-2 text-left">
                  <Label htmlFor="email" className="font-normal text-sm text-[#2C2F36]">
                    Email address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 rounded-md border-2 border-[#1473E6] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1473E6] bg-white text-[#2C2F36]"
                    autoComplete="email"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1473E6] hover:bg-[#0D66D0] rounded-full h-12 text-base font-bold text-white mt-4"
                >
                  Continue
                </Button>
              </form>

              <div className="w-full my-6 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">Or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="w-full space-y-3">
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50 text-[#2C2F36] font-normal text-base flex items-center justify-center gap-3"
                  onClick={() => {}}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.259c-.806.54-1.837.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fill="#34A853"/>
                    <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50 text-[#2C2F36] font-normal text-base flex items-center justify-center gap-3"
                  onClick={() => {}}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Continue with Facebook
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50 text-[#2C2F36] font-normal text-base flex items-center justify-center gap-3"
                  onClick={() => {}}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Continue with Apple
                </Button>
              </div>

              <div className="mt-6 space-y-2 text-center">
                <a href="#" className="block text-sm text-[#1473E6] hover:underline">
                  More sign-in options
                </a>
                <a href="#" className="block text-sm text-[#1473E6] hover:underline">
                  Get help signing in
                </a>
              </div>
            </>
          )}

          {step === "password" && (
            <>
              <p className="text-sm text-[#2C2F36] mb-6">
                {email}
              </p>

              <form onSubmit={handlePasswordSubmit} className="w-full space-y-4">
                <div className="grid w-full items-center gap-2 text-left">
                  <Label htmlFor="password" className="font-normal text-sm text-[#2C2F36]">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 rounded-md border-2 border-[#1473E6] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1473E6] bg-white text-[#2C2F36]"
                    autoComplete="current-password"
                  />
                </div>

                {error && <p className="text-sm text-red-600 text-left">{error}</p>}

                <Button
                  type="submit"
                  className="w-full bg-[#1473E6] hover:bg-[#0D66D0] rounded-full h-12 text-base font-bold text-white mt-4"
                >
                  Continue
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setStep("email")}
                  className="text-sm text-[#1473E6] hover:underline"
                >
                  Back
                </button>
              </div>
            </>
          )}
        </div>
        
        <DialogClose asChild>
          <button className="absolute right-4 top-4 rounded-full p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
            <X className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Close</span>
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}