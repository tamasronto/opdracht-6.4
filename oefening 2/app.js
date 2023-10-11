function multiplyByFive() {
          
    const randomGetal = Math.floor(Math.random() * 100) + 1;

    const resultaat = randomGetal * 5;

    console.log(`${randomGetal} x 5 = ${resultaat}`);

    const antwoordElement = document.createElement("p");
    antwoordElement.textContent = `${randomGetal} x 5 = ${resultaat}`;
    document.body.appendChild(antwoordElement);
}