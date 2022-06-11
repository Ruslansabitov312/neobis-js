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

// replacedNode = parentNode.replaceChild(newChild, oldChild)

// newChild элемент на который будет заменён oldChild. В случает если он уже есть в DOM, то сначала он будет удалён.

// oldChild элемент который будет заменён.

// replacedNode заменённый элемент. Тоже самое что и oldChild.

// Пример:
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// Создаём новый пустой элемент
// without an ID, any attributes, or any content
// var sp1 = document.createElement("span");

// Присваиваем ему id 'newSpan'
//sp1.setAttribute("id", "newSpan");

// Создаём строку.
// var sp1_content = document.createTextNode("new replacement span element.");

// Добавляем контент в созданный нами узел
// sp1.appendChild(sp1_content);

// создаём ссылку на существующий элемент который будем заменять
// var sp2 = document.getElementById("childSpan");
// var parentDiv = sp2.parentNode;

// заменяем существующий элемент sp2 на созданный нами sp1
// parentDiv.replaceChild(sp1, sp2);

// Результат:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>
