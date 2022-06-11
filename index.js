function setColor() {
  const nodeList = document.querySelectorAll('.element')
  for (let i = 0; i < nodeList.length; i++) {
    i < 3
      ? (nodeList[i].style.color = 'red')
      : (nodeList[i].style.color = 'green')
  }
}
