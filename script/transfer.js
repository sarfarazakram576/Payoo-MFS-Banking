// document
//   .getElementById("transfer-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const amountToTransfer = document.getElementById("amountToTransfer").value;
//     const convertedAmount = parseFloat(amountToTransfer);

//     const pin = document.getElementById("pin").value;
//     const convertedPin = parseInt(pin);

//     const mainBalance = document.getElementById("mainBalance").innerText;
//     const convertedMainBalance = parseFloat(mainBalance);

//     const userAccountNumber = document.getElementById(
//       "user-account-number"
//     ).value;

//     if (userAccountNumber.length === 11) {
//       if (convertedPin === 1234) {
//         if (amountToTransfer <= convertedMainBalance) {
//           const newMainBalance = convertedMainBalance - convertedAmount;
//           document.getElementById("mainBalance").innerText = newMainBalance;
//         } else {
//           alert("You can`t have enough money to transfer");
//         }
//       } else {
//         alert("pin is not correct");
//       }
//     } else {
//       alert("Give a 11 digit agent number");
//     }
//   });

document
  .getElementById("transfer-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueById("amountToTransfer");
    const pin = getInputValueById("transfer-pin");
    const userAccountNumber = document.getElementById(
      "user-account-number"
    ).value;
    const mainBalance = getInnerTextById("mainBalance");

    if (userAccountNumber.length === 11) {
      if (pin === 1234) {
        if (amount <= mainBalance) {
          if (amount > 0) {
            const newMainBalance = mainBalance - amount;
            setInnerTextByIdAndValue("mainBalance", newMainBalance);

            const container = document.getElementById("transection-container");
            const div = document.createElement("div");
            div.classList.add(
              "p-6",
              "bg-white",
              "mb-4",
              "rounded-xl",
              "border",
              "border-gray-300"
            );
            div.innerHTML = `
        
  <div class="flex gap-3 items-center">
  <div class="bg-[#F4F5F7] p-3 rounded-full">
    <img src="assets/money1.png" alt="" class="w-10" />
  </div>
  <div>
    <h3 class="font-bold text-lg text-[#525252]">Transfer Money</h3>
    <p class="text-[#525252] font-semibold">${currentTime}</p>
  </div>
  </div>
  <p class="text-[#525252] font-semibold">You transfer $${amount} to this ${userAccountNumber} account number 
    `;
            container.appendChild(div);
          } else if (amount === 0) {
            alert("you can`t transfer $0");
          } else {
            alert("you can`t transfer negative amount");
          }
        } else {
          alert("you can`t have enough balance");
        }
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("Give a 11 digit agent number");
    }
  });
