
let boxes = document.querySelectorAll(".box");
let index = 4;
for(box of boxes){
    box.innerText = "Box number " + index;
    index ++;
}