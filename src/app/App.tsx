import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MapPin, Clock, Phone, Mail, ChevronDown, Star, Shield, Heart, Users } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1598300606161-4019d0dfec28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80";
const practiceImg = "https://images.unsplash.com/photo-1541836567455-2d41eb6dd9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80";
const kidsImg = "https://images.unsplash.com/photo-1530560643359-6d2fead989b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80";
const dojoImg = "https://images.unsplash.com/photo-1530417838433-4b24dd3f72d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80";
const groupImg = "https://images.unsplash.com/photo-1521178754292-acb01ac7c29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80";

const heading: React.CSSProperties = {
  fontFamily: "Oswald, sans-serif",
  fontWeight: 700,
  letterSpacing: "0.03em",
};

const body: React.CSSProperties = {
  fontFamily: "Nunito, sans-serif",
};

const red = "var(--primary)";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span style={{ display: "block", width: 32, height: 3, background: red, borderRadius: 99 }} />
      <span
        style={{
          ...body,
          color: red,
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}

const scheduleData = [
  { day: "Lundi", time: "17h30 – 18h30", group: "Enfants (6–10 ans)", sensei: "Sensei Martin" },
  { day: "Mercredi", time: "17h00 – 18h00", group: "Enfants (6–10 ans)", sensei: "Sensei Martin" },
  { day: "Mercredi", time: "18h15 – 19h30", group: "Ados (11–17 ans)", sensei: "Sensei Dupont" },
  { day: "Vendredi", time: "17h30 – 18h30", group: "Enfants (6–10 ans)", sensei: "Sensei Martin" },
  { day: "Samedi", time: "10h00 – 11h30", group: "Tous niveaux jeunes", sensei: "Sensei Martin & Dupont" },
];

const faqs = [
  { q: "Quel équipement faut-il pour commencer ?", a: "Au départ, une tenue de sport suffit. Après quelques séances, nous vous conseillons l'achat d'un keikogi (kimono d'aïkido). Le club peut vous orienter vers les fournisseurs." },
  { q: "À partir de quel âge peut-on pratiquer l'aïkido ?", a: "Nous accueillons les enfants dès 6 ans. L'aïkido étant un art martial non compétitif, il est accessible à tous les profils, même sans expérience sportive préalable." },
  { q: "Y a-t-il des compétitions ?", a: "Non. L'aïkido ne dispose pas de compétitions officielles. La progression se fait via des examens de passage de grade, dans un esprit de coopération et non de rivalité." },
  { q: "Comment s'inscrire ?", a: "Remplissez le formulaire de contact ci-dessous ou venez directement au dojo. La première séance d'essai est offerte et sans engagement." },
];

export default function App() {
  return (
    <div>
       <h1>Bienvenue sur Aïkido Jeunes !</h1>
       style={{ background: "var(--background)", color: "var(--foreground)", minHeight: "100vh", overflowX: "hidden" }}>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex items-end" style={{ minHeight: "100vh", paddingTop: 64 }}>
        <img
          src={heroImg}
          alt="Entraînement d'aïkido en dojo"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.35)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,15,30,1) 0%, rgba(10,15,30,0.3) 60%, transparent 100%)" }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pb-20 w-full">
          <SectionLabel>Club d'aïkido jeunes</SectionLabel>
          <h1
            style={{
              ...heading,
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              lineHeight: 1.05,
              color: "#ffffff",
              maxWidth: 800,
              marginBottom: "1.5rem",
            }}
          >
            L'art du mouvement,<br />
            <span style={{ color: red }}>dès le plus jeune âge</span>
          </h1>
          <p
            style={{
              ...body,
              color: "#c8d0e0",
              fontSize: "1.1rem",
              maxWidth: 540,
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            Discipline, respect et confiance en soi. Notre club accueille les enfants et adolescents dans un cadre bienveillant pour découvrir l'aïkido, l'art martial de la paix.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              style={{
                ...body,
                background: red,
                color: "#fff",
                fontWeight: 700,
                padding: "0.85rem 2rem",
                borderRadius: "var(--radius)",
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
                transition: "opacity 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Séance d'essai gratuite
            </a>
            <a
              href="#club"
              style={{
                ...body,
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontWeight: 600,
                padding: "0.85rem 2rem",
                borderRadius: "var(--radius)",
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: "0.95rem",
                transition: "background 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.14)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            >
              Découvrir le club
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div style={{ background: red }}>
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "120+", label: "Jeunes pratiquants" },
            { val: "15 ans", label: "D'expérience" },
            { val: "4 sensei", label: "Enseignants diplômés" },
            { val: "3e dan", label: "Niveau maximum encadrant" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div style={{ ...heading, fontSize: "1.8rem", color: "#fff", lineHeight: 1.1 }}>{s.val}</div>
              <div style={{ ...body, color: "rgba(255,255,255,0.8)", fontSize: "0.8rem", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LE CLUB ── */}
      <section id="club" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Notre histoire</SectionLabel>
            <h2 style={{ ...heading, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--foreground)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
              Un dojo ouvert à toutes les familles depuis 2009
            </h2>
            <p style={{ ...body, color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Fondé par Sensei Éric Martin, 3e dan, le Club Aïkido Jeunes accueille les enfants à partir de 6 ans dans un espace sécurisé et chaleureux. Notre priorité : que chaque enfant progresse à son rythme, dans le respect et la joie du mouvement.
            </p>
            <p style={{ ...body, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
              L'aïkido n'est pas un sport de combat mais un art martial fondé sur la redirection de l'énergie adverse. Il développe la coordination, la confiance en soi, la gestion des émotions — des qualités précieuses bien au-delà du tatami.
            </p>
          </div>
          <div className="relative">
            <img
              src={practiceImg}
              alt="Pratique de l'aïkido en kimono blanc"
              className="w-full rounded-lg object-cover"
              style={{ height: 420, background: "var(--muted)" }}
            />
            <div
              className="absolute -bottom-5 -left-5 rounded-lg p-5"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div style={{ ...heading, fontSize: "2rem", color: red }}>98%</div>
              <div style={{ ...body, color: "var(--muted-foreground)", fontSize: "0.8rem" }}>de satisfaction parentale</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { icon: <Shield size={24} />, title: "Respect", desc: "Envers les partenaires, les enseignants et soi-même." },
            { icon: <Star size={24} />, title: "Discipline", desc: "Une progression structurée et régulière, pas à pas." },
            { icon: <Heart size={24} />, title: "Bienveillance", desc: "Un encadrement attentif à chaque enfant." },
            { icon: <Users size={24} />, title: "Esprit d'équipe", desc: "L'aïkido se pratique avec un partenaire, jamais seul." },
          ].map((v) => (
            <div
              key={v.title}
              className="p-6 rounded-lg"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div style={{ color: red, marginBottom: 12 }}>{v.icon}</div>
              <div style={{ ...heading, fontSize: "1.1rem", color: "var(--foreground)", marginBottom: 8 }}>{v.title}</div>
              <div style={{ ...body, color: "var(--muted-foreground)", fontSize: "0.88rem", lineHeight: 1.6 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMMES ── */}
      <section id="programmes" style={{ background: "var(--secondary)" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <SectionLabel>Nos cours</SectionLabel>
            <h2 style={{ ...heading, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--foreground)" }}>
              Des programmes adaptés à chaque âge
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                img: kidsImg,
                age: "6 – 10 ans",
                title: "Éveil aïkido",
                desc: "Une approche ludique et progressive. Les enfants apprennent les chutes (ukemi), les déplacements et les premières techniques de base à travers des jeux et exercices adaptés.",
                points: ["Coordination et équilibre", "Confiance en soi", "Écoute et concentration", "Respect des règles"],
              },
              {
                img: dojoImg,
                age: "11 – 17 ans",
                title: "Aïkido jeunes",
                desc: "Un programme plus technique qui approfondit les katas, le travail avec partenaire et prépare aux passages de grades. Idéal pour les ados qui souhaitent progresser sérieusement.",
                points: ["Techniques avancées", "Passage de grades", "Gestion du stress", "Leadership"],
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-xl overflow-hidden"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full object-cover"
                    style={{ height: 260, background: "var(--muted)" }}
                  />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full"
                    style={{ background: red, color: "#fff", ...body, fontWeight: 700, fontSize: "0.78rem" }}
                  >
                    {p.age}
                  </span>
                </div>
                <div className="p-7">
                  <h3 style={{ ...heading, fontSize: "1.5rem", color: "var(--foreground)", marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ ...body, color: "var(--muted-foreground)", lineHeight: 1.7, marginBottom: 16, fontSize: "0.93rem" }}>{p.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: red, flexShrink: 0, display: "inline-block" }} />
                        <span style={{ ...body, color: "var(--foreground)", fontSize: "0.88rem" }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HORAIRES ── */}
      <section id="horaires" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Planning</SectionLabel>
            <h2 style={{ ...heading, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--foreground)", marginBottom: "1.5rem" }}>
              Horaires des cours
            </h2>
            <div className="flex flex-col gap-3">
              {scheduleData.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <div>
                    <div style={{ ...heading, fontSize: "1rem", color: "var(--foreground)" }}>{s.day}</div>
                    <div style={{ ...body, color: "var(--muted-foreground)", fontSize: "0.82rem" }}>{s.group}</div>
                  </div>
                  <div className="text-right">
                    <div style={{ ...body, color: red, fontWeight: 700, fontSize: "0.9rem" }}>{s.time}</div>
                    <div style={{ ...body, color: "var(--muted-foreground)", fontSize: "0.78rem" }}>{s.sensei}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel>Accès</SectionLabel>
            <h2 style={{ ...heading, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--foreground)", marginBottom: "1.5rem" }}>
              Où nous trouver
            </h2>
            <div className="rounded-xl overflow-hidden" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <img
                src={groupImg}
                alt="Groupe de pratiquants en tenue traditionnelle"
                className="w-full object-cover"
                style={{ height: 200 }}
              />
              <div className="p-6 flex flex-col gap-4">
                {[
                  { icon: <MapPin size={18} />, label: "Dojo Municipal de la Rivière", sub: "12 rue des Arts Martiaux, 75018 Paris" },
                  { icon: <Clock size={18} />, label: "Lundi, Mercredi, Vendredi, Samedi", sub: "Voir planning ci-contre" },
                  { icon: <Phone size={18} />, label: "+33 (0)6 12 34 56 78", sub: "Disponible du lundi au vendredi" },
                  { icon: <Mail size={18} />, label: "contact@aikido-jeunes.fr", sub: "Réponse sous 48h" },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <span style={{ color: red, marginTop: 2, flexShrink: 0 }}>{info.icon}</span>
                    <div>
                      <div style={{ ...body, color: "var(--foreground)", fontWeight: 600, fontSize: "0.9rem" }}>{info.label}</div>
                      <div style={{ ...body, color: "var(--muted-foreground)", fontSize: "0.8rem" }}>{info.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section id="galerie" style={{ background: "var(--secondary)" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <SectionLabel>Photos</SectionLabel>
            <h2 style={{ ...heading, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--foreground)" }}>
              La vie du dojo
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: heroImg, alt: "Entraînement collectif", tall: true },
              { src: kidsImg, alt: "Cours enfants", tall: false },
              { src: practiceImg, alt: "Technique avancée", tall: false },
              { src: dojoImg, alt: "Pratique en extérieur", tall: false },
              { src: groupImg, alt: "Cérémonie d'ouverture", tall: false },
            ].map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-lg ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                style={{ background: "var(--muted)" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500"
                  style={{ height: i === 0 ? 400 : 190 }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <SectionLabel>Questions fréquentes</SectionLabel>
          <h2 style={{ ...heading, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--foreground)" }}>
            Tout ce que vous voulez savoir
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                style={{ background: "none", border: "none", cursor: "pointer" }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span style={{ ...heading, fontSize: "1rem", color: "var(--foreground)" }}>{faq.q}</span>
                <ChevronDown
                  size={18}
                  style={{
                    color: red,
                    flexShrink: 0,
                    transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s",
                  }}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5">
                  <p style={{ ...body, color: "var(--muted-foreground)", lineHeight: 1.75, fontSize: "0.9rem" }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT / INSCRIPTION ── */}
      <section id="contact" style={{ background: "var(--secondary)" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Rejoignez-nous</SectionLabel>
            <h2 style={{ ...heading, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--foreground)", marginBottom: "1.25rem" }}>
              Première séance<br />
              <span style={{ color: red }}>offerte et sans engagement</span>
            </h2>
            <p style={{ ...body, color: "var(--muted-foreground)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              Venez découvrir l'aïkido avec votre enfant lors d'une séance d'essai gratuite. Aucun équipement requis, juste une tenue de sport confortable.
            </p>
            <div className="mt-8 p-5 rounded-lg" style={{ background: "rgba(0,159,218,0.1)", border: "1px solid rgba(0,159,218,0.25)" }}>
              <div style={{ ...heading, color: red, fontSize: "1rem", marginBottom: 4 }}>Tarifs 2024–2025</div>
              <div style={{ ...body, color: "var(--foreground)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                Enfants (6–10 ans) : <strong>280 € / an</strong><br />
                Ados (11–17 ans) : <strong>310 € / an</strong><br />
                <span style={{ color: "var(--muted-foreground)", fontSize: "0.82rem" }}>Licence FFAAA incluse · Paiement en 3× sans frais</span>
              </div>
            </div>
          </div>

          <form
            className="rounded-xl p-8 flex flex-col gap-5"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 style={{ ...heading, fontSize: "1.3rem", color: "var(--foreground)" }}>Demande d'inscription</h3>
            {[
              { label: "Nom du parent", placeholder: "Dupont", type: "text" },
              { label: "Prénom de l'enfant", placeholder: "Lucas", type: "text" },
              { label: "Âge de l'enfant", placeholder: "8 ans", type: "text" },
              { label: "Email", placeholder: "parent@exemple.fr", type: "email" },
              { label: "Téléphone", placeholder: "06 xx xx xx xx", type: "tel" },
            ].map((f) => (
              <div key={f.label}>
                <label style={{ ...body, color: "var(--muted-foreground)", fontSize: "0.8rem", display: "block", marginBottom: 6 }}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  style={{
                    ...body,
                    width: "100%",
                    background: "var(--input-background)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    padding: "0.6rem 0.85rem",
                    color: "var(--foreground)",
                    fontSize: "0.9rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}
            <button
              type="submit"
              style={{
                ...body,
                background: red,
                color: "#fff",
                fontWeight: 700,
                padding: "0.85rem",
                borderRadius: "var(--radius)",
                border: "none",
                cursor: "pointer",
                fontSize: "0.95rem",
                letterSpacing: "0.03em",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050810", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: red }}>
              <span style={{ fontFamily: "Oswald, sans-serif", color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>合</span>
            </div>
            <span style={{ ...heading, color: "var(--foreground)", fontSize: "0.95rem" }}>AÏKIDO JEUNES</span>
          </div>
          <p style={{ ...body, color: "var(--muted-foreground)", fontSize: "0.82rem", textAlign: "center" }}>
            © 2025 Club Aïkido Jeunes · Affilié à la FFAAA · Tous droits réservés
          </p>
          <div className="flex gap-6">
            {["Mentions légales", "Politique de confidentialité"].map((l) => (
              <a
                key={l}
                href="#"
                style={{ ...body, color: "var(--muted-foreground)", fontSize: "0.8rem", transition: "color 0.2s", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
