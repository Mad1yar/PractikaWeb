var numbers = 10;
numbersToConsole();
function numbersToConsole() {
    console.log("Число - " + numbers);
        numbers++; 
    if (numbers <= 32)
setTimeout(numbersToConsole, 120);
}
