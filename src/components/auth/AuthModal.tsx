"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";

type Tab = "login" | "register";

interface AuthModalProps {
  onClose: () => void;
  onSuccess: () => void;
  message?: string;
}

export default function AuthModal({ onClose, onSuccess, message }: AuthModalProps) {
  const [tab, setTab]               = useState<Tab>("login");
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState("");

  // Login fields
  const [loginEmail, setLoginEmail]       = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register fields
  const [regName, setRegName]           = useState("");
  const [regEmail, setRegEmail]         = useState("");
  const [regPassword, setRegPassword]   = useState("");

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock body scroll while modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function switchTab(t: Tab) { setTab(t); setError(""); }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await signIn("credentials", {
      email: loginEmail,
      password: loginPassword,
      redirect: false,
    });
    setLoading(false);
    if (result?.error) { setError("Invalid email or password. Please try again."); return; }
    onSuccess();
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (regPassword.length < 6) { setError("Password must be at least 6 characters."); return; }
    setLoading(true);
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: regName, email: regEmail, password: regPassword }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError((data as { error?: string }).error ?? "Registration failed. Please try again.");
      setLoading(false);
      return;
    }

    // Auto sign-in after registration
    const result = await signIn("credentials", {
      email: regEmail,
      password: regPassword,
      redirect: false,
    });
    setLoading(false);
    if (result?.error) { setError("Account created! Please sign in."); setTab("login"); return; }
    onSuccess();
  }

  async function handleGoogle() {
    await signIn("google", { callbackUrl: window.location.href });
  }

  const googleEnabled = true; // hidden if provider not configured — handled server-side

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-5 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl leading-none transition-colors"
          >
            &times;
          </button>

          {/* Logo row */}
          <div className="flex items-center gap-2 mb-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="2" y="1" width="13" height="18" rx="2" fill="white" opacity="0.9"/>
              <rect x="5" y="6" width="7" height="1.5" rx="0.75" fill="#2563EB"/>
              <rect x="5" y="9.5" width="6" height="1.5" rx="0.75" fill="#2563EB"/>
              <rect x="5" y="13" width="5" height="1.5" rx="0.75" fill="#2563EB"/>
              <rect x="14" y="3" width="2.5" height="12" rx="1.25" fill="#F59E0B"/>
              <polygon points="14,15.5 16.5,15.5 15.25,18" fill="#374151"/>
            </svg>
            <span className="text-sm font-bold tracking-wide">WorksheetDownload.com</span>
          </div>

          <h2 className="text-xl font-bold leading-snug">
            {tab === "login" ? "Welcome back!" : "Create a free account"}
          </h2>
          <p className="text-blue-100 text-sm mt-0.5">
            {message ?? (tab === "login"
              ? "Sign in to access unlimited worksheets."
              : "Free forever — no credit card needed.")}
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex border-b border-gray-100">
          {(["login", "register"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                tab === t
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/40"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t === "login" ? "Sign In" : "Create Account"}
            </button>
          ))}
        </div>

        <div className="px-6 py-5 space-y-4">
          {/* ── Google button ── */}
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-2.5 hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium text-sm text-gray-700 shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="px-1">or</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Error banner */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-2.5 text-sm flex items-start gap-2">
              <span className="text-red-500 mt-0.5">&#9888;</span>
              <span>{error}</span>
            </div>
          )}

          {/* ── Login form ── */}
          {tab === "login" && (
            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl py-2.5 text-sm transition-colors shadow-sm"
              >
                {loading ? "Signing in…" : "Sign In"}
              </button>
            </form>
          )}

          {/* ── Register form ── */}
          {tab === "register" && (
            <form onSubmit={handleRegister} className="space-y-3">
              <input
                type="text"
                placeholder="Full name"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email address"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
              />
              <input
                type="password"
                placeholder="Password (min. 6 characters)"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
                minLength={6}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl py-2.5 text-sm transition-colors shadow-sm"
              >
                {loading ? "Creating account…" : "Create Free Account"}
              </button>
            </form>
          )}

          {/* Toggle link */}
          <p className="text-center text-xs text-gray-400 pb-1">
            {tab === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => switchTab(tab === "login" ? "register" : "login")}
              className="text-blue-600 font-semibold hover:underline"
            >
              {tab === "login" ? "Create one free" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
