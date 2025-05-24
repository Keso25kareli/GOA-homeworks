let str = "y"; // აქ ჩასვი სასურველი სტრინგი
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'X') {
        count++;
    }
}
console.log("'X' სიმბოლოების რაოდენობა:", count);