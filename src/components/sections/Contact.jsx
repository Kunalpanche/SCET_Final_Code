const CONTACT_INFO = [
  { label: "Address", val: "Survey No. 117/1 & 117/3 A, Near Dighori Naka, Vihirgaon, Umrer Road, Nagpur, Maharashtra 440034", multi: true },
  { label: "Telephone", val: "+91 712 655 1200 / 1300" },
  { label: "Admissions", val: "edu@scetngp.com" },
  { label: "College Timing", val: "Mon to Sat · 9:30 to 4:30" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-[100px] lg:py-[140px] px-5 lg:px-10 bg-bg text-text relative overflow-hidden">
      <div className="absolute -bottom-[50%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[60px] lg:gap-20">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent mb-5 font-bold">Get in touch</div>
          <h2 className="font-serif text-[clamp(56px,7vw,110px)] leading-[0.9] tracking-tighter mb-10 font-medium italic">
            Come, <em className="not-italic font-light text-accent">visit us.</em>
          </h2>
          <div className="flex flex-col border-t border-border">
            {CONTACT_INFO.map((row, i) => (
              <div key={i} className="py-[26px] border-b border-border grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-[30px] items-center">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-dim font-bold">{row.label}</div>
                <div className={`font-serif tracking-tight font-medium ${row.multi ? "text-[16px] leading-relaxed opacity-90" : "text-[20px]"}`}>
                  {row.val.split('\n').map((line, j) => (
                    <span key={j} className="block">{line}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-border rounded-[8px] overflow-hidden min-h-[500px] relative flex flex-col group mt-10 lg:mt-0">
          <div className="flex-1 relative overflow-hidden bg-bg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.5550173409156!2d79.16254262974391!3d21.09042768500538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf10a3fe8edb%3A0x4d296b163073344d!2sSuryodaya%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1777962276896!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-[22px_26px] border-t border-border flex justify-between items-center bg-bg">
            <div className="font-mono text-[11px] tracking-[0.15em] opacity-40 font-bold text-text-dim">21.1458° N · 79.0882° E</div>
            <a href="https://share.google/tiJJ49yn35lY4I2Pf" target="_blank" rel="noopener noreferrer" className="text-accent font-mono text-[11px] tracking-[0.18em] uppercase flex items-center gap-2 font-bold hover:underline transition-all group-hover:gap-3">Open in Maps ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
