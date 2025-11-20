"use client";

import { useTranslation } from "react-i18next";

const PackageShowcase = () => {
  const { t } = useTranslation();

  const packageCategories = [
    {
      title: t("packages.frontend"),
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500",
      packages: [
        {
          name: "Next.js",
          version: "16.0.0",
          description: "React framework for production",
        },
        {
          name: "React",
          version: "18.2.0",
          description: "UI library for building interfaces",
        },
        {
          name: "TypeScript",
          version: "5.x",
          description: "Typed JavaScript at scale",
        },
        {
          name: "Angular JS & Angular",
          version: "1.x & 2+",
          description: "UI framework for building web applications",
        },
      ],
    },
    {
      title: t("packages.stateManagement"),
      icon: "🗄️",
      color: "from-purple-500 to-pink-500",
      packages: [
        {
          name: "Redux Toolkit",
          version: "2.x",
          description: "Efficient Redux development",
        },
        {
          name: "Context API",
          version: "Built-in",
          description: "React state management",
        },
      ],
    },
    {
      title: t("packages.styling"),
      icon: "🎨",
      color: "from-green-500 to-teal-500",
      packages: [
        {
          name: "Tailwind CSS",
          version: "4.x",
          description: "Utility-first CSS framework",
        },
        {
          name: "Material UI",
          version: "5.x",
          description: "React component library",
        },
        {
          name: "Bootstrap",
          version: "3.x",
          description: "Most popuplar framework",
        },
      ],
    },
    {
      title: t("packages.buildTools"),
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
      packages: [
        {
          name: "Webpack",
          version: "5.x",
          description: "Module bundler and build tool",
        },
        {
          name: "Vite",
          version: "5.x",
          description: "Fast build tool for modern web",
        },
        {
          name: "npm",
          version: "10.x",
          description: "Node.js package manager",
        },
        {
          name: "Yarn",
          version: "1.22.x",
          description: "Fast, reliable package manager",
        },
      ],
    },
    {
      title: t("packages.testing"),
      icon: "🧪",
      color: "from-indigo-500 to-purple-500",
      packages: [
        {
          name: "Jest",
          version: "29.x",
          description: "JavaScript testing framework",
        },
        {
          name: "React Testing Library",
          version: "14.x",
          description: "Testing utilities for React",
        },
      ],
    },
    {
      title: t("packages.internationalization"),
      icon: "🌍",
      color: "from-cyan-500 to-blue-500",
      packages: [
        {
          name: "react-i18next",
          version: "14.0.0",
          description: "Internationalization for React",
        },
        {
          name: "i18next",
          version: "23.7.0",
          description: "Internationalization framework",
        },
        {
          name: "next-i18next",
          version: "15.2.0",
          description: "i18n for Next.js applications",
        },
        {
          name: "i18next-browser-languagedetector",
          version: "7.2.0",
          description: "Language detection",
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t("packages.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t("packages.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {packageCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${category.color} p-6 text-white`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Packages */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkgIndex}
                      className="flex items-start justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group-hover:scale-[1.02] transition-transform duration-200"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-slate-900 dark:text-white">
                            {pkg.name}
                          </h4>
                          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                            v{pkg.version}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {pkg.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Tools Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center">
                <span className="text-3xl mr-3">🤖</span>
                AI-Powered Development Tools
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Cursor AI",
                  description: "AI-powered code editor",
                  icon: "🎯",
                },
                {
                  name: "GitHub Copilot",
                  description: "AI pair programmer",
                  icon: "🚀",
                },
                {
                  name: "ChatGPT",
                  description: "AI assistant for development",
                  icon: "💬",
                },
                {
                  name: "Claude",
                  description: "AI for complex reasoning",
                  icon: "🧠",
                },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-center">
                    <span className="text-2xl mb-2 block">{tool.icon}</span>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Micro-Frontend Architecture */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center">
                <span className="text-3xl mr-3">🏗️</span>
                Micro-Frontend Architecture
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
                This portfolio demonstrates advanced micro-frontend architecture
                where multiple technologies (React, Next.js) run seamlessly
                within a single application, showcasing modern development
                practices and scalable architecture patterns.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    React Components
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Embedded React components with full functionality
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">▲</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Next.js Host
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Next.js serving as the host application
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    i18n Support
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Multi-language support with react-i18next
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageShowcase;
