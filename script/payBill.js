document
  .getElementById("pay-bill-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueById("amountToPay");
    const pin = getInputValueById("pay-bill-pin");
    const billerNumber = document.getElementById("biller-account-number").value;
    const mainBalance = getInnerTextById("mainBalance");
    const selectedBank = document.getElementById("bankForPayBill").value;

    if (billerNumber.length === 11) {
      if (pin === 1234) {
        if (selectedBank !== "Select Bank or Online Banking App") {
          if (amount <= mainBalance) {
            if (amount > 0) {
              const newMainBalance = mainBalance - amount;
              setInnerTextByIdAndValue("mainBalance", newMainBalance);

              const container = document.getElementById(
                "transection-container"
              );
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
          <div id="details8">      
        <div class="flex gap-3 items-center justify-between">
        <div class='flex items-center gap-3'>
          <div class="bg-[#F4F5F7] p-3 rounded-full">
            <img src="assets/purse1.png" alt="" class="w-10" />
          </div>
          <div>
            <h3 class="font-bold text-lg text-[#525252]">Pay Bill</h3>
            <p class="text-[#525252] font-semibold">${currentTime}</p>
          </div>
          </div>
          <div class=''>
          <i id='showDetails8' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
         <i id='hideDetails8'  class="cursor-pointer fa-solid fa-xmark text-[#525252] text-xl"></i>
          </div>
          </div>
          </div>
          `;
              container.appendChild(div);

              document.getElementById("hideDetails8").style.display = "none";

              document
                .getElementById("showDetails8")
                .addEventListener("click", function () {
                  const p = document.createElement("p");
                  p.classList.add("text-[#525252]", "font-semibold");
                  p.innerText = `You pay $${amount} to this ${billerNumber} account number of ${selectedBank} (bank or online banking app)`;

                  const details8 = document.getElementById("details8");
                  details8.appendChild(p);

                  document.getElementById("showDetails8").style.display = "none";
                  document.getElementById("hideDetails8").style.display =
                    "block";

                  document
                    .getElementById("hideDetails8")
                    .addEventListener("click", function () {
                      document.getElementById("showDetails8").style.display =
                        "block";
                      document.getElementById("hideDetails8").style.display =
                        "none";

                      details8.removeChild(p);
                    });
                });
            } else if (amount === 0) {
              alert("you can`t pay $0 bill");
            }
          } else {
            alert("you can`t have enough balance");
          }
        } else {
          alert("Select a bank");
        }
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("Give a 11 digit agent number");
    }
  });
