const maskify = creditCard => {
    const creditCardArray = creditCard.toString().split('')
    const isNumber = Number(creditCard)

    // auxiliary function to be called inside the second function
  // this function masks the argument when it is a number with length equal or superior to 6
  const maskCreditCard = creditCard => {
    let maskedCreditCardArray = []
    const firstIndex = creditCardArray[0]
    // determines the first digit that is meant to be returned as is
    const arrMinusFirstIndex = creditCardArray.slice(1)
    // determines the array minus the first index
    const lastFourIndexes = arrMinusFirstIndex.slice(
      arrMinusFirstIndex.length - 4
    ) // determines the last four Indexes that also are to not be masked
    const IndexesToMask = arrMinusFirstIndex.slice(
      0,
      arrMinusFirstIndex.length - 4
    ) // returns an array with the Indexes to be replaced by "#"




    
    const maskedIndexes = IndexesToMask.map(Index => '#')
    // replaces the intended Indexes with "#"
    maskedCreditCardArray.push(
      firstIndex,
      maskedIndexes.join(''),
      lastFourIndexes.join('')
    )
    // pushes first Index, masked indexes and final four indexes together
    maskedCreditCardStr = maskedCreditCardArray.join('')
    //turns the result array into a string
    console.log('RESULT:' + maskedCreditCardStr)
  }

  const regex = /\d/
  let newString

  if (
    /// IF the argument is a number but inferior to six indexes OR is an empty string OR is a string without any numbers --> return the argument as is
    (isNumber && isNumber.toString().length < 6) ||
    creditCard === '' ||
    !regex.test(creditCard)
  ) {
    console.log(creditCard)
  } else if (isNumber && isNumber.toString().length >= 6) { // IF the argument is a number with length equal or superior to 6
    maskCreditCard()
  } else if (!isNumber) {
    //if the argument is not a number
    newString = creditCard
    console.log(
      'If the argument is not a number but also NOT a string without any numbers' +
        newString
    )
    // maskString(creditCard)
  } else {
    console.log(`Invalid entry`)
  }
  //   const creditCardArray = creditCard.toString().split('')
  // turning the entered argument into an array

    const maskString = creditCard => {
      let numbersToMask = []
      let unmaskedChar = []
      let maskedNumbers = []
      let maskedCreditCardArray = []
      const firstChar = creditCardArray[0]
      // determines the first digit that is meant to be returned as is
      const arrMinusFirstChar = creditCardArray.slice(1)
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

  //     // console.log(maskedCreditCardStr)
  //   }
  //maskString(newString)
}
// this function masks the argument when it is a string that includes numbers

//   // function that includes other possible scenarios and will be called in the main function
//   const maskEtc = creditCard => {
//   }
//   maskEtc(creditCard)
// }
maskify(12345)
console.log('------------------')
maskify('123456')
console.log('------------------')
maskify('1234567')
console.log('------------------')
maskify('')
console.log('------------------')
maskify('Skippy')
console.log('------------------')
maskify('64607935616')
console.log('------------------')
maskify('9876543298765432')
console.log('------------------')
maskify(1234567891011231)
console.log('------------------')
maskify('ABCD-EFGH-IJKLM-NOPQ')
console.log('------------------')
maskify('A1234567BCDEFG89HI')
console.log('------------------')
maskify('1234-5678-9101-1231') // couldn't find a solution for this case

// // OTHER ATTEMPTS: here is some logic I tried but couldn't make work

// // for (let i = 0; i < creditCardArray.length; i++) {
// // // creditCardArray[i] === '-' ? creditCardArray.splice(i, 1) : null
// // // console.log(creditCardArray[(1, creditCardArray.length - 5)])

// //   if (
// //     creditCardArray[i] === '-' ||
// //     creditCardArray[0] ||
// //     creditCardArray[i] > creditCardArray.length - 5
// //   ) {
// //     continue
// //   } else {
// //
// // (....)
// // }
