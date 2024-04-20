let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

mode.addEventListener("click", () => {
    if (currmode == "light"){
        currmode = "dark";
        body.classList.add("lightmode")
        body.classList.remove("darkmode")
    }
    else if (currmode == "dark"){
        currmode = "light";
        body.classList.add("darkmode")
        body.classList.remove("lightmode")
    }
})

