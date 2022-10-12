let scores = [82, 75, 48, 64, 36];
let passedCount = 0;

//for (let i = 0; i < scores.length; i++) {
//    if (scores[i] >= 49) {
//       passesCount++;
//    }
//}

scores.forEach((score) => {
    if (score >= 49) {
        passedCount++;
    }
});

console.log(passedCount);
document.getElementById("conTent1").innerHTML = ('จำนวนนักเรียนที่สอบผ่าน') + (passedCount);
