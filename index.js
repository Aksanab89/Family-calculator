const button = document.querySelector(".btn")

button.addEventListener("click", calculateCosts) 


function calculateCosts(e) {
    e.preventDefault();
    const costOfRent = parseFloat (document.querySelector(".rentCost").value);
    const costOfFood = parseFloat (document.querySelector(".foodCost").value);
    const costOfInsurance = parseFloat (document.querySelector(".insuranceCost").value);
    const costOfGas = parseFloat (document.querySelector(".gasCost").value);

    const tips = parseFloat (document.querySelector("#tips").value);


    let Everything = (costOfRent + costOfFood + costOfInsurance + costOfGas)* tips;

    document.querySelector("#WhatYouPay").textContent = Everything;


}
