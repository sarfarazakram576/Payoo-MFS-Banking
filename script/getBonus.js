document.getElementById("get-bonus-btn").addEventListener("click", function () {
  const value = document.getElementById("coupon").value;
  const mainBalance = getInnerTextById("mainBalance");

  if (value === "GetBonus100") {
    const newMainBalance = mainBalance + 100;
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
<img src="assets/send1.png" alt="" class="w-10" />
</div>
<div>
<h3 class="font-bold text-lg text-[#525252]">Transfer Money</h3>
<p class="text-[#525252] font-semibold">${currentTime}</p>
</div>
</div>
<p class="text-[#525252] font-semibold">You transfer $100 as a bonus from us
`;
    container.appendChild(div);
  } else if (value === "GetBonus300") {
    const newMainBalance = mainBalance + 300;
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
<img src="assets/send1.png" alt="" class="w-10" />
</div>
<div>
<h3 class="font-bold text-lg text-[#525252]">Transfer Money</h3>
<p class="text-[#525252] font-semibold">${currentTime}</p>
</div>
</div>
<p class="text-[#525252] font-semibold">You transfer $300 as a bonus from us
`;
    container.appendChild(div);
  } else if (value === "GetBonus500") {
    const newMainBalance = mainBalance + 500;
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
<img src="assets/send1.png" alt="" class="w-10" />
</div>
<div>
<h3 class="font-bold text-lg text-[#525252]">Transfer Money</h3>
<p class="text-[#525252] font-semibold">${currentTime}</p>
</div>
</div>
<p class="text-[#525252] font-semibold">You transfer $500 as a bonus from us
`;
    container.appendChild(div);
  } else if (value === "GetBonus1000") {
    const newMainBalance = mainBalance + 1000;
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
<img src="assets/bonus1.png" alt="" class="w-10" />
</div>
<div>
<h3 class="font-bold text-lg text-[#525252]">Get Bonus</h3>
<p class="text-[#525252] font-semibold">${currentTime}</p>
</div>
</div>
<p class="text-[#525252] font-semibold">You transfer $1000 as a bonus from us
`;
    container.appendChild(div);
  } else {
    alert("The given coupon is valid for now");
  }
});
