import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="py-[100px] lg:py-[140px] px-5 lg:px-10 bg-bg relative">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-[120px]">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent mb-6 flex items-center gap-3 before:content-[''] before:w-10 before:h-[1px] before:bg-accent">
            About the College · Est. 2002
          </div>
          <h2 className="font-serif text-[clamp(48px,5.5vw,84px)] text-text leading-[0.95] tracking-tight mb-[30px] font-medium italic">
            A quiet revolution, <em className="text-burgundy not-italic font-light">in engineering</em>.
          </h2>
          <div className="font-serif italic text-2xl leading-relaxed text-text-dim max-w-[460px] mt-[30px] pl-[30px] border-l-2 border-accent opacity-90">
            "We do not build graduates. We build people who build  bridges, companies, movements, lives."
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <p className="text-[17px] leading-[1.7] text-text-dim first-letter:float-left first-letter:text-[84px] first-letter:font-serif first-letter:text-accent first-letter:pr-3.5 first-letter:pt-1.5 first-letter:leading-[0.85] first-letter:font-normal">
            Founded on the outskirts of Nagpur at the turn of the millennium, Suryodaya College of Engineering & Technology began with a single conviction  that the future of this country would be written in code, concrete, circuits and care. Twenty-three years later, that conviction has become a campus of seventeen acres, eleven departments, and eighteen thousand alumni scattered across every continent.
          </p>
          <p className="text-[17px] leading-[1.7] text-text-dim opacity-80">
            Our programs span the arc from applied polytechnic training to doctoral research. Our laboratories, built in partnership with Ansys, Dassault Systèmes and NTPC, teach students to solve problems that have not yet been named. Our leadership is drawn equally from industry and academia, because the world does not recognise that boundary  and neither do we.
          </p>
          <p className="text-[17px] leading-[1.7] text-text-dim opacity-80">
            What makes SCET different is not any one metric. It is a texture  of late-night labs, of Marathi poetry on library walls, of placement drives that end in hugs, of faculty who answer emails at midnight. It is a texture you have to visit to understand.
          </p>

          <div className="flex items-center gap-5 mt-5 pt-[26px] border-t border-border">
            <div className="w-16 h-16 rounded-full bg-surface-light border border-border overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dyzglyvad/image/upload/v1777023120/Arajpure_xiqevt.png" 
                alt="Dr. V. G. Arajpure" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-serif text-lg font-medium">Dr. V. G. Arajpure</div>
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-40 mt-0.5 font-medium">Principal · SCET Nagpur</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border mt-[60px] border border-border">
            <div className="bg-bg p-10">
              <div className="font-mono text-[11px] tracking-[0.2em] text-accent mb-5 uppercase font-medium">01 · Vision</div>
              <div className="font-serif text-[32px] leading-tight mb-[18px] font-medium">To illuminate minds.</div>
              <p className="text-[15px] leading-relaxed text-text-dim opacity-70">To emerge as a globally recognised centre of engineering excellence  where rigorous inquiry, ethical leadership, and compassionate innovation converge to serve society's most urgent needs.</p>
            </div>
            <div className="bg-bg p-10">
              <div className="font-mono text-[11px] tracking-[0.2em] text-accent mb-5 uppercase font-medium">02 · Mission</div>
              <div className="font-serif text-[32px] leading-tight mb-[18px] font-medium">To build for the future.</div>
              <p className="text-[15px] leading-relaxed text-text-dim opacity-70">To cultivate engineers of character and competence through industry-aligned curricula, research-led teaching, holistic mentorship, and an unwavering commitment to inclusivity and integrity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
