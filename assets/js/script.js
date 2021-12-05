// let input = document.querySelector("#firstname")
let btn = document.querySelector(".submit")
let errorMsg = document.querySelector(".error")
let lengthErr = document.querySelector(".errorLength")

let ytBtn = document.querySelector(".changeLink")
let linkTag = document.querySelector(".linkTag")

// btn.onclick = function() {
//     if (input.value.trim() && input.value.trim().length >= 5) {
//         window.location.reload();
//     } else if (!input.value.trim()) {
//         lengthErr.classList.add("d-none")
//         errorMsg.classList.remove("d-none")
//     } else {
//         errorMsg.classList.add("d-none")
//         lengthErr.classList.remove("d-none")
//     }
// }

// ytBtn.onclick = function() {
//     let link = linkTag.getAttribute("href")

//     if (link.includes("google")) {
//         link = "https://www.youtube.com";
//         linkTag.setAttribute("href", link)
//         linkTag.innerHTML = "Youtube"
//         ytBtn.innerHTML = "Change to Google"
//     } else {
//         link = "https://www.google.com";
//         linkTag.setAttribute("href", link)
//         linkTag.innerHTML = "Google"
//         ytBtn.innerHTML = "Change to Youtube"
//     }


// }


let buttons = document.querySelectorAll(".myBtn")

let boxes = document.querySelectorAll(".box");

let lastbox;
buttons.forEach((btn) => {
    btn.onclick = function() {
        // boxes.forEach((box) => {
        //     box.style.backgroundColor = "transparent"
        // })
        let colorId = btn.getAttribute("data-id")
            // if (lastbox) {
            //     lastbox.style.backgroundColor = "transparent"
            // }

        lastbox ? lastbox.style.backgroundColor = "transparent" : null;

        let box = document.getElementById(colorId)
        box.style.backgroundColor = colorId
        lastbox = box;
    }
})


// window.onresize = function() {
//     console.log("you changed your screen size");
// }

let section = document.querySelector(".testSection")

// section.onclick = function() {
//     console.log("you clicked section");
// }

// section.ondblclick = function() {
//     console.log("you double clicked section");
// }

// section.onmousedown = function() {
//     console.log("click down");
// }
// section.onmouseup = function() {
//     console.log("click up");
// }

// section.onmouseover = function() {
//     console.log("over event");
// }
// section.onwheel = function() {
//     section.style.fontSize = "50px"
// }

let input = document.querySelector(".myInput")


// input.onkeypress = function() {
//     console.log("key press");
// }
// input.onkeydown = function() {
//         console.log(input.value);
//     }
// input.onkeyup = function() {
//     console.log(input.value);
// }

//e: Event object

// let google = document.getElementById("google")

// google.onclick = function(e) {
//     e.preventDefault()
//     console.log("clicked");
// }
// window.oncontextmenu = function(e) {
//     e.preventDefault();


//     let opened = document.getElementById("context")
//     if (opened) {
//         opened.remove();
//     }
//     let div = document.createElement("div")

//     div.id = "context"
//     let top = e.clientY
//     let left = e.clientX
//     div.style.width = "150px"
//     div.style.height = "300px"
//     div.style.position = "fixed"
//     div.style.top = `${top}px`
//     div.style.left = `${left}px`
//     div.style.backgroundColor = "blue"

//     document.body.append(div)
// }

// window.onclick = function() {
//     let opened = document.getElementById("context")
//     if (opened) {
//         opened.remove();
//     }
// }

// window.onclick = function(e) {
//     console.log(e.screenX);
// }

// window.onclick = function() {
//     console.log("first click event");
// }

// window.onclick = function() {
//     console.log("second click event");
// }

// window.onclick = function() {
//     console.log("third click event");
// }

// window.onclick = function() {
//     console.log("fourth click event");
// }


window.addEventListener("click", function() {
    console.log("first");
})

window.addEventListener("click", function() {
    console.log("second");
})

window.addEventListener("click", function() {
    console.log("third");
})

window.addEventListener("click", function() {
    console.log("fourth");
})




// window.ondblclick = function() {
//     console.log("dbl click");
// }