"use client";

import { SessionProvider } from "next-auth/react";
import { BookmarkProvider } from "@/context/BookmarkContext";
import SavedBookmarksModal from "@/components/bookmarks/SavedBookmarksModal";
import FloatingBookmarkButton from "@/components/bookmarks/FloatingBookmarkButton";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <BookmarkProvider>
        {children}
        <SavedBookmarksModal />
        <FloatingBookmarkButton />
      </BookmarkProvider>
    </SessionProvider>
  );
}
