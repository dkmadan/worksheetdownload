"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import AuthModal from "./AuthModal";
import Image from "next/image";
import { STAR_BUTTON_BG, STAR_NAVY } from "@/lib/starButtonBg";

export default function NavAuthButton() {
  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState(false);

  // Still loading
  if (status === "loading") {
    return <div className="w-16 h-8 bg-slate-100 rounded-full animate-pulse" />;
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
            className="rounded-full border border-slate-200"
          />
        ) : (
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold select-none shadow-2xs"
            style={{ backgroundColor: STAR_NAVY }}>
            {initial}
          </div>
        )}

        {/* Name (hidden on mobile) */}
        <span className="hidden lg:block text-xs font-semibold text-slate-700 max-w-[90px] truncate">
          {name || email}
        </span>

        {/* Sign out */}
        <button
          onClick={() => signOut()}
          className="text-xs font-bold text-white px-3.5 py-1.5 rounded-full transition-all hover:opacity-95 shadow-2xs cursor-pointer"
          style={{ backgroundImage: STAR_BUTTON_BG, backgroundSize: "cover", backgroundPosition: "center" }}
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
        className="text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-2xs transition-all hover:opacity-95 hover:scale-[1.02] cursor-pointer"
        style={{ backgroundImage: STAR_BUTTON_BG, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        Sign in
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

