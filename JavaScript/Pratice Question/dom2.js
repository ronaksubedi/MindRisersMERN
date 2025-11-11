let newbtn = document.createElement("button");
newbtn.innerHTML = "Click Me";
document.body.appendChild(newbtn);
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

document.querySelector("body").prepend(newbtn);