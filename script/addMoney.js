document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountToAdd = document.getElementById("amountToAdd").value;
    const convertedAmount = parseFloat(amountToAdd);

    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
      const newMainBalance = convertedMainBalance + convertedAmount;
      document.getElementById("mainBalance").innerText = newMainBalance;
    } else {
      alert("pin thik nai");
    }
  });


// for go to cashout file

  document.getElementById('cashout')
.addEventListener('click', function(){
    window.location.href = '../html/cashout.html'
})