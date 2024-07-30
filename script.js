function calculateMaturityAmount(){
    // get input values from the form elements
    const principle= parseFloat(document.getElementById('principle').value);
    const intersrate= parseFloat(document.getElementById('interestRate').value);
    const tenure= parseFloat(document.getElementById('tenure').value);
    // perform the calculation
    const maturityAmount = principle +(principle * intersrate * tenure)/100;
    // Display the result

    document.getElementById('Result').innerText = `MaturityAmount : ${maturityAmount.toFixed(2)}`;


}

//attach the event listener to the calculate button
document.getElementById('CalculatorBtn').addEventListener('click',calculateMaturityAmount);