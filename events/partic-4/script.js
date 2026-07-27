let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

// Button এ click করলে hidden input open হবে
btn.addEventListener("click", function () {
    fileinp.click();
});

// File select করার পর
fileinp.addEventListener("change", function (e) {

    // প্রথম file টি নেওয়া হচ্ছে
    const file = e.target.files[0];

    if(file){
        // Button এর text file এর নাম হয়ে যাবে
        btn.textContent = file.name;
    }

});