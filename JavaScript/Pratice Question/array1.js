let marks = [85, 90, 78, 92, 88];
// if (marks.length === 0) {
//     console.log("No marks available.");
// } else {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i]; //0+85=85+90=175+78=253+92=345+88=433
    }
    let average = total / marks.length;//433/5=86.6
    console.log("Average marks:", average);
