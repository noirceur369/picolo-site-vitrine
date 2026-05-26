import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { MapPin, Clock, Phone, Send, Instagram, Facebook, MessageCircle, Truck, Sparkles, Wine, Grape, GlassWater, ShoppingBasket, Music2 } from "lucide-react";
import heroImg from "@/assets/hero-cave2.png";
import champagne from "@/assets/champagne.jpg";
import dom from "@/assets/dom.jpeg";
import golden_ice from "@/assets/golden_ice.jpeg";
import baron from "@/assets/baron.jpeg";
import whisky from "@/assets/whisky.jpg";
import arignac_ice from "@/assets/arignac_ice.jpeg";
import ruinart from "@/assets/ruinart.jpeg";
import sakura_vin from "@/assets/sakura_vin.jpeg";
import moet_ice from "@/assets/moet_ice.jpeg";
import moet from "@/assets/moet.jpeg";
import bordeaux_cuvee from "@/assets/bordeaux_cuvee.jpeg";
import puy_du_cost from "@/assets/puy_du_cost.jpeg";
import louismerc from "@/assets/louismerc.jpeg";
import pavillonreine from "@/assets/pavillonreine.jpeg";
import nuitdesanges from "@/assets/nuitdesanges.jpeg";
import chateaulesgrv from "@/assets/chateaulesgrv.jpeg";
import lamothe from "@/assets/lamothe.jpeg";
import cabernet_sauvignon from "@/assets/cabernet_sauvignon.jpeg";
import despe_btle from "@/assets/despe_btle.jpeg";
import cuvee_du_roi from "@/assets/cuvee_du_roi.jpeg";
import grande_terre from "@/assets/grande_terre.jpeg";
import calycanto from "@/assets/calycanto.jpeg";
import rlg from "@/assets/rlg.jpeg";
import despe_canette from "@/assets/despe_canette.jpeg";
import doppelbiere_canette from "@/assets/doppelbiere_canette.jpeg";
import hein_cannette from "@/assets/hein_cannette.jpeg";
import baron_arrign_vin from "@/assets/baron_arrign_vin.jpeg";
import martini from "@/assets/martini.jpeg";
import pastis from "@/assets/pastis.jpeg";
import pastis_marseille from "@/assets/pastis_marseille.jpeg";
import calao_mix from "@/assets/calao_mix.jpeg";
import eventsImg from "@/assets/events.jpg";
import logo from "@/assets/picolo-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Picolo — Vente de boissons" },
      { name: "description", content: "Picolo, Vente de boissons en gros, demi et détail à Grand-Bassam à Grand-Bassam (Sinzala). Champagnes, vins et spiritueux. Vente en gros, demi et détail. Livraison rapide." },
      { property: "og:title", content: "Picolo — Vente en gros, demi et détail à Grand-Bassam" },
      { property: "og:description", content: "Champagnes, vins et spiritueux à Grand-Bassam. Vente en gros, demi et détail." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

const WHATSAPP_NUMBER = "2250708985388";
const PHONE_DISPLAY = "+225 07 08 98 53 88";
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour Picolo, je souhaite avoir des informations sur vos produits...")}`;
const GLOVO_LINK = "https://glovoapp.com/";
const ADDRESS_SHORT = "Hôtel Sinzala Fajul";
const ADDRESS_FULL = ["Grand-Bassam, Quartier Imperial", "Après la pharmacie Sainte Eunice", "Ancienne route de Bassam"];

type Category = "Vins" | "Champagnes" | "Spiritueux" | "Autres";

interface Product {
  name: string;
  origin: string;
  category: Category;
  img: string;
  price?: string;
  tag?: "Nouveauté" | "Promotion" | "Exclusivité";
}

const PRODUCTS: Product[] = [
  { name: "Armand de Brignac", origin: "Champagne — Ace of Spades", category: "Champagnes", img: champagne, price: "230 000 FCFA", tag: "Exclusivité" },
  { name: "Dom Pérignon", origin: "Champagne Vintage", category: "Champagnes", img: dom, price: "175 000 FCFA", tag: "Exclusivité" },
  { name: "Ruinart Brut", origin: "Champagne brut", category: "Champagnes", img: ruinart, price: "45 000 FCFA" },
  { name: "Moët Rosé Impérial", origin: "Champagne rosé", category: "Champagnes", img: moet, price: "44 000 FCFA" },
  { name: "Moët Ice Impérial", origin: "Champagne demi-sec", category: "Champagnes", img: moet_ice, price: "44 000 FCFA" },
  { name: "Arignac Ice", origin: "Champagne demi-sec", category: "Champagnes", img: arignac_ice, price: "54 000 FCFA" },
  { name: "Cuvée du Roi", origin: "Champagne demi-sec", category: "Champagnes", img: cuvee_du_roi, price: "60 000 FCFA" },
  { name: "Louis Mercier", origin: "Champagne brut", category: "Champagnes", img: louismerc, price: "25 000 FCFA" },
  { name: "Moët Nectar Impérial", origin: "Champagne demi-sec", category: "Champagnes", img: champagne, price: "32 500 FCFA" },
  { name: "Moët Impérial Brut", origin: "Champagne brut", category: "Champagnes", img: champagne, price: "29 500 FCFA" },
  { name: "Baron d'Arignac", origin: "Champagne demi-sec", category: "Champagnes", img: baron, price: "8 500 FCFA" },
  { name: "Golden Ice", origin: "Champagne demi-sec", category: "Champagnes", img: golden_ice, price: "44 000 FCFA" },
  { name: "Sakura", origin: "Bordeaux — Rouge", category: "Vins", img: sakura_vin, tag: "Nouveauté" },
  { name: "Puy du Cost", origin: "Bordeaux — Rouge", category: "Vins", img: puy_du_cost, tag: "Nouveauté" },
  { name: "Baron d'Arignac Vin", origin: "Bordeaux — Rouge", category: "Vins", img: baron_arrign_vin },
  { name: "Château La MOTHE BORDEAUX", origin: "Bordeaux — Rouge", category: "Vins", img: lamothe, tag: "Nouveauté" },
  { name: "Bordeaux Cuvée", origin: "Bordeaux — Rouge", category: "Vins", img: bordeaux_cuvee, tag: "Nouveauté" },
  { name: "RLG", origin: "Bordeaux — Rouge", category: "Vins", img: rlg, tag: "Nouveauté" },
  { name: "Grande Terre", origin: "Bordeaux — Rouge", category: "Vins", img: grande_terre, tag: "Nouveauté" },
  { name: "CAL Y CANTO", origin: "Bordeaux — Rouge", category: "Vins", img: calycanto, tag: "Nouveauté" },
  { name: "Château les Graves", origin: "Bordeaux — Rouge", category: "Vins", img: chateaulesgrv, price: "15 000 FCFA" },
  { name: "Pavillon Reine", origin: "Bordeaux — Rouge", category: "Vins", img: pavillonreine, price: "18 000 FCFA" },
  { name: "Cabernet Sauvignon", origin: "Bordeaux — Rouge", category: "Vins", img: cabernet_sauvignon },
  { name: "Nuit des Anges", origin: "Bordeaux — Rouge", category: "Vins", img: nuitdesanges, price: "12 000 FCFA" },
  { name: "Cognac VSOP", origin: "France", category: "Spiritueux", img: whisky, tag: "Nouveauté" },
  { name: "Martini", origin: "Liqueur", category: "Spiritueux", img: martini, tag: "Nouveauté" },
  { name: "Pastis", origin: "Liqueur", category: "Spiritueux", img: pastis, tag: "Nouveauté" },
  { name: "Calao Gingembre", origin: "Liqueur", category: "Spiritueux", img: calao_mix },
  { name: "Pastis Marseille", origin: "Liqueur", category: "Spiritueux", img: pastis_marseille },
  { name: "DESPERADOS BOUTEILLE", origin: "Bière", category: "Autres", img: despe_btle },
  { name: "DESPERADOS CANNETTE", origin: "Bière", category: "Autres", img: despe_canette },
  { name: "HEINEKEN CANNETTE", origin: "Bière", category: "Autres", img: hein_cannette },
  { name: "DOPPELBIERE CANNETTE", origin: "Bière", category: "Autres", img: doppelbiere_canette },
];

const CATEGORIES: { key: Category | "Tous"; icon: typeof Wine }[] = [
  { key: "Tous", icon: Sparkles },
  { key: "Champagnes", icon: GlassWater },
  { key: "Vins", icon: Wine },
  { key: "Spiritueux", icon: Grape },
  { key: "Autres", icon: ShoppingBasket },
];

function useOpenStatus() {
  // Lun, Mar, Ven, Sam, Dim 8h–21h
  // Mercredi, Jeudi 8h–19h
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);
  const h = now.getHours();
  const d = now.getDay(); // 0 = dimanche
  if (d === 3 || d === 4) {
    return h >= 8 && h < 19;
  }
  return h >= 8 && h < 21;
}

function Index() {
  const [active, setActive] = useState<Category | "Tous">("Tous");
  const open = useOpenStatus();
  const filtered = useMemo(
    () => (active === "Tous" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav open={open} />
      <Hero open={open} />
      <Catalog active={active} setActive={setActive} filtered={filtered} />
      <Delivery />
      <Events />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function Nav({ open }: { open: boolean }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3">
          <img src={logo} alt="Picolo" className="h-10 w-auto brightness-0 invert opacity-90" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80 hidden sm:inline">Le plaisir des boissons</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#cave" className="hover:text-gold transition">Catalogue</a>
          <a href="#livraison" className="hover:text-gold transition">Livraison</a>
          <a href="#evenements" className="hover:text-gold transition">Événements</a>
          <a href="#contact" className="hover:text-gold transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border ${open ? "border-gold/40 text-gold" : "border-border text-muted-foreground"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-gold animate-pulse" : "bg-muted-foreground"}`} />
            {open ? "Ouvert" : "Fermé"}
          </span>
        </div>
      </div>
    </header>
  );
}

function Hero({ open }: { open: boolean }) {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Cave Picolo Grand-Bassam" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        <span className="inline-block text-[11px] tracking-[0.4em] uppercase text-gold mb-6">Grand-Bassam · QUARTIER IMPERIAL</span>
        <img src={logo} alt="Picolo" className="mx-auto h-28 md:h-36 w-auto brightness-0 invert mb-2" />
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95] text-cream">
          Le plaisir <span className="italic text-gold">des boissons</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto font-light">
          Champagnes d'exception, vins et spiritueux.
          Vente en gros, demi et détail au cœur de Grand-Bassam.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#cave" className="px-8 py-4 gradient-gold text-burgundy-deep font-medium tracking-wide hover:shadow-gold transition-all">
            Voir nos champagnes
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener" className="px-8 py-4 border border-gold/40 text-cream hover:bg-gold/10 transition-all flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" /> Commander sur WhatsApp
          </a>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
          <span className="flex flex-col sm:flex-row sm:items-center gap-2">
            <Clock className="w-4 h-4 text-gold" />
            <span>Lun, Mar, Ven, Sam, Dim · 08h – 21h</span>
            <span>Mercredi — Jeudi · 08h – 19h</span>
          </span>
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> {ADDRESS_SHORT}</span>
          <span className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-gold" : "bg-muted-foreground"}`} />
            {open ? "Ouvert maintenant" : "Actuellement fermé"}
          </span>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-xs tracking-widest animate-pulse">
        ↓ DÉFILER
      </div>
    </section>
  );
}

function Catalog({
  active,
  setActive,
  filtered,
}: {
  active: Category | "Tous";
  setActive: (c: Category | "Tous") => void;
  filtered: Product[];
}) {
  return (
    <section id="cave" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Le catalogue</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4">Vente en gros, demi et détail</h2>
          <div className="gold-line" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Des grandes maisons aux pépites confidentielles, chaque référence est choisie pour sa singularité.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(({ key, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm tracking-wide border transition-all ${
                active === key
                  ? "bg-gold text-burgundy-deep border-gold"
                  : "border-border text-muted-foreground hover:border-gold/60 hover:text-cream"
              }`}
            >
              <Icon className="w-4 h-4" />
              {key}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <article key={p.name + p.origin} className="group relative bg-card overflow-hidden border border-border hover:border-gold/40 transition-all">
              <div className="aspect-[3/4] overflow-hidden bg-burgundy-deep">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {p.tag && (
                <span className={`absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2.5 py-1 ${
                  p.tag === "Promotion" ? "bg-accent text-accent-foreground" :
                  p.tag === "Exclusivité" ? "bg-gold text-burgundy-deep" :
                  "bg-cream text-burgundy-deep"
                }`}>
                  {p.tag}
                </span>
              )}
              <div className="p-5">
                <h3 className="font-display text-xl text-cream">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">{p.origin}</p>
                {p.price && (
                  <p className="mt-3 font-display text-lg text-gold tracking-wide">{p.price}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Plus de références en boutique — contactez-nous pour les arrivages du mois.
        </p>
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section id="livraison" className="py-24 md:py-32 px-6 bg-burgundy-deep">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Service rapide</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-cream">
            Livraison <span className="italic text-gold">à domicile</span>
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Picolo livre dans toute la zone de Grand-Bassam, d'Abidjan, aussi dans les autres villes. Commandez en quelques minutes
            via WhatsApp Business ou directement depuis notre boutique sur l'application Glovo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href={GLOVO_LINK} target="_blank" rel="noopener" className="px-7 py-3.5 gradient-gold text-burgundy-deep font-medium tracking-wide hover:shadow-gold transition flex items-center justify-center gap-2">
              <Truck className="w-4 h-4" /> Commander sur Glovo
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener" className="px-7 py-3.5 border border-gold/40 text-cream hover:bg-gold/10 transition flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp Business
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { v: "30min", l: "Délai moyen" },
              { v: "Lun–Sam", l: "Disponible" },
              { v: "Bassam", l: "Zone couverte" },
            ].map((s) => (
              <div key={s.l} className="border-l border-gold/30 pl-4">
                <div className="font-display text-3xl text-gold">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-card shadow-elegant overflow-hidden">
            <img src={despe_btle} alt="Sélection livraison" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-gold text-burgundy-deep p-6 max-w-[200px] hidden md:block">
            <Sparkles className="w-5 h-5 mb-2" />
            <p className="font-display text-lg leading-tight">Frais & disponible immédiatement</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="evenements" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 aspect-[4/5] overflow-hidden shadow-elegant">
          <img src={eventsImg} alt="Service événementiel Picolo" loading="lazy" width={1600} height={1024} className="w-full h-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Sur mesure</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4">
            Fournisseur de vos <span className="italic text-gold">grandes occasions</span>
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Mariage, anniversaire, séminaire ou réception privée : nous composons une sélection
            adaptée à votre événement, à votre budget et à votre nombre de convives.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Cotation personnalisée sous 24h",
              "Livraison & reprise des bouteilles non ouvertes",
              "Conseils sommelier sur demande",
              "Tarifs dégressifs pour les volumes",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2" />
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 gradient-gold text-burgundy-deep font-medium tracking-wide hover:shadow-gold transition">
            Demander une cotation <Send className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-burgundy-deep">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Nous rendre visite</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-cream">Contact & Accès</h2>
          <div className="gold-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const msg = `Bonjour Picolo SARL,%0A%0ANom: ${data.get("name")}%0AEmail: ${data.get("email")}%0A%0A${data.get("message")}`;
              window.open(`${WA_LINK.split("?")[0]}?text=${msg}`, "_blank");
            }}
            className="bg-card p-8 md:p-10 border border-border space-y-5"
          >
            <h3 className="font-display text-3xl text-cream">Écrivez-nous</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Nom" className="w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none text-sm" />
              <input name="email" type="email" required placeholder="Email" className="w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none text-sm" />
            </div>
            <input name="subject" placeholder="Sujet (cotation, produit, événement…)" className="w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none text-sm" />
            <textarea name="message" required rows={5} placeholder="Votre message" className="w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none text-sm resize-none" />
            <button type="submit" className="w-full px-7 py-3.5 gradient-gold text-burgundy-deep font-medium tracking-wide hover:shadow-gold transition flex items-center justify-center gap-2">
              Envoyer le message <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="space-y-6">
            <div className="aspect-[4/3] overflow-hidden border border-border">
              <iframe
                title="Picolo — Sinzala, Grand-Bassam"
                src="https://www.google.com/maps?q=Hotel+Fajul+Grand-Bassam+Sinzala&output=embed"
                className="w-full h-full grayscale-[0.3] contrast-110"
                loading="lazy"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <InfoCard icon={MapPin} title="Adresse" lines={ADDRESS_FULL} />
              <InfoCard
                icon={Clock}
                title="Horaires"
                lines={["Lun, Mar, Ven, Sam, Dim · 08h00 — 21h00", "Mercredi — Jeudi · 08h00 — 19h00", "Fermé les jours fériés"]}
              />
              <InfoCard icon={Phone} title="Téléphone" lines={[PHONE_DISPLAY]} />
              <InfoCard icon={MessageCircle} title="WhatsApp" lines={[PHONE_DISPLAY, "Commandes & cotations"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return (
    <div className="bg-card border border-border p-5">
      <Icon className="w-5 h-5 text-gold" />
      <div className="font-display text-lg text-cream mt-3">{title}</div>
      {lines.map((l) => (
        <p key={l} className="text-sm text-muted-foreground">{l}</p>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-center md:text-left">
          <img src={logo} alt="Picolo" className="h-12 w-auto brightness-0 invert" />
          <div>
            <div className="font-display text-xl text-gold tracking-wider">PICOLO</div>
            <p className="text-xs text-muted-foreground mt-1">Le plaisir des boissons — Grand-Bassam</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.tiktok.com/@picolo.225" target="_blank" rel="noopener" aria-label="TikTok" className="w-9 h-9 border border-border hover:border-gold hover:text-gold flex items-center justify-center transition">
            <Music2 className="w-4 h-4" />
          </a>
          <a href="https://www.facebook.com/Picolo" target="_blank" rel="noopener" aria-label="Facebook" className="w-9 h-9 border border-border hover:border-gold hover:text-gold flex items-center justify-center transition">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/Picolo" target="_blank" rel="noopener" aria-label="Instagram" className="w-9 h-9 border border-border hover:border-gold hover:text-gold flex items-center justify-center transition">
            <Instagram className="w-4 h-4" />
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener" aria-label="WhatsApp" className="w-9 h-9 border border-border hover:border-gold hover:text-gold flex items-center justify-center transition">
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Picolo. Tous droits réservés.</p>
      </div>
      <p className="text-center text-[10px] text-muted-foreground/60 mt-8 max-w-2xl mx-auto">
        L'abus d'alcool est dangereux pour la santé. À consommer avec modération. Vente interdite aux mineurs.
      </p>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-gold text-burgundy-deep flex items-center justify-center shadow-gold hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-gold/40" />
    </a>
  );
}
