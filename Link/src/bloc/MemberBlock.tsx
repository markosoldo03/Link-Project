import React, { useState, useEffect } from "react";
import { ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaInstagram } from "react-icons/fa";

interface MemberCardProps {
  image: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone?: string;
  instagram?: string;
  email?: string;
}

const calculateAge = (dob: string) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
};

const MemberCard: React.FC<MemberCardProps> = ({
  image,
  firstName,
  lastName,
  dateOfBirth,
  phone,
  instagram,
  email,
}) => {
  const [open, setOpen] = useState(false);
  const age = calculateAge(dateOfBirth);

  // ESC closes overlay
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div className="relative flex justify-center items-center group">
      {/* 🌈 Unified outer glow for both themes */}
      <div
        className="absolute -inset-5 rounded-[2rem] blur-[100px] opacity-0 
                   group-hover:opacity-70 transition-all duration-700
                   bg-gradient-to-r 
                   from-sky-300/60 via-blue-300/50 to-purple-300/60 
                   dark:from-cyan-400/25 dark:via-blue-500/20 dark:to-purple-600/25"
      />

      {/* 🧊 Card */}
      <div
        className="relative w-72 rounded-3xl 
                   bg-white/75 dark:bg-[#0f1116]/80 
                   border border-gray-200 dark:border-white/10 
                   backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                   transition-all duration-700 ease-out 
                   hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] overflow-hidden"
      >
        {/* IMAGE */}
        <div className="rounded-t-3xl overflow-hidden">
          <img
            src={image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt={`${firstName} ${lastName}`}
            className="w-full h-72 object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
        </div>

        {/* INFO */}
        <div className="p-6 text-center">
          <h2
            className="text-2xl font-extrabold text-transparent 
                       bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
                       drop-shadow-[0_0_6px_rgba(56,189,248,0.15)]"
          >
            {firstName} {lastName}
          </h2>

          <p className="mt-3 text-sm text-gray-800 dark:text-gray-300">
            Born:{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              {new Date(dateOfBirth).toLocaleDateString()}
            </span>
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            Age:{" "}
            <span className="font-medium text-gray-900 dark:text-white">{age}</span>
          </p>
        </div>

        {/* Spacer */}
        <div className="h-8" />

        {/* FULL-WIDTH PULL TAB */}
        <div
          onClick={() => setOpen((prev) => !prev)}
          tabIndex={-1}
          className="absolute bottom-0 left-0 w-full h-10 cursor-pointer 
                     bg-gradient-to-t from-transparent via-transparent to-transparent
                     backdrop-blur-md border-t border-gray-200/50 dark:border-white/10 
                     flex items-center justify-center gap-2
                     text-gray-700 dark:text-gray-300 
                     hover:text-gray-900 dark:hover:text-white
                     transition-all duration-500 ease-out
                     hover:bg-gradient-to-t 
                     hover:from-cyan-100/10 hover:via-purple-100/10 hover:to-transparent
                     dark:hover:from-cyan-400/10 dark:hover:via-blue-400/10 dark:hover:to-purple-500/10"
        >
          <span className="text-xs font-semibold tracking-wide select-none">
            {open ? "Hide Info" : "More Info"}
          </span>
          <div
            className={`transition-transform duration-500 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronUpIcon className="w-4 h-4" />
          </div>
        </div>

        {/* SLIDE-UP PANEL */}
        <div
          className={`absolute bottom-0 left-0 w-full z-10
                      transform transition-transform duration-500 ease-out
                      ${open ? "translate-y-0" : "translate-y-full"}`}
        >
          <div
            className="bg-gradient-to-t from-sky-50 via-white/90 to-transparent
                       dark:from-black/85 dark:via-black/70 
                       backdrop-blur-xl border-t border-gray-200 dark:border-white/10
                       p-4 rounded-b-3xl text-sm text-gray-800 dark:text-gray-200 h-41"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-800 dark:text-gray-300 font-semibold">
                Contact Info
              </span>
              <div
                onClick={() => setOpen(false)}
                className="cursor-pointer p-1 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-sky-100/50 dark:hover:bg-white/10 transition"
                tabIndex={-1}
              >
                <XMarkIcon className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p>📞 {phone || "Not available"}</p>
              <p>✉️ {email || "Not available"}</p>

              {/* Instagram */}
              {instagram ? (
                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                  <span>@{instagram}</span>
                </a>
              ) : (
                <p>📸 Not available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
