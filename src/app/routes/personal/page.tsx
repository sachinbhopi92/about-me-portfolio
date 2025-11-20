export default function PersonalPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Personal Details
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Beyond the code - get to know the person behind the developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Info */}
          <div className="space-y-8">
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
          <div className="space-y-8">
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
                  <strong>GitHub Copilot</strong> to accelerate development and
                  improve code quality.
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
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
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

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Let's Connect!
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Interested in discussing technology, AI, or potential
              opportunities? I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=919561692572&text=Hi%20Sachin,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp Me
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sachin.bhopi92@gmail.com&su=Connecting from your portfolio&body=Hi Sachin,%0A%0AI found your portfolio and would like to connect with you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 dark:text-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
