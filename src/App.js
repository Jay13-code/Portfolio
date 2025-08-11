import React from "react";
import { motion } from "framer-motion";
import ResumePDF from "./Resume.pdf";

export default function JayPortfolio() {
  const experiences = [
    {
      id: 1,
      title: "Assistant Manager",
      company: "Johnny’s Hamburger LTD",
      location: "Toronto, ON",
      date: "Dec 2024 – Present",
      bullets: [
        "Led a team of 9 food service members, ensuring top-tier customer service and compliance with company standards.",
        "Increased customer satisfaction by 20% through feedback systems and staff training.",
        "Boosted sales by 15% with strategic upselling and promotions.",
        "Optimized daily operations, cutting costs by 10% through efficient inventory and scheduling.",
        "Launched a training program, reducing onboarding time by 25% and improving team performance.",
        "Streamlined inventory processes, cutting waste by 12% while ensuring fresh product availability.",
      ],
    },
    {
      id: 2,
      title: "Customer Service Representative",
      company: "Johnny’s Hamburger LTD",
      location: "North York, ON",
      date: "May 2023 – Dec 2024",
      bullets: [
        "Delivered outstanding service to 200+ customers per shift, maintaining a 95% satisfaction rate.",
        "Processed $5,000+ in daily transactions with 99.8% accuracy.",
        "Trained new staff, reducing onboarding time by 20%.",
        "Ensured kitchen and dining areas met health and safety standards.",
        "Boosted sales by 10% through promotions and upselling.",
        "Managed inventory efficiently, reducing stock shortages by 15%.",
      ],
    },
    {
      id: 3,
      title: "Youth Coordinator",
      company: "BAPS Swaminarayan Sanstha",
      location: "Toronto, ON",
      date: "May 2024 – Present",
      bullets: [
        "Provided organizational support and administrative assistance for youth programs.",
      ],
    },
    {
      id: 4,
      title: "Recreational Assistant (Volunteer)",
      company: "Bay Shore Community Living",
      location: "Scarborough, ON",
      date: "Aug 2023 – May 2024",
      bullets: [
        "Assisted elderly residents with daily activities and mobility support.",
        "Provided companionship and maintained activity records.",
      ],
    },
    {
      id: 5,
      title: "Dairy and Frozen Associate",
      company: "Walmart",
      location: "Toronto, ON",
      date: "May 2023 – Jul 2023",
      bullets: [
        "Managed inventory and customer communication for dairy and frozen goods.",
      ],
    },
    {
      id: 6,
      title: "Head of Department",
      company: "Orphic Immigration & Education Pvt. Ltd.",
      location: "Surat, Gujarat, India",
      date: "Aug 2022 – Mar 2023",
      bullets: [
        "Designed and delivered lesson plans to enhance PTE candidates’ language skills and test strategies.",
        "Utilized innovative teaching methods and technology to create engaging, results-driven learning experiences.",
        "Developed targeted curricula aligned with industry standards to optimize student success in PTE exams.",
        "Led and mentored the department, fostering collaboration, innovation, and continuous improvement.",
      ],
    },
    {
      id: 7,
      title: "Office Administrator",
      company: "Orphic Immigration & Education Pvt. Ltd.",
      location: "Surat, Gujarat, India",
      date: "May 2022 – Jul 2022",
      bullets: [
        "Oversaw administrative tasks to ensure smooth office operations and interdepartmental coordination.",
        "Established efficient communication channels to enhance collaboration and information flow.",
        "Developed organizational systems to streamline processes, boost productivity, and maintain excellence.",
        "Delivered exceptional customer service, fostering a professional and welcoming environment.",
      ],
    },
  ];

  const skills = [
    "Marketing Strategy",
    "Customer Experience",
    "Customer Service",
    "Organizational Support",
    "Executive Support",
    "Data Entry",
    "Office Administration",
    "Communication",
    "Consumer Behavior",
  ];

  const certifications = [
    "CSS (Basic) — HackerRank (Issued Jan 2024, Credential ID: 42ABOB12739F)",
    "SQL (Basic) — HackerRank (Issued Sep 2023, Credential ID: D2EEC12BDA11)",
    "SQL (Intermediate) — HackerRank (Issued Sep 2023, Credential ID: F87E12FC87D5)",
  ];

  function handleContactSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    alert(`Message sent. Name: ${form.get("name")}. Email: ${form.get("email")}.`);
    e.target.reset();
  }

  const fadeSlideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Experience category metadata and icons
  const getExperienceMeta = (title = "") => {
    const t = title.toLowerCase();
    if (t.includes("assistant manager")) {
      return {
        category: "Management",
        badgeClass:
          "px-2 py-0.5 text-xs rounded-full bg-sky-900/50 text-sky-200 border border-sky-700",
        icon: "briefcase",
        iconClass: "text-sky-300",
      };
    }
    if (t.includes("customer service")) {
      return {
        category: "Customer Service",
        badgeClass:
          "px-2 py-0.5 text-xs rounded-full bg-emerald-900/50 text-emerald-200 border border-emerald-700",
        icon: "headset",
        iconClass: "text-emerald-300",
      };
    }
    if (t.includes("youth coordinator")) {
      return {
        category: "Community",
        badgeClass:
          "px-2 py-0.5 text-xs rounded-full bg-violet-900/50 text-violet-200 border border-violet-700",
        icon: "users",
        iconClass: "text-violet-300",
      };
    }
    if (t.includes("recreational") || t.includes("volunteer")) {
      return {
        category: "Care & Volunteer",
        badgeClass:
          "px-2 py-0.5 text-xs rounded-full bg-rose-900/50 text-rose-200 border border-rose-700",
        icon: "heart",
        iconClass: "text-rose-300",
      };
    }
    if (t.includes("dairy") || t.includes("associate")) {
      return {
        category: "Retail",
        badgeClass:
          "px-2 py-0.5 text-xs rounded-full bg-amber-900/50 text-amber-200 border border-amber-700",
        icon: "cart",
        iconClass: "text-amber-300",
      };
    }
    if (t.includes("head of department") || t.includes("instructor") || t.includes("teacher")) {
      return {
        category: "Education",
        badgeClass:
          "px-2 py-0.5 text-xs rounded-full bg-indigo-900/50 text-indigo-200 border border-indigo-700",
        icon: "academic",
        iconClass: "text-indigo-300",
      };
    }
    if (t.includes("administrator") || t.includes("administration")) {
      return {
        category: "Administration",
        badgeClass:
          "px-2 py-0.5 text-xs rounded-full bg-cyan-900/50 text-cyan-200 border border-cyan-700",
        icon: "clipboard",
        iconClass: "text-cyan-300",
      };
    }
    return {
      category: "Professional",
      badgeClass:
        "px-2 py-0.5 text-xs rounded-full bg-slate-900/60 text-gray-200 border border-slate-700",
      icon: "briefcase",
      iconClass: "text-gray-300",
    };
  };

  const Icon = ({ name, className = "" }) => {
    const common = `w-5 h-5 ${className}`;
    switch (name) {
      case "briefcase":
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
            <rect x="3" y="6" width="18" height="14" rx="2" />
            <path d="M16 10v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2" />
          </svg>
        );
      case "headset":
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 13a8 8 0 0 1 16 0" />
            <path d="M18 19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3" />
            <path d="M6 19a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3" />
            <path d="M8 21h6" />
          </svg>
        );
      case "users":
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="3" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "heart":
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        );
      case "cart":
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        );
      case "academic":
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 10L12 4 2 10l10 6 10-6z" />
            <path d="M6 12v5c0 .7 2.7 2 6 2s6-1.3 6-2v-5" />
          </svg>
        );
      case "clipboard":
        return (
          <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="8" y="2" width="8" height="4" rx="1" />
            <rect x="4" y="6" width="16" height="16" rx="2" />
            <path d="M9 12h6M9 16h6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-gray-100 font-sans transition-colors duration-700">
  <header className="max-w-5xl mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-xl font-semibold text-sky-400 drop-shadow-lg animate-pulse">Jay Sojitra</h1>
            <p className="text-sm text-gray-300">Newcomer Information & Service Management Professional</p>
          </div>
          <nav className="flex flex-wrap gap-4 items-center">
            <a href="#about" className="text-sm hover:underline text-gray-200 hover:text-sky-400 transition">About</a>
            <a href="#skills" className="text-sm hover:underline text-gray-200 hover:text-sky-400 transition">Skills</a>
            <a href="#experience" className="text-sm hover:underline text-gray-200 hover:text-sky-400 transition">Experience</a>
            <a href="#contact" className="text-sm hover:underline text-gray-200 hover:text-sky-400 transition">Contact</a>
          </nav>
        </div>
      </header>

  <main className="max-w-5xl mx-auto p-6">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-6 items-center bg-gradient-to-br from-slate-900 to-gray-800 p-8 rounded-2xl shadow-lg relative overflow-hidden">
          {/* Animated background orbs */}
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl animate-pulse z-0"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse z-0"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeSlideUp}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-300 drop-shadow animate-fade-in-up">
              Hi, I’m Jay — I build service systems that help people settle and thrive.
            </h2>
            <p className="mt-4 text-gray-200">Diploma in Computer Programming — Seneca College (CGPA: 3.2)</p>

            <div className="mt-6 flex gap-3">
              <a
                href={ResumePDF}
                download
                className="inline-block px-4 py-2 rounded-md border border-sky-400 hover:shadow-lg text-sm text-sky-200 hover:bg-sky-900 transition"
              >
                Download Resume
              </a>

              <a
                className="inline-block px-4 py-2 rounded-md bg-sky-600 text-white text-sm hover:bg-sky-500 transition"
                href="https://www.linkedin.com/in/jay-s-a1b11b238/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-200">
              <div>
                <dt className="font-medium">Email</dt>
                <dd>sojitrajay13@gmail.com</dd>
              </div>
              <div>
                <dt className="font-medium">Phone</dt>
                <dd>+1 (647)-229-7663</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-slate-800 rounded-xl border border-sky-900 shadow-lg relative z-10"
            aria-hidden
          >
            <p className="text-sm text-sky-200">Quick highlights</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>Led a team of 9 food service members, ensuring top-tier customer service.</li>
              <li>Increased customer satisfaction by 20% through feedback and training.</li>
              <li>Experience supporting newcomers and community care.</li>
            </ul>
          </motion.div>
        </section>

        {/* About */}
        <motion.section
          id="about"
          className="mt-8 bg-slate-800 p-6 rounded-2xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlideUp}
        >
          <h3 className="text-2xl font-semibold text-sky-300">About</h3>
          <p className="mt-3 text-gray-200">
            I have experience in educational support, customer service, and operational management. I combine
            practical management with a passion for empowering newcomers and improving community well-being.
          </p>
        </motion.section>

        {/* Skills & Certifications */}
        <motion.section
          id="skills"
          className="mt-8 grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlideUp}
        >
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold text-sky-300">Key Skills</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <motion.span
                  key={s}
                  className="px-3 py-1 text-sm rounded-full border border-sky-400 text-sky-200 bg-slate-900/60 shadow"
                  whileHover={{ scale: 1.1, backgroundColor: "#0ea5e9", color: "#fff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold text-sky-300">Licenses & Certifications</h4>
            <ul className="mt-4 list-disc list-inside text-sky-200">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Experience */}
        <section id="experience" className="mt-8 relative py-8">
          <h3 className="text-2xl font-semibold mb-8 text-sky-300">Experience</h3>
          
          <div className="relative min-h-[500px] flex items-center justify-center">
            {/* Rotating Circle of Icons */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto">
              {experiences.map((exp, idx) => {
                const meta = getExperienceMeta(exp.title);
                const angle = (idx * (360 / experiences.length)) * (Math.PI / 180);
                const radius = 150; // Adjust this value to change circle size
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={exp.id}
                    className="absolute left-1/2 top-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: x,
                      y: y,
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                  >
                    <motion.button
                      onClick={() => document.getElementById(`exp-details-${exp.id}`).showModal()}
                      className="relative -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800 border-2 border-sky-500/30 hover:border-sky-400 shadow-lg hover:shadow-sky-500/20 transition group"
                      whileHover={{ scale: 1.2 }}
                    >
                      <span className="absolute inset-0 rounded-full bg-sky-400/20 opacity-0 group-hover:opacity-100 transition" />
                      <Icon name={meta.icon} className={`w-6 h-6 ${meta.iconClass}`} />
                    </motion.button>
                  </motion.div>
                );
              })}
              
              {/* Center piece */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-slate-800 border-4 border-sky-500/30 shadow-lg flex items-center justify-center">
                <span className="text-sky-400 font-semibold">Experience</span>
              </div>
            </div>

            {/* Experience Details Modals */}
            {experiences.map((exp) => {
              const meta = getExperienceMeta(exp.title);
              return (
                <dialog
                  key={exp.id}
                  id={`exp-details-${exp.id}`}
                  className="backdrop:bg-slate-900/90 bg-slate-800 text-gray-100 rounded-xl border border-sky-500/30 p-0 w-full max-w-lg mx-4"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      e.currentTarget.close();
                    }
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex items-center justify-center p-2 rounded-xl bg-slate-900 border border-slate-700/80 shadow text-current">
                        <Icon name={meta.icon} className={meta.iconClass} />
                      </span>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-sky-200">{exp.title}</h4>
                        <p className="text-gray-300">{exp.company} — {exp.location}</p>
                        <p className="text-sky-400">{exp.date}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <motion.span whileHover={{ scale: 1.06 }} className={meta.badgeClass}>
                            {meta.category}
                          </motion.span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="font-medium text-sky-300 mb-2">Responsibilities & Achievements</h5>
                      <ul className="space-y-2 text-gray-200">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-sky-400">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={(e) => e.currentTarget.closest('dialog').close()}
                        className="px-4 py-2 text-sm text-sky-200 hover:text-white transition"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </dialog>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="mt-8 bg-slate-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlideUp}
        >
          <h4 className="text-xl font-semibold text-sky-300">Contact</h4>
          <p className="text-sm text-gray-200 mt-2">Prefer email — sojitrajay13@gmail.com</p>

          <form onSubmit={handleContactSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              required
              placeholder="Your name"
              className="p-3 border border-sky-400 rounded-md text-gray-100 bg-slate-900 placeholder-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="p-3 border border-sky-400 rounded-md text-gray-100 bg-slate-900 placeholder-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              name="message"
              required
              placeholder="Message"
              className="p-3 border border-sky-400 rounded-md text-gray-100 bg-slate-900 placeholder-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 md:col-span-2"
              rows={5}
            />
            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-500 transition"
              >
                Send
              </button>
              <a
                href="mailto:sojitrajay13@gmail.com"
                className="px-4 py-2 border border-sky-400 rounded-md text-sky-200 hover:bg-sky-900 transition"
              >
                Email directly
              </a>
            </div>
          </form>
        </motion.section>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-gray-500">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            © 2025 Jay Sojitra. All rights reserved.
          </motion.span>
        </footer>
      </main>
    </div>
  );
}
