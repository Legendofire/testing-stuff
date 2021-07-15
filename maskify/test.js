console.log('---REGEX---')

// String with some numbers
const str = 'Hello123World!'

// Regular expression
const regex = /\d/

// Check if string contains numbers
const doesItHaveNumber = regex.test(str)

console.log(doesItHaveNumber) // true

const array = [1, 2, 3, 4, 5, 6, 7]
//console.log(array[1])

// const shorterArray1 = array.splice(1, 3)
// console.log(shorterArray1)

//console.log(array[array.length - 4])

//const shorterArray2 = array.splice(array.length - 4, 4)

//console.log(shorterArray2)

const shorterArray3 = array.splice(1, array.length - 5)
console.log(shorterArray3) // [2, 3]
console.log(array)

const otherArray = [1, 2, '-', 3, 2, '-', 4, 2, '-', 5, 2]
//otherArray.forEach(i => (i === 2 ? otherArray.splice(i, 1) : null))
for (let i = 0; i < otherArray.length; i++) {
  //   if (otherArray[i] === '-') {
  //     otherArray.splice(i, 1)
  //   }

  otherArray[i] === '-' ? otherArray.splice(i, 1) : null
}

//=> [1, 2, 3, 4, 6, 7, 8, 9, 0]

//console.log(otherArray.indexOf(i)) : null))
console.log('AFTER SPLICE: ' + otherArray)

const superArray = [1, 2, '-', 3, 2, '-', 4, 2, '-', 5, 2]

//const newSuperArray =
console.log(
  superArray.forEach(i => {
    //{console.log("index "+i)
    i === '-' ? otherArray.splice(i, 1) : null
  })
) // undefined mas nao percebo porque

//console.log("NEW SUPER ARRAY: "+newSuperArray)

console.log(superArray.length)
console.log('SUPER ARRAY AFTER SPLICE: ' + superArray.length)

const array = 'A1234567BCDEFG89HI'

const maskArray = array => {
  const firstChar = creditCardArray[0] // determines the first digit that is meant to be returned as is
  const arrMinusFirstChar = creditCardArray.slice(1) // determines the array minus the first index
  const lastFourChar = arrMinusFirstChar.slice(arrMinusFirstChar.length - 4) // determines the last four digits that also are to not be masked
  const charToMask = arrMinusFirstChar.slice(0, arrMinusFirstChar.length - 4)
  let maskedChar = ''
}
