// MODIFIEZ CE FICHIER pour les textes, dates, couleurs et énigmes.
window.GAME_CONFIG = {
  supabase: {
    url: "https://gsxmekrgomdgjjoaqzti.supabase.co",
    anonKey: "sb_publishable_3zqiMTveGwi7ktQgdB7orA_x-D2L6UR"
  },
  site: {
    title: "Le Mystère du 2 Novembre",
    subtitle: "Une énigme par jour. Une semaine pour comprendre.",
    startDate: "2026-10-09T08:00:00+02:00",
    revealDate: "2026-10-16T17:00:00+02:00",
    primary: "#ff8a1f",
    secondary: "#6d23ec",
    accent: "#e43581",
    background: "#09070d",
    revealMessage: "La réponse était : Día de los Muertos."
  },
  clues: [
    { date: "2026-10-09", text: "Orange est une belle couleur." },
    { date: "2026-10-10", text: "Mon plus beau jour tient en deux dates : le 1er pour les petits, le 2 pour les grands." },
    { date: "2026-10-11", text: "Les âmes des défunts côtoient celles des vivants" },
    { date: "2026-10-12", text: "Une guitare magique et un voyage interdit chez les morts." },
    { date: "2026-10-13", text: "Je suis inscrit au patrimoine culturel immatériel de l'UNESCO." },
    { date: "2026-10-14", text: "J'apparais dans une scène d'action mythique de James Bond." },
    { date: "2026-10-15", text: "La réponse est dans la date." },
  ],
  labels: [
    { min: 100, label: "Réponse trouvée" }, { min: 95, label: "Fusion" },
    { min: 85, label: "Brûlant" }, { min: 70, label: "Très chaud" },
    { min: 50, label: "Chaud" }, { min: 30, label: "Tiède" },
    { min: 15, label: "Frais" }, { min: 0, label: "Glacial" }
  ]
};
