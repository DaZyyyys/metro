import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IconBase({ children, className = "", title = "Icon" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={title}
    >
      {children}
    </svg>
  );
}

const Icons = {
  Shield: (props) => (
    <IconBase {...props} title="Shield">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="M9 12l2 2 4-5" />
    </IconBase>
  ),
  Radio: (props) => (
    <IconBase {...props} title="Radio">
      <path d="M5 7h14v13H5z" />
      <path d="M8 7V4l8-2" />
      <circle cx="9" cy="13" r="2" />
      <path d="M14 11h3M14 15h3" />
    </IconBase>
  ),
  Car: (props) => (
    <IconBase {...props} title="Car">
      <path d="M3 13l2-5a3 3 0 0 1 3-2h8a3 3 0 0 1 3 2l2 5" />
      <path d="M5 13h14v5H5z" />
      <circle cx="7.5" cy="18" r="1.5" />
      <circle cx="16.5" cy="18" r="1.5" />
    </IconBase>
  ),
  Users: (props) => (
    <IconBase {...props} title="Users">
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconBase>
  ),
  FileText: (props) => (
    <IconBase {...props} title="File text">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h8M8 9h2" />
    </IconBase>
  ),
  Crosshair: (props) => (
    <IconBase {...props} title="Crosshair">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <circle cx="12" cy="12" r="2" />
    </IconBase>
  ),
  ChevronRight: (props) => (
    <IconBase {...props} title="Chevron right">
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  ),
  BadgeCheck: (props) => (
    <IconBase {...props} title="Badge check">
      <path d="M12 2l2.2 2.1 3-.4.9 2.9 2.7 1.4-1.2 2.8 1.2 2.8-2.7 1.4-.9 2.9-3-.4L12 22l-2.2-2.1-3 .4-.9-2.9-2.7-1.4 1.2-2.8-1.2-2.8 2.7-1.4.9-2.9 3 .4L12 2Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </IconBase>
  ),
  Siren: (props) => (
    <IconBase {...props} title="Siren">
      <path d="M7 18v-6a5 5 0 0 1 10 0v6" />
      <path d="M5 18h14M4 22h16" />
      <path d="M12 2v3M4.2 5.2l2.1 2.1M19.8 5.2l-2.1 2.1" />
    </IconBase>
  ),
  Lock: (props) => (
    <IconBase {...props} title="Lock">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </IconBase>
  ),
  AlertTriangle: (props) => (
    <IconBase {...props} title="Alert triangle">
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </IconBase>
  ),
  ClipboardList: (props) => (
    <IconBase {...props} title="Clipboard list">
      <path d="M9 4h6a2 2 0 0 1 2 2v1H7V6a2 2 0 0 1 2-2Z" />
      <path d="M8 6H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" />
      <path d="M8 12h.01M11 12h5M8 16h.01M11 16h5" />
    </IconBase>
  ),
  Building2: (props) => (
    <IconBase {...props} title="Building">
      <path d="M6 22V3h12v19" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
      <path d="M4 22h16M10 22v-4h4v4" />
    </IconBase>
  ),
};

const tabs = [
  { id: "overview", label: "Übersicht", icon: Icons.Shield },
  { id: "duties", label: "Aufgaben", icon: Icons.Crosshair },
  { id: "rules", label: "Dienstvorschriften", icon: Icons.ClipboardList },
  { id: "uniforms", label: "Kleiderordnung", icon: Icons.Users },
  { id: "vehicles", label: "Fuhrpark", icon: Icons.Car },
  { id: "members", label: "Mitglieder", icon: Icons.Users },
  { id: "documents", label: "Dokumente", icon: Icons.FileText },
];

const stats = [
  { label: "Inspector", value: "Leo Meier" },
  { label: "Leitung", value: "Juergen Wellel" },
  { label: "Stv. Leitung", value: "Jordan Bradford" },
  { label: "Alpha Lead", value: "Fritz Fifty" },
  { label: "Bravo Lead", value: "Jezzy Snow" },
];

const dutyCards = [
  { title: "Problemgebiet-Streifen", text: "Regelmäßige Präsenz in Würfel Park, Mirror Park, MD, Bennys, Paleto Bay und entlang des East Highway bis SG.", icon: Icons.Radio },
  { title: "Einsatzunterstützung", text: "Absicherung von Raub- und Sonderlagen, Kontrolle von Gebäuden, Dächern, Rückseiten und erhöhten Positionen.", icon: Icons.Siren },
  { title: "Konvoi- & Zielschutz", text: "Absicherung von Gefangenentransporten, VIPs, Politikern und wichtigen Asservaten mit Späher-, Leit- und Schutzfahrzeugen.", icon: Icons.Shield },
  { title: "Personenschutz", text: "Planung, Begleitung und Sicherung von Zielpersonen. Priorität hat die körperliche Unversehrtheit der Schutzperson.", icon: Icons.Users },
  { title: "FIB-Razzien", text: "Unterstützende taktische Einheit bei Razzien, Durchsuchungen und dynamischen Zugriffslagen.", icon: Icons.Building2 },
  { title: "Event-Security", text: "Crowd-Control, Gefahrenabwehr, Einlasskontrollen und schnelles Eingreifen bei kritischen Lagen.", icon: Icons.Lock },
];

const rules = [
  "Dienst-Equipment wird vollständig getragen und niemals verliehen oder verkauft.",
  "Kleidung, Fahrzeuge und Ausrüstung werden nach interner Ordnung genutzt.",
  "Officer fahren, fliegen und operieren grundsätzlich mindestens zu zweit.",
  "Funkrufname nach Schema: DP-DN-METRO.",
  "Festnahmen erfolgen so gewaltlos wie möglich; der Taser ist erste Wahl.",
  "Langwaffen nur mit Freigabe der Einsatzleitung oder des High-Staff Command.",
  "Keine Schüsse aus der zweiten Reihe. Bewegung, Übersicht und Disziplin haben Priorität.",
  "Alkohol, Zigaretten oder berauschende Mittel sind im Dienst nicht mitzuführen.",
];

const uniforms = [
  { title: "Streifen-Outfit", items: ["Maske 237 / Farbe 1", "Oberteil 535 / Farbe 2", "T-Shirt 208 / Farbe 1", "Weste 66", "Hose 193", "Schuhe 25"] },
  { title: "Einsatz-Montur", items: ["Maske 237", "Helm 253", "Oberteil 539", "T-Shirt 208 / Farbe 1", "Weste 66", "Hose 194", "Schuhe 25"] },
  { title: "Kennzeichnung", items: ["Leitung: Uhr 200 / Farbe 8", "Alpha: Uhr 200 / Farbe 1", "Bravo: Uhr 200 / Farbe 9"] },
];

const vehicles = [
  { rank: "Trainees", model: "DLKOMODA", note: "Marked, metallisch schwarz, maximale Scheibentönung, Xenon weiß." },
  { rank: "Officer", model: "DLRIHNE", note: "Police Livery, Fulltuning ohne Tieferlegung, keine Karosserie-Veränderungen." },
  { rank: "Squad-Lead", model: "Jugular", note: "Marked oder Non-Marked je nach Freigabe; primär/sekundär metallisch schwarz." },
  { rank: "Leitung", model: "TOLPOGMT", note: "Leitungsfahrzeug." },
  { rank: "Genehmigung", model: "SHINOBIUM / DLOUTLAW / DLSHIN / SRHATPD / TAURIONPD / TRUSCOUT", note: "Nur mit ausdrücklicher Genehmigung der METRO-Leitung." },
  { rank: "Sonderfahrzeuge", model: "LSSDINS / BCATPD", note: "Rausschießen strengstens verboten." },
];

const documents = [
  { title: "Kooperations- und Dienstleistungsvertrag", category: "Kooperation", status: "Externes Dokument", date: "06.04.2026", description: "Regelt die Zusammenarbeit zwischen LSPD METRO und externen Partnern, zum Beispiel bei Veranstaltungssicherheit, Crowd-Control, Einlasskontrollen und Notfallunterstützung.", url: "https://docs.google.com/document/d/1q-27JdETnfjvNjwIaOqmmb9Q6vNXHWzfDhp6z79Z5DU/edit?usp=sharing" },
  { title: "Dienstvorschriften der METRO Division", category: "Internes Regelwerk", status: "Referenz", date: "Aktuell", description: "Zentrale Vorschriften zu Ausrüstung, Dienstverhalten, Festnahmen, Einsätzen und allgemeinem Auftreten innerhalb der METRO Division.", url: "https://docs.google.com/document/d/1Ii5-nwCVRk2yhpdFW1adXPikVN8HP74hXHePCBnHBHA/edit?usp=sharing" },
  { title: "Kleiderordnung der METRO Division", category: "Uniformierung", status: "Referenz", date: "17.02.2026", description: "Enthält Streifen-Outfit, Einsatz-Montur und Aufstellungs-Outfit mit allen relevanten Kleidungsnummern und Farbangaben.", url: "https://docs.google.com/document/d/1V-0KR2fgnvCTiv5Ey0Oz7mGM-qM5eTn-hp0jk9tGHy8/edit?usp=sharing" },
  { title: "Fahrzeug-Ordnung der METRO Division", category: "Fuhrpark", status: "Referenz", date: "Aktuell", description: "Regelt zugelassene Fahrzeuge, Tuning-Vorgaben, Marked/Unmarked-Nutzung und Sondergenehmigungen durch die Leitung.", url: "https://docs.google.com/document/d/1foMJgE6rrJUSDWshIr4lfKRy-TocqqZND1lsgarzWTk/edit?usp=sharing" },
  { title: "Aufgaben der METRO Division", category: "Internes Regelwerk", status: "Referenz", date: "Aktuell", description: "Regelt die Aufgaben der METRO Division.", url: "https://docs.google.com/document/d/1Uf6s8nv1g5rPu10PWhjo642vivOBd8GFQnQ24qn2UqE/edit?usp=sharing" },
];

const leadershipMembers = [
  { name: "Leo Meier", position: "Inspector of METRO", dienstnummer: "3" },
  { name: "Juergen Wellel", position: "METRO Leitung", dienstnummer: "16" },
  { name: "Jordan Bradford", position: "Stv. Leitung", dienstnummer: "26" },
];

const alphaSquad = [
  { name: "Fritz Fifty", position: "Squad Lead", dienstnummer: "13" },
  { name: "David Harris", position: "Stv. Squadlead", dienstnummer: "20" },
  { name: "Tomas Tall", position: "Metro Officer", dienstnummer: "17" },
  { name: "Will Ladiego", position: "Metro Officer", dienstnummer: "35" },
  { name: "Astro Santiago", position: "Metro Trainee", dienstnummer: "100" },
  { name: "Momo Abbas", position: "Metro Trainee", dienstnummer: "103" },
];

const bravoSquad = [
  { name: "Jezzy Snow", position: "Squad Lead", dienstnummer: "28" },
  { name: "Freddy Koltmen", position: "Stv. Squadlead", dienstnummer: "24" },
  { name: "Kurt Sanchez", position: "Metro Officer", dienstnummer: "102" },
  { name: "Heinz MFGazia", position: "Metro Officer", dienstnummer: "58" },
];

function fillVacantSlots(squad, size = 6) {
  const filled = [...squad];
  while (filled.length < size) {
    filled.push({ name: "Vakant", position: "Nicht vergeben", dienstnummer: "—", vacant: true });
  }
  return filled.slice(0, size);
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {text && <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 md:text-base">{text}</p>}
    </div>
  );
}

function Card({ children, className = "" }) {
  return <div className={classNames("rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur", className)}>{children}</div>;
}

function Overview() {
  return (
    <div>
      <SectionTitle
        eyebrow="METRO Division"
        title="Taktische Spezialeinheit des LSPD"
        text="Die METRO Division ist die spezialisierte Unterstützungseinheit des Los Santos Police Department auf Orange City. Der Fokus liegt auf Problemgebiet-Streifen, Raub- und Sonderlagen, Konvoi-Schutz, Personenschutz und Veranstaltungssicherheit."
      />
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.slice(0, 3).map((item) => (
            <Card key={item.label}>
              <p className="text-3xl font-black text-white">{item.value}</p>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {stats.slice(3).map((item) => (
            <Card key={item.label}>
              <p className="text-3xl font-black text-white">{item.value}</p>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-300"><Icons.BadgeCheck /></div>
            <div>
              <h3 className="text-xl font-bold text-white">Leitbild</h3>
              <p className="mt-2 leading-7 text-slate-300">Kontrolliertes Auftreten, taktische Übersicht und saubere Dokumentation. METRO handelt nicht als Einzelkämpfer, sondern als disziplinierte Einheit, die Officers, Zivilbevölkerung und Einsatzkräfte schützt.</p>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-bold text-white">Kerndaten</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between"><span>Einheit</span><span>METRO Division</span></div>
            <div className="flex items-center justify-between"><span>Unterstellung</span><span>LSPD</span></div>
            <div className="flex items-center justify-between"><span>Aufgabenbereich</span><span>Spezialeinsätze</span></div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Duties() {
  return (
    <div>
      <SectionTitle eyebrow="Operations" title="Aufgabenbereiche" text="Die METRO Division übernimmt gezielte Lagen, in denen Präsenz, taktische Übersicht und schnelles Eingreifen entscheidend sind." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {dutyCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className="transition hover:-translate-y-1 hover:border-blue-400/40">
              <div className="mb-4 inline-flex rounded-2xl bg-blue-500/15 p-3 text-blue-300"><Icon /></div>
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{card.text}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function Rules() {
  return (
    <div>
      <SectionTitle eyebrow="Regelwerk" title="Dienstvorschriften" text="Die Vorschriften sichern einheitliches Auftreten, taktische Disziplin und klare Verantwortlichkeit im Einsatz." />
      <div className="grid gap-4 lg:grid-cols-2">
        {rules.map((rule, index) => (
          <Card key={rule} className="flex gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-200">{index + 1}</div>
            <p className="text-sm leading-6 text-slate-300">{rule}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-amber-100">
        <div className="flex gap-3"><Icons.AlertTriangle className="shrink-0" /><p className="text-sm leading-6">Verstöße gegen Vorschriften können Verwarnungen, Strikes, Ausschluss aus der METRO oder weitere Sanktionen nach sich ziehen.</p></div>
      </div>
    </div>
  );
}

function Uniforms() {
  return (
    <div>
      <SectionTitle eyebrow="Appearance" title="Kleiderordnung" text="Die Montur richtet sich nach Einsatzlage. Einheitlichkeit, Diensttauglichkeit und professionelles Auftreten sind verpflichtend." />
      <div className="grid gap-5 lg:grid-cols-3">
        {uniforms.map((uniform) => (
          <Card key={uniform.title}>
            <h3 className="text-xl font-bold text-white">{uniform.title}</h3>
            <div className="mt-5 space-y-3">
              {uniform.items.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-black/20 px-3 py-2 text-sm text-slate-300">
                  <Icons.ChevronRight className="h-4 w-4 text-blue-300" />
                  {item}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Vehicles() {
  return (
    <div>
      <SectionTitle eyebrow="Fleet" title="Fahrzeugordnung" text="METRO-Fahrzeuge werden grundsätzlich marked geführt. Ausnahmen gelten nur bei expliziter Anforderung durch Detective Unit/FIB oder bei Genehmigung durch die METRO-Leitung." />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055]">
        <div className="grid grid-cols-12 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-300">
          <div className="col-span-3">Rang / Freigabe</div>
          <div className="col-span-3">Fahrzeug</div>
          <div className="col-span-6">Vorgabe</div>
        </div>
        {vehicles.map((vehicle) => (
          <div key={`${vehicle.rank}-${vehicle.model}`} className="grid grid-cols-12 border-t border-white/10 px-5 py-4 text-sm text-slate-300">
            <div className="col-span-3 font-semibold text-white">{vehicle.rank}</div>
            <div className="col-span-3 text-blue-200">{vehicle.model}</div>
            <div className="col-span-6 leading-6">{vehicle.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SquadTable({ title, subtitle, members }) {
  return (
    <Card>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black text-white">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
        </div>
        <span className="rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-200">
          {members.length} Slots
        </span>
      </div>

      <div className="rounded-xl border border-white/10">
        <div className="grid grid-cols-12 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-300">
          <div className="col-span-1">Slot</div>
          <div className="col-span-4">Name</div>
          <div className="col-span-2">DN</div>
          <div className="col-span-5">Position</div>
        </div>

        {members.map((member, index) => (
          <div
            key={`${title}-${index}-${member.name}`}
            className={classNames(
              "grid grid-cols-12 border-t border-white/10 px-4 py-3 text-xs",
              member.vacant ? "bg-black/20 text-slate-500" : "text-slate-300"
            )}
          >
            <div className="col-span-1 font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</div>
            <div className={classNames("col-span-4 truncate font-semibold", member.vacant ? "text-slate-500 italic" : "text-white")}>{member.name}</div>
            <div className="col-span-2">{member.dienstnummer}</div>
            <div className="col-span-5 truncate">{member.position}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Members() {
  const alphaSlots = fillVacantSlots(alphaSquad, 6);
  const bravoSlots = fillVacantSlots(bravoSquad, 6);

  return (
    <div>
      <SectionTitle
        eyebrow="Personal"
        title="Mitgliederliste"
        text="Die METRO Division ist in Leitung, Alpha Squad und Bravo Squad gegliedert. Jeder Squad besitzt genau sechs Plätze; nicht besetzte Positionen werden als vakant markiert."
      />

      <div className="mb-6 grid gap-5 md:grid-cols-3">
        {leadershipMembers.map((member) => (
          <Card key={member.name} className="relative overflow-hidden">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-500/10" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-2xl bg-blue-500/15 p-3 text-blue-300"><Icons.Shield /></div>
              <p className="text-xl font-black text-white">{member.name}</p>
              <p className="mt-2 text-sm font-semibold text-blue-200">{member.position}</p>
              <div className="mt-4 text-xs text-slate-300">
                <div className="rounded-xl bg-black/20 p-2"><span className="block text-slate-500">DN</span>{member.dienstnummer}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <SquadTable title="Alpha Squad" subtitle="Taktische Einsatzgruppe Alpha" members={alphaSlots} />
        <SquadTable title="Bravo Squad" subtitle="Taktische Einsatzgruppe Bravo" members={bravoSlots} />
      </div>
    </div>
  );
}

function Documents() {
  return (
    <div>
      <SectionTitle
        eyebrow="Akten & Verträge"
        title="Dokumente"
        text="Hier liegen externe und interne Referenzdokumente der METRO Division. Der Kooperationsvertrag ist bewusst aus dem normalen Website-Inhalt ausgelagert und als eigenes Dokument erreichbar."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {documents.map((doc) => (
          <Card key={doc.title} className="group transition hover:-translate-y-1 hover:border-blue-400/40">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-300"><Icons.FileText /></div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-300">{doc.status}</span>
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-300">{doc.category}</p>
            <h3 className="text-xl font-black text-white">{doc.title}</h3>
            <p className="mt-2 text-sm text-slate-400">Stand: {doc.date}</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">{doc.description}</p>
            <a href={doc.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              Dokument öffnen <Icons.ChevronRight className="h-4 w-4" />
            </a>
          </Card>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-300">
        Alle Mitglieder sind verpflichtet, sich eigenständig und regelmäßig über die aktuellen Dokumente, Vorschriften und Änderungen auf dem Laufenden zu halten. Unwissenheit schützt nicht vor Konsequenzen.
      </div>
    </div>
  );
}

export default function LspdMetroWebsite() {
  const [activeTab, setActiveTab] = useState("overview");
  const ActiveIcon = useMemo(() => tabs.find((tab) => tab.id === activeTab)?.icon || Icons.Shield, [activeTab]);

  const content = {
    overview: <Overview />,
    duties: <Duties />,
    rules: <Rules />,
    uniforms: <Uniforms />,
    vehicles: <Vehicles />,
    members: <Members />,
    documents: <Documents />,
  }[activeTab];

  return (
    <main className="min-h-screen bg-[#050814] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[360px] w-[360px] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-5 py-8 md:px-8">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/30"><Icons.Shield /></div>
            <div>
              <p className="text-sm font-bold tracking-[0.25em] text-slate-300">LSPD</p>
              <p className="text-lg font-black tracking-tight">METRO Division</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-sm text-blue-100 md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Orange City Roleplay
          </div>
        </nav>

        <header className="grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-300">Los Santos Police Department</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              METRO Division<br /><span className="bg-gradient-to-r from-blue-200 via-white to-slate-400 bg-clip-text text-transparent">Operations Portal</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Informationsportal für Aufgaben, Dienstvorschriften, Kleidung, Fahrzeuge, Mitglieder und Dokumente der METRO Division auf Orange City.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setActiveTab("duties")} className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">Aufgaben ansehen</button>
              <button onClick={() => setActiveTab("members")} className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Mitglieder öffnen</button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12 }}>
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="absolute -right-5 -top-5 rounded-2xl bg-blue-500 px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-500/30">To Protect</div>
              <div className="flex aspect-square items-center justify-center rounded-[1.5rem] border border-blue-300/20 bg-black/30">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-blue-300/30 bg-blue-500/10"><ActiveIcon className="h-16 w-16 text-blue-200" /></div>
                  <h2 className="mt-6 text-3xl font-black">METRO</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-400">And To Serve</p>
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        <div className="sticky top-4 z-10 mb-8 rounded-2xl border border-white/10 bg-[#071022]/85 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="grid gap-2 md:grid-cols-7">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={classNames("flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition", active ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25" : "text-slate-300 hover:bg-white/10 hover:text-white")}>
                  <Icon className="h-4 w-4" />
                  <span className="hidden lg:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <section className="pb-20">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>
              {content}
            </motion.div>
          </AnimatePresence>
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
          © Juergen Wellel · Los Santos Police Department · METRO Division
        </footer>
      </section>
    </main>
  );
}
