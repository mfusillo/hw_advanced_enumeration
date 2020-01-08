const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().replace(/[^a-zA-Z]/g, "");
}

PangramFinder.prototype.isPangram = function () {
  // for(let i = 0; i < this.alphabet.length; i++){
  //   return this.phrase.indexOf(this.alphabet[i]) !== -1
  // }

  return this.alphabet.every((letter) => {
    return this.phrase.indexOf(letter) !== -1
  })
};

module.exports = PangramFinder;
