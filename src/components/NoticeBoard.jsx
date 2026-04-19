import { motion } from "motion/react";
import { ArrowRight, Mail, Bell } from "lucide-react";

const NOTICES = [
  { tag: "Admissions", title: "B.Tech 2026 registrations — merit list released", date: "18 · APR · 2026", color: "tag-admission" },
  { tag: "Event", title: "Tech Samagam '26: National-level technical fest", date: "12 · APR · 2026", color: "tag-event" },
  { tag: "Notice", title: "Revised Fee Structure — Academic Year 2026–27", date: "05 · APR · 2026", color: "tag-notice" },
  { tag: "Result", title: "Semester VI results declared — RTMNU affiliated", date: "28 · MAR · 2026", color: "tag-result" },
];

export default function NoticeBoard({ variant = "dark", limit = 3, showViewAll = true }) {
  const visibleNotices = NOTICES.slice(0, limit);
  const scrollingNotices = [...visibleNotices, ...visibleNotices]; // duplicate for seamless loop

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full"
    >
      {/* Main Container */}
      <div className="relative overflow-hidden rounded-[30px] backdrop-blur-1xl bg-gradient-to-br from-white/30 to-white/20 dark:from-white/10 dark:to-white/2 border border-white/40 dark:border-white/20 shadow-2xl group">
        
        {/* Background blobs (unchanged) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-accent/40 to-accent/20 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-accent/30 to-accent/10 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/20 via-transparent to-accent/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-7 lg:p-8">
          
          {/* Header */}
          <div className="mb-6 pb-6 border-b border-white/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <h2 className="font-sans text-[20px] lg:text-[24px] font-bold tracking-tight text-white">
                  Latest Updates
                </h2>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-lg shadow-accent/50"
                />
              </div>
            </div>
            <p className="text-white/60 text-[12px] font-medium tracking-wide uppercase">
              Campus News & Announcements
            </p>
          </div>

          {/*  SCROLLING NOTICES */}
          <div className="overflow-hidden h-[220px] mb-6">
            <motion.div
              className="flex flex-col gap-3"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: visibleNotices.length * 4, // dynamic speed
                ease: "linear",
              }}
            >
              {scrollingNotices.map((notice, i) => (
                <div
                  key={i}
                  className="group/card relative rounded-[18px] backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 hover:border-white/40 p-4 transition-all duration-300 hover:bg-white/15 hover:shadow-lg"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-[18px] bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <span className={`inline-flex text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full whitespace-nowrap ${
                        notice.tag === 'Admissions' 
                          ? 'bg-accent text-black' 
                          : notice.tag === 'Event' 
                          ? 'bg-blue-500/30 text-blue-200'
                          : notice.tag === 'Notice'
                          ? 'bg-purple-500/30 text-purple-200'
                          : 'bg-amber-500/30 text-amber-200'
                      }`}>
                        {notice.tag}
                      </span>
                      <span className="text-white/50 text-[10px] font-mono">{notice.date}</span>
                    </div>

                    <h3 className="text-[13px] font-semibold text-white leading-snug line-clamp-2 group-hover/card:text-accent transition-colors">
                      {notice.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4 border-t border-white/20">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2.5 rounded-[12px] bg-gradient-to-r from-accent to-accent/90 text-black font-semibold text-[12px] uppercase tracking-wide shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all">
              <ArrowRight className="w-3.5 h-3.5 inline-block mr-1.5" />
              Read More
            </motion.button>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-[12px] backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-white/40 transition-all">
              <Mail className="w-4 h-4" />
            </motion.button>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-[12px] backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-white/40 transition-all">
              <Bell className="w-4 h-4" />
            </motion.button>
          </div>

          {/* View All */}
          {showViewAll && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-5 pt-5 border-t border-white/20"
            >
              <a href="#notices" className="inline-flex items-center gap-1.5 text-accent font-semibold text-[11px] uppercase tracking-widest hover:gap-2.5 transition-all group/link">
                View all updates
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          )}
        </div>

        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-xl shadow-accent/20" />
      </div>
    </motion.div>
  );
}