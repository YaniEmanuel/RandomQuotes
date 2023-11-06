const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

async function getNewQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    
    // Agregamos animaciones para el cambio de cita
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;
    newQuoteButton.style.backgroundColor = "#ccc"; // Cambia el color del botón mientras se carga la cita
    
    setTimeout(() => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `— ${data.author}`;
      
      // Restauramos las animaciones y el color del botón
      quoteText.style.opacity = 1;
      quoteAuthor.style.opacity = 1;
      newQuoteButton.style.backgroundColor = "#333";
    }, 500); // 500 ms de tiempo de espera para las animaciones
  } catch (error) {
    console.error("Error al obtener la cita:", error);
  }
}

newQuoteButton.addEventListener("click", getNewQuote);

// Cargar una cita al iniciar la página
getNewQuote();