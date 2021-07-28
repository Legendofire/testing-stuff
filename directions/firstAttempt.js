const dirReduc = arr => {
  const redundants = [
    ['NORTH', 'SOUTH'],
    ['SOUTH', 'NORTH'],
    ['WEST', 'EAST'],
    ['EAST', 'WEST'],
  ]

  const redundant1 = ['NORTH', 'SOUTH'],
    redundant2 = ['SOUTH', 'NORTH'],
    redundant3 = ['WEST', 'EAST'],
    redundant4 = ['EAST', 'WEST']

  let splitArray = []
  for (let i = 0; i < arr.length; i += 2) {
    splitArray.push(arr.slice(i, i + 2))
  } // this splits the input array into an array of arrays every two indexes

  let finalArray = []

  for (let i = 0; i < splitArray.length; i++) {
    // this iterates through the redundants array to check if redundants[i] is found in splitArray
    splitArray[i] != redundant1 ? finalArray.push(splitArray[i]) : false
  }
  return finalArray
}

// Here some other attempts that didn't work:

//     const arrMinusfirstRedundants = arr.filter(redundant =>
//       arr.includes(redundant)
//     )
//     return arrMinusfirstRedundants
//   }

// for (let i = 0; i < splitArray.length; i++) {
//     for (let j = 0; j < redundants.length; j++) {
//splitArray[1] + ' ' + redundants[1]
//splitArray[0].match(redundants[0]) ? true : false

console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST']))
console.log(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
)
