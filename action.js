document.getElementById('calculate').addEventListener('click', function () {

    const totalIncome = document.getElementById('income').value;
    const foodCost = document.getElementById('food-cost').value;
    const rentCost = document.getElementById('rent-cost').value;
    const clothesCost = document.getElementById('clothes-cost').value;
    const totalExpenses = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothesCost);
    const remaingBalance = parseInt(totalIncome) - totalExpenses;

    const myTotalExpenses = document.getElementById('Total-Expenses');
    myTotalExpenses.innerText=totalExpenses
    const remaingMyBalance = document.getElementById('balance');
    remaingMyBalance.innerText=remaingBalance;
    console.log(totalIncome, foodCost, rentCost, clothesCost, totalExpenses, remaingBalance , myTotalExpenses.innerText , remaingMyBalance.innerText);
})


document.getElementById('saving-calculator').addEventListener('click' , function () {
    const remaingMyBalanceString = document.getElementById('balance').innerText;
    const remaingMyBalance= parseFloat(remaingMyBalanceString);

    const parsentage=document.getElementById('parsentage-fild').value;
    const parsentageValue=parseFloat(parsentage);

    const savingAmount= (parsentageValue / 100) * remaingMyBalance ;

    const atlastSaving=document.getElementById('at-last-saving-amount');
    atlastSaving.innerText=savingAmount;

    const currentBalance= remaingMyBalance - savingAmount;
    const lastBanalce=document.getElementById('last-balance');
    lastBanalce.innerText=currentBalance;
   
})