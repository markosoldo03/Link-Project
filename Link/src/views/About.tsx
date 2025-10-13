import { Link } from "react-router-dom";
import AboutLayout from "../layouts/AboutLayout";

export default function About() {
  const gradientBg =
    "bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(900px_700px_at_90%_10%,rgba(168,85,247,0.12),transparent)]";

  return (
    <AboutLayout>
      <div
        className={`relative min-h-screen w-full overflow-x-hidden overflow-y-auto ${gradientBg}
          bg-white dark:bg-[#0b0e13] transition-colors duration-700 px-6 pb-24`}
      >
        <div
          className="max-w-4xl mx-auto mt-28 rounded-3xl p-8 sm:p-10 
                     bg-white/70 dark:bg-white/5 backdrop-blur-xl 
                     shadow-2xl border border-gray-200 dark:border-white/10
                     transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.1)]"
        >
          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl font-extrabold 
                       bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
                       bg-clip-text text-transparent 
                       drop-shadow-[0_0_20px_rgba(0,255,255,0.15)]"
          >
            About <span className="opacity-80">MyApp</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center">
            MyApp is a lightweight hub that helps students and creators organize content, discover resources,
            and share updates in seconds — designed with clarity, speed, and a bit of style ✨.
          </p>

          {/* Info Sections */}
          <section className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Our Mission",
                text: "Make knowledge accessible and collaboration effortless, whether you’re planning a class project, publishing notes, or curating learning paths.",
              },
              {
                title: "What You Can Do",
                list: [
                  "Create and share resource blocks",
                  "Follow updates from classes/teams",
                  "Search quickly with a clean UI",
                  "Customize layouts with simple controls",
                ],
              },
              {
                title: "How It Works",
                text: "Build pages from reusable blocks. Add links, files, and notes. Everything is indexed so you can find it instantly with the global search at the top.",
              },
              {
                title: "Values",
                list: [
                  "Clarity over clutter",
                  "Fast by default",
                  "Privacy-first design",
                  "Accessible to everyone",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h2>
                {item.text ? (
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                ) : (
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {item.list?.map((l, j) => (
                      <li key={j}>• {l}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {/* Roadmap */}
          <section
            className="mt-10 rounded-2xl p-6 
                       bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 
                       border border-gray-200 dark:border-white/10 
                       backdrop-blur-md shadow-xl transition-all duration-500"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Roadmap (short)
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
              <li>• Personal dashboards</li>
              <li>• Team spaces & roles</li>
              <li>• Rich embeds</li>
              <li>• Offline-first caching</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center  gap-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-xl font-semibold
                         bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                         text-white shadow-lg hover:opacity-90 transition"
            >
              Get Started
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:ml-2">
              Questions?{" "}
              <span className="text-gray-800 dark:text-gray-200">
                support@myapp.example
              </span>
            </p>
          </div>
        </div>
      </div>
    </AboutLayout>
  );
}
