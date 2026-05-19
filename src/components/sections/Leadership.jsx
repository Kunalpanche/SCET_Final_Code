const LEADERS = [
  { initials: "DC", role: "President", name: "Shri Deepak Chafle", quote: "Education is the single most important investment a nation makes in its own future. Our job is to steward that investment with care.", p: "bg-surface-light border border-border", image: "https://res.cloudinary.com/dyzglyvad/image/upload/v1777023587/Deepaksir_diaaav.png" },
  { initials: "RC", role: "Secretary", name: "Shri Ranjit Chafle", quote: "A college is not measured by its buildings but by the questions its students learn to ask. We build restless, rigorous minds.", p: "bg-surface border border-border", image: "https://res.cloudinary.com/dyzglyvad/image/upload/v1777023586/Ranjeetsir_o6c1mn.png" },
  { initials: "VG", role: "Principal", name: "Dr. V. G. Arajpure", quote: "Every engineer we graduate carries the Suryodaya mark  a marriage of technical depth with human decency. That is non-negotiable.", p: "bg-bg border border-border", image: "https://res.cloudinary.com/dyzglyvad/image/upload/v1777023120/Arajpure_xiqevt.png" },
  { initials: "VP", role: "CEO & Vice Principal", name: "Dr. V. G. Parate", quote: "We believe the best classrooms are half laboratory, half dialogue  and always in service of something larger than a grade.", p: "bg-surface-light border border-border", image: "https://res.cloudinary.com/dyzglyvad/image/upload/v1777023586/Paratesir_nitfjl.png" },
];

export default function Leadership() {
  return (
    <section className="py-[100px] lg:py-[140px] px-5 lg:px-10 bg-bg text-text relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto mb-[70px]">
        <div className="max-w-[720px]">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent mb-5 font-bold">Leadership · Messages</div>
          <h2 className="font-serif text-[clamp(42px,5vw,72px)] leading-none tracking-tight italic font-medium">Voices that <em className="text-accent not-italic font-light">shape the institution.</em></h2>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border border-border">
        {LEADERS.map((leader, i) => (
          <div key={i} className="bg-bg p-10 lg:p-8 min-h-[460px] flex flex-col transition-colors hover:bg-surface italic">
            <div className={`w-full aspect-square mb-7 relative overflow-hidden rounded-[8px] ${leader.p}`}>
              {leader.image ? (
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center font-serif text-[72px] font-light text-accent italic">
                  {leader.initials}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-2 font-bold not-italic">{leader.role}</div>
            <div className="font-serif text-[22px] font-normal mb-3.5 tracking-tight text-text not-italic uppercase">{leader.name}</div>
            <div className="text-[15px] leading-relaxed opacity-60 italic font-serif flex-grow mb-5">
              "{leader.quote}"
            </div>
            <a href="#" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-text-dim mt-auto pt-4 border-t border-border hover:text-accent transition-colors not-italic font-bold">
              Read full message →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
