/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i) // Get the character in the string at index i.
    if (str.indexOf(c) === i && str.indexOf(c, i + 1) === -1) {
      return c // Return the first non repeating character.
    }
  }
  return null
}

module.exports = solution
