let x = parseInt(prompt("შეიყვანე რიცხვი X (0-100):"));

for (let i = 100; i >= 0; i--) {
    console.log(i);
    if (i === x) {
        break;
    }
}