let correctPassword = "Group 41 is best";
let attempts = 0;
let success = false;

while (attempts < 3) {
    let input = prompt("შეიყვანე პაროლი:");
    if (input === correctPassword) {
        alert("თექსტი წარმატებით დაემთხვა");
        success = true;
        break;
    } else {
        alert("არასწორი პაროლი");
        attempts++;
    }
}

if (!success) {
    alert("3 ცდა უკვე ამოიწურა");
}