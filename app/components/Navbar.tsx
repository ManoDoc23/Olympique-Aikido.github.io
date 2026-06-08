import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(10,15,30,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "var(--primary)" }}
          >
            <span style={{ fontFamily: "Oswald, sans-serif", color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>合</span>
          </div>
          <span style={{ fontFamily: "Oswald, sans-serif", color: "var(--foreground)", fontWeight: 600, letterSpacing: "0.04em", fontSize: "1.1rem" }}>
            AÏKIDO JEUNES
          </span>
        </a>

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

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          style={{ color: "var(--foreground)", background: "none", border: "none", cursor: "pointer" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

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
