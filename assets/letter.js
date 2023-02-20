const text = "TE AMO \n me encantas, gracias por estar aqui conmigo ya un año como mi novia, pareciera que fue ayer cuando ";
const delay = 100; // milisegundos

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("letter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, delay);
  }
}

typeWriter();