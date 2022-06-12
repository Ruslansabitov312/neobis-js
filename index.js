// task 1
function drawSmile() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  //arc(x,y,r,sAngle,eAngle,counterclockwise);
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // Outer circle
  ctx.moveTo(110, 75)
  ctx.arc(75, 75, 35, 0, Math.PI, false) // Mouth (clockwise)
  ctx.moveTo(65, 65)
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // Left eye
  ctx.moveTo(95, 65)
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // Right eye
  ctx.stroke()
}

// task2

function pushToOl() {
  const tasks = [
    'Buy lemonade',
    'Make toasts',
    'Repair car',
    'Play games',
    'Pet a cat',
  ]

  const ol = document.getElementById('todo-list')

  for (let i = 0; i < tasks.length; i++) {
    ol.innerHTML += `<li class='task'>${tasks[i]}</li>`
  }
  console.log(ol)
}

// task 3

function addHr() {
  for (let p of document.querySelectorAll('p'))
    p.after(document.createElement('hr'))
}

// task 4

function fix() {
  const end = document.getElementById('string-6').childNodes[0].nodeValue
  document.getElementById('string-6').innerHTML =
    document.getElementById('string-1').childNodes[0].nodeValue
  document.getElementById('string-1').innerHTML =
    document.getElementById('string-3').childNodes[0].nodeValue
  document.getElementById('string-3').innerHTML =
    document.getElementById('string-2').childNodes[0].nodeValue
  document.getElementById('string-2').innerHTML =
    document.getElementById('string-5').childNodes[0].nodeValue
  document.getElementById('string-5').innerHTML =
    document.getElementById('string-4').childNodes[0].nodeValue
  document.getElementById('string-4').innerHTML = end
}

// task 5

function removeAndReplace() {
  const cartItems = document.getElementById('cart-items') //получаем род.див карт айтем
  cartItems.children[1].remove() //удаляем второго ребенка

  const newChild = document.createElement('div') //создаем новый див
  newChild.setAttribute('class', 'item') //устанавливаем класс 'item'
  const newChildContent = document.createTextNode('Canned Fish ') //создаем ноду(значение)
  newChild.appendChild(newChildContent) //ньючайлд с контентом

  const span = document.createElement('span')
  span.setAttribute('class', 'qty')
  const spanContent = document.createTextNode('x 4')
  span.appendChild(spanContent) //спан с контентом

  newChild.appendChild(span) //итоговый ньючайлд с готовым спаном внутри
  //то есть: с 5 по 15стр = это и есть новый айтем на которого будем заменять старый

  const oldChild = cartItems.children[3] //получаем 4ый ребенок(по индексу 3)
  const parentDiv = oldChild.parentNode //parentDiv === cartItems

  parentDiv.replaceChild(newChild, oldChild)
}

// task 6

function setColor() {
  const nodeList = document.querySelectorAll('.element')
  for (let i = 0; i < nodeList.length; i++) {
    i < 3
      ? (nodeList[i].style.color = 'red')
      : (nodeList[i].style.color = 'green')
  }
}

// task 7

function addTasks() {
  const content = document.getElementById('content')
  const ul = document.createElement('ul')
  content.appendChild(ul)

  while (true) {
    const newTask = prompt('Введите текст для пункта списка', '')

    if (typeof newTask === null || newTask.length === 0) {
      break
    }

    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newTask))
    ul.appendChild(li)
  }
}

// task 8

function largeNum() {
  let num1, num2
  num1 = window.prompt(`Введите первое число: `)
  num2 = window.prompt(`Введите второе число: `)
                                                  
  if (parseInt(num1) > parseInt(num2)) { 
    window.alert(`Число ${num1} больше числа ${num2}`)
    } else if (parseInt(num2) > parseInt(num1)) {
      window.alert(`Число ${num2} больше числа ${num1}`)
    } else {
      window.alert(`Введенные числа равны`)
    }
}