"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

interface MicroFrontendLoaderProps {
  technology: "react" | "nextjs";
  navigationMode: "spa" | "routes";
  onClose: () => void;
}

// Dynamically import React components
const ReactPortfolio = dynamic(() => import("./ReactPortfolioWrapper"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-600 dark:text-slate-300">
          Loading React Portfolio...
        </p>
      </div>
    </div>
  ),
  ssr: false,
});

const MicroFrontendLoader: React.FC<MicroFrontendLoaderProps> = ({
  technology,
  navigationMode,
  onClose,
}) => {
  if (technology === "nextjs") {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-2xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">▲</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              You're Already Here!
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              This portfolio is built with Next.js. You're currently viewing the
              Next.js implementation.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Continue with Next.js
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (technology === "react") {
    return (
      <div className="fixed inset-0 z-50 bg-white dark:bg-slate-900 overflow-y-auto">
        {/* Close Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={onClose}
            className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-colors flex items-center space-x-2"
          >
            <span>✕</span>
            <span>Back to Next.js</span>
          </button>
        </div>

        {/* Technology Badge */}
        <div className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          ⚛️ React.js Experience
        </div>

        {/* React Portfolio Content */}
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-600 dark:text-slate-300">
                  Loading React Portfolio...
                </p>
              </div>
            </div>
          }
        >
          <ReactPortfolio navigationMode={navigationMode} />
        </Suspense>
      </div>
    );
  }

  return null;
};

export default MicroFrontendLoader;
