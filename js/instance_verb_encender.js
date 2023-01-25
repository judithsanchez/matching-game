let verbEncenderPresentSimple = createVerbConjugations(
  "indicative",
  "present simple",
  [
    ["yo", "enciendo"],
    ["tú", "enciendes"],
    ["usted", "enciende"],
    ["élla", "enciende"],
    ["él", "enciende"],
    ["nosotras", "encendemos"],
    ["nosotros", "encendemos"],
    ["vosotras", "encendeis"],
    ["vosotros", "encendeis"],
    ["ustedes", "enciende"],
    ["éllas", "enciende"],
    ["éllos", "enciende"],
  ]
);

let verbEncenderPreterite = createVerbConjugations(
  "indicative",
  "present simple",
  [
    ["yo", "encendí"],
    ["tú", "encendiste"],
    ["usted", "encendió"],
    ["élla", "encendió"],
    ["él", "encendió"],
    ["nosotras", "encendimos"],
    ["nosotros", "encendimos"],
    ["vosotras", "encendisteis"],
    ["vosotros", "encendisteis"],
    ["ustedes", "encendieron"],
    ["éllas", "encendieron"],
    ["éllos", "encendieron"],
  ]
);

let verbEncenderImperfect = createVerbConjugations(
  "indicative",
  "present simple",
  [
    ["yo", "encendía"],
    ["tú", "encendías"],
    ["usted", "encendía"],
    ["élla", "encendía"],
    ["él", "encendía"],
    ["nosotras", "encendíamos"],
    ["nosotros", "encendíamos"],
    ["vosotras", "encendíais"],
    ["vosotros", "encendíais"],
    ["ustedes", "encendían"],
    ["éllas", "encendían"],
    ["éllos", "encendían"],
  ]
);

let verbEncenderFutureSimple = createVerbConjugations(
  "indicative",
  "futúre simple",
  [
    ["yo", "encenderé"],
    ["tú", "encenderás"],
    ["usted", "encenderá"],
    ["élla", "encenderá"],
    ["él", "encenderá"],
    ["nosotras", "encenderemos"],
    ["nosotros", "encenderemos"],
    ["vosotras", "encendereis"],
    ["vosotros", "encendereis"],
    ["ustedes", "encenderán"],
    ["éllas", "encenderán"],
    ["éllos", "encenderán"],
  ]
);

const verbEncender = new Verb({
  verbSpanish: "encender",
  verbEnglish: "turn on",
  isTransitive: false,
  isRegular: true,
  isStemChanging: true,
  hasIrregularSpelling: true,
  presentParticiple: "encendiendo",
  pastParticiple: "encendido",
  conjugations: {
    verbEncenderPresentSimple,
    verbEncenderPreterite,
    verbEncenderImperfect,
    verbEncenderFutureSimple,
  },
  verbIllustration:
    "https://bocaditosespanol.com/wp-content/uploads/2023/01/verbs-encender.svg",
  sentences: ["encender la luz", "no enciendas las luz"],
});
