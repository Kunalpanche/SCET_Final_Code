import { Instagram, Linkedin, Youtube, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg text-text border-t border-border px-5 lg:px-10 pt-[80px] pb-[30px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr] gap-10 lg:gap-[60px] pb-[60px] border-b border-border">
        <div className="flex flex-col">
          <a href="#" className="flex items-center gap-[14px] mb-[20px]">
            <img src="https://res.cloudinary.com/dyzglyvad/image/upload/v1777026177/Academic_v3aaby.png" alt="Academic Logo" className="h-16 w-16 object-contain" />
            <img src="https://res.cloudinary.com/dyzglyvad/image/upload/v1777026179/Society_odj4cw.png" alt="Society Logo" className="h-16 w-16 object-contain" />
          </a>
          <div className="font-serif italic text-[17px] leading-relaxed opacity-60 max-w-[280px] mb-7">
            A place where the sun rises on curious minds, and never quite sets.
          </div>
          <div className="flex gap-2.5">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/suryodayacollege/" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/suryodaya-college-of-engineering-technology-nagpur/posts/?feedView=all" },
              { Icon: Youtube, href: "https://www.youtube.com/@suryodayacollegeofengg.tec3955" },
              { Icon: Facebook, href: "https://www.facebook.com/SuryodayaCollege" },
              { Icon: Twitter, href: "#" }
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target={href !== "#" ? "_blank" : "_self"} rel={href !== "#" ? "noopener noreferrer" : ""} className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-[22px] font-bold">Explore</h4>
          <ul className="flex flex-col gap-3">
            {["About SCET", "Academic Programs", "Departments", "Placements", "Research"].map((link) => (
              <li key={link}><a href="#" className="text-[14px] opacity-60 hover:opacity-100 hover:text-accent transition-all font-medium">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-[22px] font-bold">Students</h4>
          <ul className="flex flex-col gap-3">
            {["Student Portal", "Examination Cell", "Library", "Anti-Ragging", "Grievance Cell"].map((link) => (
              <li key={link}><a href="#" className="text-[14px] opacity-60 hover:opacity-100 hover:text-accent transition-all font-medium">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-[22px] font-bold">Admissions</h4>
          <ul className="flex flex-col gap-3">
            {["Apply Online", "Fee Structure", "Scholarships", "Hostel & Transport", "Brochure"].map((link) => (
              <li key={link}><a href="#" className="text-[14px] opacity-60 hover:opacity-100 hover:text-accent transition-all font-medium">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-[22px] font-bold">Connect</h4>
          <ul className="flex flex-col gap-3 text-[14px] opacity-60 font-medium">
            <li>Survey No. 117/1 & 117/3 A, Near Dighori Naka, Vihirgaon, Umrer Road,<br /> Nagpur, Maharashtra 440034</li>
            <li><a href="mailto:hello@scet.ac.in" className="hover:text-accent transition-all">edu@scetngp.com</a></li>
            <li><a href="tel:+917126551200" className="hover:text-accent transition-all">+91 712 655 1200 / 1300</a></li>
            <li><a href="#" className="hover:text-accent transition-all">Careers at SCET</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-7 flex flex-col md:flex-row justify-between items-center gap-5 font-mono text-[11px] tracking-[0.15em] uppercase text-text/50 font-bold">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
          <div>© 2026 Suryodaya College of Engineering & Technology</div>
          <div className="text-accent">
            Design and Developed by <a href="https://traillx.com" target="_blank" rel="noopener noreferrer" className="hover:underline">TraillX</a>
          </div>
        </div>
        <div className="flex gap-5">
          {["Privacy", "Terms", "Sitemap", "RTI"].map((link) => (
            <a key={link} href="#" className="hover:text-text transition-colors">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
