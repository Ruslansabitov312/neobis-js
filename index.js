function isUpperCase(str) {
  return str[0] === str[0].toUpperCase() && str[0] != str[0].toLowerCase()
    ? `String's first character is uppercase`
    : `String's first character is not uppercase`
}

console.log(isUpperCase('Hello'))
console.log(isUpperCase('world'))

// Метод toLowerCase() возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр.
// Метод toLowerCase() возвращает значение строки, преобразованное в нижний регистр.
// Метод toLowerCase() не изменяет значение самой строки.

// Метод toUpperCase() возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр.
// Метод toUpperCase() возвращает значение строки, преобразованное в верхний регистр.
// Метод toUpperCase() не изменяет значение самой строки.
