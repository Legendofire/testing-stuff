// var a = [2, 4, 10]
var a = [
  [1, 3],
  [2, 4],
  [10, 11],
]
// var b = [1, 4]
var b = [
  [1, 3],
  [10, 12],
  [4, 5],
]

var newArray = []

for (var i = 0; i < a.length; i++) {
  // we want to know if a[i] is found in b
  var match = false // we haven't found it yet
  for (var j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      // we have found a[i] in b, so we can stop searching
      match = true
    }
    // if we never find a[i] in b, the for loop will simply end,
    // and match will remain false
  }
  // add a[i] to newArray only if we didn't find a match.
  if (!match) {
    newArray.push(a[i])
  }
}
console.log(newArray)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
const otherWords = ['afaf', 'limiasf', 'alkjfs', 'exuberant', 'ble', 'bla']

for (let i = 0; i < otherWords.length; i++) {
  //const result = words.filter(word => word.length > 6);
  //const result = words.filter(word => word.includes('lit'))
  const result = words.filter(word => otherWords[i] == word)
  return
}
console.log(result)
// expected output: Array ["exuberant", "destruction", "present"]
