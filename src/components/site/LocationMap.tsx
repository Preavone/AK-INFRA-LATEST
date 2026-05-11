import { MapPin } from "lucide-react";

interface LocationMapProps {
  latitude?: number;
  longitude?: number;
  title?: string;
  address?: string;
}

export function LocationMap({ 
  latitude = 20.9124, 
  longitude = 71.9797, 
  title = "AK Infra Plant Location",
  address = "Veraval, Gir Somnath, 362265, Gujarat"
}: LocationMapProps) {
  // Veraval coordinates: approximately 20.9124°N, 71.9797°E
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.05}%2C${latitude - 0.05}%2C${longitude + 0.05}%2C${latitude + 0.05}&layer=mapnik&marker=${latitude}%2C${longitude}`;
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
          <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground">{address}</p>
        </div>
      </div>
      
      <div className="overflow-hidden rounded-2xl border border-border h-80">
        <iframe
          title={title}
          className="w-full h-full grayscale-[80%] contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-300"
          src={mapUrl}
          loading="lazy"
          style={{ border: 0 }}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-xs">
        <a
          href="https://maps.google.com/?q=20.9124,71.9797"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card p-3 hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
        >
          🗺️ Google Maps
        </a>
        <a
          href="https://www.openstreetmap.org/?mlat=20.9124&mlon=71.9797&zoom=13"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card p-3 hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
        >
          📍 OpenStreetMap
        </a>
      </div>
    </div>
  );
}
