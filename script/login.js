document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mobileNumber = document.getElementById("mobile-number").value;
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    if (mobileNumber.length === 11) {
      if (convertedPin === 1234) {
        // for go to main file
        window.location.href = "main.html";
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("Enter a 11 digit number");
    }
  });
