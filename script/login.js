document.getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mobileNumber = document.getElementById("mobile-number").value;
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    if (mobileNumber.length === 11) {
      if (convertedPin === 1234) {
        window.location.href = "main.html";
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("need a valid number");
    }
  });
