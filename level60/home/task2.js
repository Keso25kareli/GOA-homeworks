let weather = parseInt(prompt("შეიყვანე ამინდის კოდი (1-5):"));

switch (weather) {
    case 1:
        console.log("მზიანი");
        break;
    case 2:
        console.log("ღრუბლიანი");
        break;
    case 3:
        console.log("წვიმიანი");
        break;
    case 4:
        console.log("ქარიანი");
        break;
    case 5:
        console.log("თოვლიანი");
        break;
    default:
        console.log("ეს ამინდი არ არსებობს");
}
