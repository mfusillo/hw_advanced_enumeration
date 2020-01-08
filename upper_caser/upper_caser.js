const UpperCaser = function (words) {
  this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
  const uppercasedWords = this.words.map((word) => {
    return word.toUpperCase();
  })
  return uppercasedWords;
};

module.exports = UpperCaser;
