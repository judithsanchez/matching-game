let verbSerPresentSimple = createVerbConjugations(
  "indicative",
  "present simple",
  [
    ["yo", "soy"],
    ["tú", "eres"],
    ["usted", "es"],
    ["élla", "es"],
    ["él", "es"],
    ["nosotras", "somos"],
    ["nosotros", "somos"],
    ["vosotras", "sois"],
    ["vosotros", "sois"],
    ["ustedes", "son"],
    ["éllas", "son"],
    ["éllos", "son"],
  ]
);

let verbSerPreterite = createVerbConjugations("indicative", "present simple", [
  ["yo", "fui"],
  ["tú", "fuiste"],
  ["usted", "fue"],
  ["élla", "fue"],
  ["él", "fue"],
  ["nosotras", "fuimos"],
  ["nosotros", "fuimos"],
  ["vosotras", "fuisteis"],
  ["vosotros", "fuisteis"],
  ["ustedes", "fueron"],
  ["éllas", "fueron"],
  ["éllos", "fueron"],
]);

let verbSerImperfect = createVerbConjugations("indicative", "present simple", [
  ["yo", "era"],
  ["tú", "eras"],
  ["usted", "era"],
  ["élla", "era"],
  ["él", "era"],
  ["nosotras", "éramos"],
  ["nosotros", "éramos"],
  ["vosotras", "érais"],
  ["vosotros", "érais"],
  ["ustedes", "eran"],
  ["éllas", "eran"],
  ["éllos", "eran"],
]);

let verbSerFutureSimple = createVerbConjugations(
  "indicative",
  "futúre simple",
  [
    ["yo", "seré"],
    ["tú", "serás"],
    ["usted", "será"],
    ["élla", "será"],
    ["él", "eserára"],
    ["nosotras", "seremos"],
    ["nosotros", "seremos"],
    ["vosotras", "sereis"],
    ["vosotros", "sereis"],
    ["ustedes", "serán"],
    ["éllas", "serán"],
    ["éllos", "serán"],
  ]
);

const verbSer = new Verb({
  verbSpanish: "ser",
  verbEnglish: "to be",
  isTransitive: false,
  isRegular: false,
  isStemChanging: false,
  hasIrregularSpelling: true,
  isReflexive: false,
  presentParticiple: "siendo",
  pastParticiple: "sido",
  conjugations: {
    verbSerPresentSimple,
    verbSerPreterite,
    verbSerImperfect,
    verbSerFutureSimple,
  },
  sentences: ["yo soy médico", "ser o no ser, ese es el dilema"],
});
