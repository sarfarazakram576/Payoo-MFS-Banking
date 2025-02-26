document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountToWithdraw = document.getElementById("amountToWithdraw").value;
    const convertedAmount = parseFloat(amountToWithdraw);

    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const agentNumber = document.getElementById("agent-number").value;

    if (agentNumber.length === 11) {
      if (convertedPin === 1234) {
        const newMainBalance = convertedMainBalance - convertedAmount;
        document.getElementById("mainBalance").innerText = newMainBalance;
      } else {
        alert("pin is not correct");
      }
    } else {
      alert("Give a 11 digit agent number");
    }

  });