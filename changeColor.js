


function backgroundColor() {
    let a;
    let b;
    let c;

    a = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    color = 'rgb(' + a + ',' + b + ',' + c + ')'
    document.getElementById("body").style.background = color;

}


let btn = document.getElementById("btn")
let btn1 = document.getElementById("btn1")

btn.addEventListener("click", function () {
    let inputText = document.getElementById("inputText")
    let textArea = document.getElementById("text")
    let submitButton = document.getElementById("btn1")
    let label1 = document.getElementById("label1")
    let label2 = document.getElementById("label2")


    inputText.classList.toggle("visible")
    textArea.classList.toggle("visible")
    submitButton.classList.toggle("visible")
    label1.classList.toggle("visible")
    label2.classList.toggle("visible")



})


btn1.addEventListener("click", function () {
    swal("Submitted");

})