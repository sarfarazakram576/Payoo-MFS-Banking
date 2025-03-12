document.getElementById("get-bonus-btn").addEventListener("click", function () {
  const value = document.getElementById("coupon").value;
  const mainBalance = getInnerTextById("mainBalance");

  if (!value) {
    alert("give coupon");
  } else if (value === "GetBonus100") {
    const newMainBalance = mainBalance + 100;
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
            <img src="assets/bonus1.png" alt="" class="w-10" />
          </div>
          <div>
            <h3 class="font-bold text-lg text-[#525252]">Get Bonus</h3>
            <p class="text-[#525252] font-semibold">${currentTime}</p>
          </div>
          </div>
          <div>
          <i id='${uniqueID}_toggle' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
        
          </div>
          </div>
            <p id='${uniqueID}_details' class='hidden text-[#525252]  font-semibold'>You transfer $100 as a bonus from us</p>

          `;
    container.appendChild(div);

    const transactionDetails = document.getElementById(`${uniqueID}_details`);

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
  } else if (value === "GetBonus300") {
    const newMainBalance = mainBalance + 300;
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
            <img src="assets/bonus1.png" alt="" class="w-10" />
          </div>
          <div>
            <h3 class="font-bold text-lg text-[#525252]">Get Bonus</h3>
            <p class="text-[#525252] font-semibold">${currentTime}</p>
          </div>
          </div>
          <div>
          <i id='${uniqueID}_toggle' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
        
          </div>
          </div>
            <p id='${uniqueID}_details' class='hidden text-[#525252]  font-semibold'>You transfer $300 as a bonus from us</p>

          `;
    container.appendChild(div);

    const transactionDetails = document.getElementById(`${uniqueID}_details`);

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
  } else if (value === "GetBonus500") {
    const newMainBalance = mainBalance + 500;
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
          <div id="details6">      
        <div class="flex gap-3 items-center justify-between">
        <div class='flex items-center gap-3'>
          <div class="bg-[#F4F5F7] p-3 rounded-full">
            <img src="assets/bonus1.png" alt="" class="w-10" />
          </div>
          <div>
            <h3 class="font-bold text-lg text-[#525252]">Get Bonus</h3>
            <p class="text-[#525252] font-semibold">${currentTime}</p>
          </div>
          </div>
          <div>
          <i id='${uniqueID}_toggle' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
        
          </div>
          </div>
            <p id='${uniqueID}_details' class='hidden text-[#525252]  font-semibold'>You transfer $500 as a bonus from us</p>

          `;
    container.appendChild(div);

    const transactionDetails = document.getElementById(`${uniqueID}_details`);

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
  } else if (value === "GetBonus1000") {
    const newMainBalance = mainBalance + 1000;
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
          <div id="details7">      
        <div class="flex gap-3 items-center justify-between">
        <div class='flex items-center gap-3'>
          <div class="bg-[#F4F5F7] p-3 rounded-full">
            <img src="assets/bonus1.png" alt="" class="w-10" />
          </div>
          <div>
            <h3 class="font-bold text-lg text-[#525252]">Get Bonus</h3>
            <p class="text-[#525252] font-semibold">${currentTime}</p>
          </div>
          </div>
          <div>
          <i id='${uniqueID}_toggle' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
        
          </div>
          </div>
            <p id='${uniqueID}_details' class='hidden text-[#525252]  font-semibold'>You transfer $1000 as a bonus from us</p>

          `;
    container.appendChild(div);

    const transactionDetails = document.getElementById(`${uniqueID}_details`);

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
  } else {
    alert("The given coupon is valid for now");
  }
});
