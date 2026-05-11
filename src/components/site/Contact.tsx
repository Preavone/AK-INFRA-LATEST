import { Reveal } from "./Reveal";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { LocationMap } from "./LocationMap";
import { formatQuotationMessage, generateWhatsAppLink } from "@/lib/whatsapp-server";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loc: "",
    grade: "M20",
    volume: "",
    notes: ""
  });
  return (
    <section id="contact" className="relative py-32 px-6 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal><span className="text-xs tracking-[0.4em] text-primary font-medium">— QUICK QUOTATION</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold leading-[1.05]">
                Get a concrete <br /><span className="text-gradient-ember">quotation today.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-muted-foreground max-w-md">
                Request a quotation for Ready Mix Concrete delivery in Veraval. Fast response under 2 hours. Site survey within 24 hours for all RMC projects.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 space-y-4">
                {[
                  { icon: Phone, label: "Call us", val: "+91 7698079478", href: "tel:+917698079478" },
                  { icon: Mail, label: "Email", val: "sales@akinfra.ltd", href: "mailto:sales@akinfra.ltd" },
                  { icon: MapPin, label: "Plant", val: "Veraval, Gir Somnath, 362265, Gujarat", href: "#" },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-start gap-4 group">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary group-hover:bg-primary/15 transition-colors">
                      <c.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">{c.label}</div>
                      <div className="mt-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">{c.val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8">
                <LocationMap 
                  latitude={20.9124} 
                  longitude={71.9797}
                  title="AK Infra Plant - Veraval"
                  address="Veraval, Gir Somnath, 362265, Gujarat"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  
                  try {
                    // Validate form data
                    if (!formData.name || !formData.phone || !formData.email || !formData.loc || !formData.volume) {
                      alert('Please fill all required fields');
                      setLoading(false);
                      return;
                    }
                    
                    // Format and send to WhatsApp
                    const message = formatQuotationMessage({
                      name: formData.name,
                      phone: formData.phone,
                      email: formData.email,
                      location: formData.loc,
                      grade: formData.grade,
                      volume: formData.volume,
                      notes: formData.notes
                    });
                    
                    const whatsappLink = generateWhatsAppLink(message);
                    
                    // Log the submission (in production, send to backend)
                    console.log('Quotation request:', {
                      name: formData.name,
                      phone: formData.phone,
                      email: formData.email,
                      location: formData.loc,
                      grade: formData.grade,
                      volume: formData.volume,
                      notes: formData.notes
                    });
                    
                    setSubmitted(true);
                    // Open WhatsApp in a new tab
                    setTimeout(() => {
                      window.open(whatsappLink, '_blank');
                    }, 500);
                    
                    // Reset form after 3 seconds
                    setTimeout(() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        loc: "",
                        grade: "M20",
                        volume: "",
                        notes: ""
                      });
                    }, 3000);
                  } catch (error) {
                    console.error('Error submitting quotation:', error);
                    alert('Error sending quotation. Please try again.');
                  } finally {
                    setLoading(false);
                  }
                }}
                className="relative rounded-3xl border border-border bg-background p-8 sm:p-10"
              >
                <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <h3 className="font-display text-2xl font-bold">RMC Quotation Request</h3>
                <p className="mt-1 text-sm text-muted-foreground">Request concrete delivery in Veraval. All fields confidential. Quick WhatsApp response.</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  {[
                    { l: "Full Name", t: "text", n: "name" },
                    { l: "Phone", t: "tel", n: "phone" },
                    { l: "Email", t: "email", n: "email" },
                    { l: "Site Location", t: "text", n: "loc" },
                  ].map((f) => (
                    <label key={f.n} className="block">
                      <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">{f.l}</span>
                      <input
                        required 
                        type={f.t} 
                        name={f.n}
                        value={formData[f.n as keyof typeof formData]}
                        onChange={(e) => setFormData({...formData, [f.n]: e.target.value})}
                        className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
                      />
                    </label>
                  ))}
                  <label className="block">
                    <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Grade</span>
                    <select 
                      name="grade"
                      value={formData.grade}
                      onChange={(e) => setFormData({...formData, grade: e.target.value})}
                      className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary">
                      <option>M10</option><option>M20</option><option>M25</option><option>M30+</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Volume (m³)</span>
                    <input 
                      type="number" 
                      min="1" 
                      name="volume"
                      value={formData.volume}
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                      className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary" 
                    />
                  </label>
                </div>
                <label className="block mt-5">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Project Notes</span>
                  <textarea 
                    rows={4} 
                    name="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary resize-none" 
                  />
                </label>
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:ember-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? "Request Sent ✓" : loading ? "Sending..." : <>Send Quotation Request <Send className="h-4 w-4" /></>}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
