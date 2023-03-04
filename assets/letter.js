const text = "TE AMO \n me encantas, gracias por estar aqui conmigo ya un año como mi novia, pareciera que fue ayer cuando nos acostabamos en el pasto "+
             "bajo el sol, pareciera que fue ayer que corria a la prepa de la emocion  ve verte de nuevo, pareciera que fue ayer cuando jugabamos minecraft "+
             " y te veia juntar florecitas para nuestra casa, pareciera que fue ayer que te vi comer tacos al vapor, pareciera que fue ayer que te vi y me pareciste la mujer mas hermosa del mundo y aun lo eres para mi.";
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