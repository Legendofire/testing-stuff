console.log('1234-5678-9101-1231')

// this function masks the argument when it is a string that includes numbers
const maskStr = creditCard => {
  const creditCardArray = creditCard.toString().split('')
  let indexToMask = []
  let unmaskedIndex = []
  let maskedIndex = []
  let maskedCreditCardArray = []
  const firstIndex = creditCardArray[0]
  // determines the first digit that is meant to be returned as is
  const arrMinusFirstIndex = creditCardArray.slice(1)
  // determines the array minus the first index
  const lastFourChar = arrMinusFirstChar.slice(arrMinusFirstChar.length - 4)
  // determines the last four digits that also are to not be masked
  const charToMask = arrMinusFirstChar.slice(0, arrMinusFirstChar.length - 4)
  // returns an array with the characters to be replaced by "#" if they are numbers

  for (let i = 0; i < charToMask.length; i++) {
    if (Number(charToMask[i])) {
      numbersToMask.push(charToMask[i])
    } else {
      unmaskedChar.push(charToMask[i])
    }
  }
  maskedNumbers = numbersToMask.map(number => '#')

  maskedCreditCardArray.push(
    firstChar,
    maskedNumbers.join(''),
    unmaskedChar.join(''),
    lastFourChar.join('')
  )
  // pushes first digit, masked digits and final four digits together
  maskedCreditCardStr = maskedCreditCardArray.join('')

  console.log(maskedCreditCardStr)
}

maskStr('A1234567BCDEFG89HI')
maskStr('1234-5678-9101-1231') // couldn't find a solution for this case

function splitArrayIntoChunksOfLen(arr, len) {
  var chunks = [],
    i = 0,
    n = arr.length
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)))
  }
  return chunks
}
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
var alphabetPairs = splitArrayIntoChunksOfLen(alphabet, 2)
console.log(alphabetPairs)
