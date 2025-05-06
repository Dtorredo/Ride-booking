// Set today's date and current time as default
document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    
    // Set date
    const dateInput = document.getElementById("pickup-date");
    dateInput.valueAsDate = now;
  
    // Set time
    const timeInput = document.getElementById("pickup-time");
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeInput.value = `${hours}:${minutes}`;
  });
  