import { motion } from "motion/react";

const TICKER_ITEMS = [
  {
    label: "Admissions 2026–27 open for B.Tech, MBA, MCA  apply before 15 June",
    link: "#admissions",
  },
  {
    label: "NAAC A+ Accreditation reaffirmed  Third cycle",
    link: "#accreditation",
  },
  {
    label: "Placement Season 2025 closes at 96% with ₹42 LPA highest package",
    link: "#placements",
  },
  {
    label: "SCET ranked among Top 25 engineering colleges in Central India  IBR 2025",
    link: "#ranking",
  },
  {
    label: "Tech Samagam '26 national fest  registrations open",
    link: "#fest",
  },
];

export default function Ticker() {
  return (
    <div className="bg-nav-bg text-nav-text border-b border-border overflow-hidden relative h-[38px] flex items-center">
      <div className="bg-accent text-nav-bg px-[18px] h-full flex items-center font-mono text-[10px] tracking-[0.25em] uppercase font-semibold flex-shrink-0 relative z-10 after:content-[''] after:absolute after:-right-3 after:top-0 after:w-0 after:h-0 after:border-l-[12px] after:border-l-accent after:border-t-[19px] after:border-t-transparent after:border-b-[19px] after:border-b-transparent">
        Live News
      </div>
      <div className="flex whitespace-nowrap animate-ticker pl-[30px]">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="px-10 text-[13px] tracking-wide flex items-center gap-3 before:content-['◆'] before:text-accent before:text-[8px] cursor-pointer hover:underline"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
