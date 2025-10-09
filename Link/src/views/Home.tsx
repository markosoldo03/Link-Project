import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import HomeBlock from "../bloc/WeatherBlock";

export default function Home() {
  const [username, setUsername] = useState("Zdenko");
  const [note, setNote] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  // 🎮 Reaction game states
  const [gameState, setGameState] = useState<"idle" | "waiting" | "ready" | "clicked">("idle");
  const [message, setMessage] = useState("Click 'Start' to test your reflexes!");
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  // 🧠 Load from localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("username");
    const savedTodos = localStorage.getItem("todos");
    const savedNote = localStorage.getItem("note");
    if (savedName) setUsername(savedName);
    if (savedTodos) setTodos(JSON.parse(savedTodos));
    if (savedNote) setNote(savedNote);
  }, []);

  // 💾 Save local data
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  const removeTodo = (index: number) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  // ⚡ Reaction Game Logic
  const startGame = () => {
    setGameState("waiting");
    setMessage("Wait for green...");
    const delay = Math.random() * 4000 + 1000;
    setTimeout(() => {
      setGameState("ready");
      setMessage("Click now!");
      setStartTime(performance.now());
    }, delay);
  };

  const handleClick = () => {
    if (gameState === "waiting") {
      setMessage("Too early! 😅");
      setGameState("idle");
    } else if (gameState === "ready") {
      const reaction = performance.now() - startTime;
      setTime(reaction);
      setMessage(`Your reaction time: ${reaction.toFixed(0)} ms ⚡`);
      setGameState("clicked");
    } else if (gameState === "clicked") {
      setMessage("Click 'Start' to try again!");
      setGameState("idle");
    }
  };

  const gradientBg =
    "bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(900px_700px_at_90%_10%,rgba(168,85,247,0.12),transparent)]";

  return (
    <MainLayout>
      <div
        className={`relative min-h-screen w-full overflow-x-hidden overflow-y-auto ${gradientBg}
        bg-white dark:bg-[#0b0e13] transition-colors duration-700 px-6 pb-24`}
      >
        {/* Header */}
        <header className="text-center pt-28 pb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.15)]">
            Welcome back, {username} ✨
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Igram se programera i Hrva je puko bdw.
          </p>
        </header>

        {/* Main grid */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* 🧠 Overview */}
          <div className="col-span-1">
            <HomeBlock />
          </div>

          {/* 📝 Notes */}
          <div
            className="col-span-1 rounded-3xl border border-gray-200 dark:border-white/10 
            bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl p-6
            transition hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">📝 Notes</h2>
            <textarea
              className="w-full h-40 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1218] px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none"
              placeholder="Write your thoughts here..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-right">
              Auto-saved locally
            </p>
          </div>

          {/* ✅ To-Do List */}
          <div
            className="col-span-1 rounded-3xl border border-gray-200 dark:border-white/10 
            bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl p-6
            transition hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">✅ To-Do List</h2>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Add new task..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="flex-grow rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1218] px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
              <button
                onClick={addTodo}
                className="rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-4 font-semibold hover:opacity-90 transition"
              >
                Add
              </button>
            </div>
            <ul className="space-y-2 max-h-56 overflow-y-auto pr-2">
              {todos.map((todo, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-white/70 dark:bg-white/5 px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10"
                >
                  <span className="text-gray-800 dark:text-gray-200">{todo}</span>
                  <button
                    onClick={() => removeTodo(i)}
                    className="text-xs text-red-500 hover:text-red-400"
                  >
                    ✕
                  </button>
                </li>
              ))}
              {todos.length === 0 && (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  No tasks yet — add one!
                </p>
              )}
            </ul>
          </div>

          {/* 🎮 Reaction Mini-Game */}
          <div
            className="col-span-1 lg:col-span-3 mt-6 rounded-3xl border border-gray-200 dark:border-white/10 
            bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl p-10 flex flex-col items-center justify-center text-center transition hover:shadow-[0_0_40px_rgba(0,255,255,0.1)]"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              ⚡ Reaction Speed Game
            </h2>

            <div
              onClick={handleClick}
              className={`w-full max-w-xl h-56 rounded-2xl flex items-center justify-center text-xl font-semibold cursor-pointer transition-all duration-300 
                ${
                  gameState === "ready"
                    ? "bg-green-400 hover:bg-green-500"
                    : gameState === "waiting"
                    ? "bg-red-500"
                    : "bg-gray-300 dark:bg-gray-700"
                }
              `}
            >
              {message}
            </div>

            <button
              onClick={startGame}
              className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition active:scale-[0.97]"
            >
              Start
            </button>
            {time > 0 && (
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                Your best so far: {time.toFixed(0)} ms
              </p>
            )}
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
