"use client";

import { useState } from "react";
import MicroFrontendLoader from "../../../components/MicroFrontendLoader";

export default function SkillsPage() {
  const [selectedTechnology, setSelectedTechnology] = useState<
    "react" | "nextjs" | null
  >(null);
  const [navigationMode, setNavigationMode] = useState<"spa" | "routes">("spa");

  const handleTechnologyClick = (tech: "react" | "nextjs") => {
    setSelectedTechnology(tech);
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Core Competencies
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Technical skills and tools I use to build amazing applications
          </p>
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-blue-800 dark:text-blue-300 font-medium">
              🚀 Click on React JS or Next.js below to see this portfolio built
              with those technologies in the same application!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4">⚛️</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Frontend
            </h3>
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleTechnologyClick("react")}
                  className="text-left hover:text-blue-600 dark:hover:text-blue-600 transition-colors cursor-pointer font-medium"
                >
                  React JS ✨
                </button>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Redux</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>JavaScript</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>TypeScript</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
                </div>
              </div>
              <div>HTML5, CSS3, SCSS</div>
              <div>AngularJS, Angular</div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleTechnologyClick("nextjs")}
                  className="text-left hover:text-blue-7\600 dark:hover:text-blue-600 transition-colors cursor-pointer font-medium"
                >
                  Next.js ✨
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              UI Tools
            </h3>
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <span>Material UI</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Bootstrap</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Tailwind CSS</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-5/6"></div>
                </div>
              </div>
              <div>EditorJS</div>
              <div>SendGrid</div>
              <div>Highcharts, D3.js</div>
              <div>Ag-Grid, jQuery</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4">🏗️</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Architecture
            </h3>
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <span>Micro-frontend</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Module Federation</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-5/6"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Redux Toolkit</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>React Hooks</div>
              <div>REST APIs</div>
              <div>Component Design</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              DevOps & Tools
            </h3>
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <span>Webpack</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>NPM/Yarn</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Vite</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>GitHub</span>
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>GitLab, Bitbucket</div>
              <div>Jest, Testing Library</div>
              <div>CI/CD, Agile</div>
            </div>
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            AI-Powered Development
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">🤖</span>
                  AI Tools I Use
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                    Cursor AI
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                    GitHub Copilot
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                    ChatGPT
                  </span>
                  <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">
                    Claude
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Productivity Impact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-300">
                      Code Generation Speed
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      +300%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-300">
                      Bug Detection & Fix
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      +250%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-300">
                      Test Coverage
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      +200%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Mode Selector */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Choose Navigation Pattern
          </h3>
          <div className="flex justify-center">
            <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 max-w-md">
              <button
                onClick={() => setNavigationMode("spa")}
                className={`flex-1 px-6 py-3 text-sm font-medium rounded-md transition-colors ${
                  navigationMode === "spa"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                SPA Mode
              </button>
              <button
                onClick={() => setNavigationMode("routes")}
                className={`flex-1 px-6 py-3 text-sm font-medium rounded-md transition-colors ${
                  navigationMode === "routes"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Route-based
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            {navigationMode === "spa"
              ? "Single page with smooth scrolling navigation"
              : "Separate routes for each section"}
          </p>
        </div>
      </div>

      {/* Micro Frontend Loader */}
      {selectedTechnology && (
        <MicroFrontendLoader
          technology={selectedTechnology}
          navigationMode={navigationMode}
          onClose={() => setSelectedTechnology(null)}
        />
      )}
    </div>
  );
}
