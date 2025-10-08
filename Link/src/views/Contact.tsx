import { useState } from "react";
import ContactLayout from "../layouts/ContactLayout";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000)); // simulate API delay
    setSending(false);
    setSent(true);
  };

  return (
    <ContactLayout>
      <div
        className="
          min-h-screen w-full 
          bg-gradient-to-br from-white via-white to-gray-100 
          dark:from-[#0b0e13] dark:via-[#0e1218] dark:to-[#131820]
          transition-colors duration-700
        "
      >
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-10">
          {/* Header */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 backdrop-blur">
              <span className="size-1.5 rounded-full bg-cyan-500" />
              Get in touch
            </span>

            <h1
              className="mt-4 text-4xl sm:text-5xl font-extrabold 
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
              bg-clip-text text-transparent tracking-tight"
            >
              Contact Us
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have questions, ideas, or collaboration proposals? Drop us a
              message and we’ll get back shortly.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* LEFT INFO SECTION */}
            <div className="lg:col-span-2 space-y-6">
              <InfoCard
                icon={<EnvelopeIcon className="w-5 h-5" />}
                title="Email"
                value="contact@yourapp.com"
                hint="We usually respond within a few hours."
              />
              <InfoCard
                icon={<PhoneIcon className="w-5 h-5" />}
                title="Phone"
                value="+387 61 123 456"
                hint="Mon–Fri, 09:00–17:00"
              />
              <InfoCard
                icon={<MapPinIcon className="w-5 h-5" />}
                title="Office"
                value="Hajduk živi vječno"
                hint="Visit us for a coffee ☕"
              />

                <div
                    className="
                        overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10
                        bg-white/70 dark:bg-white/5 backdrop-blur shadow-xl aspect-[16/10]
                    "
                    >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d172.64935911275472!2d17.834501143813227!3d43.24753653386548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2sba!4v1759959048061!5m2!1shr!2sba" 
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </div>

            {/* RIGHT FORM SECTION */}
            <div className="lg:col-span-3">
              <div
                className="
                  rounded-3xl border border-gray-200 dark:border-white/10 
                  bg-white/80 dark:bg-white/5 backdrop-blur-xl 
                  shadow-2xl p-6 sm:p-10 transition-all
                "
              >
                {!sent ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field
                        label="Your Name"
                        name="name"
                        type="text"
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={handleChange}
                      />
                      <Field
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <Field
                      label="Subject"
                      name="subject"
                      type="text"
                      placeholder="Let’s talk about..."
                      value={form.subject}
                      onChange={handleChange}
                    />

                    <FieldTextarea
                      label="Message"
                      name="message"
                      rows={6}
                      placeholder="Write your message..."
                      value={form.message}
                      onChange={handleChange}
                    />

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        By sending, you agree to our{" "}
                        <a
                          href="#"
                          className="text-cyan-600 dark:text-cyan-400 underline hover:no-underline"
                        >
                          privacy policy
                        </a>.
                      </p>

                      <button
                        type="submit"
                        disabled={sending}
                        className="
                          inline-flex items-center gap-2 rounded-xl 
                          bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
                          px-6 py-3 font-semibold text-white 
                          shadow-lg shadow-blue-600/25 
                          hover:opacity-95 active:scale-[0.98] 
                          transition disabled:opacity-60 disabled:cursor-not-allowed
                        "
                      >
                        {sending ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="opacity-25"
                                fill="none"
                              />
                              <path
                                fill="currentColor"
                                className="opacity-75"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                              />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            <PaperAirplaneIcon className="h-5 w-5 -rotate-6" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="mb-4 rounded-full bg-green-500/10 p-3">
                      <CheckCircleIcon className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
                      Thanks for reaching out. We’ll respond as soon as we can.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm text-cyan-600 dark:text-cyan-400 underline underline-offset-4 hover:no-underline"
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactLayout>
  );
}

/* -------------------------------------------------------------------------- */
/* Reusable Subcomponents */
/* -------------------------------------------------------------------------- */

function InfoCard({
  icon,
  title,
  value,
  hint,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-5 shadow-lg hover:shadow-xl transition">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-gradient-to-tr from-cyan-500/15 via-blue-500/15 to-purple-600/15 p-2 text-cyan-500 dark:text-cyan-400">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
      {hint && (
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">{hint}</p>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  type: "text" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 
          bg-white dark:bg-[#0f1218] px-3 py-2 text-gray-900 dark:text-white 
          placeholder-gray-400 dark:placeholder-gray-500 outline-none 
          focus:ring-2 focus:ring-cyan-500/40 transition
        "
      />
    </label>
  );
}

function FieldTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 5,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="
          mt-1 w-full resize-none rounded-xl border border-gray-200 dark:border-white/10 
          bg-white dark:bg-[#0f1218] px-3 py-2 text-gray-900 dark:text-white 
          placeholder-gray-400 dark:placeholder-gray-500 outline-none 
          focus:ring-2 focus:ring-cyan-500/40 transition
        "
      />
    </label>
  );
}
