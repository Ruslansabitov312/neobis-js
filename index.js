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
