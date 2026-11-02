/* =====================================================
   DONNÉES DE LA CHASSE AU TRÉSOR – Guadeloupe (Grande-Terre)
   Parcours de formation France Travail.
   Tout ce qui se modifie (lieu de rendez-vous, organismes, énigmes,
   réponses acceptées, durée) est regroupé dans ce fichier.
   ===================================================== */

/* Point de ralliement : laisser vide pour n'afficher qu'un message générique.
   Exemple : "Agence France Travail de Pointe-à-Pitre – 9h00" */
const RALLIEMENT = "";

/* Adresse qui reçoit le questionnaire de satisfaction (à renseigner). */
const CONTACT_EMAIL = "";

/* Durée du parcours en minutes. */
const DUREE_MINUTES = 90;

/* Carte : Grande-Terre ouest (Pointe-à-Pitre / Les Abymes). */
const MAP = {
  center: [16.2550, -61.5200], zoom: 12, minZoom: 11, maxZoom: 17, stopZoom: 14,
  bounds: [[16.10, -61.80], [16.40, -61.30]]
};

/* Textes de mission (organismes de formation). */
const MISSION_CLUE  = "<b>Ta mission :</b> rends-toi à cet organisme, présente-toi et <b>dépose ton CV</b>. Renseigne-toi sur les formations proposées : l'échange avec l'équipe t'aide à résoudre l'énigme et à débloquer l'étape suivante.";
const MISSION_MODAL = "Dépose ton CV dans l'organisme et échange avec l'équipe pour trouver la réponse.";

/* Médias (HD) : à déposer dans le dossier media/ à côté des pages.
     media/accueil.jpg          photo de la page d'accueil   (ou media/guadeloupe.mp4 pour une vidéo)
     media/galerie-1.jpg … 3    photos de la galerie
     media/<id>.jpg / <id>.mp4  photo ou vidéo de chaque organisme (ids ci-dessous)
   Sans fichier, un visuel aux couleurs France Travail s'affiche. */

/* Les organismes. Les épingles sont indicatives (centre de la commune) :
   l'adresse exacte est toujours affichée à côté. */
const STOPS = {
  ifacom: {
    id: "ifacom", name: "IFACOM Formation",
    coords: [16.2400, -61.5345],
    address: "60-70 quai Ferdinand de Lesseps, Centre Saint John Perse, 97110 Pointe-à-Pitre"
  },
  cci: {
    id: "cci", name: "CCI des Îles de Guadeloupe",
    coords: [16.2413, -61.5325],
    address: "Rue Félix Eboué, 97159 Pointe-à-Pitre"
  },
  greta: {
    id: "greta", name: "GRETA Grande-Terre",
    coords: [16.2700, -61.5030],
    address: "Résidence Les Cannelières, Morne l'Épingle, 97176 Les Abymes",
    website: "https://www.gretagrandeterre.fr/"
  },
  cfapag: {
    id: "cfapag", name: "CFA polyvalent de l'Académie de la Guadeloupe",
    coords: [16.2685, -61.5050],
    address: "Résidence Les Cannelières, Providence, 97139 Les Abymes"
  }
};

/* Le parcours (un seul). accept = réponses acceptées
   (accents, majuscules, articles et tirets ignorés). */
const PARCOURS = {
  1: {
    title: "Parcours de formation",
    steps: [
      { stop: "ifacom", q: "Quel est le nom amérindien de la Guadeloupe, qui signifie « l'île aux belles eaux » ?",
        accept: ["karukera"], hint: "Il commence par un K et se prononce « ka-ru-ké-ra »." },
      { stop: "cci",    q: "Quel sandwich frit est la grande spécialité de street-food de la Guadeloupe ?",
        accept: ["bokit", "le bokit"], hint: "C'est un pain frit garni de poulet, de morue ou de jambon." },
      { stop: "greta",  q: "Comment s'appelle le tambour emblématique du gwoka ?",
        accept: ["ka", "le ka", "tambou ka", "tambour ka"], hint: "Son nom tient en deux lettres." },
      { stop: "cfapag", q: "Quelle plante, très cultivée en Guadeloupe, sert à fabriquer le rhum agricole ?",
        accept: ["canne a sucre", "la canne a sucre", "canne"], hint: "Elle pousse en grandes tiges et donne du sucre et du rhum." }
    ]
  }
};
