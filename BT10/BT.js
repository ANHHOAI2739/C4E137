const $table1 = document.getElementById("table1");
const $tr1 = document.getElementById("tr1");
const $tr2 = document.getElementById("tr2");
const $tr3 = document.getElementById("tr3");
const $tr4 = document.getElementById("tr4");
const $deleteButton1 = document.getElementById("delete-button-1");
const $deleteButton2 = document.getElementById("delete-button-2");
const $deleteButton3 = document.getElementById("delete-button-3");
const $deleteButton4 = document.getElementById("delete-button-4");

$table1.style.width = "50%"

$deleteButton1.onclick = () => {
    $tr1.remove();
}
$deleteButton2.onclick = () => {
    $tr2.remove();
}
$deleteButton3.onclick = () => {
    $tr3.remove();
}
$deleteButton4.onclick = () => {
    $tr4.remove();
}




const $nameInput = document.getElementById("name-input");
const $genderInput = document.getElementById("gender-input");
const $ageInput = document.getElementById("age-input");
const $emailInput = document.getElementById("nemail-input");
const $passwordInput = document.getElementById("password-input");
const $regButton = document.getElementById("reg-button");
const $addressInput = document.getElementById("address-input");

$emailInput.onchange = function() {
    let email = $emailInput.value;
    if (!isEmailValid(email)) alert('Hãy nhập lại email');
}

function isEmailValid(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

$passwordInput.onchange = () => {
    let password = $passwordInput.value;
    if (password.lenght < 6) alert('Hãy nhập lại password');
}
