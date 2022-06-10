myColor = ["Red", "Green", "White", "Black"]

function myJoin(arr) {
  return arr.join(',')
}

// function myJoin(arr) {
//   return arr.join('+')
// }

console.log(myJoin(myColor))


// Соединение массива четырьмя различными способами:
// Содержимое массива четыре раза объединяются в строку: с использованием разделителя по умолчанию, запятой с пробелом, плюса, окружённого пробелами, и пустой строки.

// console.log(myColor.join())
// console.log(myColor.join(', '))
// console.log(myColor.join(' + '))
// console.log(myColor.join(''))