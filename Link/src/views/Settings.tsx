import SettingsLayout from "../layouts/SettingsLayout";
import ThemeToggle from "../components/ThemeToggle";

export default function Settings() {
  const gradientBg =
    "bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(900px_700px_at_90%_10%,rgba(168,85,247,0.12),transparent)]";

  return (
    <SettingsLayout>
      <div
        className={`relative min-h-screen w-full overflow-x-hidden overflow-y-auto ${gradientBg}
        bg-white dark:bg-[#0b0e13] transition-colors duration-300 px-6 pb-24`}
      >
        <div
          className="max-w-3xl mx-auto mt-28 rounded-3xl p-8 sm:p-10 
                     bg-white/70 dark:bg-white/5 backdrop-blur-xl 
                     shadow-2xl border border-gray-200 dark:border-white/10
                     transition hover:shadow-[0_0_25px_rgba(0,255,255,0.1)]"
        >
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-10 
             bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
             bg-clip-text text-transparent 
             leading-[1.2] pb-1"
          >
            Settings
          </h1>

          {/* Settings list */}
          <div className="divide-y divide-gray-200 dark:divide-white/10">
            <SettingRow
              title="Dark Mode"
              description="Switch between light and dark themes."
              control={<ThemeToggle />}
            />

            <SettingRow
              title="Notifications"
              description="Manage push and email notifications."
              control={
                <PlaceholderSwitch label="Coming soon" disabled />
              }
            />

            <SettingRow
              title="Privacy"
              description="Control data visibility and sharing options."
              control={
                <PlaceholderSwitch label="Coming soon" disabled />
              }
            />
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
}

/* Setting row component */
function SettingRow({
  title,
  description,
  control,
}: {
  title: string;
  description: string;
  control: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between py-6">
      <div className="mb-3 sm:mb-0">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {description}
        </p>
      </div>
      <div className="sm:ml-4">{control}</div>
    </div>
  );
}

/* Placeholder switch */
function PlaceholderSwitch({
  label,
  disabled,
}: {
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      className="px-4 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 
                 text-gray-500 dark:text-gray-400 cursor-not-allowed"
    >
      {label}
    </button>
  );
}
