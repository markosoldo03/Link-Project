import { motion } from "framer-motion";
import MemberBlock from "../bloc/MemberBlock";
import MembersLayout from "../layouts/MembersLayout";
import "../styles/animations.css";

export default function Members() {
  const groups = [
    {
      title: "Presidents",
      members: [
        {
          image:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
          firstName: "Marko",
          lastName: "Soldo",
          dateOfBirth: "1999-08-15",
          phone: "063-422-124",
          email: "marko@gmail.com",
          instagram: "markosoldo21",
        },
      ],
    },
    {
      title: "Vice Presidents",
      members: [
        {
          image:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254",
          firstName: "LeBron",
          lastName: "James",
          dateOfBirth: "1984-12-30",
        },
        {
          image:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/110.png&w=350&h=254",
          firstName: "Ivana",
          lastName: "Kovač",
          dateOfBirth: "2000-01-10",
        },
      ],
    },
    {
      title: "Members",
      members: [
        {
          image:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
          firstName: "David",
          lastName: "Kovačević",
          dateOfBirth: "2001-02-04",
        },
        {
          image:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
          firstName: "Nikola",
          lastName: "Jokić",
          dateOfBirth: "1995-02-19",
        },
        {
          image:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
          firstName: "Kobe",
          lastName: "Bryant",
          dateOfBirth: "1978-08-23",
        },
        {
          image:
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/110.png&w=350&h=254",
          firstName: "Tea",
          lastName: "Marić",
          dateOfBirth: "1998-09-07",
        },
      ],
    },
  ];

  const gradientBg =
    "bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(900px_700px_at_90%_10%,rgba(168,85,247,0.12),transparent)]";

  return (
    <MembersLayout>
      <div
        className={`relative min-h-screen w-full overflow-x-hidden overflow-y-auto ${gradientBg}
        bg-white dark:bg-[#0b0e13] transition-colors duration-300 px-6 pb-24`}
      >
        {/* 🌈 Global ambient background glow */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[180px] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-600/20 -z-10" />

        {/* 🏷️ Page header */}
        <div className="text-center mb-20 mt-16">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_10px_rgba(56,189,248,0.25)]">
            Our Members
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Meet the dedicated individuals who guide, lead, and inspire our community.
          </p>
        </div>

        {/* 🧑‍🤝‍🧑 Member groups */}
        <motion.div
          className="max-w-7xl mx-auto space-y-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {groups.map((group, groupIndex) => (
            <motion.section
              key={groupIndex}
              className="relative group transition-all duration-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* ✨ Section aura — unified behavior, different palette */}
              <div
                className="absolute -inset-6 rounded-[3rem] blur-[100px] opacity-0 
                           group-hover:opacity-80 transition-all duration-700
                           bg-gradient-to-r 
                           from-sky-300/50 via-blue-300/40 to-purple-300/50 
                           dark:from-cyan-400/15 dark:via-blue-500/15 dark:to-purple-600/15"
              />

              {/* Title */}
              <h2
                className="text-3xl font-extrabold text-transparent 
                           bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
                           text-center mb-4 relative z-10"
              >
                {group.title}
              </h2>

              {/* Divider */}
              <div className="mx-auto mb-10 w-32 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-move bg-[length:200%_200%]" />

              {/* 👥 Members grid with balanced aura */}
              <div className="relative flex flex-wrap justify-center gap-10">
                {/* 🌁 Soft ambient glow behind cards */}
                <div
                  className="absolute inset-0 -z-10 rounded-[3rem] blur-[140px] opacity-80 
                             bg-gradient-to-r 
                             from-sky-300/50 via-blue-300/40 to-purple-300/50 
                             dark:from-cyan-400/12 dark:via-blue-500/12 dark:to-purple-600/12"
                />

                {group.members.map((member, index) => (
                  <motion.div
                    key={index}
                    className="w-full sm:w-[45%] lg:w-[30%] xl:w-[22%] flex justify-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-fade-up"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <MemberBlock {...member} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </MembersLayout>
  );
}
