document.getElementById("pay-bill-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueById("amountToPay");
    const pin = getInputValueById("pay-bill-pin");
    const billerNumber = document.getElementById("biller-account-number").value;
    const mainBalance = getInnerTextById("mainBalance");

    if (billerNumber.length === 11) {
      if (pin === 1234) {
        if (amount <= mainBalance) {
        const newMainBalance = mainBalance - amount;
        setInnerTextByIdAndValue("mainBalance", newMainBalance);
        }
        else if(amount === 0){
          alert('you can`t pay $0 bill')
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