document.getElementById("btn").addEventListener("click", () => {})

let classifier
let img

function preload() {
    classifier = ml5.imageClassifier('MobileNet')
    img = loadImage('dog.jpg')
}

function setup() {
    createCanvas(400, 400)
    classifier.classify(img, gotResult)
    image(img, 0, 0)
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    }

    createDiv(`Label: ${results[0].label}`)
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`)
}
