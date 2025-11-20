"use client";

import React from "react";

interface ReactPortfolioProps {
  navigationMode: "spa" | "routes";
}

const ReactPortfolioWrapper: React.FC<ReactPortfolioProps> = ({
  navigationMode,
}) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-y-auto">
      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 bg-white dark:bg-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Professional Excellence & Career Journey
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 mt-6 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-blue-600 dark:text-blue-400">
                11+ years of dedicated excellence
              </strong>{" "}
              in front-end engineering, marked by consistent growth, technical
              leadership, and{" "}
              <strong className="text-green-600 dark:text-green-400">
                two well-earned promotions
              </strong>{" "}
              through exceptional performance and innovation at my current
              organization.
            </p>
          </div>

          <div className="space-y-12">
            {/* IQVIA - Current */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 p-8 rounded-xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Lead UI Developer
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    IQVIA Analytics Services Pvt. Ltd.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Mumbai | Jan 2019 – Present (7+ years of excellence)
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold shadow-sm">
                      🚀 2 Promotions Earned
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-sm">
                      👥 UI Team Leader
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-sm">
                      🎯 Technical Mentor
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 italic">
                    "Promoted twice through consistent excellence and technical
                    leadership"
                  </p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    🏆 Best Performer Q1 2025
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Technical Excellence & Leadership Impact
                  </h4>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Spearheaded</strong> enterprise-scale React JS,
                        Redux, and Material UI development with cutting-edge
                        micro-frontend architecture
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Engineered</strong> and customized EditorJS
                        integration for advanced WYSIWYG content editing with
                        rich formatting capabilities -{" "}
                        <a
                          href="https://editorjs.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600"
                        >
                          Editor JS
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Pioneered</strong> AI-assisted development
                        workflows using Cursor AI and GitHub Copilot,
                        dramatically accelerating delivery and achieving
                        superior test coverage
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Specialized</strong> in developing high-quality
                        components and features using React JS and JavaScript,
                        focusing on clean code and dedicated on-time delivery
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Elevated</strong> team performance through
                        strategic leadership, mentoring junior developers, and
                        implementing robust quality assurance processes
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Championed</strong> Agile methodologies through
                        active participation in sprint planning, pre-grooming,
                        and precise story estimation
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Orchestrated</strong> seamless AngularJS to
                        Angular 2+ migrations with sophisticated reusable
                        component architectures
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong>Architected</strong> and published
                        production-ready standalone packages on GitLab Package
                        Registry, npm, and yarn ecosystems, demonstrating
                        advanced package management expertise
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accion Labs */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Senior UI Developer
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    Accion Labs Pvt. Ltd.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Mumbai | Jan 2018 – Dec 2018 (1 year)
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Collaborated</strong> with TCS on a client-based
                    banking project, leveraging AngularJS, HTML, CSS, and
                    Bootstrap technologies to deliver robust financial solutions
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Developed</strong> 3-4 critical modules for a
                    comprehensive net banking project, implementing responsive
                    user interfaces and interactive components
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Utilized</strong> Backbase CXPManager platform to
                    deploy and manage widgets for various banking features,
                    ensuring seamless functionality across the application
                  </span>
                </li>
              </ul>
            </div>

            {/* L&T Infotech */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Software Engineer
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    Larsen & Toubro Infotech
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Mumbai | Apr 2015 – Dec 2017 (2.5+ years)
                  </p>
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded text-xs font-medium">
                      Career Foundation
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Developed</strong> web pages for 2-3 key projects in
                    Fotech division, focusing on HTML, CSS, JavaScript,
                    Bootstrap, and AngularJS implementation for client-facing
                    applications
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Created</strong> responsive dashboard pages with
                    dynamic data visualization, successfully integrating with
                    backend APIs to display real-time information
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Built</strong> interactive user interfaces for
                    multiple modules, ensuring responsive design and optimal
                    performance across different devices and browsers
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Pioneered</strong> real-time device monitoring
                    dashboards using advanced Highcharts and JavaScript
                    technologies, establishing the foundation for my career in
                    front-end development
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Mastered</strong> front-end development fundamentals
                    using AngularJS and jQuery, building a solid technical
                    foundation that launched my professional growth in web
                    development
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Complete Career Journey */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                🎯 Complete Career Progression: A Journey of Excellence
              </h3>
              <p className="text-center text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                From foundational engineering to technical leadership - a
                testament to{" "}
                <strong>
                  hard work, continuous learning, and exceptional performance
                </strong>
              </p>

              <div className="space-y-6">
                {/* Career Timeline */}
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl md:text-2xl text-white">🎓</span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      2015-2017
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      Software Engineer
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      L&T Infotech • Foundation
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl md:text-2xl text-white">💼</span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      2018
                    </h4>
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                      Senior UI Developer
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Accion Labs • Growth
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl md:text-2xl text-white">🚀</span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      2019-2021
                    </h4>
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                      Senior UI Developer
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      IQVIA
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl md:text-2xl text-white">⭐</span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      2022-2024
                    </h4>
                    <p className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                      Sr Software Developer- SDE2
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      IQVIA • 1st Promotion
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl md:text-2xl text-white">🏆</span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                      2025-Present
                    </h4>
                    <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                      Lead UI Developer- SDE3
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      IQVIA • 2nd Promotion
                    </p>
                  </div>
                </div>

                {/* Promotion Achievement Highlight */}
                <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                        2
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Promotions
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        7+
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Years at IQVIA
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        11+
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Total Experience
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-slate-700 dark:text-slate-300 mt-4 font-medium">
                    <strong>
                      "Hard work, dedication, and technical excellence
                      recognized through consistent career advancement"
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReactPortfolioWrapper;
