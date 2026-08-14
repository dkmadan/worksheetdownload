"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import AuthModal from "./AuthModal";
import Image from "next/image";

export default function NavAuthButton() {
  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState(false);

  // Still loading
  if (status === "loading") {
    return <div className="w-20 h-8 bg-gray-100 rounded-full animate-pulse" />;
  }

  if (session?.user) {
    const name  = session.user.name  ?? "";
    const email = session.user.email ?? "";
    const image = session.user.image ?? "";
    const initial = (name[0] ?? email[0] ?? "U").toUpperCase();

    return (
      <div className="flex items-center gap-2">
        {/* Avatar */}
        {image ? (
          <Image
            src={image}
            alt={name}
            width={28}
            height={28}
            className="rounded-full border border-gray-200"
          />
        ) : (
          <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold select-none">
            {initial}
          </div>
        )}

        {/* Name (hidden on mobile) */}
        <span className="hidden sm:block text-sm font-medium text-gray-700 max-w-[100px] truncate">
          {name || email}
        </span>

        {/* Sign out */}
        <button
          onClick={() => signOut()}
          className="text-sm font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-400 px-5 py-2 rounded-full transition-colors"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors shadow-sm"
      >
        Login
      </button>

      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          onSuccess={() => setShowModal(false)}
        />
      )}
    </>
  );
}
