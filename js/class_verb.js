class Verb {
  constructor({
    verbSpanish,
    verbEnglish,
    isTransitive,
    isRegular,
    isStemChanging,
    hasIrregularSpelling,
    verbIllustration,
    presentParticiple,
    pastParticiple,
    conjugations,
  }) {
    this.verbSpanish = verbSpanish;
    this.verbEnglish = verbEnglish;

    this.isTransitive = isTransitive;
    this.isRegular = isRegular;

    this.stem = {
      stem: this.get_stem(this.verbSpanish),
      isStemChanging: isStemChanging,
      hasIrregularSpelling: hasIrregularSpelling,
    };

    this.ending = this.get_ending(this.verbSpanish);

    this.verbIllustration = verbIllustration;

    this.presentParticiple = presentParticiple;
    this.pastParticiple = pastParticiple;

    this.conjugations = conjugations;
  }

  get_stem(string) {
    string.length > 3 ? string.substr(0, string.length - 2) : undefined;
  }

  get_ending(string) {
    string.length > 3 ? string.substring(string.length - 2) : undefined;
  }
}
