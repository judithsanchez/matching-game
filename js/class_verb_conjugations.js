class VerbConjugations {
  constructor(mood, tense, pronoun, conjugation) {
    this.mood = mood;
    this.tense = tense;
    this.pronoun = pronoun;
    this.conjugation = conjugation;
  }
}

function createVerbConjugations(mood, tense, pronounConjugationPairs) {
  return pronounConjugationPairs.map(function (pair) {
    return new VerbConjugations(mood, tense, pair[0], pair[1]);
  });
}
