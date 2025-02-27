document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueById("amountToAdd");
    const pin = getInputValueById("add-money-pin");
    const bankAccountNumber = document.getElementById("bank-account-number").value;
    const mainBalance = getInnerTextById("mainBalance");

    if (bankAccountNumber.length === 11) {
      if (pin === 1234) {
        const newMainBalance = mainBalance + amount;
        setInnerTextByIdAndValue("mainBalance", newMainBalance);
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("Give a 11 digit agent number");
    }
  });
