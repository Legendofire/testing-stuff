console.log('HELLO, WORLD')

const maskify = creditCard => {
  const creditCardArray = creditCard.toString().split('') // turning the entered argument into an array

  // auxiliary function to be called inside the second function
  // this function masks the argument when it is a number with length equal or superior to 6
  const maskNumber = creditCard => {
    const firstDigit = creditCardArray[0] // determines the first digit that is meant to be returned as is
    const arrMinusFirstDigit = creditCardArray.slice(1) // determines the array minus the first index
    const lastFourDigits = arrMinusFirstDigit.slice(
      arrMinusFirstDigit.length - 4
    ) // determines the last four digits that also are to not be masked
    const digitsToMask = arrMinusFirstDigit.slice(
      0,
      arrMinusFirstDigit.length - 4
    ) // returns an array with the digits to be replaced by "#"
    const maskedDigits = digitsToMask.map(digit => '#') // replaces the intended digits with "#"
    const maskedCreditCardArray = []
    maskedCreditCardArray.push(
      firstDigit,
      maskedDigits.join(''),
      lastFourDigits.join('')
    )
    maskedCreditCardStr = maskedCreditCardArray.join('') // pushes first digit, masked digits and final four digits together in a string for the final result
    //return maskedCreditCardStr
    console.log(maskedCreditCardStr)
  }

  // this function masks the argument when it is a string that includes numbers
  const maskStr = creditCard => {
    const firstChar = creditCardArray[0] // determines the first digit that is meant to be returned as is
    const arrMinusFirstChar = creditCardArray.slice(1) // determines the array minus the first index
    const lastFourChar = arrMinusFirstChar.slice(arrMinusFirstChar.length - 4) // determines the last four digits that also are to not be masked
    const charToMask = arrMinusFirstChar.slice(0, arrMinusFirstChar.length - 4)
    let maskedChar = ''
    console.log('TO MASK: ' + charToMask)
    // using a for loop to determine which characters are numbers and should be masked
    for (let i = 0; i <= charToMask; i++) {
      maskedChar = Number(charToMask[i]) ? (charToMask[i] = '#') : null
      return maskedChar
    }
    console.log(maskedChar)
  }
  // function that includes other possible scenarios and will be called in the main function
  const maskStrEtc = creditCard => {
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
      // IF the argument is a string that contains numbers (string without numbers already covered in previous condition)
      maskStr(creditCard)
    }

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
    //     creditCardArray[i] = '#'
    //   }
    // console.log(creditCardArray[i])
    // return

    //console.log("RESULTADO: " + creditCardArray[i])

    // } else {|| regex.test(creditCard))

    //   else
    //   console.log ("Invalid Entry")

    // }
    // creditCardArray.forEach(i => {
    //})
  }
  maskStrEtc(creditCard)
}
maskify(12345)
maskify('123456')
maskify('1234567')
maskify('')
maskify('raquel')
maskify('A1234567BCDEFG89HI')
maskify('1234-5678-9101-1231')
maskify('9876543298765432')
maskify(1234567891011231)
//maskify('ABCD-EFGH-IJKLM-NOPQ')

//     const creditCardArray = creditCard.split("")
// for (let i=1
//here, I start i at 1 because the first index of the array is not to be changed in any scenario

//  if(!(creditCard.includes(Number)))) || (creditCard.length<6) {
//    return creditCard
//        } else {

//      const maskedCreditCardArray = creditCardArray.map(singleDigit =>)

//                creditCardArray

//                [1]
//          arr.length-4
