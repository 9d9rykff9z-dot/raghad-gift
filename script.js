const boxes = document.querySelectorAll(".box");
const finalMessage = document.getElementById("finalMessage");

boxes.forEach((box, index) => {

box.addEventListener("click", () => {

box.style.transform = "scale(0)";
box.style.opacity = "0";

setTimeout(() => {

box.classList.add("hidden");

if (index < boxes.length - 1) {
boxes[index + 1].classList.remove("hidden");
} else {

finalMessage.classList.remove("hidden");

confetti({
particleCount:250,
spread:180,
origin:{y:0.6}
});

}

},500);

});

});
