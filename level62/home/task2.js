let n = parseInt(prompt("შეიყვანე არანაკლებ 0-ის რიცხვი N:"));

if (isNaN(n) || n < 0) {
    alert("გთხოვ შეიყვანე დადებითი მთელი რიცხვი!");
} else {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    alert(`${n}-ის ფაქტორეალია: ${factorial}`);
}