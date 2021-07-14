const { CLIENT_RENEG_LIMIT } = require('tls')

console.log('HELLO, WORLD')

// const cc = 123

// const isNumber = Number(cc) ? 'it is a number' : 'it is NOT a number'

// console.log(isNumber)

const maskify = creditCard => {
  const isNumber = Number(creditCard)
  const regex = /\d/

  //   console.log(isNumber)
  //   console.log(isNumber.toString().length)

  if (
    (isNumber && isNumber.toString().length < 6) ||
    creditCard === '' ||
    !regex.test(creditCard)
    // if:
    // the argument is a number but inferior to six digits ---> return the argument as is
    // OR the argument is an empty string ---> return an empty string
    // OR the argument is a string and doesn't contain any numbers --> return the argument as is
  ) {
    console.log(
      'number && >6 OR empty string OR string with no numbers: ' + creditCard
    )
    //console.log('CHECK IF NUMBER: ' + Number(creditCard)) //&& creditCard.toString().length < 6)
    //console.log('')
  } else if (regex.test(creditCard)) {
    const creditCardArray = creditCard.split('')
    //if the argument is a string that contains numbers
    console.log('AINDA FALTA DEFINIR ESTE')
  } else {
    for (let i = 0; i < creditCardArray.length; i++) {
      //creditCardArray[i] === '-' ? creditCardArray.splice(i, 1) : null
      //console.log(creditCardArray[(1, creditCardArray.length - 5)])

      //   if (
      //     creditCardArray[i] === '-' ||
      //     creditCardArray[0] ||
      //     creditCardArray[i] > creditCardArray.length - 5
      //   ) {
      //     continue
      //   } else {
      //     creditCardArray[i] = '#'
      //   }

      return creditCardArray
    }
    // creditCardArray.forEach(i => {
    //})

    console.log('ARRAY AFTER SPLICE:' + creditCardArray)
  }

  // check for "-" inside the array and if there is one, remove it from the array

  //   return

  //

  //console.log('string that contains numbers: ' + creditCardArray)
}
//else {
//if (creditCard === '') console.log(creditCard)

//   if (isNumber.length < 6) {
//     console.log(creditCard)
//   } else {
//     console.log('Bigger than six')
//   }

//console.log(maskify('12345'))
//maskify(12345)
//maskify('123456')
//maskify('1234567')
//maskify('')
//maskify('raquel')
maskify('ola123raquel')
maskify('4556-3646-0793-5616')
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
//                                                                  return)
