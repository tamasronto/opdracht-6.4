function calculate() {
      
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    const resultaat = num1 + num2;


    console.log(`${num1} + ${num2} = ${resultaat}`);

    const antwoordElement = document.createElement("p");
    antwoordElement.textContent = `${num1} + ${num2} = ${resultaat}`;
    document.body.appendChild(antwoordElement);
}