let form = document.getElementsByTagName("form")[0];
let inputFields = document.querySelectorAll("input");

form.addEventListener("submit", function(event){
    event.preventDefault();

    inputFields.forEach(function(input) {
        if (input.hasAttribute("required")) (&& input.value == "") {
            input.style.backgroundColor = "red";
            
        } 
        });
    })