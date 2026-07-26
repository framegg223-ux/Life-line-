const left = document.querySelector(".left");
const right = document.querySelector(".right");
const pink = document.getElementById("pinkHeart");

// Step 1: Blue fills the left half
setTimeout(() => {
  left.style.left = "0";
}, 1000);

// Step 2: Black fills the right half
setTimeout(() => {
  right.style.right = "0";
}, 3500);

// Step 3: White glow changes to blue/black glow
setTimeout(() => {
  document.getElementById("heart").style.boxShadow =
    "0 0 45px #49b8ff, 0 0 70px #000";
}, 5500);

// Step 4: Small pink heart pops out
setTimeout(() => {
  pink.classList.add("showPink");
}, 6500);
