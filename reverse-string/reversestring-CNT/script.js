const input = document.getElementById("inputText");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("invertirBtn");

input.addEventListener("input", () => {
  const texto = input.value;

  if (texto.length > 3) {
    boton.style.display = "inline-block"; // Mostrar botón
    const invertida = texto.split("").reverse().join("");
    resultado.textContent = invertida;
  } else {
    boton.style.display = "none"; // Ocultar botón
    resultado.textContent = ""; // Limpiar resultado
  }
});