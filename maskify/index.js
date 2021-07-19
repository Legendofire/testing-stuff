const maskify = creditCard => {
  const creditCardArray = creditCard.toString().split('')
  // turning the entered argument into an array

  // auxiliary function to be called inside the second function
  // this function masks the argument when it is a number with length equal or superior to 6
  const maskNumber = creditCard => {
    let maskedCreditCardArray = []
    const firstDigit = creditCardArray[0]
    // determines the first digit that is meant to be returned as is
    const arrMinusFirstDigit = creditCardArray.slice(1)
    // determines the array minus the first index
    const lastFourDigits = arrMinusFirstDigit.slice(
      arrMinusFirstDigit.length - 4
    ) // determines the last four digits that also are to not be masked
    const digitsToMask = arrMinusFirstDigit.slice(
      0,
      arrMinusFirstDigit.length - 4
    ) // returns an array with the digits to be replaced by "#"
    const maskedDigits = digitsToMask.map(digit => '#')
    // replaces the intended digits with "#"
    maskedCreditCardArray.push(
      firstDigit,
      maskedDigits.join(''),
      lastFourDigits.join('')
    )
    // pushes first digit, masked digits and final four digits together
    maskedCreditCardStr = maskedCreditCardArray.join('')
    //turns the result array into a string
    console.log(maskedCreditCardStr)
  }

  // this function masks the argument when it is a string that includes numbers
  const maskStr = creditCard => {
    const creditCardArray = creditCard.toString().split('')
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

    console.log(maskedCreditCardStr)
  }

  // function that includes other possible scenarios and will be called in the main function
  const maskEtc = creditCard => {
    const isNumber = Number(creditCard)
    const regex = /\d/

    if (
      /// IF the argument is a number but inferior to six digits OR is an empty string OR is a string without any numbers --> return the argument as is
      (isNumber && isNumber.toString().length < 6) ||
      creditCard === '' ||
      !regex.test(creditCard)
    ) {
      console.log(creditCard)
    } else if (isNumber) {
      // IF the argument is a number with length equal or superior to 6
      maskNumber(creditCard)
    } else if (!isNumber) {
      maskStr(creditCard)
    } else {
      return `Invalid entry`
    }
  }
  maskEtc(creditCard)
}
maskify(12345)
maskify('123456')
maskify('1234567')
maskify('')
maskify('Skippy')
maskify('64607935616')
maskify('9876543298765432')
maskify(1234567891011231)
maskify('ABCD-EFGH-IJKLM-NOPQ')
maskify('A1234567BCDEFG89HI')
maskify('1234-5678-9101-1231') // couldn't find a solution for this case

// OTHER ATTEMPTS: here is some logic I tried but couldn't make work

// for (let i = 0; i < creditCardArray.length; i++) {
// // creditCardArray[i] === '-' ? creditCardArray.splice(i, 1) : null
// // console.log(creditCardArray[(1, creditCardArray.length - 5)])

//   if (
//     creditCardArray[i] === '-' ||
//     creditCardArray[0] ||
//     creditCardArray[i] > creditCardArray.length - 5
//   ) {
//     continue
//   } else {
//
// (....)
// }
