document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueById("amountToAdd");
    const pin = getInputValueById("add-money-pin");

    const bankAccountNumber = document.getElementById(
      "bank-account-number"
    ).value;
    const mainBalance = getInnerTextById("mainBalance");
    const selectedBank = document.getElementById("bankForAddMoney").value;

    if (bankAccountNumber.length === 11) {
      if (pin === 1234) {
        if (selectedBank !== "Select Bank") {
          if (amount > 0) {
            const newMainBalance = mainBalance + amount;
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
          <div id="details">      
        <div class="flex gap-3 items-center justify-between">
        <div class='flex items-center gap-3'>
          <div class="bg-[#F4F5F7] p-3 rounded-full">
            <img src="assets/wallet1.png" alt="" class="w-10" />
          </div>
          <div>
            <h3 class="font-bold text-lg text-[#525252]">Add Money</h3>
            <p class="text-[#525252] font-semibold">${currentTime}</p>
          </div>
          </div>
          <div class=''>
          <i id='showDetails' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
         <i id='hideDetails'  class="cursor-pointer fa-solid fa-xmark text-[#525252] text-xl"></i>
          </div>
          </div>
          </div>
          `;
            container.appendChild(div);

            document.getElementById("hideDetails").style.display = "none";

            document
              .getElementById("showDetails")
              .addEventListener("click", function () {
                const p = document.createElement("p");
                p.classList.add("text-[#525252]", "font-semibold");
                p.innerText = `You Added $${amount} to your account from this ${bankAccountNumber} account number of ${selectedBank} (bank or online banking app)`;

                const details = document.getElementById("details");
                details.appendChild(p);

                document.getElementById("showDetails").style.display = "none";
                document.getElementById("hideDetails").style.display = "block";

                document
                  .getElementById("hideDetails")
                  .addEventListener("click", function () {
                    document.getElementById("showDetails").style.display =
                      "block";
                    document.getElementById("hideDetails").style.display =
                      "none";

                    details.removeChild(p);
                  });
              });
          } else if (amount === 0) {
            alert("you can`t add $0");
          } else {
            alert("you can`t add negative amount");
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
