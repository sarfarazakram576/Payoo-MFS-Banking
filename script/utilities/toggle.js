document.getElementById("add-money-section").style.display = "none";
document.getElementById("cashout-section").style.display = "none";
document.getElementById("transfer-section").style.display = "none";
document.getElementById("get-bonus-section").style.display = "none";
document.getElementById("pay-bill-section").style.display = "none";
document.getElementById("transaction-section").style.display = "none";

//  for add money
document.getElementById("add-money").addEventListener("click", function () {
    handleToggle('add-money-section', 'block');
    handleToggle('cashout-section', 'none');
    handleToggle('transfer-section', 'none');
    handleToggle('get-bonus-section', 'none');
    handleToggle('pay-bill-section', 'none');
    handleToggle('transaction-section', 'none');
  });

  //  for cashout
document.getElementById("cashout").addEventListener("click", function () {
    handleToggle('add-money-section', 'none');
    handleToggle('cashout-section', 'block');
    handleToggle('transfer-section', 'none');
    handleToggle('get-bonus-section', 'none');
    handleToggle('pay-bill-section', 'none');
    handleToggle('transaction-section', 'none');
})

//  for transfer
document.getElementById("transfer-money").addEventListener("click", function () {
    handleToggle('add-money-section', 'none');
    handleToggle('cashout-section', 'none');
    handleToggle('transfer-section', 'block');
    handleToggle('get-bonus-section', 'none');
    handleToggle('pay-bill-section', 'none');
    handleToggle('transaction-section', 'none');
})

//  for bonus
document.getElementById("get-bonus").addEventListener("click", function () {
    handleToggle('add-money-section', 'none');
    handleToggle('cashout-section', 'none');
    handleToggle('transfer-section', 'none');
    handleToggle('get-bonus-section', 'block');
    handleToggle('pay-bill-section', 'none');
    handleToggle('transaction-section', 'none');
})

//  for pay bill
document.getElementById("pay-bill").addEventListener("click", function () {
    handleToggle('add-money-section', 'none');
    handleToggle('cashout-section', 'none');
    handleToggle('transfer-section', 'none');
    handleToggle('get-bonus-section', 'none');
    handleToggle('pay-bill-section', 'block');
    handleToggle('transaction-section', 'none');

})

//  for transactions
document.getElementById("transactions").addEventListener("click", function () {
    handleToggle('add-money-section', 'none');
    handleToggle('cashout-section', 'none');
    handleToggle('transfer-section', 'none');
    handleToggle('get-bonus-section', 'none');
    handleToggle('pay-bill-section', 'none');
    handleToggle('transaction-section', 'block');
  });

