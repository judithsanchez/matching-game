class Verb {
  constructor({
    verbSpanish,
    verbEnglish,
    isTransitive,
    isRegular,
    isStemChanging,
    isReflexive,
    hasIrregularSpelling,
    verbIllustration,
    presentParticiple,
    pastParticiple,
    conjugations,
    sentences,
    associatedVocabulary,
  }) {
    this.verbSpanish = verbSpanish;
    this.verbEnglish = verbEnglish;

    this.isTransitive = isTransitive;
    this.isRegular = isRegular;

    this.stem = {
      stem: this.get_stem(this.verbSpanish),
      isStemChanging: isStemChanging,
    };

    (this.hasIrregularSpelling = hasIrregularSpelling),
      (this.isReflexive = isReflexive);

    this.ending = this.get_ending(this.verbSpanish);

    this.verbIllustration = verbIllustration;

    this.presentParticiple = presentParticiple;
    this.pastParticiple = pastParticiple;

    this.conjugations = conjugations;

    this.sentences = sentences;

    this.associatedVocabulary = associatedVocabulary;
    // {word: "la luz", url: "www.sdasdas.com"}
  }

  get_stem(string) {
    string.length > 3 ? string.substr(0, string.length - 2) : undefined;
  }

  get_ending(string) {
    string.length > 3 ? string.substring(string.length - 2) : undefined;
  }
}
