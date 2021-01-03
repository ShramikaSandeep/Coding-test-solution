/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution (pageNumber, itemsPerPage, pageData) {
  if (pageNumber <= 0) { // For negative page number and page 0, show items from first index to number of items to be displayed.
    return pageData.slice(0, (itemsPerPage))
  }
  if (Math.ceil(pageData.length / itemsPerPage) < pageNumber) { // When page number is out of boundary items return null.
    return null
  }
  return pageData.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage)// Return items based on pagenumber and items per page.
}

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

module.exports = { solution, data }
