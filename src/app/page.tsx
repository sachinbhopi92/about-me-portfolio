"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import PackageShowcase from "../components/PackageShowcase";

export default function Home() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "personal",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = async () => {
    try {
      // For static hosting (Hostinger), we use direct file path
      // This works with both static exports and server-side rendering
      const resumePath = "/Sachin_Bhopi_Lead_UI_Developer_SDE3.pdf";

      // Create a link to download the resume
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "Sachin_Bhopi_Lead_UI_Developer_SDE3.pdf";
      link.target = "_blank"; // Open in new tab as fallback
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
      // Fallback: try direct download
      window.open("/Sachin_Bhopi_Lead_UI_Developer_SDE3.pdf", "_blank");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1
              className="text-2xl font-bold text-slate-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => scrollToSection("home")}
            >
              Sachin Bhopi
            </h1>

            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Technology Badge */}
              <div className="hidden sm:flex items-center space-x-2 bg-black text-white px-3 py-1 rounded-full text-sm">
                <span>▲</span>
                <span>Next.js Host</span>
              </div>

              {/* Navigation Menu */}
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className={`transition-colors ${
                    activeSection === "about"
                      ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                      : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  }`}
                >
                  {t("nav.about")}
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className={`transition-colors ${
                    activeSection === "skills"
                      ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                      : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  }`}
                >
                  {t("nav.skills")}
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className={`transition-colors ${
                    activeSection === "experience"
                      ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                      : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  }`}
                >
                  {t("nav.experience")}
                </button>
                <button
                  onClick={() => scrollToSection("personal")}
                  className={`transition-colors ${
                    activeSection === "personal"
                      ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                      : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  }`}
                >
                  Personal
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`transition-colors ${
                    activeSection === "contact"
                      ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                      : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  }`}
                >
                  {t("nav.contact")}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("hero.title")}
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {t("hero.getInTouch")}
                </button>
                <button
                  onClick={downloadResume}
                  className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-slate-700 dark:text-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("hero.downloadResume")}
                </button>
              </div>

              <div className="flex items-center space-x-6 text-slate-600 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>sachin.bhopi92@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 9561692572</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src="/sachin.jpg"
                      alt="Sachin Bhopi - Lead UI Developer"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section id="about" className="py-10 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Professional Summary
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I bring{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  strong expertise in front-end engineering
                </strong>{" "}
                with a focus on React JS, JavaScript, and UI technologies. I
                have successfully developed, customized, and optimized modern
                web applications, including building reusable packages and
                integrating advanced content editing tools.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I am experienced in leveraging contemporary frameworks and tools
                such as React, EditorJS, npm/yarn, and GitLab, while ensuring{" "}
                <strong className="text-green-600 dark:text-green-400">
                  performance and security
                </strong>{" "}
                in complex enterprise environments. My background spans feature
                development using pure UI technologies, and accelerating
                delivery through AI-assisted workflows.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    11+
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    11+
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Core Expertise & Achievements
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
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
                      Built reusable packages and integrated advanced content
                      editing tools
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
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
                      Ensured performance and security in complex enterprise
                      environments
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
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
                      Accelerated delivery through AI-assisted workflows and
                      modern tooling
                    </span>
                  </li>
                </ul>
              </div>

              {/* Career Aspirations */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Career Aspirations
                </h3>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <p className="leading-relaxed">
                    <strong className="text-blue-600 dark:text-blue-400">
                      Technical Leadership:
                    </strong>{" "}
                    I aim to grow as a technical leader in front-end
                    architecture, focusing on scalable UI platforms and
                    performance optimization.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-green-600 dark:text-green-400">
                      Innovation & Mentorship:
                    </strong>{" "}
                    I seek to mentor teams, drive innovation in user experience,
                    and contribute to shaping best practices for secure and
                    efficient web applications.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-purple-600 dark:text-purple-400">
                      AI-Driven Development:
                    </strong>{" "}
                    I am passionate about leveraging AI tools to accelerate
                    development and improve code quality while maintaining
                    security standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Core Competencies
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
              <div className="text-2xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Frontend
              </h3>
              <div className="space-y-2 text-slate-600 dark:text-slate-300">
                <div>React JS, Redux</div>
                <div>JavaScript, TypeScript</div>
                <div>HTML5, CSS3, SCSS</div>
                <div>AngularJS, Angular</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
              <div className="text-2xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                UI Tools
              </h3>
              <div className="space-y-2 text-slate-600 dark:text-slate-300">
                <div>Material UI, Bootstrap</div>
                <div>Tailwind CSS</div>
                <div>Highcharts, D3.js</div>
                <div>Ag-Grid, jQuery</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
              <div className="text-2xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Architecture
              </h3>
              <div className="space-y-2 text-slate-600 dark:text-slate-300">
                <div>Micro-frontend</div>
                <div>Module Federation</div>
                <div>Redux Toolkit</div>
                <div>React Hooks</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
              <div className="text-2xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                DevOps & Tools
              </h3>
              <div className="space-y-2 text-slate-600 dark:text-slate-300">
                <div>Webpack, Vite</div>
                <div>GitHub, GitLab</div>
                <div>Jest, Testing Library</div>
                <div>CI/CD, Agile</div>
              </div>
            </div>
          </div>

          {/* Micro Frontend Showcase */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                🚀 True Micro-Frontend Architecture
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
                Experience the same portfolio content built with different
                frameworks running seamlessly in one application! Visit the
                skills page and click on React.js or Next.js to see
                micro-frontend architecture in action.
              </p>
              <a
                href="/routes/skills"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">✨</span>
                Try Interactive Skills Demo
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-10 px-4 bg-white dark:bg-slate-900"
      >
        <div className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
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
                      "Promoted twice through consistent excellence and
                      technical leadership"
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      🏆 Best Performer Q1 2025
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
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
                          <strong>Spearheaded</strong> enterprise-scale React
                          JS, Redux, and Material UI development with
                          cutting-edge micro-frontend architecture
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
                          <strong>Specialized</strong> in developing
                          high-quality components and features using React JS
                          and JavaScript, focusing on clean code and dedicated
                          on-time delivery
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
                          <strong>Championed</strong> Agile methodologies
                          through active participation in sprint planning,
                          pre-grooming, and precise story estimation
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
                      Bootstrap technologies to deliver robust financial
                      solutions
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
                      <strong>Developed</strong> web pages for 2-3 key projects
                      in Fotech division, focusing on HTML, CSS, JavaScript,
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
                      <strong>Mastered</strong> front-end development
                      fundamentals using AngularJS and jQuery, building a solid
                      technical foundation that launched my professional growth
                      in web development
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

                <div className="space-y-3">
                  {/* Career Timeline */}
                  <div className="grid md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-xl md:text-2xl text-white">
                          🎓
                        </span>
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
                        <span className="text-xl md:text-2xl text-white">
                          💼
                        </span>
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
                        <span className="text-xl md:text-2xl text-white">
                          🚀
                        </span>
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
                        <span className="text-xl md:text-2xl text-white">
                          ⭐
                        </span>
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
                        <span className="text-xl md:text-2xl text-white">
                          🏆
                        </span>
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
        </div>
      </section>

      {/* Education & Awards */}
      <section className="py-10 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Education
              </h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Information Technology
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    RAIT, Navi Mumbai — 2014
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">70.8%</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Diploma
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Information Technology
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Government Polytechnic Thane
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">84%</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    SSC
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Chaitanya Vidyalaya
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">90%</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Awards & Achievements
              </h2>
              <div className="space-y-2">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Best Performer Award
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        IQVIA - Q1 2025
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🏏</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Leadership Excellence
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Academic & sports leadership during engineering
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Details Section */}
      <section id="personal" className="py-10 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Personal Details
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-6">
              Beyond the code - get to know the person behind the developer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="text-2xl mr-3">🏠</span>
                  About Me
                </h3>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">📍</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white">
                        Location:
                      </strong>{" "}
                      Mumbai, Maharashtra, India
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">👨‍👩‍👧‍👦</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white">
                        Family:
                      </strong>{" "}
                      Happily married with a supportive family that motivates me
                      to excel
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">😊</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white">
                        Personality:
                      </strong>{" "}
                      Friendly and outgoing nature, easily makes new friends and
                      enjoys building connections with people from diverse
                      backgrounds
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🏏</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white">
                        Sports:
                      </strong>{" "}
                      Cricket enthusiast - played during engineering and still
                      love the game
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">🎓</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white">
                        Education:
                      </strong>{" "}
                      Bachelor of Engineering (IT) from RAIT, Navi Mumbai (2014)
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Interests & Hobbies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🎮</span>
                    <span className="text-slate-600 dark:text-slate-300">
                      Cricket
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">📚</span>
                    <span className="text-slate-600 dark:text-slate-300">
                      Play with my kids
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🍳</span>
                    <span className="text-slate-600 dark:text-slate-300">
                      Cooking
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">✈️</span>
                    <span className="text-slate-600 dark:text-slate-300">
                      Travel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Enthusiasm & AI */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="text-2xl mr-3">🤖</span>
                  AI & Modern Development
                </h3>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <p className="leading-relaxed">
                    <strong className="text-blue-600 dark:text-blue-400">
                      Code Enthusiast
                    </strong>{" "}
                    who embraces the power of AI in development. Currently
                    leveraging AI tools like <strong>Cursor AI</strong> and{" "}
                    <strong>GitHub Copilot</strong> to accelerate development
                    and improve code quality.
                  </p>
                  <p className="leading-relaxed">
                    The integration of AI in development is revolutionary - it's
                    not about replacing developers, but about{" "}
                    <strong className="text-green-600 dark:text-green-400">
                      amplifying our productivity
                    </strong>{" "}
                    and allowing us to focus on solving complex problems and
                    creating innovative solutions.
                  </p>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-lg mt-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                      AI Tools I Use Daily:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <span className="text-xl">🎯</span>
                        <span className="text-blue-800 dark:text-blue-300 font-medium">
                          Cursor AI
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <span className="text-xl">🚀</span>
                        <span className="text-purple-800 dark:text-purple-300 font-medium">
                          GitHub Copilot
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <span className="text-xl">💬</span>
                        <span className="text-green-800 dark:text-green-300 font-medium">
                          ChatGPT
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <span className="text-xl">🧠</span>
                        <span className="text-orange-800 dark:text-orange-300 font-medium">
                          Claude
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Fun Facts About Me
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-lg">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Best Performer
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Awarded Q1 2025 at IQVIA for UI excellence
                </p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-lg">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  AI Pioneer
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Early adopter of AI tools in development workflow
                </p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Problem Solver
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Love tackling complex challenges with creative solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
            Ready to bring your next project to life? I'm always interested in
            discussing new opportunities and innovative projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Email
              </h3>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sachin.bhopi92@gmail.com&su=Connecting from your portfolio&body=Hi Sachin,%0A%0AI found your portfolio and would like to connect with you."
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                sachin.bhopi92@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Phone
              </h3>
              <a
                href="tel:+919561692572"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                +91 9561692572
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/sachin-bhopi-85377077/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=919561692572&text=Hi%20Sachin,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WhatsApp Message
            </a>
            <a
              href="tel:+919561692572"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-slate-700 dark:text-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Route-Based Demo Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            🚀 Explore Route-Based Version
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
            Experience the same content with Next.js routing! Each section
            becomes a separate page with its own URL.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href="/routes/about"
              className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                👨‍💼
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                About Me
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Professional summary & experience
              </p>
            </a>

            <a
              href="/routes/skills"
              className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                🛠️
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Skills
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Technical competencies & tools
              </p>
            </a>

            <a
              href="/routes/experience"
              className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                💼
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Experience
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Professional journey & projects
              </p>
            </a>

            <a
              href="/routes/personal"
              className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Personal
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Interests, hobbies & AI passion
              </p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/routes/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Explore Route Version
            </a>
            <button
              onClick={() => scrollToSection("home")}
              className="inline-flex items-center justify-center px-8 py-3 border border-purple-300 text-purple-700 dark:text-purple-300 dark:border-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to SPA Version
            </button>
          </div>
        </div>
      </section>

      {/* Package Showcase */}
      <PackageShowcase />

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Sachin Pandhari Bhopi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
