import { useState, useEffect } from "react";
import { ArrowRight, Search, Sun, Moon, X, Command } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    // Sync theme with document class
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const sections = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Admissions", href: "#admissions" },
    { name: "Programs", href: "#programs" },
    { name: "Departments", href: "#departments" },
    { name: "Placements", href: "#placements" },
    { name: "Contact", href: "#contact" },
  ];

  const filteredSections = sections.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="bg-nav-bg/92 text-nav-text sticky top-0 z-[100] border-b border-border backdrop-blur-xl">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-[14px] lg:py-[18px] flex items-center justify-between gap-6 lg:gap-10">
        <a href="#" className="flex items-center gap-[14px]">
          <img src="/Assets/Academic.png" alt="College Logo" className="h-15 w-15 object-contain" />
          <img src="/Assets/Society.png" alt="College Logo" className="h-15 w-15 object-contain" />
          {/* <div className="flex flex-col leading-[1.05]">
            <span className="font-serif text-lg font-bold tracking-tight italic uppercase">Suryodaya</span>
            <span className="font-mono text-[9px] tracking-[0.28em] text-nav-text mt-[3px] font-bold opacity-60">CET · EST. 2002</span>
          </div> */}
        </a>
        
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
                    <a 
                      key={s.name} 
                      href={s.href} 
                      onClick={() => setShowSearch(false)}
                      className="flex items-center px-3 py-2 hover:bg-white/10 rounded text-[13px] font-medium text-nav-text group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {s.name}
                    </a>
                  )) : (
                    <div className="px-3 py-4 text-center text-nav-text/40 text-[12px] font-mono uppercase tracking-widest">No results found</div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <nav className="flex items-center gap-0.5">
              {sections.map((item, i) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2.5 text-[13px] font-bold tracking-wide transition-all relative hover:opacity-100 hover:text-accent ${i === 0 ? "text-accent opacity-100 after:content-[''] after:absolute after:bottom-0.5 after:left-4 after:right-4 after:h-[1px] after:bg-accent" : "text-nav-text opacity-60"}`}
                >
                  {item.name}
                </a>
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
            <a href="#admissions" className="bg-accent text-[#0b1422] dark:text-bg px-[22px] py-[11px] text-[13px] font-bold tracking-wide rounded-[4px] inline-flex items-center gap-2 hover:bg-nav-text hover:text-nav-bg transition-all uppercase">
              Apply <span className="hidden lg:inline">2026</span> <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
