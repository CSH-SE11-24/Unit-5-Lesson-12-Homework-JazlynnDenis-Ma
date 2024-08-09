console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)
let dark = document.querySelector("#btn btn-dark")
let light = document.querySelector("#btn btn-light")
let body = document.querySelector("#body")
// Extra credit: Select the navbar


// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black
// Extra credit: Add the bg-light class and remove the bg-dark class to the navbar

light.addEventListener("click",function(event){
 body.style.color="black"
body.style.backgroundColor="white"
})

// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar
dark.addEventListener("click", function(event){
 body.style.color="white"
body.style.backgroundColor="black"
})


// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards
let images= document.getElementByClassName("card-img-top rounded")

// Console log the length of the array to confirm you have all 4 images
for (i=0; i < images.length; i++){
  console.log(images[i])
}

// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image

images.addEventListener("mouseover",function(event){
  image.src="ears.gif"
})

images.addEventListener("mouseout",function(event){
  image.src="ears.jpg"
})
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg
// Extra credit: do this with a for loop and one event listener (you will need string manipulation)


