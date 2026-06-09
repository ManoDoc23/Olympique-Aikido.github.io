import { useState } from "react";
import { Menu, X } from "lucide-react";
const logoClub = "/LogoImg.jpg";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Le Club", href: "#club" },
    { label: "Programmes", href: "#programmes" },
    { label: "Horaires", href: "#horaires" },
    { label: "Galerie", href: "#galerie" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-slate-900 text-white"> 
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
 {/* BLOC DU LOGO AGRANDI SANS ROND BLEU */}
        <a href="#" className="flex items-center gap-3">
          {/* On a enlevé le bg-blue-500, le rounded-full et on a agrandi la zone */}
          <div className="w-16 h-16 flex items-center justify-center">
            <img 
              src={logoClub} 
              alt="Logo Wagokan Aïkido NC" 
              className="w-full h-full object-contain" 
            />
          </div>
          
          {/* Le texte à côté */}
          <span style={{ fontFamily: "Oswald, sans-serif", color: "var(--foreground)", fontWeight: 600, letterSpacing: "0.04em", fontSize: "1.1rem" }}>
            OLYMPIQUE de NOUMEA 
          </span>
        </a>

        {/* LIENS DU MENU DE DROITE (GRAND ÉCRAN) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontFamily: "Nunito, sans-serif", color: "var(--muted-foreground)", fontWeight: 500, fontSize: "0.9rem", transition: "color 0.2s", letterSpacing: "0.02em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "Nunito, sans-serif",
              background: "var(--primary)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.85rem",
              padding: "0.45rem 1.25rem",
              borderRadius: "var(--radius)",
              letterSpacing: "0.04em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            S'inscrire
          </a>
        </div>

        {/* BOUTON MENU BURGER (MOBILE) */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          style={{ color: "var(--foreground)", background: "none", border: "none", cursor: "pointer" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MENU DÉROULANT (MOBILE) */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(10,15,30,0.98)" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontFamily: "Nunito, sans-serif", color: "var(--foreground)", fontWeight: 600, fontSize: "1rem" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "Nunito, sans-serif",
              background: "var(--primary)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "0.6rem 1.5rem",
              borderRadius: "var(--radius)",
              textAlign: "center",
            }}
          >
            S'inscrire
          </a>
        </div>
      )}
    </nav>
  );
}