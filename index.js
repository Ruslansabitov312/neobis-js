myColor = ['Red', 'Green', 'White', 'Black']

function commaJoin(arr) {
  return arr.join(',')
}

function plusJoin(arr) {
  return arr.join('+')
}

console.log(commaJoin(myColor))
console.log(plusJoin(myColor))

// Соединение массива четырьмя различными способами:
// Содержимое массива четыре раза объединяются в строку: с использованием разделителя по умолчанию, запятой с пробелом, плюса, окружённого пробелами, и пустой строки.

// console.log(myColor.join())
// console.log(myColor.join(', '))
// console.log(myColor.join(' + '))
// console.log(myColor.join(''))
