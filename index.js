function addHr() {
  for (let p of document.querySelectorAll('p'))
    p.after(document.createElement('hr'))
}
