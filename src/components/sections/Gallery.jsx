const TILES = [
  { id: 1, cat: "Event · 2025", title: "Annual Convocation", wide: true, color: "from-surface to-surface-light", image: "https://res.cloudinary.com/dyzglyvad/image/upload/v1777024415/garba_z9croq.png" },
  { id: 2, cat: "Facility", title: "Central Library", color: "from-surface-light to-surface", image: "https://res.cloudinary.com/dyzglyvad/image/upload/v1777025064/centrallib_y1m68y.png" },
  { id: 3, cat: "Student Life", title: "Central India hackathon", tall: true, color: "from-surface to-border", image: "https://res.cloudinary.com/dyzglyvad/image/upload/v1777025328/cih_lwf0tr.png" },
  { id: 4, cat: "Research", title: "Robotics Lab", color: "from-surface to-surface-light", image: "https://res.cloudinary.com/dyzglyvad/image/upload/v1777025435/robothand_x7amcx.png" },
  { id: 5, cat: "Tech Pro 2025", title: "Project Compition", color: "from-surface-light to-border", image: "https://res.cloudinary.com/dyzglyvad/image/upload/v1777025850/Techpro_m8ebqz.png" },
  { id: 6, cat: "Campus", title: "Morning at the quad", color: "from-border to-surface", image: "https://res.cloudinary.com/dyzglyvad/image/upload/v1777024271/cetstudnets_irg20l.png" },
];

export default function Gallery() {
  return (
    <section className="py-[100px] lg:py-[130px] px-5 lg:px-10 bg-bg overflow-hidden border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-end">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent mb-5 font-bold">Gallery · Campus Life</div>
            <h2 className="font-serif text-[clamp(42px,5vw,72px)] text-text leading-tight tracking-tight font-medium italic">A place, in <em className="text-accent not-italic font-light">pictures.</em></h2>
          </div>
          <p className="text-[16px] leading-[1.6] text-text-dim opacity-60 max-w-[500px]">
            Seventeen acres, eleven departments, and a thousand afternoons in between. A glimpse into life at Suryodaya  from convocation stages to chai-stained lab notebooks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {TILES.map((tile) => (
            <div
              key={tile.id}
              className={`group relative overflow-hidden rounded-[8px] bg-surface flex items-end p-5 lg:p-[22px] min-h-[220px] transition-transform hover:scale-[0.98] border border-border ${tile.wide ? "lg:col-span-2" : ""
                } ${tile.tall ? "lg:row-span-2 min-h-[460px]" : ""
                }`}
            >
              {tile.image && (
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className={`absolute inset-0 bg-gradient-to-br transition-opacity opacity-20 ${tile.color} ${tile.image ? "group-hover:opacity-40" : ""}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent mb-1.5 font-bold">{tile.cat}</div>
                <div className="font-serif text-[18px] font-medium leading-tight text-text tracking-tight uppercase italic">{tile.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
