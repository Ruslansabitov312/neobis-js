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
