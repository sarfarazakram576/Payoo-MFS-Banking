//  for add money
document.getElementById("add-money").addEventListener("click", function () {
  handleToggleColorAndBcStyles("add-money", "#0874F2");
  handleToggleBgStyles("add-money", "#F3F8FE");
  handleToggleFwStyles("add-money-h3", "bold");

  handleToggleColorAndBcStyles("cashout", "");
  handleToggleBgStyles("cashout", "");
  handleToggleFwStyles("cashout-h3", "");

  handleToggleColorAndBcStyles("transfer-money", "");
  handleToggleBgStyles("transfer-money", "");
  handleToggleFwStyles("transfer-money-h3", "");

  handleToggleColorAndBcStyles("get-bonus", "");
  handleToggleBgStyles("get-bonus", "");
  handleToggleFwStyles("get-bonus-h3", "");

  handleToggleColorAndBcStyles("pay-bill", "");
  handleToggleBgStyles("pay-bill", "");
  handleToggleFwStyles("pay-bill-h3", "");

  handleToggleColorAndBcStyles("transactions", "");
  handleToggleBgStyles("transactions", "");
  handleToggleFwStyles("transactions-h3", "");
});

//  for cashout
document.getElementById("cashout").addEventListener("click", function () {
  handleToggleColorAndBcStyles("add-money", "");
  handleToggleBgStyles("add-money", "");
  handleToggleFwStyles("add-money-h3", "");

  handleToggleColorAndBcStyles("cashout", "#0874F2");
  handleToggleBgStyles("cashout", "#F3F8FE");
  handleToggleFwStyles("cashout-h3", "bold");

  handleToggleColorAndBcStyles("transfer-money", "");
  handleToggleBgStyles("transfer-money", "");
  handleToggleFwStyles("transfer-money-h3", "");

  handleToggleColorAndBcStyles("get-bonus", "");
  handleToggleBgStyles("get-bonus", "");
  handleToggleFwStyles("get-bonus-h3", "");

  handleToggleColorAndBcStyles("pay-bill", "");
  handleToggleBgStyles("pay-bill", "");
  handleToggleFwStyles("pay-bill-h3", "");

  handleToggleColorAndBcStyles("transactions", "");
  handleToggleBgStyles("transactions", "");
  handleToggleFwStyles("transactions-h3", "");
});

//  for tranfer
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    handleToggleColorAndBcStyles("add-money", "");
    handleToggleBgStyles("add-money", "");
    handleToggleFwStyles("add-money-h3", "");

    handleToggleColorAndBcStyles("cashout", "");
    handleToggleBgStyles("cashout", "");
    handleToggleFwStyles("cashout-h3", "");

    handleToggleColorAndBcStyles("transfer-money", "#0874F2");
    handleToggleBgStyles("transfer-money", "#F3F8FE");
    handleToggleFwStyles("transfer-money-h3", "bold");

    handleToggleColorAndBcStyles("get-bonus", "");
    handleToggleBgStyles("get-bonus", "");
    handleToggleFwStyles("get-bonus-h3", "");

    handleToggleColorAndBcStyles("pay-bill", "");
    handleToggleBgStyles("pay-bill", "");
    handleToggleFwStyles("pay-bill-h3", "");

    handleToggleColorAndBcStyles("transactions", "");
    handleToggleBgStyles("transactions", "");
    handleToggleFwStyles("transactions-h3", "");
  });

//  for get bonus
document.getElementById("get-bonus").addEventListener("click", function () {
  handleToggleColorAndBcStyles("add-money", "");
  handleToggleBgStyles("add-money", "");
  handleToggleFwStyles("add-money-h3", "");

  handleToggleColorAndBcStyles("cashout", "");
  handleToggleBgStyles("cashout", "");
  handleToggleFwStyles("cashout-h3", "");

  handleToggleColorAndBcStyles("transfer-money", "");
  handleToggleBgStyles("transfer-money", "");
  handleToggleFwStyles("transfer-money-h3", "");

  handleToggleColorAndBcStyles("get-bonus", "#0874F2");
  handleToggleBgStyles("get-bonus", "#F3F8FE");
  handleToggleFwStyles("get-bonus-h3", "bold");

  handleToggleColorAndBcStyles("pay-bill", "");
  handleToggleBgStyles("pay-bill", "");
  handleToggleFwStyles("pay-bill-h3", "");

  handleToggleColorAndBcStyles("transactions", "");
  handleToggleBgStyles("transactions", "");
  handleToggleFwStyles("transactions-h3", "");
});

//  for pay bill
document.getElementById("pay-bill").addEventListener("click", function () {
  handleToggleColorAndBcStyles("add-money", "");
  handleToggleBgStyles("add-money", "");
  handleToggleFwStyles("add-money-h3", "");

  handleToggleColorAndBcStyles("cashout", "");
  handleToggleBgStyles("cashout", "");
  handleToggleFwStyles("cashout-h3", "");

  handleToggleColorAndBcStyles("transfer-money", "");
  handleToggleBgStyles("transfer-money", "");
  handleToggleFwStyles("transfer-money-h3", "");

  handleToggleColorAndBcStyles("get-bonus", "");
  handleToggleBgStyles("get-bonus", "");
  handleToggleFwStyles("get-bonus-h3", "");

  handleToggleColorAndBcStyles("pay-bill", "#0874F2");
  handleToggleBgStyles("pay-bill", "#F3F8FE");
  handleToggleFwStyles("pay-bill-h3", "bold");

  handleToggleColorAndBcStyles("transactions", "");
  handleToggleBgStyles("transactions", "");
  handleToggleFwStyles("transactions-h3", "");
});

//  for transactions
document.getElementById("transactions").addEventListener("click", function () {
  handleToggleColorAndBcStyles("add-money", "");
  handleToggleBgStyles("add-money", "");
  handleToggleFwStyles("add-money-h3", "");

  handleToggleColorAndBcStyles("cashout", "");
  handleToggleBgStyles("cashout", "");
  handleToggleFwStyles("cashout-h3", "");

  handleToggleColorAndBcStyles("transfer-money", "");
  handleToggleBgStyles("transfer-money", "");
  handleToggleFwStyles("transfer-money-h3", "");

  handleToggleColorAndBcStyles("get-bonus", "");
  handleToggleBgStyles("get-bonus", "");
  handleToggleFwStyles("get-bonus-h3", "");

  handleToggleColorAndBcStyles("pay-bill", "");
  handleToggleBgStyles("pay-bill", "");
  handleToggleFwStyles("pay-bill-h3", "");

  handleToggleColorAndBcStyles("transactions", "#0874F2");
  handleToggleBgStyles("transactions", "#F3F8FE");
  handleToggleFwStyles("transactions-h3", "bold");
});

function handleToggleColorAndBcStyles(id, status) {
  document.getElementById(id).style.color = status;
  document.getElementById(id).style.borderColor = status;
}

function handleToggleBgStyles(id, status) {
  document.getElementById(id).style.backgroundColor = status;
}

function handleToggleFwStyles(id, status) {
  document.getElementById(id).style.fontWeight = status;
}
