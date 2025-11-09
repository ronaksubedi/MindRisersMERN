//change them
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    if(document.querySelector("body").style.backgroundColor === "black"){
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        return;
    }
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
});