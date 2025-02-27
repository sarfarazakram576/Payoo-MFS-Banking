document.getElementById("pay-bill-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueById("amountToPay");
    const pin = getInputValueById("pay-bill-pin");
    const billerNumber = document.getElementById("biller-account-number").value;
    const mainBalance = getInputInnerTextById("mainBalance");

    if (billerNumber.length === 11) {
      if (pin === 1234) {
        if (amount <= mainBalance) {
        const newMainBalance = mainBalance - amount;
        setInnerTextByIdAndValue("mainBalance", newMainBalance);
        }
        else{
            alert('you can`t have enough balance')
          }
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("Give a 11 digit Biller acount number");
    }
  });