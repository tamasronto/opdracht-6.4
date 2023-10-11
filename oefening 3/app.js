function calculateMinutes(seconds) {
    const minutes = seconds / 60;
    console.log(`${seconds} seconden is gelijk aan ${minutes} minuten`);
    
    
    const antwoordElement = document.createElement("p");
    antwoordElement.textContent = `${seconds} seconden is gelijk aan ${minutes} minuten`;
    document.body.appendChild(antwoordElement);
}