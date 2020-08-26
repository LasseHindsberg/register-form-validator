let form = document.getElementsByTagName("form")[0];
let inputFields = document.querySelectorAll("input");
let success = true;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    inputFields.forEach(function (input) {
        input.style.backgroundColor = "inherit";
        form.querySelector(".statusMessage." + input.name).innerText = "";
        if (input.hasAttribute("required") && (input.value == "")) {
            input.style.backgroundColor = "darkRed";
            // input.style.color = "#03090D";
            form.querySelector(".statusMessage." + input.name).innerText = "Udfyld dette felt.";
            success = false;
        }
    });

    if (!success) return;
    fetch(login.php);
});