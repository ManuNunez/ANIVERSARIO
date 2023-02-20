function updateClock() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours().toString().padStart(2, "0");
    let currentMinutes = currentTime.getMinutes().toString().padStart(2, "0");
    let currentSeconds = currentTime.getSeconds().toString().padStart(2, "0");
    let minutesSince = Math.floor((currentTime - new Date("2022-04-12T00:00:00Z")) / 1000 / 60);
  
    let clock = document.querySelector(".clock");
    clock.querySelector(".hours").textContent = currentHours;
    clock.querySelector(".minutes").textContent = currentMinutes;
    clock.querySelector(".seconds").textContent = currentSeconds;
  
    let minutesSinceElement = document.getElementById("minutes-since");
    minutesSinceElement.textContent = `Minutos transcurridos desde el 12 de abril del 2022: ${minutesSince}`;
    loveSince.textContent = `FELICES ${minutesSince} MINUTOS JUNTOS`
  }
  
  setInterval(updateClock, 1000);
  