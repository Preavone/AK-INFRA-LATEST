import { Reveal } from "./Reveal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Layers } from "lucide-react";

const galleryItems = [
  { 
    id: 1, 
    img: "/projects/plant-1.jpg", 
    title: "Venus CP 30 Batching Plant", 
    tag: "Plant Operations", 
    loc: "Veraval Plant", 
    grade: "All Grades",
    desc: "Our automated batching plant ensures consistent concrete production with reliable output and strict quality control.",
    altText: "Venus CP 30 batching plant operations",
    span: "md:col-span-2 md:row-span-2"
  },
  { 
    id: 2, 
    img: "/projects/commercial-1.jpg", 
    title: "Commercial Concrete Supply", 
    tag: "Commercial", 
    loc: "Veraval City", 
    grade: "M30",
    desc: "Reliable concrete batching for commercial complexes, ensuring structural integrity and timely completion.",
    altText: "Commercial building concrete construction",
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 3, 
    img: "/projects/pouring-1.jpg", 
    title: "Concrete Pouring", 
    tag: "Site Work", 
    loc: "Prabhas Patan", 
    grade: "M25",
    desc: "Efficient on-site concrete pouring operations meeting strict quality standards.",
    altText: "Large concrete foundation pour",
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 4, 
    img: "/projects/residential-1.jpg", 
    title: "Residential Project Supply", 
    tag: "Residential", 
    loc: "Kodinar", 
    grade: "M20",
    desc: "Quality concrete mixes suitable for foundations, columns, and slabs in housing developments.",
    altText: "Residential housing foundation concrete work",
    span: "md:col-span-2 md:row-span-1" 
  },
  { 
    id: 5, 
    img: "/projects/storage-1.jpg", 
    title: "Material Storage Area", 
    tag: "Plant Operations", 
    loc: "Veraval Plant", 
    grade: "-",
    desc: "Organised storage of aggregates and materials to ensure uninterrupted and clean production.",
    altText: "Aggregate and sand material storage",
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 6, 
    img: "/projects/mixer-1.jpg", 
    title: "Transit Mixer Dispatch", 
    tag: "Logistics", 
    loc: "Gir Somnath", 
    grade: "All Grades",
    desc: "Timely dispatch and delivery via our dedicated fleet of transit mixers ensuring fresh concrete on site.",
    altText: "Transit mixer truck dispatch",
    span: "md:col-span-1 md:row-span-2" 
  },
  { 
    id: 7, 
    img: "/projects/project-1.jpg", 
    title: "Construction Site Work", 
    tag: "Site Work", 
    loc: "Somnath", 
    grade: "M25",
    desc: "Supporting complex structural builds with high-quality ready mix concrete delivered on schedule.",
    altText: "Construction site work with concrete pillars",
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 8, 
    img: "/projects/ongoing-1.jpg", 
    title: "Ongoing Projects", 
    tag: "Infrastructure", 
    loc: "Highway Corridor", 
    grade: "M30",
    desc: "Consistent concrete supply for critical ongoing local infrastructure and road projects.",
    altText: "Ongoing bridge or highway infrastructure construction",
    span: "md:col-span-1 md:row-span-1" 
  },
];

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  
  return (
    <section id="projects" className="relative py-32 px-6 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Reveal><span className="text-xs tracking-[0.4em] text-primary font-medium">— DYNAMIC GALLERY</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold max-w-3xl">
                Projects & Plant <span className="text-gradient-ember">Operations.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground max-w-xs text-sm">
              Explore our facility operations and the projects we supply across the region.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[280px] gap-4">
          {galleryItems.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05} className={`group relative overflow-hidden rounded-2xl cursor-pointer ${p.span} w-full h-full min-h-[280px]`}>
              <button onClick={() => setOpen(i)} className="absolute inset-0 h-full w-full text-left">
                <motion.img
                  src={p.img}
                  alt={p.altText}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] tracking-[0.3em] font-semibold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full backdrop-blur-md border border-primary/20">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary/70" /> {p.loc}</span>
                    <span className="flex items-center gap-1.5"><Layers className="h-3.5 w-3.5 text-primary/70" /> {p.grade}</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-border bg-card flex flex-col md:flex-row shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group">
                <X className="h-5 w-5" />
              </button>
              
              <div className="w-full md:w-3/5 h-[40vh] md:h-[70vh] bg-muted relative">
                <img src={galleryItems[open].img} alt={galleryItems[open].altText} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              
              <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
                <span className="text-[10px] tracking-[0.3em] font-semibold text-primary uppercase mb-4 inline-block">{galleryItems[open].tag}</span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-6">{galleryItems[open].title}</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  {galleryItems[open].desc}
                </p>
                
                <div className="space-y-4 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-widest text-muted-foreground uppercase">Location</div>
                      <div className="text-sm font-medium">{galleryItems[open].loc}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-widest text-muted-foreground uppercase">Concrete Grade</div>
                      <div className="text-sm font-medium">{galleryItems[open].grade}</div>
                    </div>
                  </div>
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
