export type NodeState = "done" | "current" | "upcoming";

export const continueLearning = { subject: "Säkerhet", lesson: "Risker i mörker", progress: 68 };

export const parts = [
  { id: 1, title: "Delprov 1", subtitle: "Säkerhet och beteende", progress: 61, subjects: 8, completed: 5 },
  { id: 2, title: "Delprov 2", subtitle: "Lagstiftning", progress: 43, subjects: 6, completed: 2 },
];

export const pathSubjects: { name: string; state: NodeState; progress: number }[] = [
  { name: "Navigering", state: "done", progress: 100 },
  { name: "Körekonomi", state: "done", progress: 100 },
  { name: "Miljö", state: "done", progress: 100 },
  { name: "Säkerhet", state: "current", progress: 38 },
  { name: "Bemötande", state: "upcoming", progress: 10 },
  { name: "Sjukdomar och funktionsnedsättningar", state: "upcoming", progress: 0 },
  { name: "Arbetsmiljö och risk", state: "upcoming", progress: 0 },
  { name: "Fordonskännedom", state: "upcoming", progress: 0 },
];

export const lessons: { title: string; state: NodeState }[] = [
  { title: "Risker i trafiken", state: "done" },
  { title: "Hastighet", state: "done" },
  { title: "Passagerarsäkerhet", state: "done" },
  { title: "Mörkerkörning", state: "current" },
  { title: "Väglag", state: "upcoming" },
  { title: "Olyckor", state: "upcoming" },
  { title: "Trötthet och stress", state: "upcoming" },
  { title: "Nödsituationer", state: "upcoming" },
];

export const chapters = [
  { name: "Navigering", summary: "Kartläsning, GPS och att hitta rätt i staden.", moments: 4, progress: 75, art: "map" },
  { name: "Körekonomi", summary: "Bränsle, slitage och ekonomisk körning.", moments: 5, progress: 40, art: "wheel" },
  { name: "Miljö", summary: "Utsläpp, sparsam körning och miljözoner.", moments: 3, progress: 100, art: "road" },
  { name: "Säkerhet", summary: "Risker, hastighet och passagerarens trygghet.", moments: 8, progress: 38, art: "seatbelt" },
  { name: "Fordonskännedom", summary: "Kontroller, däck, bromsar och lampor.", moments: 6, progress: 0, art: "taxi" },
] as const;

export const practice = [
  { name: "Säkerhet", questions: 20, art: "seatbelt" },
  { name: "Navigering", questions: 15, art: "map" },
  { name: "Bemötande", questions: 15, art: "passenger" },
  { name: "Fordonskännedom", questions: 20, art: "taxi" },
] as const;

export const question = {
  index: 12,
  total: 70,
  time: "38:42",
  prompt: "Du kör i mörker på en landsväg och möter ett fordon. När ska du blända av?",
  options: [
    "När det mötande fordonet blinkar med helljuset",
    "I god tid innan du riskerar att blända den mötande föraren",
    "Först när fordonet är cirka 50 meter bort",
    "Det behövs inte om vägen är bred",
  ],
};

export const result = {
  passed: true,
  score: 52,
  total: 65,
  limit: 48,
  subjects: [
    { name: "Navigering", score: 8, total: 10 },
    { name: "Körekonomi", score: 5, total: 6 },
    { name: "Miljö", score: 4, total: 6 },
    { name: "Säkerhet", score: 9, total: 10 },
    { name: "Bemötande", score: 7, total: 9 },
    { name: "Fordonskännedom", score: 6, total: 9 },
  ],
};

export const history = [
  { title: "Delprov 1", date: "28 sep", score: "52 / 65", passed: true },
  { title: "Delprov 2", date: "24 sep", score: "31 / 45", passed: false },
];
