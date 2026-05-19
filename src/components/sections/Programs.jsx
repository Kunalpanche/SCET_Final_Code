import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Code, Cpu, Settings, Triangle, Zap, Box, BrainCircuit, Globe, Building2, BookOpen, Briefcase, LayoutTemplate } from "lucide-react";
import { DepartmentCard } from "../ui/department-card";

const PROGRAMS_DATA = {
  "Diploma": [
    { code: "DIP · CIVIL", icon: <Building2 className="w-5 h-5" />, name: "Civil Engineering", faculty: "12", intake: "60", nba: "-", imageUrl: "https://images.unsplash.com/photo-1541888081682-ee4b201089d7?q=80&w=800", themeColor: "25 70% 45%" },
    { code: "DIP · MECH", icon: <Settings className="w-5 h-5" />, name: "Mechanical Engineering", faculty: "15", intake: "60", nba: "-", imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800", themeColor: "200 60% 40%" },
    { code: "DIP · MINING", icon: <Triangle className="w-5 h-5" />, name: "Mining Engineering", faculty: "8", intake: "60", nba: "-", imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800", themeColor: "30 50% 30%" },
    { code: "DIP · EE", icon: <Zap className="w-5 h-5" />, name: "Electrical Engineering", faculty: "10", intake: "60", nba: "-", imageUrl: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800", themeColor: "45 90% 40%" },
    { code: "DIP · HUM", icon: <BookOpen className="w-5 h-5" />, name: "Humanities", faculty: "6", intake: "N/A", nba: "-", imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800", themeColor: "330 50% 45%" },
  ],
  "UG": [
    { code: "UG · CSE", icon: <Code className="w-5 h-5" />, name: "Computer Engineering", faculty: "28", intake: "120", nba: "A+", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800", themeColor: "220 70% 50%" },
    { code: "UG · DS", icon: <Cpu className="w-5 h-5" />, name: "Computer Science (Data Science)", faculty: "14", intake: "60", nba: "'22", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", themeColor: "280 60% 50%" },
    { code: "UG · ECE", icon: <Globe className="w-5 h-5" />, name: "Electronics & Telecommunication", faculty: "22", intake: "60", nba: "A", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", themeColor: "160 60% 40%" },
    { code: "UG · MECH", icon: <Settings className="w-5 h-5" />, name: "Mechanical Engineering", faculty: "26", intake: "60", nba: "A", imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800", themeColor: "200 60% 40%" },
    { code: "UG · CIVIL", icon: <Building2 className="w-5 h-5" />, name: "Civil Engineering", faculty: "19", intake: "60", nba: "A", imageUrl: "https://images.unsplash.com/photo-1541888081682-ee4b201089d7?q=80&w=800", themeColor: "25 70% 45%" },
    { code: "UG · EE", icon: <Zap className="w-5 h-5" />, name: "Electrical Engineering", faculty: "17", intake: "60", nba: "B+", imageUrl: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800", themeColor: "45 90% 40%" },
    { code: "UG · IOT", icon: <BrainCircuit className="w-5 h-5" />, name: "Internet of Things", faculty: "10", intake: "60", nba: "New", imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800", themeColor: "180 70% 40%" },
  ],
  "PG": [
    { code: "PG · MBA", icon: <Briefcase className="w-5 h-5" />, name: "Master of Business Administration", faculty: "18", intake: "120", nba: "A", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800", themeColor: "350 60% 50%" },
    { code: "PG · MCA", icon: <LayoutTemplate className="w-5 h-5" />, name: "Master of Computer Applications", faculty: "15", intake: "60", nba: "B+", imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800", themeColor: "210 80% 40%" },
  ]
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState("UG");

  return (
    <section id="programs" className="py-[100px] lg:py-[130px] px-5 lg:px-10 bg-surface-light border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1440px] mx-auto mb-[50px] flex flex-col lg:flex-row lg:items-end justify-between gap-10"
      >
        <div className="max-w-[720px]">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent font-bold mb-4">Academic Programs · 2026</div>
          <h2 className="font-serif text-[clamp(42px,5vw,72px)] leading-none tracking-tight text-text italic">Explore our <em className="text-accent not-italic font-light">disciplines.</em></h2>
        </div>

        {/* Tabs */}
        <div className="flex bg-surface border border-border rounded-full p-1 self-start lg:self-end">
          {Object.keys(PROGRAMS_DATA).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`select-none outline-none px-8 py-3 rounded-full text-[14px] font-bold tracking-wide transition-all duration-300 relative z-0 ${activeTab === tab ? "text-black" : "text-text-dim hover:text-text"}`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-yellow-400 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-[1440px] mx-auto relative min-h-[400px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROGRAMS_DATA[activeTab].map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <DepartmentCard
                  imageUrl={dept.imageUrl}
                  name={dept.name}
                  icon={dept.icon}
                  stats={`${dept.faculty} Faculty • ${dept.intake !== "N/A" ? dept.intake + " Intake" : "No Limit"}`}
                  href={`/department/${dept.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  themeColor={dept.themeColor}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
