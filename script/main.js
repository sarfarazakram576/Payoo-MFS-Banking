//  for add money
document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("add-money").style.backgroundColor = "#F3F8FE";
  document.getElementById("add-money").style.borderColor = "#0874F2";
  document.getElementById("add-money-h3").style.color = "#0874F2";
  document.getElementById("add-money-h3").style.fontWeight = "bold";
  document.getElementById("cashout").style.backgroundColor = "";
  document.getElementById("cashout").style.borderColor = "";
  document.getElementById("cashout-h3").style.color = "";
  document.getElementById("cashout-h3").style.fontWeight = "";
  document.getElementById("transfer-money").style.backgroundColor = "";
  document.getElementById("transfer-money").style.borderColor = "";
  document.getElementById("transfer-money-h3").style.color = "";
  document.getElementById("transfer-money-h3").style.fontWeight = "";
  
  document.getElementById("transfer-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("add-money-section").style.display = "block";
});

//  for cashout
document.getElementById("cashout").addEventListener("click", function () {
  document.getElementById("add-money").style.backgroundColor = "";
  document.getElementById("add-money").style.borderColor = "";
  document.getElementById("add-money-h3").style.color = "";
  document.getElementById("add-money-h3").style.fontWeight = "";
  document.getElementById("transfer-money").style.backgroundColor = "";
  document.getElementById("transfer-money").style.borderColor = "";
  document.getElementById("transfer-money-h3").style.color = "";
  document.getElementById("transfer-money-h3").style.fontWeight = "";

  document.getElementById("cashout").style.backgroundColor = "#F3F8FE";
  document.getElementById("cashout").style.borderColor = "#0874F2";
  document.getElementById("cashout-h3").style.color = "#0874F2";
  document.getElementById("cashout-h3").style.fontWeight = "bold";

  document.getElementById("transfer-section").style.display = "none";
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "block";
});

//  for transfer
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    document.getElementById("add-money").style.backgroundColor = "";
    document.getElementById("add-money").style.borderColor = "";
    document.getElementById("add-money-h3").style.color = "";
    document.getElementById("add-money-h3").style.fontWeight = "";
    document.getElementById("cashout").style.backgroundColor = "";
    document.getElementById("cashout").style.borderColor = "";
    document.getElementById("cashout-h3").style.color = "";
    document.getElementById("cashout-h3").style.fontWeight = "";

    document.getElementById("transfer-money").style.backgroundColor = "#F3F8FE";
    document.getElementById("transfer-money").style.borderColor = "#0874F2";
    document.getElementById("transfer-money-h3").style.color = "#0874F2";
    document.getElementById("transfer-money-h3").style.fontWeight = "bold";

    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfer-section").style.display = "block";
  });
