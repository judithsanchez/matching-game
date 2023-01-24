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
  presentParticiple: "siendo",
  pastParticiple: "sido",
  conjugations: {
    verbSerPresentSimple,
    verbSerPreterite,
    verbSerImperfect,
    verbSerFutureSimple,
  },
});
