document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueById("amountToWithdraw");
    const pin = getInputValueById("cashout-pin");
    const agentNumber = document.getElementById("agent-number").value;
    const mainBalance = getInnerTextById("mainBalance");

    if (agentNumber.length === 11) {
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
      alert("Give a 11 digit agent number");
    }
  });
