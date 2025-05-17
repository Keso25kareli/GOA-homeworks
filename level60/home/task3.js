let num = parseInt(prompt("შეიყვანე რიცხვი (1-12):"));

switch (num) {
    case 5:
        console.log("ზაფხული");
        break;
    default:
        console.log(num % 2 === 0 ? "პარიტეტული" : "კენტი");
}