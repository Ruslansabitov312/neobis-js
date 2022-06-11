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
