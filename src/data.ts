/* ─────────────────────────────────────────────────────────────
   INSA KMA Fields — centralni sadržaj (izvor: www.insakma.com)
   ───────────────────────────────────────────────────────────── */

import { BASE, type Route } from "./lib/router";

/* Slike se nalaze u public/ folderu. BASE je normalizovana apsolutna
   putanja (vidi lib/router) — sprečava da se slike lome kad se sa
   pushState rutiranja pređe na ne-root rutu (npr. /sadnice). */
const img = (file: string) => `${BASE}${file}`;

export const IMG = {
  hero: img("hero.jpg"),
  sadnice: img("sadnice.jpg"),
  nursery: img("nursery.jpg"),
  coirBags: img("coir-bags.jpg"),
  remmyLineup: img("insa-remmy-in-line.jpg"),
  greenhouse: img("greenhouse.jpg"),
  plants: img("plants.jpg"),
  berries: img("berries.jpg"),
  harvest: img("harvest.jpg"),
  handberry: img("handberry.jpg"),
  crates: img("crates.jpg"),
} as const;

export const CONTACT = {
  person: "Sandra Ćapin",
  initials: "SČ",
  phone: "064 8648 522",
  phoneHref: "tel:+381648648522",
  email: "sandra.capin@insakma.com",
  instagram: "https://instagram.com/uvozne_sadnice_maline",
  instagramLabel: "@uvozne_sadnice_maline",
} as const;

export const NAV = [
  { to: "/", label: "Početna" },
  { to: "/supstrat", label: "Supstrat" },
  { to: "/sadnice", label: "Sadnice maline" },
  { to: "/o-nama", label: "O nama" },
  { to: "/baza-znanja", label: "Baza znanja" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export const TICKER = [
  "Rezervacije za sezonu proleće / jesen 2027. su otvorene",
  "EU-sertifikovane sadnice iz Italije i Holandije",
  "Dostava širom Srbije",
  "Subvencije 40–70% za sertifikovan sadni materijal",
  "Enrosadira® · Easy Rose® · Ofelia®",
  "Kokosov supstrat: pH 5.5–6.5 · EC < 0.2 mS/cm",
];

export const STATS = [
  {
    prefix: "40–",
    value: 70,
    suffix: "%",
    label: "Subvencije za sertifikovan sadni materijal",
  },
  {
    prefix: "3–",
    value: 4,
    suffix: " god.",
    label: "Vek kokosovog supstrata (naspram 1–2 g. treseta)",
  },
  {
    prefix: "",
    value: 100,
    suffix: "%",
    label: "Kokosov supstrat — bez treseta, ispran i puferisan",
  },
  {
    prefix: "",
    value: 8,
    suffix: "",
    label: "Veličina vreća supstrata, od 1.5 L do 80 L",
  },
];

export const OFFERS: {
  id: string;
  to: Route;
  tag: string;
  title: string;
  text: string;
  bullets: string[];
  img: string;
  alt: string;
}[] = [
  {
    id: "sadnice",
    to: "/sadnice",
    tag: "Sadni materijal",
    title: "Sertifikovane sadnice maline",
    text: "Originalne, EU-sertifikovane sadnice iz rasadnika u Italiji i Holandiji. Matični materijal vrhunskog kvaliteta, sa dokumentovanim poreklom i visokim zdravstvenim statusom.",
    bullets: [
      "EU sertifikat i sledljivost porekla",
      "Matične linije vrhunskog kvaliteta",
      "Ograničene količine — prodaja i rezervacije jednom godišnje",
    ],
    img: IMG.nursery,
    alt: "Sertifikovane sadnice maline",
  },
  {
    id: "supstrat",
    to: "/supstrat",
    tag: "Supstrat",
    title: "Premium kokosov supstrat",
    text: "100% kokosov supstrat bez treseta, 2× ispran i puferisan — sa stabilnim pH i EC od prvog dana. Prilagođen klimi Srbije: podnosi visoke letnje temperature i sušne periode.",
    bullets: [
      "pH 5.5–6.5 · EC < 0.2 mS/cm · bez štetnih soli",
      "Osam veličina vreća, od 1.5 L do 80 L",
      "Za maline, borovnice, jagode, povrće i cveće",
    ],
    img: IMG.coirBags,
    alt: "Profesionalne vreće kokosovog supstrata različitih veličina",
  },
  {
    id: "podrska",
    to: "/kontakt",
    tag: "Znanje",
    title: "Stručna podrška",
    text: "Ne prodajemo samo robu — stojimo uz vas kroz celu sezonu. Pomažemo u planiranju proizvodnje i vođenju zasada, od prvog koraka do berbe.",
    bullets: [
      "Planiranje proizvodnje i izbor sistema gajenja",
      "Određivanje gustine sadnje (4–6 biljaka/m²)",
      "Izrada programa fertirigacije",
    ],
    img: IMG.greenhouse,
    alt: "Moderna plastenička proizvodnja maline",
  },
];

export const VARIETIES = [
  {
    id: "enrosadira",
    no: "01",
    name: "Enrosadira®",
    badge: "Remontantna",
    text: "Stabilna i pouzdana, sa krupnim, čvrstim plodom i visokim procentom prve klase. Produžena sezona berbe i dobra kompatibilnost sa kokosovim supstratom.",
    traits: ["Krupan, čvrst plod", "Visok procenat prve klase", "Produžena sezona berbe"],
  },
  {
    id: "easyrose",
    no: "02",
    name: "Easy Rose®",
    badge: "Remontantna",
    text: "Aromatičan, čvrst plod prepoznatljive svetloroze boje — odličan za transport i dug vek na polici. Izbor za tržišta osetljiva na izgled: supermarkete i izvoz.",
    traits: ["Svetloroze boja ploda", "Odlična transportabilnost", "Dug vek na polici"],
  },
  {
    id: "ofelia",
    no: "03",
    name: "Ofelia®",
    badge: "Remontantna",
    text: "Rana i rodna sorta izvanrednog kvaliteta. Ujednačen razvoj izdanaka olakšava planiranje berbe u kontrolisanim, intenzivnim sistemima proizvodnje.",
    traits: ["Rana i rodna", "Ujednačen razvoj izdanaka", "Za intenzivne sisteme"],
  },
];

export const BENEFITS = [
  {
    icon: "sun",
    title: "Brži početak vegetacije",
    text: "Biljka ranije kreće u razvoj i skraćuje put do prvog roda.",
  },
  {
    icon: "root",
    title: "Snažnije ukorenjavanje",
    text: "Vlaknasta struktura kokosa daje odličnu aeraciju i jači koren.",
  },
  {
    icon: "chart",
    title: "Ujednačeniji rast",
    text: "Ravnomeran razvoj biljaka i lakše planiranje berbe.",
  },
  {
    icon: "flask",
    title: "Kontrolisana ishrana",
    text: "Stabilan pH i EC znače precizniju i predvidljiviju fertirigaciju.",
  },
  {
    icon: "shield",
    title: "Manji rizik od patogena",
    text: "Nema bolesti iz zemljišta, zbijanja korena ni korova u redu.",
  },
  {
    icon: "berry",
    title: "Stabilniji i sigurniji rod",
    text: "Veći procenat prve klase i predvidljiviji prinos iz godine u godinu.",
  },
];

export const STEPS = [
  {
    no: "01",
    title: "Konsultacije i planiranje",
    text: "Zajedno planiramo zasad, biramo sistem gajenja i određujemo gustinu sadnje prema vašim uslovima.",
  },
  {
    no: "02",
    title: "Sadni materijal i supstrat",
    text: "Isporučujemo sertifikovane sadnice i profesionalno pripremljen kokosov supstrat, spreman za sadnju.",
  },
  {
    no: "03",
    title: "Podrška do berbe",
    text: "Pratimo proizvodnju i pomažemo oko postavke sistema i fertirigacije tokom cele sezone.",
  },
];

export const SUBSTRATE_SPECS = [
  { k: "Sastav", v: "100% kokosova vlakna, bez treseta" },
  { k: "pH vrednost", v: "5.5 – 6.5" },
  { k: "EC vrednost", v: "< 0.2 mS/cm" },
  { k: "Priprema", v: "2× ispran i puferisan" },
  { k: "Štetne soli", v: "Bez štetnih soli" },
  { k: "Vek trajanja", v: "3–4 godine (treset: 1–2 godine)" },
  { k: "Veličine vreća", v: "8 dimenzija, od 1.5 L do 80 L" },
  { k: "Klimatska otpornost", v: "Visoke letnje temperature i sušni periodi" },
];

export const SUBSTRATE_ORIGIN = {
  manufacturer: "Remmy Substrates (Indija)",
  since: 1994,
  url: "https://www.remmysubstrates.com",
  facts: [
    "Porodična kompanija u drugoj generaciji, aktivna od 1994. godine",
    "Sopstveni proizvodni pogon od preko 20 hektara u regionu Pollachi, južna Indija",
    "Sopstvena laboratorija za kontrolu kvaliteta i sopstvena flota za transport",
    "Izvoz u Holandiju, SAD, Kanadu, Meksiko i druge zemlje sveta",
  ],
} as const;

export const SUBSTRATE_CERTS = [
  { id: "rhp", name: "RHP", img: img("cert-rhp.jpg") },
  { id: "mps-ecas", name: "MPS-ECAS", img: img("cert-mps-ecas.jpg") },
  { id: "sa8000", name: "SA 8000", img: img("cert-sa8000.jpg") },
  { id: "omri", name: "OMRI Listed", img: img("cert-omri.jpg") },
] as const;

export const COIR_VS_PEAT = [
  { label: "Vek trajanja u proizvodnji", coir: "3–4 godine", peat: "1–2 godine" },
  { label: "Stabilnost pH i EC od prvog dana", coir: "Da — 2× ispran i puferisan", peat: "Zavisi od izvora i pripreme" },
  { label: "Aeracija i vlaknasta struktura", coir: "Odlična, stabilna kroz sezone", peat: "Opada razgradnjom" },
  { label: "Otpornost na visoke temperature", coir: "Visoka", peat: "Umerena" },
  { label: "Rizik od štetnih soli", coir: "Bez štetnih soli", peat: "Moguć, zavisi od nalazišta" },
];

export type CropGroup = "Bobičasto voće" | "Povrće" | "Ostalo";

export type Crop = {
  slug: string;
  to: Route;
  name: string;
  nameAcc: string;
  group: CropGroup;
  icon: "berry" | "drop" | "leaf" | "sun" | "flower";
  img: string;
  intro: string;
  spec: string;
  metaDescription: string;
  extraCta?: { text: string; to: Route; label: string };
  extraNote?: string;
};

export const CROPS: Crop[] = [
  {
    slug: "jagoda",
    to: "/supstrat/jagoda",
    name: "Jagoda",
    nameAcc: "jagodu",
    group: "Bobičasto voće",
    icon: "berry",
    img: img("jagoda.png"),
    intro:
      "INSA REMMY vreće koriste proizvođači jagoda širom sveta za berbu tokom cele godine. Veliku pažnju posvećujemo kvalitetu ispranog i dodatno ispranog supstrata, što je glavni razlog zašto naš supstrat daje jagode vrhunskog kvaliteta. Rupice za kapaljke, mešavine i dimenzije mogu se prilagoditi vašim potrebama.",
    spec:
      "Za negu korena jagode nudimo dve različite kokosove mešavine sa specifičnim osobinama, prilagođene klimi i potrebama proizvođača. Naša Activ mešavina, sa povećanim kapacitetom zadržavanja vode i nižom provetrenošću, posebno je pogodna za berbu jagoda. Nudimo ispran i dodatno ispran kokos. Za proizvođače kojima je potrebna veća provetrenost, tu je i Activ+ mešavina.",
    metaDescription:
      "INSA REMMY supstrat za jagodu — ispran i dodatno ispran kokos, Activ i Activ+ mešavine za berbu tokom cele godine i vrhunski kvalitet ploda.",
  },
  {
    slug: "malina",
    to: "/supstrat/malina",
    name: "Malina",
    nameAcc: "malinu",
    group: "Bobičasto voće",
    icon: "berry",
    img: img("malina.png"),
    intro:
      "INSA REMMY supstrati koriste se za proizvodnju malina tokom cele godine, bez obzira na klimatske promene. Naše posebne kokosove mešavine osmišljene su baš za maline, sa naglaskom na hidrataciju korena i sposobnost navodnjavanja. Rupice za kapaljke, mešavine i dimenzije mogu se prilagoditi vašim potrebama.",
    spec:
      "Za negu korena maline nudimo dve različite kokosove mešavine sa specifičnim osobinama, prilagođene klimi i potrebama proizvođača. Naša Activ mešavina, sa povećanim kapacitetom zadržavanja vode i nižom provetrenošću, posebno je pogodna za berbu malina. Nudimo ispran i dodatno ispran kokos. Za proizvođače kojima je potrebna veća provetrenost, tu je i Activ+ mešavina.",
    metaDescription:
      "INSA REMMY kokosov supstrat za malinu — Activ i Activ+ mešavine za hidrataciju korena i navodnjavanje, za proizvodnju tokom cele godine.",
    extraCta: {
      text: "Sadite maline? Pogledajte i naše premium sadnice iz Holandije i Italije.",
      to: "/sadnice",
      label: "Sadnice maline",
    },
  },
  {
    slug: "kupina",
    to: "/supstrat/kupina",
    name: "Kupina",
    nameAcc: "kupinu",
    group: "Bobičasto voće",
    icon: "berry",
    img: img("kupina.png"),
    intro:
      "Naše kokosove mešavine dobro služe proizvođačima kupina jer nude supstrate koji se najbolje prilagođavaju različitim klimatskim uslovima i tradicionalnim načinima gajenja. Supstrati napravljeni od kvalitetnih sirovina pomažu korenu biljke da brzo usvaja hranljive materije. Rupice za kapaljke, mešavine i dimenzije mogu se prilagoditi vašim potrebama.",
    spec:
      "Za negu korena kupine nudimo jedinstvenu kokosovu mešavinu sa specifičnim osobinama, prilagođenu klimi i potrebama proizvođača. Naša Activ+ mešavina ima veću provetrenost i nižu sposobnost zadržavanja vode. Nudimo ispran i dodatno ispran kokos. Ova mešavina predstavlja idealan medijum za gajenje kupina zahvaljujući izuzetnoj drenaži i zadržavanju vlage — ključnim za stabilan koren i krupne, sočne plodove.",
    metaDescription:
      "INSA REMMY supstrat za kupinu — Activ+ mešavina sa izuzetnom drenažom i zadržavanjem vlage, za stabilan koren i krupne, sočne plodove.",
  },
  {
    slug: "borovnica",
    to: "/supstrat/borovnica",
    name: "Borovnica",
    nameAcc: "borovnicu",
    group: "Bobičasto voće",
    icon: "berry",
    img: img("borovnica.png"),
    intro:
      "Godinama isporučujemo vrhunske kokosove mešavine proizvođačima borovnica širom sveta. INSA REMMY mešavine su omiljene među proizvođačima borovnica zbog jedinstvene teksture koja pomaže zdravom rastu biljke. Kako je borovnica dugoročna kultura, razvili smo posebne UV-otporne vreće koje traju do same berbe. Rupice za kapaljke, mešavine i dimenzije mogu se prilagoditi vašim potrebama.",
    spec:
      "Borovnicama je potrebna dodatna nega jer su dugoročna kultura, zato nudimo dve mešavine prilagođene klimi i potrebama proizvođača. Prosper mešavina daje biljkama borovnice zdrav i stabilan medijum za rast. Za proizvođače kojima je potrebna veća provetrenost, tu je Prosper+ mešavina. Nudimo ispran i dodatno ispran kokos za vaše zasade borovnice.",
    metaDescription:
      "INSA REMMY supstrat za borovnicu — Prosper i Prosper+ mešavine i UV-otporne vreće za dugoročnu proizvodnju, ispran i dodatno ispran kokos.",
    extraNote:
      "INSA KMA Fields uskoro nudi i sortu borovnice „Last Call” — pratite našu ponudu za detalje.",
  },
  {
    slug: "paradajz",
    to: "/supstrat/paradajz",
    name: "Paradajz",
    nameAcc: "paradajz",
    group: "Povrće",
    icon: "sun",
    img: img("paradajz.png"),
    intro:
      "INSA REMMY kokosov supstrat je odličan medijum za gajenje paradajza. Zahvaljujući sirovinama koje se peru i suše na specijalizovanim mašinama, proizvođači ne moraju da brinu o korovu, insektima i bolestima. Nudimo više formata pakovanja prilagođenih vašem načinu gajenja, a rupice za kapaljke, mešavine i dimenzije mogu se prilagoditi vašim potrebama.",
    spec:
      "Za paradajz nudimo širok izbor mešavina jedinstvenog sastava. Sve naše mešavine sadrže kombinaciju kokosove prašine (pith), kokosovih čipsova i sečenih vlakana, u odnosu koji se može prilagoditi. Mešavine su osmišljene da zadrže vlagu za koren biljke sve do berbe. Ispran kokos nudimo sa niskom električnom provodljivošću (EC), pogodnom baš za paradajz. Naš tim vam rado savetuje koji format i mešavina najbolje odgovaraju vašem gajenju.",
    metaDescription:
      "INSA REMMY kokosov supstrat za paradajz — isprane sirovine, mešavine kokosove prašine, čipsova i vlakana, niska EC. Format po dogovoru.",
  },
  {
    slug: "krastavac",
    to: "/supstrat/krastavac",
    name: "Krastavac",
    nameAcc: "krastavac",
    group: "Povrće",
    icon: "drop",
    img: img("krastavac.png"),
    intro:
      "Naši supstrati, napravljeni od kvalitetnih sirovina, dobro se prilagođavaju različitim klimatskim uslovima i načinima gajenja, pomažući biljkama da bujno rastu. INSA REMMY vreće i supstrati pogodni su za sve vrste krastavaca, uključujući salatne i kornišon sorte. Rupice za kapaljke, mešavine i dimenzije mogu se prilagoditi vašim potrebama.",
    spec:
      "Za krastavac nudimo širok izbor mešavina jedinstvenog sastava — kombinaciju kokosove prašine, kokosovih čipsova i sečenih vlakana, u odnosu koji se može prilagoditi. Nudimo ispran kokos sa različitim nivoom zadržavanja vode i provetrenosti, kao i niskom električnom provodljivošću (EC). Mešavine su osmišljene da zadrže vlagu za koren biljke sve do berbe. Naš tim vam rado savetuje koji format i mešavina najbolje odgovaraju vašem gajenju.",
    metaDescription:
      "INSA REMMY supstrat za sve vrste krastavaca — salatne i kornišone. Kokosova mešavina prilagodljiva klimi i sistemu gajenja, niska EC vrednost.",
  },
  {
    slug: "paprika",
    to: "/supstrat/paprika",
    name: "Paprika",
    nameAcc: "papriku",
    group: "Povrće",
    icon: "sun",
    img: img("paprika.png"),
    intro:
      "Paprika bolje uspeva u drobljenim kokosovim čipsovima i kokosovoj prašini nego u običnoj zemlji. Naši supstrati, napravljeni od kvalitetnih sirovina, dobro se prilagođavaju različitim klimatskim uslovima i načinima gajenja. Pošto se sve sirovine peru i suše na specijalizovanim mašinama, proizvođači ne moraju da brinu o korovu, insektima i bolestima. Rupice za kapaljke, mešavine i dimenzije mogu se prilagoditi vašim potrebama.",
    spec:
      "Za papriku nudimo širok izbor mešavina jedinstvenog sastava — kombinaciju kokosove prašine, kokosovih čipsova i sečenih vlakana, u odnosu koji se može prilagoditi. Nudimo ispran kokos sa različitim nivoom zadržavanja vode i provetrenosti, kao i niskom električnom provodljivošću (EC). Mešavine su osmišljene da zadrže vlagu za koren biljke sve do berbe. Naš tim vam rado savetuje koji format i mešavina najbolje odgovaraju vašem gajenju.",
    metaDescription:
      "INSA REMMY kokosov supstrat za papriku — isprane sirovine bez korova i bolesti, mešavine prilagodljivog sastava i niske EC vrednosti.",
  },
  {
    slug: "plavi-patlidzan",
    to: "/supstrat/plavi-patlidzan",
    name: "Plavi patlidžan",
    nameAcc: "plavi patlidžan",
    group: "Povrće",
    icon: "leaf",
    img: img("patlidzan.png"),
    intro:
      "INSA REMMY vreće čine gajenje plavog patlidžana jednostavnim i štite biljku od raznih bolesti. Za razliku od drugih bezemljišnih supstrata, kokosova prašina zadržava visoku provetrenost čak i kad je potpuno zasićena vodom. Rupice za kapaljke, mešavine i dimenzije mogu se prilagoditi vašim potrebama.",
    spec:
      "Za plavi patlidžan nudimo širok izbor mešavina jedinstvenog sastava — kombinaciju kokosove prašine, kokosovih čipsova i sečenih vlakana, u odnosu koji se može prilagoditi. Nudimo ispran kokos sa različitim nivoom zadržavanja vode i provetrenosti, kao i niskom električnom provodljivošću (EC). Mešavine su osmišljene da zadrže vlagu za koren biljke sve do berbe. Naš tim vam rado savetuje koji format i mešavina najbolje odgovaraju vašem gajenju.",
    metaDescription:
      "INSA REMMY supstrat za plavi patlidžan — kokosova prašina zadržava provetrenost i pri punom zasićenju vodom. Mešavine po vašim potrebama.",
  },
  {
    slug: "ruza",
    to: "/supstrat/ruza",
    name: "Ruža",
    nameAcc: "ružu",
    group: "Ostalo",
    icon: "flower",
    img: img("ruze.png"),
    intro:
      "Razumemo koliko je važno gajiti kvalitetne ruže da bi se bilo konkurentno na globalnom tržištu cveća. Zato nudimo specijalizovane kokosove mešavine kao idealan medijum za rast, sa povećanom provetrenošću. Ovo rastresa supstrat i pojačava provetrenost, što rezultira boljim razvojem korena ruže. Naši supstrati tako dovode do boljeg rasta biljke i većeg prinosa. Pošto je drenaža ključna u gajenju ruža, posebno vodimo računa o pravilnoj drenaži za vaše pupoljke. Rupice za kapaljke, mešavine i dimenzije mogu se prilagoditi vašim potrebama.",
    spec:
      "Naše sirovine se peru i suše na savršenoj temperaturi, tako da se proizvođači ruža više ne moraju brinuti o pojavi korova oko leja. Nudimo dve mešavine za optimalan rast cveta. Blossom mešavina je posebno osmišljena za biljke u cvatu i lako se prilagođava izazovima cvećarstva. Za proizvođače kojima je potrebna veća provetrenost, tu je Blossom+ mešavina. Nudimo ispran i dodatno ispran kokos za vaše ruže.",
    metaDescription:
      "INSA REMMY supstrat za ružu — Blossom i Blossom+ mešavine za povećanu provetrenost, bolju drenažu i razvoj korena, za veći prinos pupoljaka.",
  },
];

export const SUBSTRAT_FAQ = [
  {
    q: "Da li je supstrat spreman za upotrebu odmah?",
    a: "Da. Supstrat je 2× ispran i puferisan, sa stabilnim pH 5.5–6.5 i EC < 0.2 mS/cm — nema dodatne pripreme ni ispiranja pre sadnje. Biljka od prvog dana dobija stabilnu, kontrolisanu sredinu.",
  },
  {
    q: "Koliko dugo traje vreća kokosovog supstrata?",
    a: "Vek kokosovog supstrata u proizvodnji je 3–4 godine, naspram 1–2 godine kod treseta. Vlaknasta struktura ostaje stabilna kroz sezone, što znači manje zamena i predvidljivije troškove.",
  },
  {
    q: "Koje veličine vreća su dostupne?",
    a: "Na raspolaganju je osam veličina vreća, od 1.5 L do 80 L. Uz ponudu šaljemo kompletnu specifikaciju dimenzija, pa lako birate format prema sistemu gajenja — saksije, kontejneri ili vreće za redove.",
  },
  {
    q: "Da li supstrat podnosi leto u Srbiji?",
    a: "Da, supstrat je prilagođen klimi Srbije: podnosi visoke letnje temperature i sušne periode, uz zadržavanje stabilne vlažnosti i strukture — zato je izbor za plasteničku i protivgradnu zaštitu.",
  },
  {
    q: "Kako se odvija isporuka?",
    a: "Dostava je moguća širom Srbije. Količinu, format vreća i termin isporuke dogovaramo uz ponudu — pošaljite upit i vraćamo se sa konkretnom kalkulacijom za vaš zasad.",
  },
];

export const SADNICE_FAQ = [
  {
    q: "Kada se sadnice prodaju i rezervišu?",
    a: "Sadni materijal se prodaje i rezerviše jednom godišnje, u ograničenim količinama — prema planu proizvodnje matičnih rasadnika. Trenutno su otvorene rezervacije za sezonu proleće / jesen 2027.",
  },
  {
    q: "Šta tačno dobijam uz sadnice?",
    a: "Originalne, EU-sertifikovane sadnice sa dokumentovanim poreklom iz renomiranih rasadnika Italije i Holandije, visokog zdravstvenog statusa — uz svu prateću dokumentaciju i savet pri sadnji.",
  },
  {
    q: "Koje sorte su u ponudi?",
    a: "Tri remontantne sorte razvijene za profesionalnu, intenzivnu proizvodnju: Enrosadira®, Easy Rose® i Ofelia®. Svaka pokriva drugačiji tržišni profil — od prve klase i produžene sezone do izvoza i supermarketa.",
  },
  {
    q: "Koju gustinu sadnje da planiram?",
    a: "U intenzivnim sistemima najčešće 4–6 biljaka po m², u zavisnosti od sistema gajenja i sorte. Uz planiranje zasada zajedno određujemo optimalnu gustinu za vaše uslove.",
  },
];

export const KONTAKT_FAQ = [
  {
    q: "Kako najbrže dobijam ponudu?",
    a: "Pošaljite upit kroz formu ili pozovite 064 8648 522. Navedite kulturu, približnu površinu i lokaciju — ponuda sa dostupnošću i kalkulacijom stiže direktno od nas.",
  },
  {
    q: "Da li pomažete oko subvencija?",
    a: "Da. Svi nosioci registrovanog poljoprivrednog gazdinstva (RPG) imaju pravo na subvencije od 40–70% za sertifikovan sadni materijal. Dokumentacija ide uz sadnice, a pomažemo i pri pripremi i realizaciji zahteva.",
  },
  {
    q: "Da li isporučujete u celoj Srbiji?",
    a: "Da — dostava je moguća širom Srbije, uz savet i podršku uz svaku kupovinu.",
  },
];

export const INTERESTS = [
  "Sadnice maline (Enrosadira / Easy Rose / Ofelia)",
  "Kokosov supstrat",
  "Sadnice + supstrat",
  "Subvencije i dokumentacija",
  "Stručna podrška / konsultacije",
];

export type Article = {
  cat: "Sadnice" | "Supstrat" | "Fertirigacija" | "Zasadi" | "Subvencije";
  title: string;
  mins: number;
  excerpt: string;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    cat: "Sadnice",
    title: "Zašto sertifikovane sadnice: razlika koju vidite u drugoj godini",
    mins: 4,
    excerpt:
      "Dve sadnice mogu izgledati identično na dan sadnje, a potpuno različito se ponašati već u drugoj godini rodnosti.",
    body: [
      "Malina je višegodišnja kultura — zasad koji podižete danas braćete narednih pet do deset godina. Zato svaka karakteristika sadnice, od zdravstvenog statusa do genetske stabilnosti, direktno određuje prinos i klasu tokom čitavog veka zasada.",
      "Razlika najčešće potiče iz porekla: matični, sertifikovani materijal ili sadnica iz višegodišnje lokalne reprodukcije, gde se zdravstveni status i genetska čistoća postepeno gube. Na dan sadnje to golim okom ne vidite — vidite ga u drugoj i trećoj godini, kroz ujednačenost, kondiciju i klasu ploda.",
      "Profesionalni proizvođači zato ne rizikuju: kupuju provereno i sigurno. EU sertifikat, dokumentovano poreklo iz renomiranih rasadnika Italije i Holandije i visok zdravstveni status su osnova od koje počinje svaki ozbiljan zasad.",
    ],
  },
  {
    cat: "Supstrat",
    title: "Kokosov supstrat umesto treseta: 3–4 godine stabilnosti",
    mins: 5,
    excerpt:
      "Vek kokosovog supstrata je 3–4 godine naspram 1–2 godine kod treseta — i to nije jedina prednost.",
    body: [
      "Kokosova vlakna zadržavaju stabilnu, vlaknastu strukturu kroz više sezona, dok se treset razgrađuje i gubi aeraciju. U praksi to znači da jedna vreća kokosa nosi više proizvodnih ciklusa, sa manje zamena i manje prekida u proizvodnji.",
      "Vlaknasta struktura daje odličnu aeraciju korenovog sistema — biljka gradi jači koren, brže kreće u vegetaciju i ravnomernije napreduje. Upravo zato proizvođači prijavljuju znatno bolji prijem sadnica u kokosu nego u klasičnoj sadnji u zemljištu.",
      "Naš supstrat je 100% kokos, bez treseta, 2× ispran i puferisan — stabilan pH i EC od prvog dana i bez štetnih soli.",
    ],
  },
  {
    cat: "Fertirigacija",
    title: "pH i EC od prvog dana: šta znači „2× ispran i puferisan”",
    mins: 4,
    excerpt:
      "Stabilan pH 5.5–6.5 i EC < 0.2 mS/cm znače precizniju i predvidljiviju fertirigaciju — bez iznenađenja u startu.",
    body: [
      "Sirova kokosova vlakna mogu nositi viškove soli iz procesa proizvodnje. Dvostruko ispiranje uklanja te viškove, a puferovanje stabilizuje pH vrednost u opsegu 5.5–6.5 koji malina traži.",
      "EC < 0.2 mS/cm na startu znači da vi kontrolišete ishranu od prve kapi — program fertirigacije se gradi na poznatoj osnovi, a ne na nepoznanici. Rezultat je kontrolisana ishrana: manje stresa za mladu biljku, ujednačeniji rast i lakše vođenje proizvodnje.",
      "Kod supstrata nepoznatog porekla, prva merenja često pokazuju odstupanja koja se ispravljaju nedeljama — vreme koje mladi zasad nema.",
    ],
  },
  {
    cat: "Zasadi",
    title: "Gustina sadnje 4–6 biljaka/m² i izbor sistema gajenja",
    mins: 5,
    excerpt:
      "Gustina sadnje nije univerzalna brojka — izvodi se iz sorte, sistema gajenja i vaših uslova.",
    body: [
      "U intenzivnim sistemima najčešće se planira 4–6 biljaka po kvadratnom metru. Tačan broj zavisi od sorte, načina uzgoja (plastenik, protivgradna zaštita, otvoreno polje) i mehanizacije koju koristite.",
      "Greška u gustini se plaća godinama: previše gusto — slabija provetrenost i sitniji plod; previše retko — neiskorišćen kapacitet prostora i opreme. Zato planiranje zasada počinje od vaših uslova, a ne od šablona.",
      "Uz sadnice i supstrat dobijate konsultacije: zajedno biramo sistem gajenja i određujemo gustinu sadnje, pa zasad od prvog dana radi punim kapacitetom.",
    ],
  },
  {
    cat: "Subvencije",
    title: "Subvencije 40–70% za sertifikovan sadni materijal: šta treba da znate",
    mins: 4,
    excerpt:
      "Svi nosioci registrovanog poljoprivrednog gazdinstva (RPG) imaju pravo na subvencije za sertifikovan sadni materijal.",
    body: [
      "Država podstiče podizanje zasada iz proverenog materijala — povraćaj ide od 40 do 70% investicije u sertifikovane sadnice. Uslov je registrovano poljoprivredno gazdinstvo (RPG).",
      "Dokumentacija je obezbeđena: sertifikati i papirologija idu uz sadnice, bez dodatnog usklađivanja. Pomažemo i pri pripremi i realizaciji zahteva, tako da subvencija bude deo kalkulacije, a ne naknadna nepoznanica.",
      "Savet: subvencije se planiraju unapred, kao i sam sadni materijal koji se rezerviše jednom godišnje u ograničenim količinama. Proverite svoje pravo na vreme — pre nego što rezervišete termin sadnje.",
    ],
  },
  {
    cat: "Sadnice",
    title: "Remontantne sorte za intenzivnu proizvodnju: Enrosadira, Easy Rose, Ofelia",
    mins: 6,
    excerpt:
      "Tri sorte razvijene i selekcionisane za profesionalnu proizvodnju — gde se prinos, klasa i ujednačenost mere unapred.",
    body: [
      "Enrosadira® je stabilna i pouzdana: krupan, čvrst plod, visok procenat prve klase i produžena sezona berbe. Odlično se slaže sa kokosovim supstratom, što je čini prvim izborom za intenzivne sisteme.",
      "Easy Rose® donosi aromatičan, čvrst plod prepoznatljive svetloroze boje — odlična transportabilnost i dug vek na polici preporučuju je za supermarkete i izvozna tržišta osetljiva na izgled ploda.",
      "Ofelia® je rana i rodna sorta izvanrednog kvaliteta, sa ujednačenim razvojem izdanaka koji olakšava planiranje berbe u kontrolisanim uslovima. Kombinacijom sve tri sorte pokrivate sezonu i različite tržišne kanale.",
    ],
  },
  {
    cat: "Supstrat",
    title: "Leto u Srbiji: kako kokos drži stabilnost na visokim temperaturama",
    mins: 3,
    excerpt:
      "Supstrat je prilagođen klimi Srbije — podnosi visoke letnje temperature i sušne periode.",
    body: [
      "Visoke letnje temperature i sušni periodi su realnost proizvodnje u Srbiji, posebno u plastenicima gde se dnevni maksimumi penju visoko. Kokosova vlakna u tim uslovima zadržavaju strukturu i kapacitet za vodu, bez sleganja i zbijanja.",
      "Stabilna sredina znači da biljka i u najtoplijim danima ima predvidljiv vodno-vazdušni režim — manje stresa, manje pada u klasi i kontinuitet berbe kada je cena najosetljivija na kvalitet.",
      "Uz program fertirigacije prilagođen kokosu, letnji period prestaje da bude rizik i postaje planirana faza proizvodnje.",
    ],
  },
  {
    cat: "Fertirigacija",
    title: "Fertirigacija u kokosovom supstratu: stabilnost koja se meri",
    mins: 5,
    excerpt:
      "Precizna ishrana počinje od poznate osnove — puferisan supstrat daje merljiv, ponovljiv sistem.",
    body: [
      "U zemljištu je svaka parcela priča za sebe: pH, kapacitet za vodu i rezerve hraniva variraju i po metrima. U kokosovom supstratu početna tačka je ista za svaku vreću — pH 5.5–6.5 i EC < 0.2 mS/cm.",
      "Kada je osnova poznata, program fertirigacije se gradi i koriguje na osnovu merenja, a ne pretpostavki. To donosi kontrolisanu ishranu, ujednačeniji rast biljaka i predvidljiviji prinos iz godine u godinu.",
      "Izrada programa fertirigacije je deo naše stručne podrške — od prve nedelje nakon sadnje do berbe.",
    ],
  },
];
