import { LogoFull } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background px-6 pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <LogoFull />
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              AK Infra Ltd — reliable ready mix concrete supplier serving Veraval and the Gir Somnath region since 2008.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] text-primary mb-4">EXPLORE</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#projects" className="hover:text-primary">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] text-primary mb-4">REACH US</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+91 7698079478</li>
              <li>sales@akinfra.ltd</li>
              <li>Veraval, Gir Somnath, 362265 Gujarat</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-border text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} AK Infra Ltd. All rights reserved.</div>
          <div className="tracking-widest">STRENGTH · PRECISION · SCALE</div>
        </div>

        <div className="mt-12 rounded-lg border border-border/50 bg-card/30 p-6">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            <strong>AK Infra Ltd</strong> provides reliable ready mix concrete solutions in <strong>Veraval</strong> and <strong>Gir Somnath</strong> with a focus on quality production, efficient operations, and timely delivery. Equipped with a modern <strong>Venus CP 30 batching plant</strong>, we supply consistent <strong>M20, M25, and M30 concrete grades</strong> for residential, commercial, and local infrastructure projects. Our dedicated team ensures professional service and reliable <strong>concrete delivery</strong> throughout the region.
          </p>
        </div>
      </div>
    </footer>
  );
}
