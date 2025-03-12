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
        if (!amount) {
          alert("give amount");
        } else if (amount <= mainBalance) {
          if (amount > 0) {
            const newMainBalance = mainBalance - amount;
            setInnerTextByIdAndValue("mainBalance", newMainBalance);

            const uniqueID = `trans_${new Date().getTime()}`;

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
     
      <div class="flex gap-3 items-center justify-between">
      <div class='flex items-center gap-3'>
        <div class="bg-[#F4F5F7] p-3 rounded-full">
          <img src="assets/send1.png" alt="" class="w-10" />
        </div>
        <div>
          <h3 class="font-bold text-lg text-[#525252]">Cashout</h3>
          <p class="text-[#525252] font-semibold">${currentTime}</p>
        </div>
        </div>
        <div>
        <i id='${uniqueID}_toggle' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
        </div>
       
        </div>
        <p id='${uniqueID}_details' class='hidden text-[#525252]  font-semibold'>You cashout $${amount} through ${agentNumber} agent account number</p>
        `;
            container.appendChild(div);

            const transactionDetails = document.getElementById(
              `${uniqueID}_details`
            );

            const toggleDetails = document.getElementById(`${uniqueID}_toggle`);
            toggleDetails.addEventListener("click", () => {
              if (transactionDetails.classList.contains("hidden")) {
                transactionDetails.classList.remove("hidden");
                toggleDetails.classList.remove("fa-ellipsis-vertical");
                toggleDetails.classList.add("fa-xmark");
              } else {
                transactionDetails.classList.add("hidden");
                toggleDetails.classList.add("fa-ellipsis-vertical");
                toggleDetails.classList.remove("fa-xmark");
              }
            });
          } else if (amount === 0) {
            alert("you can`t cashout $0");
          } else {
            alert("you can`t cashout negative amount");
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
