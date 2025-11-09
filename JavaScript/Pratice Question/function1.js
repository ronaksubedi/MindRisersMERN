let marks = [85, 92, 78, 88, 90, 95, 67, 89, 94, 73];
let higherMarks = marks.filter((mark)=>{
    return mark >= 90;
}); 
console.log("Marks greater than or equal to 90: " + higherMarks);
