const images = [
    "anders-jilden-cYrMQA7a3Wc-unsplash.jpg",
    "benjamin-voros-phIFdC6lA4E-unsplash.jpg",
    "john-towner-JgOeRuGD_Y4-unsplash.jpg",
    "luca-micheli-ruWkmt3nU58-unsplash.jpg",
    "tim-goedhart-vnpTRdmtQ30-unsplash.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// create element with js and put it in html 
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;  // this is a text 

document.body.appendChild(bgImage);  // this is a html element
