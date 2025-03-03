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
          <div id="details4">      
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
          <div class=''>
          <i id='showDetails4' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
         <i id='hideDetails4'  class="cursor-pointer fa-solid fa-xmark text-[#525252] text-xl"></i>
          </div>
          </div>
          </div>
          `;
    container.appendChild(div);

    document.getElementById("hideDetails4").style.display = "none";

    document
      .getElementById("showDetails4")
      .addEventListener("click", function () {
        const p = document.createElement("p");
        p.classList.add("text-[#525252]", "font-semibold");
        p.innerText = `You transfer $100 as a bonus from us`;

        const details4 = document.getElementById("details4");
        details4.appendChild(p);

        document.getElementById("showDetails4").style.display = "none";
        document.getElementById("hideDetails4").style.display = "block";

        document
          .getElementById("hideDetails4")
          .addEventListener("click", function () {
            document.getElementById("showDetails4").style.display = "block";
            document.getElementById("hideDetails4").style.display = "none";

            details4.removeChild(p);
          });
      });
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
          <div id="details5">      
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
          <div class=''>
          <i id='showDetails5' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
         <i id='hideDetails5'  class="cursor-pointer fa-solid fa-xmark text-[#525252] text-xl"></i>
          </div>
          </div>
          </div>
          `;
    container.appendChild(div);

    document.getElementById("hideDetails5").style.display = "none";

    document
      .getElementById("showDetails5")
      .addEventListener("click", function () {
        const p = document.createElement("p");
        p.classList.add("text-[#525252]", "font-semibold");
        p.innerText = `You transfer $300 as a bonus from us`;

        const details5 = document.getElementById("details5");
        details5.appendChild(p);

        document.getElementById("showDetails5").style.display = "none";
        document.getElementById("hideDetails5").style.display = "block";

        document
          .getElementById("hideDetails5")
          .addEventListener("click", function () {
            document.getElementById("showDetails5").style.display = "block";
            document.getElementById("hideDetails5").style.display = "none";

            details5.removeChild(p);
          });
      });
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
          <div class=''>
          <i id='showDetails6' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
         <i id='hideDetails6'  class="cursor-pointer fa-solid fa-xmark text-[#525252] text-xl"></i>
          </div>
          </div>
          </div>
          `;
    container.appendChild(div);

    document.getElementById("hideDetails6").style.display = "none";

    document
      .getElementById("showDetails6")
      .addEventListener("click", function () {
        const p = document.createElement("p");
        p.classList.add("text-[#525252]", "font-semibold");
        p.innerText = `You transfer $500 as a bonus from us`;

        const details6 = document.getElementById("details6");
        details6.appendChild(p);

        document.getElementById("showDetails6").style.display = "none";
        document.getElementById("hideDetails6").style.display = "block";

        document
          .getElementById("hideDetails6")
          .addEventListener("click", function () {
            document.getElementById("showDetails6").style.display = "block";
            document.getElementById("hideDetails6").style.display = "none";

            details6.removeChild(p);
          });
      });
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
          <div class=''>
          <i id='showDetails7' class="cursor-pointer fa-solid fa-ellipsis-vertical text-[#525252] text-xl"></i>
         <i id='hideDetails7'  class="cursor-pointer fa-solid fa-xmark text-[#525252] text-xl"></i>
          </div>
          </div>
          </div>
          `;
    container.appendChild(div);

    document.getElementById("hideDetails7").style.display = "none";

    document
      .getElementById("showDetails7")
      .addEventListener("click", function () {
        const p = document.createElement("p");
        p.classList.add("text-[#525252]", "font-semibold");
        p.innerText = `You transfer $1000 as a bonus from us`;

        const details7 = document.getElementById("details7");
        details7.appendChild(p);

        document.getElementById("showDetails7").style.display = "none";
        document.getElementById("hideDetails7").style.display = "block";

        document
          .getElementById("hideDetails7")
          .addEventListener("click", function () {
            document.getElementById("showDetails7").style.display = "block";
            document.getElementById("hideDetails7").style.display = "none";

            details7.removeChild(p);
          });
      });
  } else {
    alert("The given coupon is valid for now");
  }
});
