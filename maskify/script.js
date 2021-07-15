console.log('HELLO, WORLD')

// this function masks the argument when it is a number with length equal or superior to 6
const maskNumber = creditCard => {
  const creditCardArray = creditCard.toString().split('')
  let counter = 0
  //   console.log(maskedArray)
  for (let i = 1; i < creditCardArray.length - 4; i++) {
    const maskedDigitsArray = creditCardArray.map(digit => '#')
    return maskedDigitsArray
    // creditCardArray[i] = '-'
    //   ? console.log(creditCardArray[i])
    //   : console.log('NO HIFEN HERE')
    // && i < creditCardArray.length - 4
    // ) {
    //   counter++
    //   console.log(creditCardArray[i] + counter)
    //   creditCardArray.map(digit => '#')

    // if (
    //   creditCardArray[i] = '-' ||
    //   creditCardArray[0] ||
    //   creditCardArray[i] > creditCardArray.length - 5
    // ) {
    //   continue
    // } else {
    //   const maskedCreditCardArray = creditCardArray.map(digit => '#')
    //   return maskedCreditCardArray
    // }
  }
  //   console.log(maskedDigitsArray)
}

// main function that includes all other possible scenarios
// const maskify = (creditCard) => {
//   const isNumber = Number(creditCard);
//   const regex = /\d/;

//   if (
//     /// IF the argument is a number but inferior to six digits OR is an empty string OR is a string without any numbers --> return the argument as is
//     (isNumber && isNumber.toString().length < 6) ||
//     creditCard === "" ||
//     !regex.test(creditCard)
//   ) {
//     console.log(creditCard);
//   } else if (isNumber) {
//     // IF the argument is a number with length equal or superior to 6
//     maskNumber(creditCard);

// if the argument:
// is a string that contains numbers

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

// check for "-" inside the array and if there is one, remove it from the array

//   return

//

//console.log('string that contains numbers: ' + creditCardArray)

//else {
//if (creditCard === '') console.log(creditCard)

//   if (isNumber.length < 6) {
//     console.log(creditCard)
//   } else {
//     console.log('Bigger than six')
//   }
// maskNumber('1234-5678-9101-1231')

// maskNumber(12345)
// maskNumber('123456')
// maskNumber('1234567')
// maskNumber('')
// maskNumber('raquel')
// maskNumber('9876543298765432')
// maskNumber(1234567891011231)
console.log(maskNumber('A1234567BCDEFG89HI'))
