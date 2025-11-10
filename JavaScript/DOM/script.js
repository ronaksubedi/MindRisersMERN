//change them
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    if(document.querySelector("body").style.backgroundColor === "black"){
        document.querySelector("body").style.backgroundColor = "white" ;
        document.querySelector("body").style.color = "black" ;
        document.querySelector("#intro").style.color = "none";
        return;
    }
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";
    document.querySelector("h2").style.color = "white";
    document.querySelector("p").style.color = "white";
    document.querySelector("button").style.color = "blue";
    document.querySelector("button").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    document.querySelector("button").style.backgroundColor = "white";
    document.querySelector("#intro").style.color = "none";
});