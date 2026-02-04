"use client";

import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 justify-center flex items-center w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full border-t dark:border-gray-800 py-6 mt-10">
        <div
          className="
            max-w-6xl mx-auto px-4
            flex flex-col gap-4
            sm:flex-row sm:justify-between sm:items-center
            text-sm text-gray-500 dark:text-gray-400
            text-center sm:text-left
          "
        >
          <p>© 2026 2k1s — All Rights Reserved</p>

          <div className="flex justify-center sm:justify-end gap-4 flex-wrap">
            <Link
              href="/common/privacy"
              className="hover:text-black dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/common/terms"
              className="hover:text-black dark:hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="/common/contact"
              className="hover:text-black dark:hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
