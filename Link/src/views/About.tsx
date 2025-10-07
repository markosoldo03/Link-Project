import { Link } from "react-router-dom";
import AboutLayout from "../layouts/AboutLayout";

export default function About() {
  return (
    <AboutLayout>
      <div
        className="m-10 w-full max-w-4xl rounded-2xl p-6 sm:p-10 
                   bg-white dark:bg-[#0f1115]/70 
                   text-gray-900 dark:text-white 
                   backdrop-blur-md shadow-2xl 
                   border border-gray-200 dark:border-white/5 
                   transition-colors duration-500"
      >
        {/* Holo title */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold  
                     bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                     bg-clip-text text-transparent 
                     drop-shadow-[0_0_12px_rgba(0,255,255,0.35)]"
        >
          About <span className="opacity-80">MyApp</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-white/90">
          MyApp is a lightweight hub that helps students and creators organize content, discover resources,
          and share updates in seconds. We focus on speed, clarity, and a distraction-free experience.
        </p>

        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-colors">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white/95">
              Our Mission
            </h2>
            <p className="mt-3 text-gray-700 dark:text-white/80 leading-relaxed">
              Make knowledge accessible and collaboration effortless, whether you’re planning a class project,
              publishing notes, or curating learning paths for your community.
            </p>
          </div>

          <div className="rounded-xl p-5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-colors">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white/95">
              What You Can Do
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-white/80">
              <li>• Create and share resource blocks</li>
              <li>• Follow updates from classes/teams</li>
              <li>• Search quickly with a clean UI</li>
              <li>• Customize layouts with simple controls</li>
            </ul>
          </div>

          <div className="rounded-xl p-5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-colors">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white/95">
              How It Works
            </h2>
            <p className="mt-3 text-gray-700 dark:text-white/80 leading-relaxed">
              Build pages from reusable blocks. Add links, files, and notes. Everything is indexed so you can
              find it instantly with the global search at the top.
            </p>
          </div>

          <div className="rounded-xl p-5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-colors">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white/95">
              Values
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-white/80">
              <li>• Clarity over clutter</li>
              <li>• Fast by default</li>
              <li>• Privacy-first design</li>
              <li>• Accessible to everyone</li>
            </ul>
          </div>
        </section>

        <section
          className="mt-8 rounded-xl p-5 
                     bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-600/5 
                     dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-600/10 
                     border border-gray-200 dark:border-white/10 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white/95">
            Roadmap (short)
          </h3>
          <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-gray-700 dark:text-white/80">
            <li>• Personal dashboards</li>
            <li>• Team spaces & roles</li>
            <li>• Rich embeds</li>
            <li>• Offline-first caching</li>
          </ul>
        </section>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl font-semibold
                       bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                       text-white shadow-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>
          <p className="text-gray-600 dark:text-white/60 text-sm sm:ml-2">
            Questions: <span className="text-gray-800 dark:text-white/80">support@myapp.example</span>
          </p>
        </div>
      </div>
    </AboutLayout>
  );
}
