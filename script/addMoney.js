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

    if (bankAccountNumber.length === 11) {
      if (pin === 1234) {
        if (amount > 0) {
          const newMainBalance = mainBalance + amount;
          setInnerTextByIdAndValue("mainBalance", newMainBalance);

          const selectedBank = document.getElementById("bankForAddMoney").value;
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
          <img src="assets/wallet1.png" alt="" class="w-10" />
        </div>
        <div>
          <h3 class="font-bold text-lg text-[#525252]">Add Money</h3>
          <p class="text-[#525252] font-semibold">${currentTime}</p>
        </div>
      </div>
      <p class="text-[#525252] font-semibold">You Added $${amount} to your account from this ${bankAccountNumber} account number of ${selectedBank} (bank or online banking app)</p>
    
          `;
          container.appendChild(div);
        } else if (amount === 0) {
          alert("you can`t add $0");
        } else {
          alert("you can`t add negative amount");
        }
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("Give a 11 digit agent number");
    }
  });

// currentTime
const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
