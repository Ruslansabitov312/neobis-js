function getMonthName(date) {
  monthList = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ]
  return monthList[date.getMonth()]
}

console.log(getMonthName(new Date('01/11/2009')))
console.log(getMonthName(new Date('12/13/2014')))


// Метод getMonth() возвращает месяц указанной даты по местному времени, нумерация месяцев начинается с нуля для первого месяца в году.
