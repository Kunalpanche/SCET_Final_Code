const AFFILIATIONS = [
  { badge: "A+", name: "NAAC", sub: "Grade · Cycle III", accent: true, imageUrl: "https://www.psgtech.edu/NAAC/assets/images/naaca+logo.png" },
  { badge: "NBA", name: "Accredited", sub: "UG Programs", imageUrl: "https://image.pngaaa.com/237/405237-middle.png" },
  { badge: "IBR", name: "India Book Of Records", sub: "Central India", imageUrl: "https://pbs.twimg.com/media/Eee6mn4U4AYA74I.jpg" },
  { badge: "AICTE", name: "Approved", sub: "All India Council", gold: true, imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png" },
  { badge: "DTE", name: "Maharashtra", sub: "Directorate", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH84ImnwgCRdcondjVsqfGL0EiieddYam1w&s" },
  { badge: "R•N", name: "RTMNU", sub: "Affiliated", imageUrl: "https://ssjcollege.ac.in/ssjclgdata/uploads/2022/07/rtmnu-logo.png" },
  { badge: "M•B", name: "MSBTE", sub: "Polytechnic", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLETByK0hpzKFUUbXzCX1pNzddKLXdVYL8w&s" },
];

export default function AffiliationStrip() {
  return (
    <section className="bg-surface px-5 lg:px-10 py-11 border-t-2 border-accent border-b border-border">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-[60px] items-center">
        <div className="font-serif text-xl leading-snug text-text font-medium italic">
          Recognised <em className="text-accent not-italic">&amp;</em> approved by the nation's foremost academic bodies.
        </div>
        <div className="overflow-hidden">
          <style>{`
            @keyframes scroll-loop {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-50% - 16px));
              }
            }
            .scroll-container {
              display: flex;
              gap: 32px;
              animation: scroll-loop 30s linear infinite;
              width: fit-content;
            }
          `}</style>
          <div className="scroll-container">
            {[...AFFILIATIONS, ...AFFILIATIONS].map((item, i) => (
              <div key={i} className="flex-shrink-0 text-center flex flex-col items-center gap-2">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.name} className="w-[50px] h-[50px] object-contain" />
                ) : (
                  <div className={`w-[38px] h-[38px] rounded-full flex items-center justify-center font-serif text-[13px] font-semibold tracking-tighter ${
                    item.accent ? "bg-accent text-bg" : 
                    item.gold ? "bg-surface-light text-text border border-border" : 
                    "bg-bg text-text-dim"
                  }`}>
                    {item.badge}
                  </div>
                )}
                <div className="font-mono text-[10px] tracking-widest uppercase font-medium">{item.name}</div>
                <div className="text-[9px] opacity-40 tracking-wider uppercase font-medium">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
