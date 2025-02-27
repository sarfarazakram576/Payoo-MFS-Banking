document
  .getElementById("pay-bill-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueById("amountToPay");
    const pin = getInputValueById("pay-bill-pin");
    const billerNumber = document.getElementById("biller-account-number").value;
    const mainBalance = getInnerTextById("mainBalance");

    if (billerNumber.length === 11) {
      if (pin === 1234) {
        if (amount <= mainBalance) {
          if (amount > 0) {
            const newMainBalance = mainBalance - amount;
            setInnerTextByIdAndValue("mainBalance", newMainBalance);

            const selectedBank =
              document.getElementById("bankForPayBill").value;
            const container = document.getElementById("transection-container");
            const div = document.createElement("div");
            div.classList.add("p-6", "bg-white", "mb-4", "rounded-xl", 'border', 'border-gray-300');
            div.innerHTML = `
            
    <div class="flex gap-3 items-center">
      <div class="bg-[#F4F5F7] p-3 rounded-full">
        <img src="assets/purse1.png" alt="" class="w-10" />
      </div>
      <div>
        <h3 class="font-bold text-lg text-[$525252]">Pay Bill</h3>
        <p class="text-[$525252]">${currentTime}</p>
      </div>
    </div>
    <p>You pay $${amount} to this ${billerNumber} account number of ${selectedBank} (bank or online banking app)</p>
  
        `;
            container.appendChild(div);

            
          } else if (amount === 0) {
            alert("you can`t pay $0 bill");
          } else {
            alert("you can`t pay negative amount bill");
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
