let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    let pootis = new Audio('putdispenser.mp3')
    pootis.play()
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.style.bottom = "0";
    setTimeout(function() {
        imageContainer.style.bottom = "-100%"; // Hide the image container
      }, 1500); // Change 5000 to the desired delay in milliseconds
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    let built = new Audio('ibuiltthat.mp3')
    built.play()
    var imageContainer = document.getElementById("imageContainer2");
    imageContainer.style.bottom = "0";
    setTimeout(function() {
        imageContainer.style.bottom = "-100%"; // Hide the image container
      }, 1000); // Change 5000 to the
}
