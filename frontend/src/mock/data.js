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

export const categories = [
  {
    slug: "machines",
    name: { fr: "Machines", en: "Machines" },
    image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a",
    short: {
      fr: "Les principales machines de production pour l'industrie de l'emballage flexible : papier, film, complexes et cartons.",
      en: "The main production machines for the flexible packaging industry: paper, film, laminates and board.",
    },
    products: [
      { name: { fr: "Presse flexographique 8 couleurs", en: "8-color flexographic press" }, image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a", desc: { fr: "Presse CI haute performance pour l'emballage flexible.", en: "High-performance CI press for flexible packaging." } },
      { name: { fr: "Ligne d'h\u00e9liogravure", en: "Rotogravure line" }, image: "https://images.pexels.com/photos/19316517/pexels-photo-19316517.png", desc: { fr: "Solution compl\u00e8te d'impression h\u00e9lio grande vitesse.", en: "Complete high-speed gravure printing solution." } },
      { name: { fr: "Complexeuse sans solvant", en: "Solventless laminator" }, image: "https://images.unsplash.com/photo-1715154470884-1c2be0b0129f", desc: { fr: "Laminage \u00e9cologique pour films complexes.", en: "Eco-friendly lamination for complex films." } },
      { name: { fr: "D\u00e9coupeuse-refendeuse", en: "Slitter rewinder" }, image: "https://images.pexels.com/photos/6620991/pexels-photo-6620991.jpeg", desc: { fr: "Refente pr\u00e9cise et rapide de vos bobines.", en: "Precise and fast slitting of your reels." } },
    ],
  },
  {
    slug: "accessoires",
    name: { fr: "Accessoires", en: "Accessories" },
    image: "https://images.pexels.com/photos/6620991/pexels-photo-6620991.jpeg",
    short: {
      fr: "Une large gamme de machines et \u00e9quipements compl\u00e9mentaires aux lignes de production.",
      en: "A wide range of machines and equipment complementary to production lines.",
    },
    products: [
      { name: { fr: "Viscosim\u00e8tre FASNACHT S6-VR", en: "FASNACHT S6-VR viscometer" }, image: "https://images.pexels.com/photos/6620991/pexels-photo-6620991.jpeg", desc: { fr: "Contr\u00f4le automatique de la viscosit\u00e9 des encres.", en: "Automatic control of ink viscosity." } },
      { name: { fr: "Syst\u00e8me de guidage de bande", en: "Web guiding system" }, image: "https://images.unsplash.com/photo-1715154470884-1c2be0b0129f", desc: { fr: "Positionnement pr\u00e9cis de la bande en production.", en: "Precise web positioning during production." } },
      { name: { fr: "Contr\u00f4leur de tension RE", en: "RE tension controller" }, image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a", desc: { fr: "Gestion optimale de la tension de bande.", en: "Optimal web tension management." } },
      { name: { fr: "Perforation laser LANG", en: "LANG laser perforation" }, image: "https://images.pexels.com/photos/19316517/pexels-photo-19316517.png", desc: { fr: "Micro-perforation laser int\u00e9gr\u00e9e en ligne.", en: "Inline laser micro-perforation." } },
    ],
  },
  {
    slug: "consommables",
    name: { fr: "Consommables", en: "Consumables" },
    image: "https://images.unsplash.com/photo-1715154470884-1c2be0b0129f",
    short: {
      fr: "L'ensemble des principaux produits utilis\u00e9s sur les machines ou accessoires.",
      en: "All the main products used on machines or accessories.",
    },
    products: [
      { name: { fr: "Racles doctor blades", en: "Doctor blades" }, image: "https://images.unsplash.com/photo-1715154470884-1c2be0b0129f", desc: { fr: "Racles acier et composite haute pr\u00e9cision.", en: "High-precision steel and composite blades." } },
      { name: { fr: "Chambre \u00e0 racle BFT Carbon", en: "BFT Carbon doctor chamber" }, image: "https://images.pexels.com/photos/6620991/pexels-photo-6620991.jpeg", desc: { fr: "Chambre fibre de carbone l\u00e9g\u00e8re et stable.", en: "Lightweight, stable carbon-fiber chamber." } },
      { name: { fr: "Manchons & adhesifs", en: "Sleeves & adhesives" }, image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a", desc: { fr: "Manchons flexo et adh\u00e9sifs de montage.", en: "Flexo sleeves and mounting adhesives." } },
      { name: { fr: "Produits de nettoyage anilox", en: "Anilox cleaning products" }, image: "https://images.pexels.com/photos/19316517/pexels-photo-19316517.png", desc: { fr: "Solutions de nettoyage des cylindres anilox.", en: "Anilox roller cleaning solutions." } },
    ],
  },
  {
    slug: "produits-defi",
    name: { fr: "Produits DEFI", en: "DEFI Products" },
    image: "https://images.unsplash.com/photo-1562155695-fb6e1f95fcfd",
    short: {
      fr: "Notre gamme propre comprend le CIC, nettoyage automatique du tambour central, et d'autres innovations.",
      en: "Our own range includes the CIC automatic central drum cleaning system, and other innovations.",
    },
    products: [
      { name: { fr: "CIC \u2013 Nettoyage tambour central", en: "CIC \u2013 Central drum cleaning" }, image: "https://images.unsplash.com/photo-1562155695-fb6e1f95fcfd", desc: { fr: "Nettoyage automatique du tambour central en production.", en: "Automatic central drum cleaning during production." } },
      { name: { fr: "Pompes r\u00e9versibles", en: "Reversible pumps" }, image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a", desc: { fr: "Pompes r\u00e9versibles pour circuits d'encrage.", en: "Reversible pumps for inking circuits." } },
      { name: { fr: "MasterClean", en: "MasterClean" }, image: "https://images.pexels.com/photos/6620991/pexels-photo-6620991.jpeg", desc: { fr: "Nettoyage automatis\u00e9 des \u00e9quipements d'encrage.", en: "Automated cleaning of inking equipment." } },
    ],
  },
  {
    slug: "equipements-re",
    name: { fr: "\u00c9quipements RE", en: "RE Equipment" },
    image: "https://images.pexels.com/photos/19316517/pexels-photo-19316517.png",
    short: {
      fr: "Leader de l'\u00e9quipement pour machines de transformation : freins pneumatiques, cellules de charge, contr\u00f4leurs de tension et guidage de bande.",
      en: "Leader in converting machine equipment: pneumatic brakes, load cells, tension controllers and web guiding.",
    },
    products: [
      { name: { fr: "Freins pneumatiques", en: "Pneumatic brakes" }, image: "https://images.pexels.com/photos/19316517/pexels-photo-19316517.png", desc: { fr: "Freinage pr\u00e9cis et progressif des d\u00e9rouleurs.", en: "Precise and progressive unwinder braking." } },
      { name: { fr: "Cellules de charge", en: "Load cells" }, image: "https://images.unsplash.com/photo-1715154470884-1c2be0b0129f", desc: { fr: "Mesure fiable de la tension de bande.", en: "Reliable web tension measurement." } },
      { name: { fr: "Contr\u00f4leurs de tension", en: "Tension controllers" }, image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a", desc: { fr: "R\u00e9gulation automatique de la tension.", en: "Automatic tension regulation." } },
    ],
  },
];

export const news = [
  {
    slug: "bft-carbon-bft-flexo",
    title: { fr: "BFT Carbon & BFT Flexo : le duo qui r\u00e9invente votre encrage flexo", en: "BFT Carbon & BFT Flexo: the duo reinventing your flexo inking" },
    category: { fr: "Technique & Innovation", en: "Technique & Innovation" },
    date: "2026-05-19",
    image: "https://images.unsplash.com/photo-1715154470884-1c2be0b0129f",
    excerpt: { fr: "D\u00e9couvrez la nouvelle chambre \u00e0 racle en fibre de carbone qui am\u00e9liore la stabilit\u00e9 et la qualit\u00e9 d'impression.", en: "Discover the new carbon-fiber doctor chamber that improves stability and print quality." },
    body: { fr: "La chambre \u00e0 racle BFT Carbon combine l\u00e9g\u00e8ret\u00e9 et rigidit\u00e9 gr\u00e2ce \u00e0 sa structure en fibre de carbone. Associ\u00e9e au syst\u00e8me BFT Flexo, elle garantit un encrage r\u00e9gulier, r\u00e9duit la consommation d'encre et am\u00e9liore la constance des couleurs sur toute la largeur de bande. Un investissement rentable pour les imprimeurs exigeants.", en: "The BFT Carbon doctor chamber combines lightness and rigidity thanks to its carbon-fiber structure. Combined with the BFT Flexo system, it ensures consistent inking, reduces ink consumption and improves color consistency across the entire web width. A profitable investment for demanding printers." },
  },
  {
    slug: "laser-flexowash-anilox",
    title: { fr: "Laser FLEXOWASH : la nouvelle solution de nettoyage des anilox", en: "Laser FLEXOWASH: the new anilox cleaning solution" },
    category: { fr: "Technique & Innovation", en: "Technique & Innovation" },
    date: "2026-05-12",
    image: "https://images.pexels.com/photos/6620991/pexels-photo-6620991.jpeg",
    excerpt: { fr: "Un nettoyage laser \u00e9cologique et sans produit chimique pour restaurer les cylindres anilox.", en: "Eco-friendly, chemical-free laser cleaning to restore anilox rollers." },
    body: { fr: "Le laser FLEXOWASH permet un nettoyage en profondeur des cylindres anilox sans produit chimique ni consommable. Le proc\u00e9d\u00e9 restaure le volume de gravure d'origine et prolonge la dur\u00e9e de vie des anilox, tout en r\u00e9duisant l'impact environnemental de vos ateliers.", en: "The FLEXOWASH laser enables deep cleaning of anilox rollers without chemicals or consumables. The process restores the original engraving volume and extends anilox lifespan, while reducing the environmental impact of your workshops." },
  },
  {
    slug: "impression-flexographique-choix-machines",
    title: { fr: "Impression flexographique : un choix de machines guid\u00e9 par l'expertise", en: "Flexographic printing: a machine choice guided by expertise" },
    category: { fr: "Conseils", en: "Advice" },
    date: "2026-04-21",
    image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a",
    excerpt: { fr: "Comment choisir la presse flexo adapt\u00e9e \u00e0 votre production ? Nos experts vous guident.", en: "How to choose the flexo press suited to your production? Our experts guide you." },
    body: { fr: "Le choix d'une presse flexographique d\u00e9pend de nombreux crit\u00e8res : type de supports, laize, nombre de couleurs, vitesse et budget. Nos experts analysent votre cahier des charges pour vous orienter vers la configuration la plus rentable et \u00e9volutive.", en: "Choosing a flexographic press depends on many criteria: substrate types, width, number of colors, speed and budget. Our experts analyze your specifications to guide you toward the most profitable and scalable configuration." },
  },
  {
    slug: "flexopartner-2026",
    title: { fr: "FLEXOPARTNER 2026 : performance, innovation et \u00e9changes techniques", en: "FLEXOPARTNER 2026: performance, innovation and technical exchange" },
    category: { fr: "Technique & Innovation", en: "Technique & Innovation" },
    date: "2026-04-14",
    image: "https://images.pexels.com/photos/19316517/pexels-photo-19316517.png",
    excerpt: { fr: "Retour sur l'\u00e9v\u00e9nement FLEXOPARTNER avec d\u00e9monstrations de machines en direct.", en: "A look back at the FLEXOPARTNER event with live machine demonstrations." },
    body: { fr: "L'\u00e9v\u00e9nement FLEXOPARTNER 2026 a rassembl\u00e9 imprimeurs et fabricants autour de d\u00e9monstrations en conditions r\u00e9elles. Une occasion unique d'\u00e9changer sur les derni\u00e8res innovations et d'\u00e9valuer les performances des machines en production.", en: "The FLEXOPARTNER 2026 event brought together printers and manufacturers around live demonstrations. A unique opportunity to discuss the latest innovations and evaluate machine performance in production." },
  },
  {
    slug: "viscosimetres-fasnacht-s6-vr",
    title: { fr: "3 nouveaux viscosim\u00e8tres FASNACHT S6-VR en production", en: "3 new FASNACHT S6-VR viscometers in production" },
    category: { fr: "Technique & Innovation", en: "Technique & Innovation" },
    date: "2026-03-17",
    image: "https://images.pexels.com/photos/6620991/pexels-photo-6620991.jpeg",
    excerpt: { fr: "Installation r\u00e9ussie de trois viscosim\u00e8tres pour un contr\u00f4le d'encre optimal.", en: "Successful installation of three viscometers for optimal ink control." },
    body: { fr: "Nous avons install\u00e9 trois viscosim\u00e8tres FASNACHT S6-VR chez un client, assurant un contr\u00f4le automatique et pr\u00e9cis de la viscosit\u00e9 des encres. R\u00e9sultat : une meilleure constance des couleurs et une r\u00e9duction des rebuts.", en: "We installed three FASNACHT S6-VR viscometers at a customer's site, ensuring automatic and precise ink viscosity control. Result: better color consistency and reduced waste." },
  },
  {
    slug: "perforation-laser-lang",
    title: { fr: "Installation d'un syst\u00e8me de perforation laser LANG LASER en ligne", en: "Installation of a LANG LASER inline perforation system" },
    category: { fr: "Technique & Innovation", en: "Technique & Innovation" },
    date: "2026-03-10",
    image: "https://images.unsplash.com/photo-1715154470884-1c2be0b0129f",
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
  address: "Zone Industrielle, 69100 Villeurbanne, France",
  phone: "+33 (0)4 72 00 00 00",
  email: "contact@defi-sa.com",
};

export const BROCHURE_URL = "https://defi-sa.com/wp-content/uploads/2026/09/Catalogue-DEFI-2026-mail.pdf";
