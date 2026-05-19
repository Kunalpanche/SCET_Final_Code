import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Sun, Moon, X, Command } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearch(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    // Sync theme with document class
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const sections = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Admissions", href: "/#admissions" },
    {
      name: "Programs",
      href: "/#programs",
      isDropdown: true,
      categories: [
        { title: "Diploma", items: ["Civil Engineering", "Mechanical Engineering", "Mining Engineering", "Electrical Engineering", "Humanities"] },
        { title: "UG", items: ["Mechanical Engineering", "Electrical Engineering", "Electronics & Telecommunication", "Computer Engineering", "Computer Science Engineering (Data Science)", "Civil Engineering", "Internet of Things"] },
        { title: "PG", items: ["MBA", "MCA"] }
      ]
    },
    { name: "Placements", href: "/#placements" },
    { name: "Contact", href: "/#contact" },
  ];

  const filteredSections = sections.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="bg-nav-bg/92 text-nav-text sticky top-0 z-[100] border-b border-border backdrop-blur-xl">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-[14px] lg:py-[18px] flex items-center justify-between gap-6 lg:gap-10">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-[14px] bg-white mt-[-14px] lg:mt-[-18px] pt-[14px] lg:pt-[18px] pb-4 px-6 rounded-b-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative z-10">
            <img src="https://res.cloudinary.com/dyzglyvad/image/upload/v1777026177/Academic_v3aaby.png" alt="Academic Logo" className="h-16 w-16 lg:h-20 lg:w-20 object-contain drop-shadow-sm" />
            <img src="https://res.cloudinary.com/dyzglyvad/image/upload/v1777026179/Society_odj4cw.png" alt="Society Logo" className="h-16 w-16 lg:h-20 lg:w-20 object-contain drop-shadow-sm" />
          </Link>
          {/* Text section outside of the white box if needed later */}
          {/* <div className="hidden lg:flex flex-col leading-[1.05]">
            <span className="font-serif text-lg font-bold tracking-tight italic uppercase">Suryodaya</span>
            <span className="font-mono text-[9px] tracking-[0.28em] text-nav-text mt-[3px] font-bold opacity-60">CET · EST. 2002</span>
          </div> */}
        </div>

        <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center relative">
          {showSearch ? (
            <div className="flex items-center w-full max-w-[400px] bg-nav-bg border border-border rounded-[4px] px-3 py-1.5 focus-within:border-accent transition-all animate-in fade-in slide-in-from-left-2 duration-300">
              <Search className="w-4 h-4 text-nav-text/60 mr-2" />
              <input
                autoFocus
                type="text"
                placeholder="Search campus sections..."
                className="bg-transparent border-none outline-none text-[13px] w-full font-medium text-nav-text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setShowSearch(false);
                }}
              />
              <button onClick={() => { setShowSearch(false); setSearchQuery(""); }} className="p-1 hover:bg-white/10 rounded text-nav-text">
                <X className="w-3.5 h-3.5" />
              </button>

              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-nav-bg border border-border rounded-[4px] shadow-2xl p-2 max-h-[300px] overflow-y-auto z-[200]">
                  {filteredSections.length > 0 ? filteredSections.map(s => (
                    <Link
                      key={s.name}
                      to={s.href}
                      onClick={() => setShowSearch(false)}
                      className="flex items-center px-3 py-2 hover:bg-white/10 rounded text-[13px] font-medium text-nav-text group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {s.name}
                    </Link>
                  )) : (
                    <div className="px-3 py-4 text-center text-nav-text/40 text-[12px] font-mono uppercase tracking-widest">No results found</div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <nav className="flex items-center gap-0.5">
              {sections.map((item, i) => (
                <div key={item.name} className="relative nav-dropdown-container">
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      if (item.isDropdown) {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      } else {
                        setActiveDropdown(null);
                      }
                    }}
                    className={`px-4 py-2.5 text-[13px] font-bold tracking-wide transition-all relative hover:opacity-100 hover:text-accent flex items-center gap-1 ${i === 0 ? "text-accent opacity-100 after:content-[''] after:absolute after:bottom-0.5 after:left-4 after:right-4 after:h-[1px] after:bg-accent" : "text-nav-text opacity-60"} ${activeDropdown === item.name ? "text-accent opacity-100" : ""}`}
                  >
                    {item.name}
                  </Link>

                  {item.isDropdown && (
                    <div className={`absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 z-[200] ${activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                      <div className="w-[640px] bg-white dark:bg-surface border border-border/50 shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.4)] rounded-2xl p-7 grid grid-cols-3 gap-8 relative overflow-hidden backdrop-blur-3xl">
                        {/* Decorative Background Element */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Tooltip Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-surface border-t border-l border-border/50 rotate-45"></div>

                        {item.categories.map((cat) => (
                          <div key={cat.title} className="relative z-10 flex flex-col h-full">
                            <h4 className="text-accent font-black text-[12px] mb-4 pb-2 border-b border-border/50 uppercase tracking-[0.2em]">{cat.title}</h4>
                            <ul className="flex flex-col gap-3 text-[13px] font-semibold text-text-dim">
                              {cat.items.map((sub) => (
                                <li key={sub}>
                                  <Link
                                    to={`/department/${sub.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                    onClick={() => setActiveDropdown(null)}
                                    className="hover:text-accent hover:translate-x-1.5 transition-all inline-block whitespace-nowrap"
                                  >
                                    {sub}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2.5 hover:bg-white/10 rounded-[4px] transition-colors border border-transparent hover:border-border text-nav-text/60 hover:text-nav-text group"
            title="Search (Cmd+K)"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2.5 hover:bg-white/10 rounded-[4px] transition-colors border border-transparent hover:border-border text-nav-text/60 hover:text-nav-text group"
            title={isDark ? "Enable Light Mode" : "Enable Dark Mode"}
          >
            {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
          </button>

          <div className="hidden sm:flex items-center gap-3">
            <a href="#" className="hidden lg:block text-nav-text/60 px-5 py-[11px] text-[13px] font-bold border border-border rounded-[4px] hover:border-accent hover:text-accent transition-all uppercase tracking-tighter">
              Brochure
            </a>
            <Link to="/#admissions" className="bg-accent text-[#0b1422] dark:text-bg px-[22px] py-[11px] text-[13px] font-bold tracking-wide rounded-[4px] inline-flex items-center gap-2 hover:bg-nav-text hover:text-nav-bg transition-all uppercase">
              Apply <span className="hidden lg:inline">2026</span> <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
