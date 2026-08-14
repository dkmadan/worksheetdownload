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
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold select-none"
            style={{ backgroundColor: STAR_NAVY }}>
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
          className="text-sm font-semibold text-white px-5 py-2 rounded-full transition-opacity hover:opacity-90 shadow-sm"
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
        className="text-white text-sm font-semibold px-5 py-2 rounded-full shadow-sm transition-opacity hover:opacity-90"
        style={{ backgroundImage: STAR_BUTTON_BG, backgroundSize: "cover", backgroundPosition: "center" }}
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
