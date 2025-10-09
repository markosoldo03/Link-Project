import { useEffect, useState } from "react";

interface ForecastDay {
  date: string;
  max: number;
  min: number;
  code: number;
}

interface WeatherData {
  currentTemp: number;
  currentCode: number;
  forecast: ForecastDay[];
}

export default function HomeBlock() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [quote, setQuote] = useState("");
  const [time, setTime] = useState("");

  // ⏰ Live clock
  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  // 🌤️ Fetch weather for Mostar
  useEffect(() => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=43.34&longitude=17.81&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const forecast: ForecastDay[] = data.daily.time.slice(0, 3).map((_: string, i: number) => ({
          date: data.daily.time[i],
          max: data.daily.temperature_2m_max[i],
          min: data.daily.temperature_2m_min[i],
          code: data.daily.weathercode[i],
        }));
        setWeather({
          currentTemp: data.current_weather.temperature,
          currentCode: data.current_weather.weathercode,
          forecast,
        });
      })
      .catch(() =>
        setWeather({
          currentTemp: 22,
          currentCode: 1,
          forecast: [
            { date: "Today", max: 25, min: 18, code: 1 },
            { date: "Tomorrow", max: 26, min: 17, code: 2 },
            { date: "Next", max: 24, min: 16, code: 3 },
          ],
        })
      );
  }, []);

  // 💬 Quote
  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data[0].quote))
      .catch(() => setQuote("Stay curious, stay unstoppable."));
  }, []); 

  // 🌅 Greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Good morning ☀️"
      : hour < 18
      ? "Good afternoon 🌤️"
      : "Good evening 🌙";

  // Map weather code → icon
  const getIcon = (code: number) => {
    if ([0, 1].includes(code)) return "☀️";
    if ([2, 3].includes(code)) return "🌤️";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 61, 63, 65].includes(code)) return "🌧️";
    if ([71, 73, 75].includes(code)) return "❄️";
    if ([95, 96, 99].includes(code)) return "⛈️";
    return "🌡️";
  };

  // Dynamic glow by weather
  const weatherColor =
    weather?.currentCode && [0, 1].includes(weather.currentCode)
      ? "from-yellow-400/30 via-orange-500/20 to-transparent"
      : [2, 3].includes(weather?.currentCode || 0)
      ? "from-cyan-400/20 via-blue-500/20 to-transparent"
      : [61, 63, 65].includes(weather?.currentCode || 0)
      ? "from-blue-400/30 via-indigo-500/20 to-transparent"
      : "from-gray-400/20 via-gray-500/10 to-transparent";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={`
        relative max-w-lg w-full rounded-3xl overflow-hidden
        border border-gray-200 dark:border-white/10 
        bg-white/60 dark:bg-white/5 backdrop-blur-2xl 
        shadow-[0_0_40px_rgba(0,255,255,0.1)] p-6
        transition-all duration-700 hover:scale-[1.02]
      `}
    >
      {/* Animated background glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${weatherColor} blur-3xl opacity-60 pointer-events-none`}
      />

      {/* Header */}
      <div className="flex items-center justify-between relative">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {greeting}
        </h2>
        <span className="text-xs text-gray-500 dark:text-gray-400">{today}</span>
      </div>

      {/* Time */}
      <div className="mt-3 text-4xl font-mono text-cyan-500 dark:text-cyan-400 relative">
        {time}
      </div>

      {/* Current Weather */}
      <div className="mt-5 flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <span className="text-4xl animate-pulse">
            {getIcon(weather?.currentCode || 0)}
          </span>
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Current
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {weather?.currentTemp ?? "--"}°C
            </p>
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Mostar, BiH 🇧🇦
        </div>
      </div>

      {/* Forecast */}
      <div className="mt-6 flex justify-between relative">
        {weather?.forecast.map((day, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center bg-white/30 dark:bg-white/5 backdrop-blur-sm rounded-xl p-3 shadow-inner border border-white/10 w-[30%] hover:bg-white/40 dark:hover:bg-white/10 transition"
          >
            <span className="text-xl">{getIcon(day.code)}</span>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">
              {i === 0 ? "Today" : i === 1 ? "Tomorrow" : "Next"}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {Math.round(day.min)}° / {Math.round(day.max)}°
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent relative" />

      {/* Quote */}
      <div className="relative text-sm italic text-gray-700 dark:text-gray-300 pl-3 border-l-2 border-cyan-400">
        “{quote || "Loading your daily inspiration..."}”
      </div>

      {/* Glow ring */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none border border-transparent bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10" />
    </div>
  );
}
