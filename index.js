function revNum(num) {
  return Number(String(num).split('').reverse().join(''))
}

console.log(revNum(1234))


// function revStr(str) {
//   const arrStr = str.split(' ')

//   for (let i = 0; i < arrStr.length; i++) {
//     if (arrStr[i].length > 5) {
//       arrStr[i] = arrStr[i].split('').reverse().join('')
//     }
//   }

//   return arrStr.join(' ')
// }

// console.log(revStr('This is Neobis club!'))


// 1. Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.

// 2. Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.

// 3. Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.

// 4. Объект Number является объектом-обёрткой, позволяющей вам работать с числовыми значениями. Объект Number создаётся через конструктор Number().

// 5. Объект String используется, чтобы представить и конструировать последовательность символов.
