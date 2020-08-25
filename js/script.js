let form = document.getElementsByTagName("form")[0];

let statusFirstname = document.querySelector(".statusMessage.fname")
let statusLastname = document.querySelector(".statusMessage.lname")
let statusAddress = document.querySelector(".statusMessage.vejnavn, .statusMessage.husnr, .statusMessage.postnr, .statusMessage.city")
let statusUsername = document.querySelector(".statusMessage.uname")
let statusPassword = document.querySelector(".statusMessage.pword")
let statusEmail = document.querySelector(".statusMessage.email")

form.addEventListener("submit", function (event) {
    event.preventDefault();

    statusFirstname.innertext = "";
    statusLastname.innertext = "";
    statusAddress.innertext = "";
    statusUsername.innertext = "";
    statusPassword.innertext = "";
    statusEmail.innertext = "";

    if (form.fname.value == "") {
        statusFirstname.innertext = "Indtast venligst fornavn.";
        status = false;
    };

    if (form.lname.value == "") {
        statusLastname.innertext = "Indtast venligst efternavn.";
        status = false;
    };


    if (form.vejnavn.value == "") {
        statusAddress.innertext = "Indtast venligst adresse";
        status = false;
    };

    if (form.husnr.value == "") {
        statusAddress.innertext = "Indtast venligst adresse";
        status = false;
    };

    if (form.postnr.value == "") {
        statusAddress.innertext = "Indtast venligst adresse";
        status = false;
    };

    if (form.city.value == "") {
        statusAddress.innertext = "Indtast venligst adresse";
        status = false;
    };

    if (form.uname.value == "") {
        statusUsername.innertext = "Indtast venligst et brugernavn.";
        status = false;
    };

    if (form.pword.value == "") {
        statusPassword.innertext = "Indtast venligst et kodeord."
        status = false;
    };

    if (form.email.value == "") {
        statusEmail.innertext = "Indtast venligst email";
        status = false;
    };

    if (!status) return;

    // fetch("login.php");

    // SOooooooooooooooo ALl of this didnt work so im going rogue >:(
});