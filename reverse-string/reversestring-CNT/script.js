function invertirCadena() {
  const input = document.getElementById("inputText").value;
  const invertida = input.split("").reverse().join("");
  document.getElementById("resultado").textContent = invertida;
}
