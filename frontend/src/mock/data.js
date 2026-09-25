// Mock data for DEFI redesign (frontend only)

export const stats = [
  { value: "35+", key: "stat1" },
  { value: "500+", key: "stat2" },
  { value: "20+", key: "stat3" },
  { value: "24/7", key: "stat4" },
];

export const missionItems = [
  {
    icon: "HeartHandshake",
    title: { fr: "Satisfaction du client", en: "Customer satisfaction" },
    text: {
      fr: "DEFI s'engage \u00e0 fournir un service global et adapt\u00e9 \u00e0 chaque client selon ses besoins sp\u00e9cifiques, pour assurer sa satisfaction.",
      en: "DEFI is committed to providing global service tailored to each client's specific needs, to ensure their satisfaction.",
    },
  },
  {
    icon: "Ear",
    title: { fr: "\u00c9coute des clients", en: "Listening to clients" },
    text: {
      fr: "Nous accordons une grande importance \u00e0 l'\u00e9coute active de nos clients pour mieux comprendre leurs besoins et proposer des solutions adapt\u00e9es.",
      en: "We place great importance on actively listening to our clients to better understand their needs and offer appropriate solutions.",
    },
  },
  {
    icon: "BadgeCheck",
    title: { fr: "Qualit\u00e9 de service", en: "Quality of service" },
    text: {
      fr: "Livraison rapide, installation des machines, formation des \u00e9quipes et maintenance r\u00e9guli\u00e8re : un suivi de qualit\u00e9 de bout en bout.",
      en: "Fast delivery, machine installation, team training and regular maintenance: end-to-end quality follow-up.",
    },
  },
];

const IMG = {
  press: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a",
  gravure: "https://images.pexels.com/photos/19316517/pexels-photo-19316517.png",
  rollers: "https://images.unsplash.com/photo-1715154470884-1c2be0b0129f",
  cmyk: "https://images.pexels.com/photos/6620991/pexels-photo-6620991.jpeg",
  facility: "https://images.unsplash.com/photo-1562155695-fb6e1f95fcfd",
  team: "https://images.unsplash.com/photo-1700727448686-b314cb5f9948",
};

const mkFeatures = (arr) => arr;

export const categories = [
  {
    slug: "machines",
    name: { fr: "Machines", en: "Machines" },
    image: IMG.press,
    short: {
      fr: "Les principales machines de production pour l'industrie de l'emballage flexible : papier, film, complexes et cartons.",
      en: "The main production machines for the flexible packaging industry: paper, film, laminates and board.",
    },
    products: [
      {
        slug: "presse-flexo-8-couleurs",
        name: { fr: "Presse flexographique 8 couleurs", en: "8-color flexographic press" },
        image: IMG.press,
        desc: { fr: "Presse CI haute performance pour l'emballage flexible.", en: "High-performance CI press for flexible packaging." },
        longDesc: {
          fr: "Presse \u00e0 tambour central (CI) con\u00e7ue pour l'impression haute qualit\u00e9 sur films, papiers et complexes. Change-over rapide, s\u00e9chage optimis\u00e9 et automatisation compl\u00e8te du r\u00e9glage des couleurs pour une productivit\u00e9 maximale.",
          en: "Central impression (CI) press designed for high-quality printing on films, papers and laminates. Fast change-over, optimized drying and full color-registration automation for maximum productivity.",
        },
        features: mkFeatures([
          { fr: "R\u00e9glage automatique du repérage", en: "Automatic register control" },
          { fr: "Change-over rapide entre travaux", en: "Fast job change-over" },
          { fr: "S\u00e9chage inter-couleurs optimis\u00e9", en: "Optimized inter-color drying" },
          { fr: "Supervision et diagnostic \u00e0 distance", en: "Remote supervision & diagnostics" },
        ]),
        specs: [
          { label: { fr: "Laize max", en: "Max width" }, value: "1650 mm" },
          { label: { fr: "Vitesse max", en: "Max speed" }, value: "600 m/min" },
          { label: { fr: "Couleurs", en: "Colors" }, value: "8" },
        ],
      },
      {
        slug: "ligne-heliogravure",
        name: { fr: "Ligne d'h\u00e9liogravure", en: "Rotogravure line" },
        image: IMG.gravure,
        desc: { fr: "Solution compl\u00e8te d'impression h\u00e9lio grande vitesse.", en: "Complete high-speed gravure printing solution." },
        longDesc: {
          fr: "Ligne d'h\u00e9liogravure con\u00e7ue pour les grands tirages exigeant une qualit\u00e9 d'image exceptionnelle et une r\u00e9p\u00e9tabilit\u00e9 parfaite. Id\u00e9ale pour l'emballage alimentaire, la d\u00e9coration et les supports sp\u00e9ciaux.",
          en: "Rotogravure line designed for long runs requiring exceptional image quality and perfect repeatability. Ideal for food packaging, decoration and special substrates.",
        },
        features: mkFeatures([
          { fr: "Qualit\u00e9 d'image exceptionnelle", en: "Exceptional image quality" },
          { fr: "R\u00e9p\u00e9tabilit\u00e9 sur longs tirages", en: "Repeatability on long runs" },
          { fr: "Groupes d'impression \u00e9changeables", en: "Interchangeable printing units" },
          { fr: "Contr\u00f4le de viscosit\u00e9 int\u00e9gr\u00e9", en: "Integrated viscosity control" },
        ]),
        specs: [
          { label: { fr: "Laize max", en: "Max width" }, value: "1300 mm" },
          { label: { fr: "Vitesse max", en: "Max speed" }, value: "500 m/min" },
          { label: { fr: "Groupes", en: "Units" }, value: "10" },
        ],
      },
      {
        slug: "complexeuse-sans-solvant",
        name: { fr: "Complexeuse sans solvant", en: "Solventless laminator" },
        image: IMG.rollers,
        desc: { fr: "Laminage \u00e9cologique pour films complexes.", en: "Eco-friendly lamination for complex films." },
        longDesc: {
          fr: "Complexeuse sans solvant offrant un laminage \u00e9cologique, sans \u00e9missions et \u00e9conome en \u00e9nergie. Parfaite pour la production de complexes multicouches destin\u00e9s \u00e0 l'emballage souple.",
          en: "Solventless laminator offering eco-friendly, emission-free and energy-efficient lamination. Perfect for producing multilayer laminates for flexible packaging.",
        },
        features: mkFeatures([
          { fr: "Sans solvant ni \u00e9missions", en: "Solventless, emission-free" },
          { fr: "Dosage pr\u00e9cis de la colle", en: "Precise adhesive dosing" },
          { fr: "\u00c9conomie d'\u00e9nergie", en: "Energy savings" },
          { fr: "Nettoyage simplifi\u00e9", en: "Simplified cleaning" },
        ]),
        specs: [
          { label: { fr: "Laize max", en: "Max width" }, value: "1450 mm" },
          { label: { fr: "Vitesse max", en: "Max speed" }, value: "450 m/min" },
          { label: { fr: "Grammage colle", en: "Adhesive weight" }, value: "0.8\u20132.5 g/m\u00b2" },
        ],
      },
      {
        slug: "decoupeuse-refendeuse",
        name: { fr: "D\u00e9coupeuse-refendeuse", en: "Slitter rewinder" },
        image: IMG.cmyk,
        desc: { fr: "Refente pr\u00e9cise et rapide de vos bobines.", en: "Precise and fast slitting of your reels." },
        longDesc: {
          fr: "D\u00e9coupeuse-refendeuse haute vitesse assurant une refente pr\u00e9cise et des bobines parfaitement enroul\u00e9es. Gestion automatique de la tension pour un r\u00e9sultat r\u00e9gulier sur tous vos supports.",
          en: "High-speed slitter rewinder ensuring precise slitting and perfectly wound reels. Automatic tension management for consistent results across all your substrates.",
        },
        features: mkFeatures([
          { fr: "Positionnement automatique des couteaux", en: "Automatic knife positioning" },
          { fr: "Gestion automatique de la tension", en: "Automatic tension management" },
          { fr: "Changement de bobine rapide", en: "Fast reel change" },
          { fr: "\u00c9jection automatique des chutes", en: "Automatic trim removal" },
        ]),
        specs: [
          { label: { fr: "Laize max", en: "Max width" }, value: "1700 mm" },
          { label: { fr: "Vitesse max", en: "Max speed" }, value: "800 m/min" },
          { label: { fr: "Diam\u00e8tre bobine", en: "Reel diameter" }, value: "1000 mm" },
        ],
      },
    ],
  },
  {
    slug: "accessoires",
    name: { fr: "Accessoires", en: "Accessories" },
    image: IMG.cmyk,
    short: {
      fr: "Une large gamme de machines et \u00e9quipements compl\u00e9mentaires aux lignes de production.",
      en: "A wide range of machines and equipment complementary to production lines.",
    },
    products: [
      {
        slug: "viscosimetre-fasnacht-s6-vr",
        name: { fr: "Viscosim\u00e8tre FASNACHT S6-VR", en: "FASNACHT S6-VR viscometer" },
        image: IMG.cmyk,
        desc: { fr: "Contr\u00f4le automatique de la viscosit\u00e9 des encres.", en: "Automatic control of ink viscosity." },
        longDesc: {
          fr: "Le viscosim\u00e8tre FASNACHT S6-VR assure un contr\u00f4le automatique et pr\u00e9cis de la viscosit\u00e9 des encres directement en production, garantissant une constance des couleurs et une r\u00e9duction des rebuts.",
          en: "The FASNACHT S6-VR viscometer provides automatic and precise control of ink viscosity directly in production, ensuring color consistency and reduced waste.",
        },
        features: mkFeatures([
          { fr: "Mesure en continu", en: "Continuous measurement" },
          { fr: "R\u00e9gulation automatique", en: "Automatic regulation" },
          { fr: "Constance des couleurs", en: "Color consistency" },
          { fr: "Interface simple", en: "Simple interface" },
        ]),
        specs: [
          { label: { fr: "Plage de mesure", en: "Measuring range" }, value: "10\u2013100 s" },
          { label: { fr: "Pr\u00e9cision", en: "Accuracy" }, value: "\u00b1 0.5 s" },
          { label: { fr: "Alimentation", en: "Power" }, value: "24 V DC" },
        ],
      },
      {
        slug: "systeme-guidage-bande",
        name: { fr: "Syst\u00e8me de guidage de bande", en: "Web guiding system" },
        image: IMG.rollers,
        desc: { fr: "Positionnement pr\u00e9cis de la bande en production.", en: "Precise web positioning during production." },
        longDesc: {
          fr: "Syst\u00e8me de guidage de bande assurant un positionnement pr\u00e9cis du support tout au long de la ligne, m\u00eame \u00e0 haute vitesse, pour \u00e9viter les d\u00e9fauts et les gaspillages.",
          en: "Web guiding system ensuring precise substrate positioning throughout the line, even at high speed, to avoid defects and waste.",
        },
        features: mkFeatures([
          { fr: "Capteurs haute pr\u00e9cision", en: "High-precision sensors" },
          { fr: "Correction rapide", en: "Fast correction" },
          { fr: "Compatible tous supports", en: "Compatible with all substrates" },
          { fr: "Installation modulaire", en: "Modular installation" },
        ]),
        specs: [
          { label: { fr: "Course de correction", en: "Correction stroke" }, value: "\u00b1 75 mm" },
          { label: { fr: "Pr\u00e9cision", en: "Accuracy" }, value: "\u00b1 0.1 mm" },
          { label: { fr: "Vitesse", en: "Speed" }, value: "800 m/min" },
        ],
      },
      {
        slug: "controleur-tension-re",
        name: { fr: "Contr\u00f4leur de tension RE", en: "RE tension controller" },
        image: IMG.press,
        desc: { fr: "Gestion optimale de la tension de bande.", en: "Optimal web tension management." },
        longDesc: {
          fr: "Contr\u00f4leur de tension RE offrant une r\u00e9gulation automatique et pr\u00e9cise, du d\u00e9roulage au r\u00e9enroulage, pour une qualit\u00e9 constante sur toute la production.",
          en: "RE tension controller offering automatic and precise regulation, from unwinding to rewinding, for consistent quality across the entire production.",
        },
        features: mkFeatures([
          { fr: "R\u00e9gulation automatique", en: "Automatic regulation" },
          { fr: "Boucle ferm\u00e9e", en: "Closed loop" },
          { fr: "Param\u00e9trage m\u00e9moris\u00e9", en: "Stored settings" },
          { fr: "Int\u00e9gration ais\u00e9e", en: "Easy integration" },
        ]),
        specs: [
          { label: { fr: "Sorties", en: "Outputs" }, value: "2 canaux" },
          { label: { fr: "Tension max", en: "Max tension" }, value: "1000 N" },
          { label: { fr: "Alimentation", en: "Power" }, value: "24 V DC" },
        ],
      },
      {
        slug: "perforation-laser-lang",
        name: { fr: "Perforation laser LANG", en: "LANG laser perforation" },
        image: IMG.gravure,
        desc: { fr: "Micro-perforation laser int\u00e9gr\u00e9e en ligne.", en: "Inline laser micro-perforation." },
        longDesc: {
          fr: "Syst\u00e8me de micro-perforation laser LANG int\u00e9gr\u00e9 directement en ligne de production, pour des emballages n\u00e9cessitant une respirabilit\u00e9 contr\u00f4l\u00e9e \u00e0 haute vitesse.",
          en: "LANG laser micro-perforation system integrated directly on the production line, for packaging requiring controlled breathability at high speed.",
        },
        features: mkFeatures([
          { fr: "Micro-perforation pr\u00e9cise", en: "Precise micro-perforation" },
          { fr: "Int\u00e9gration en ligne", en: "Inline integration" },
          { fr: "Densit\u00e9 param\u00e9trable", en: "Adjustable density" },
          { fr: "Sans contact m\u00e9canique", en: "No mechanical contact" },
        ]),
        specs: [
          { label: { fr: "Diam\u00e8tre trou", en: "Hole diameter" }, value: "40\u2013200 \u00b5m" },
          { label: { fr: "Vitesse", en: "Speed" }, value: "600 m/min" },
          { label: { fr: "Type laser", en: "Laser type" }, value: "CO\u2082" },
        ],
      },
    ],
  },
  {
    slug: "consommables",
    name: { fr: "Consommables", en: "Consumables" },
    image: IMG.rollers,
    short: {
      fr: "L'ensemble des principaux produits utilis\u00e9s sur les machines ou accessoires.",
      en: "All the main products used on machines or accessories.",
    },
    products: [
      {
        slug: "racles-doctor-blades",
        name: { fr: "Racles doctor blades", en: "Doctor blades" },
        image: IMG.rollers,
        desc: { fr: "Racles acier et composite haute pr\u00e9cision.", en: "High-precision steel and composite blades." },
        longDesc: {
          fr: "Gamme compl\u00e8te de racles en acier et composite, adapt\u00e9es \u00e0 chaque application flexo et h\u00e9lio pour un encrage r\u00e9gulier et une usure minimale des anilox.",
          en: "Complete range of steel and composite doctor blades, suited to every flexo and gravure application for consistent inking and minimal anilox wear.",
        },
        features: mkFeatures([
          { fr: "Acier et composite", en: "Steel and composite" },
          { fr: "Bord de racle pr\u00e9cis", en: "Precise blade edge" },
          { fr: "Faible usure anilox", en: "Low anilox wear" },
          { fr: "Nombreux profils disponibles", en: "Many profiles available" },
        ]),
        specs: [
          { label: { fr: "\u00c9paisseur", en: "Thickness" }, value: "0.15\u20130.25 mm" },
          { label: { fr: "Mat\u00e9riau", en: "Material" }, value: "Acier / composite" },
          { label: { fr: "Longueur", en: "Length" }, value: "Sur mesure" },
        ],
      },
      {
        slug: "chambre-racle-bft-carbon",
        name: { fr: "Chambre \u00e0 racle BFT Carbon", en: "BFT Carbon doctor chamber" },
        image: IMG.cmyk,
        desc: { fr: "Chambre fibre de carbone l\u00e9g\u00e8re et stable.", en: "Lightweight, stable carbon-fiber chamber." },
        longDesc: {
          fr: "La chambre \u00e0 racle BFT Carbon combine l\u00e9g\u00e8ret\u00e9 et rigidit\u00e9 gr\u00e2ce \u00e0 sa structure en fibre de carbone, pour un encrage r\u00e9gulier, une consommation d'encre r\u00e9duite et une constance des couleurs am\u00e9lior\u00e9e.",
          en: "The BFT Carbon doctor chamber combines lightness and rigidity thanks to its carbon-fiber structure, for consistent inking, reduced ink consumption and improved color consistency.",
        },
        features: mkFeatures([
          { fr: "Structure fibre de carbone", en: "Carbon-fiber structure" },
          { fr: "L\u00e9g\u00e8re et rigide", en: "Light and rigid" },
          { fr: "Encrage r\u00e9gulier", en: "Consistent inking" },
          { fr: "Consommation d'encre r\u00e9duite", en: "Reduced ink consumption" },
        ]),
        specs: [
          { label: { fr: "Mat\u00e9riau", en: "Material" }, value: "Fibre de carbone" },
          { label: { fr: "Laize", en: "Width" }, value: "Sur mesure" },
          { label: { fr: "\u00c9tanch\u00e9it\u00e9", en: "Sealing" }, value: "Joints EPDM" },
        ],
      },
      {
        slug: "manchons-adhesifs",
        name: { fr: "Manchons & adh\u00e9sifs", en: "Sleeves & adhesives" },
        image: IMG.press,
        desc: { fr: "Manchons flexo et adh\u00e9sifs de montage.", en: "Flexo sleeves and mounting adhesives." },
        longDesc: {
          fr: "Manchons flexographiques et adh\u00e9sifs de montage de haute qualit\u00e9, garantissant une pr\u00e9cision de montage optimale et une longue dur\u00e9e de vie des clich\u00e9s.",
          en: "High-quality flexographic sleeves and mounting adhesives, ensuring optimal mounting precision and long plate life.",
        },
        features: mkFeatures([
          { fr: "Grande pr\u00e9cision de montage", en: "High mounting precision" },
          { fr: "Large gamme d'\u00e9paisseurs", en: "Wide range of thicknesses" },
          { fr: "Compatibilit\u00e9 multi-encres", en: "Multi-ink compatibility" },
          { fr: "Longue dur\u00e9e de vie", en: "Long service life" },
        ]),
        specs: [
          { label: { fr: "Type", en: "Type" }, value: "Compressible / dur" },
          { label: { fr: "\u00c9paisseurs", en: "Thicknesses" }, value: "0.10\u20130.55 mm" },
          { label: { fr: "Adh\u00e9sif", en: "Adhesive" }, value: "Mousse / film" },
        ],
      },
      {
        slug: "nettoyage-anilox",
        name: { fr: "Produits de nettoyage anilox", en: "Anilox cleaning products" },
        image: IMG.gravure,
        desc: { fr: "Solutions de nettoyage des cylindres anilox.", en: "Anilox roller cleaning solutions." },
        longDesc: {
          fr: "Solutions de nettoyage professionnelles pour cylindres anilox, restaurant le volume de gravure et prolongeant la dur\u00e9e de vie de vos anilox tout en pr\u00e9servant la qualit\u00e9 d'impression.",
          en: "Professional cleaning solutions for anilox rollers, restoring the engraving volume and extending anilox life while preserving print quality.",
        },
        features: mkFeatures([
          { fr: "Restauration du volume", en: "Volume restoration" },
          { fr: "Respectueux des anilox", en: "Anilox-safe" },
          { fr: "Formules \u00e9cologiques", en: "Eco-friendly formulas" },
          { fr: "Usage manuel ou automatique", en: "Manual or automatic use" },
        ]),
        specs: [
          { label: { fr: "Format", en: "Format" }, value: "Bidon / gel" },
          { label: { fr: "pH", en: "pH" }, value: "Neutre" },
          { label: { fr: "Compatibilit\u00e9", en: "Compatibility" }, value: "C\u00e9ramique / chrome" },
        ],
      },
    ],
  },
  {
    slug: "produits-defi",
    name: { fr: "Produits DEFI", en: "DEFI Products" },
    image: IMG.facility,
    short: {
      fr: "Notre gamme propre comprend le CIC, nettoyage automatique du tambour central, et d'autres innovations.",
      en: "Our own range includes the CIC automatic central drum cleaning system, and other innovations.",
    },
    products: [
      {
        slug: "cic-nettoyage-tambour",
        name: { fr: "CIC \u2013 Nettoyage tambour central", en: "CIC \u2013 Central drum cleaning" },
        image: IMG.facility,
        desc: { fr: "Nettoyage automatique du tambour central en production.", en: "Automatic central drum cleaning during production." },
        longDesc: {
          fr: "Le CIC est une innovation DEFI qui assure le nettoyage automatique du tambour central des presses flexo en production, r\u00e9duisant les arr\u00eats machine et am\u00e9liorant la qualit\u00e9 d'impression.",
          en: "The CIC is a DEFI innovation that ensures automatic central drum cleaning of flexo presses during production, reducing machine downtime and improving print quality.",
        },
        features: mkFeatures([
          { fr: "Nettoyage en production", en: "Cleaning during production" },
          { fr: "R\u00e9duction des arr\u00eats machine", en: "Reduced downtime" },
          { fr: "Qualit\u00e9 d'impression am\u00e9lior\u00e9e", en: "Improved print quality" },
          { fr: "Adaptable \u00e0 la plupart des presses", en: "Adaptable to most presses" },
        ]),
        specs: [
          { label: { fr: "Type", en: "Type" }, value: "Automatique" },
          { label: { fr: "Montage", en: "Mounting" }, value: "R\u00e9troﬁt possible" },
          { label: { fr: "Fabrication", en: "Manufacturing" }, value: "DEFI" },
        ],
      },
      {
        slug: "pompes-reversibles",
        name: { fr: "Pompes r\u00e9versibles", en: "Reversible pumps" },
        image: IMG.press,
        desc: { fr: "Pompes r\u00e9versibles pour circuits d'encrage.", en: "Reversible pumps for inking circuits." },
        longDesc: {
          fr: "Pompes r\u00e9versibles con\u00e7ues pour les circuits d'encrage, assurant une alimentation et une vidange rapides et fiables, avec un entretien r\u00e9duit.",
          en: "Reversible pumps designed for inking circuits, ensuring fast and reliable ink feed and drain, with reduced maintenance.",
        },
        features: mkFeatures([
          { fr: "Sens r\u00e9versible", en: "Reversible direction" },
          { fr: "D\u00e9bit r\u00e9glable", en: "Adjustable flow" },
          { fr: "Entretien r\u00e9duit", en: "Reduced maintenance" },
          { fr: "R\u00e9sistante aux encres", en: "Ink-resistant" },
        ]),
        specs: [
          { label: { fr: "D\u00e9bit", en: "Flow rate" }, value: "Jusqu'\u00e0 60 L/min" },
          { label: { fr: "Mat\u00e9riau", en: "Material" }, value: "Inox" },
          { label: { fr: "Raccords", en: "Fittings" }, value: "Standard" },
        ],
      },
      {
        slug: "masterclean",
        name: { fr: "MasterClean", en: "MasterClean" },
        image: IMG.cmyk,
        desc: { fr: "Nettoyage automatis\u00e9 des \u00e9quipements d'encrage.", en: "Automated cleaning of inking equipment." },
        longDesc: {
          fr: "MasterClean automatise le nettoyage des \u00e9quipements d'encrage (chambres, anilox, circuits), r\u00e9duisant le temps de main-d'\u0153uvre et garantissant un r\u00e9sultat constant.",
          en: "MasterClean automates the cleaning of inking equipment (chambers, anilox, circuits), reducing labor time and ensuring consistent results.",
        },
        features: mkFeatures([
          { fr: "Cycle de nettoyage automatis\u00e9", en: "Automated cleaning cycle" },
          { fr: "\u00c9conomie de main-d'\u0153uvre", en: "Labor savings" },
          { fr: "R\u00e9sultat constant", en: "Consistent results" },
          { fr: "Recyclage des solvants", en: "Solvent recycling" },
        ]),
        specs: [
          { label: { fr: "Capacit\u00e9", en: "Capacity" }, value: "Multi-postes" },
          { label: { fr: "Cycle", en: "Cycle" }, value: "Programmable" },
          { label: { fr: "Fabrication", en: "Manufacturing" }, value: "DEFI" },
        ],
      },
    ],
  },
  {
    slug: "equipements-re",
    name: { fr: "\u00c9quipements RE", en: "RE Equipment" },
    image: IMG.gravure,
    short: {
      fr: "Leader de l'\u00e9quipement pour machines de transformation : freins pneumatiques, cellules de charge, contr\u00f4leurs de tension et guidage de bande.",
      en: "Leader in converting machine equipment: pneumatic brakes, load cells, tension controllers and web guiding.",
    },
    products: [
      {
        slug: "freins-pneumatiques",
        name: { fr: "Freins pneumatiques", en: "Pneumatic brakes" },
        image: IMG.gravure,
        desc: { fr: "Freinage pr\u00e9cis et progressif des d\u00e9rouleurs.", en: "Precise and progressive unwinder braking." },
        longDesc: {
          fr: "Freins pneumatiques RE assurant un freinage pr\u00e9cis et progressif des d\u00e9rouleurs, pour une tension de bande ma\u00eetris\u00e9e et une qualit\u00e9 constante.",
          en: "RE pneumatic brakes ensuring precise and progressive unwinder braking, for controlled web tension and consistent quality.",
        },
        features: mkFeatures([
          { fr: "Freinage progressif", en: "Progressive braking" },
          { fr: "Dissipation thermique \u00e9lev\u00e9e", en: "High heat dissipation" },
          { fr: "Montage compact", en: "Compact mounting" },
          { fr: "Longue dur\u00e9e de vie", en: "Long service life" },
        ]),
        specs: [
          { label: { fr: "Couple", en: "Torque" }, value: "Jusqu'\u00e0 500 Nm" },
          { label: { fr: "Commande", en: "Control" }, value: "Pneumatique" },
          { label: { fr: "Fabricant", en: "Manufacturer" }, value: "RE S.p.A." },
        ],
      },
      {
        slug: "cellules-de-charge",
        name: { fr: "Cellules de charge", en: "Load cells" },
        image: IMG.rollers,
        desc: { fr: "Mesure fiable de la tension de bande.", en: "Reliable web tension measurement." },
        longDesc: {
          fr: "Cellules de charge RE offrant une mesure fiable et pr\u00e9cise de la tension de bande, base d'une r\u00e9gulation efficace tout au long de la ligne.",
          en: "RE load cells offering reliable and precise web tension measurement, the basis for effective regulation throughout the line.",
        },
        features: mkFeatures([
          { fr: "Mesure pr\u00e9cise", en: "Precise measurement" },
          { fr: "Haute r\u00e9p\u00e9tabilit\u00e9", en: "High repeatability" },
          { fr: "Montage universel", en: "Universal mounting" },
          { fr: "Robuste", en: "Robust" },
        ]),
        specs: [
          { label: { fr: "Capacit\u00e9", en: "Capacity" }, value: "50\u20131000 N" },
          { label: { fr: "Signal", en: "Signal" }, value: "mV/V" },
          { label: { fr: "Fabricant", en: "Manufacturer" }, value: "RE S.p.A." },
        ],
      },
      {
        slug: "controleurs-de-tension",
        name: { fr: "Contr\u00f4leurs de tension", en: "Tension controllers" },
        image: IMG.press,
        desc: { fr: "R\u00e9gulation automatique de la tension.", en: "Automatic tension regulation." },
        longDesc: {
          fr: "Contr\u00f4leurs de tension RE pour une r\u00e9gulation automatique et pr\u00e9cise en boucle ferm\u00e9e, garantissant une qualit\u00e9 constante sur toute la production.",
          en: "RE tension controllers for automatic and precise closed-loop regulation, ensuring consistent quality across the entire production.",
        },
        features: mkFeatures([
          { fr: "Boucle ferm\u00e9e", en: "Closed loop" },
          { fr: "Multi-zones", en: "Multi-zone" },
          { fr: "Interface intuitive", en: "Intuitive interface" },
          { fr: "Int\u00e9gration ais\u00e9e", en: "Easy integration" },
        ]),
        specs: [
          { label: { fr: "Zones", en: "Zones" }, value: "Jusqu'\u00e0 4" },
          { label: { fr: "Affichage", en: "Display" }, value: "\u00c9cran tactile" },
          { label: { fr: "Fabricant", en: "Manufacturer" }, value: "RE S.p.A." },
        ],
      },
    ],
  },
];

// Flatten helper to find a product by slug across categories
export const findProduct = (categorySlug, productSlug) => {
  const cat = categories.find((c) => c.slug === categorySlug);
  if (!cat) return null;
  const product = cat.products.find((p) => p.slug === productSlug);
  if (!product) return null;
  return { category: cat, product };
};

export const news = [
  {
    slug: "bft-carbon-bft-flexo",
    title: { fr: "BFT Carbon & BFT Flexo : le duo qui r\u00e9invente votre encrage flexo", en: "BFT Carbon & BFT Flexo: the duo reinventing your flexo inking" },
    category: { fr: "Technique & Innovation", en: "Technique & Innovation" },
    date: "2026-05-19",
    image: IMG.rollers,
    excerpt: { fr: "D\u00e9couvrez la nouvelle chambre \u00e0 racle en fibre de carbone qui am\u00e9liore la stabilit\u00e9 et la qualit\u00e9 d'impression.", en: "Discover the new carbon-fiber doctor chamber that improves stability and print quality." },
    body: { fr: "La chambre \u00e0 racle BFT Carbon combine l\u00e9g\u00e8ret\u00e9 et rigidit\u00e9 gr\u00e2ce \u00e0 sa structure en fibre de carbone. Associ\u00e9e au syst\u00e8me BFT Flexo, elle garantit un encrage r\u00e9gulier, r\u00e9duit la consommation d'encre et am\u00e9liore la constance des couleurs sur toute la largeur de bande. Un investissement rentable pour les imprimeurs exigeants.", en: "The BFT Carbon doctor chamber combines lightness and rigidity thanks to its carbon-fiber structure. Combined with the BFT Flexo system, it ensures consistent inking, reduces ink consumption and improves color consistency across the entire web width. A profitable investment for demanding printers." },
  },
  {
    slug: "laser-flexowash-anilox",
    title: { fr: "Laser FLEXOWASH : la nouvelle solution de nettoyage des anilox", en: "Laser FLEXOWASH: the new anilox cleaning solution" },
    category: { fr: "Technique & Innovation", en: "Technique & Innovation" },
    date: "2026-05-12",
    image: IMG.cmyk,
    excerpt: { fr: "Un nettoyage laser \u00e9cologique et sans produit chimique pour restaurer les cylindres anilox.", en: "Eco-friendly, chemical-free laser cleaning to restore anilox rollers." },
    body: { fr: "Le laser FLEXOWASH permet un nettoyage en profondeur des cylindres anilox sans produit chimique ni consommable. Le proc\u00e9d\u00e9 restaure le volume de gravure d'origine et prolonge la dur\u00e9e de vie des anilox, tout en r\u00e9duisant l'impact environnemental de vos ateliers.", en: "The FLEXOWASH laser enables deep cleaning of anilox rollers without chemicals or consumables. The process restores the original engraving volume and extends anilox lifespan, while reducing the environmental impact of your workshops." },
  },
  {
    slug: "impression-flexographique-choix-machines",
    title: { fr: "Impression flexographique : un choix de machines guid\u00e9 par l'expertise", en: "Flexographic printing: a machine choice guided by expertise" },
    category: { fr: "Conseils", en: "Advice" },
    date: "2026-04-21",
    image: IMG.press,
    excerpt: { fr: "Comment choisir la presse flexo adapt\u00e9e \u00e0 votre production ? Nos experts vous guident.", en: "How to choose the flexo press suited to your production? Our experts guide you." },
    body: { fr: "Le choix d'une presse flexographique d\u00e9pend de nombreux crit\u00e8res : type de supports, laize, nombre de couleurs, vitesse et budget. Nos experts analysent votre cahier des charges pour vous orienter vers la configuration la plus rentable et \u00e9volutive.", en: "Choosing a flexographic press depends on many criteria: substrate types, width, number of colors, speed and budget. Our experts analyze your specifications to guide you toward the most profitable and scalable configuration." },
  },
  {
    slug: "flexopartner-2026",
    title: { fr: "FLEXOPARTNER 2026 : performance, innovation et \u00e9changes techniques", en: "FLEXOPARTNER 2026: performance, innovation and technical exchange" },
    category: { fr: "Technique & Innovation", en: "Technique & Innovation" },
    date: "2026-04-14",
    image: IMG.gravure,
    excerpt: { fr: "Retour sur l'\u00e9v\u00e9nement FLEXOPARTNER avec d\u00e9monstrations de machines en direct.", en: "A look back at the FLEXOPARTNER event with live machine demonstrations." },
    body: { fr: "L'\u00e9v\u00e9nement FLEXOPARTNER 2026 a rassembl\u00e9 imprimeurs et fabricants autour de d\u00e9monstrations en conditions r\u00e9elles. Une occasion unique d'\u00e9changer sur les derni\u00e8res innovations et d'\u00e9valuer les performances des machines en production.", en: "The FLEXOPARTNER 2026 event brought together printers and manufacturers around live demonstrations. A unique opportunity to discuss the latest innovations and evaluate machine performance in production." },
  },
  {
    slug: "viscosimetres-fasnacht-s6-vr",
    title: { fr: "3 nouveaux viscosim\u00e8tres FASNACHT S6-VR en production", en: "3 new FASNACHT S6-VR viscometers in production" },
    category: { fr: "Technique & Innovation", en: "Technique & Innovation" },
    date: "2026-03-17",
    image: IMG.cmyk,
    excerpt: { fr: "Installation r\u00e9ussie de trois viscosim\u00e8tres pour un contr\u00f4le d'encre optimal.", en: "Successful installation of three viscometers for optimal ink control." },
    body: { fr: "Nous avons install\u00e9 trois viscosim\u00e8tres FASNACHT S6-VR chez un client, assurant un contr\u00f4le automatique et pr\u00e9cis de la viscosit\u00e9 des encres. R\u00e9sultat : une meilleure constance des couleurs et une r\u00e9duction des rebuts.", en: "We installed three FASNACHT S6-VR viscometers at a customer's site, ensuring automatic and precise ink viscosity control. Result: better color consistency and reduced waste." },
  },
  {
    slug: "perforation-laser-lang",
    title: { fr: "Installation d'un syst\u00e8me de perforation laser LANG LASER en ligne", en: "Installation of a LANG LASER inline perforation system" },
    category: { fr: "Technique & Innovation", en: "Technique & Innovation" },
    date: "2026-03-10",
    image: IMG.rollers,
    excerpt: { fr: "Micro-perforation laser int\u00e9gr\u00e9e directement sur la ligne de production.", en: "Laser micro-perforation integrated directly on the production line." },
    body: { fr: "Le syst\u00e8me LANG LASER a \u00e9t\u00e9 int\u00e9gr\u00e9 en ligne de production pour r\u00e9aliser une micro-perforation pr\u00e9cise \u00e0 haute vitesse. Une solution id\u00e9ale pour les emballages n\u00e9cessitant une respirabilit\u00e9 contr\u00f4l\u00e9e.", en: "The LANG LASER system was integrated inline to achieve precise high-speed micro-perforation. An ideal solution for packaging requiring controlled breathability." },
  },
];

export const partners = [
  "RE S.p.A.", "BFT", "FLEXOWASH", "FASNACHT", "LANG LASER", "MasterClean",
];

export const values = [
  { icon: "Ear", title: { fr: "\u00c9coute", en: "Listening" }, text: { fr: "Comprendre vos besoins avant tout.", en: "Understanding your needs first." } },
  { icon: "Wrench", title: { fr: "Service", en: "Service" }, text: { fr: "Installation, formation, maintenance.", en: "Installation, training, maintenance." } },
  { icon: "ShieldCheck", title: { fr: "Fiabilit\u00e9", en: "Reliability" }, text: { fr: "Des \u00e9quipements europ\u00e9ens \u00e9prouv\u00e9s.", en: "Proven European equipment." } },
  { icon: "Sparkles", title: { fr: "Innovation", en: "Innovation" }, text: { fr: "Les derni\u00e8res technologies d'impression.", en: "The latest printing technologies." } },
];

export const whyChoose = [
  { fr: "Plus de 30 ans d'expertise dans l'impression industrielle", en: "Over 30 years of expertise in industrial printing" },
  { fr: "Partenariats avec les meilleurs fabricants europ\u00e9ens", en: "Partnerships with the best European manufacturers" },
  { fr: "Accompagnement global : conseil, installation, formation, SAV", en: "Global support: consulting, installation, training, after-sales" },
  { fr: "Une \u00e9quipe technique r\u00e9active et disponible", en: "A responsive and available technical team" },
];

export const contactInfo = {
  address: "117 Rue des Saules, 38110 Saint-Jean-de-Soudain",
  phone: "04 74 92 26 70",
  email: "contact@defi-sa.com",
};

export const BROCHURE_URL = "https://defi-sa.com/wp-content/uploads/2026/09/Catalogue-DEFI-2026-mail.pdf";
