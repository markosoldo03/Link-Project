import { FaYoutube, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-white/10 bg-white/90 dark:bg-[#0f1115]/80 backdrop-blur-lg text-black dark:text-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="font-extrabold text-2xl tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Foooter
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Connect. Create. Collaborate.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 text-xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/hrkozul/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-gray-200 dark:border-white/10 pt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold">Link</span>. All rights reserved.
      </div>
    </footer>
  );
}
