var p1 = 20;
var p2 = 1;
var p3 = 5;
var p4 = 24;
var p5 = 9;
var p6 = 40;

document.write(`고객님이 고르신 숫자는 ${p1}, ${p2}, ${p3}, ${p4}, ${p5}, ${p6}입니다.<br>`)

var r1 = Math.floor(Math.random() * 45) + 1;
document.write(r1 + "<br>");

while (true) {
    var r2 = Math.floor(Math.random() * 45) + 1;
    if (r2 != r1) {
        document.write(r2 + "<br>");
        break;
    }
}

while (true) {
    var r3 = Math.floor(Math.random() * 45) + 1;
    if (r3 != r1 && r3 != r2) {
        document.write(r3 + "<br>");
        break;
    }
}

while (true) {
    var r4 = Math.floor(Math.random() * 45) + 1;
    if (r4 != r1 && r4 != r2 && r4 != r3) {
        document.write(r4 + "<br>");
        break;
    }
}

while (true) {
    var r5 = Math.floor(Math.random() * 45) + 1;
    if (r5 != r1 && r5 != r2 && r5 != r3 && r5 != r4) {
        document.write(r5 + "<br>");
        break;
    }
}

while (true) {
    var r6 = Math.floor(Math.random() * 45) + 1;
    if (r6 != r1 && r6 != r2 && r6 != r3 && r6 != r4 && r6 != r5) {
        document.write(r6 + "<br><br>");
        break;
    }
}
while (true) {
    var b = Math.floor(Math.random() * 45) + 1;
    if (b != r1 && b != r2 && b != r3 && b != r4 && b != r5 && b != r6) {
        document.write(`보너스 번호는 ${b} 입니다.<br><br>`);
        break;
    }
}

var win = 0;
var bonus;

var player = [p1, p2, p3, p4, p5, p6];
var computer = [r1, r2, r3, r4, r5, r6];

for (i = 0; i <= 5; i++) {
    for (j = 0; j <= 5; j++)
        if (player[i] == computer[j]) {
            win = win + 1;
        }
    j = 0;
}

if (win == 5) {
    for (i = 0; i <= 5; i++)
        if (player[i] == b) {
            bonus = 1;
        }
}

if (bonus == 1) {
    document.write("2등입니다");
}
else {
    var result = ['꽝입니다', '꽝입니다', '꽝입니다', '5등입니다', '4등입니다', '3등입니다', '1등입니다'];
    document.write(result[win]);
}
