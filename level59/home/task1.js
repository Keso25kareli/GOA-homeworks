let age = prompt("enter your age :")
let income = prompt("enter your income :")

if (age < 18) {
  console.log("თქვენ არ ხართ სრულწლოვანი.");
} else {
  if (income === 5000) {
    console.log("დასკვნა - 'თქვენი ფინანსური მდგომარეობა სტაბილურია'");
  } else if (income > 5000 && income < 8000) {
    console.log("დასკვნა - 'თქვენ ფინანსურად კარგად ხართ და 3000 ლარზე მეტი გაქვთ'");
  } else if (income < 3000) {
    console.log("დასკვნა - 'თქვენ გჭირდებათ ფინანსური სტაბილურობა. უკეთესია ქონდეს savings.'");
  } else if (income === 3000) {
    console.log("დასკვნა - 'საშუალო ფინანსური გეგმის საჭიროებაა'");
  } else if (income > 6000) {
    console.log("დასკვნა - 'თქვენი ბიუჯეტი საკმაოდ სტაბილურია!'");
  } else if (income > 4000 && income < 6000) {
    console.log("დასკვნა - 'თქვენი შემოსავალი საშუალოზე მეტია'");
  }
}