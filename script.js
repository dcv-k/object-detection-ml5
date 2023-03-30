let classifier
let img

function modelReady() {
    console.log("model is ready")
    classifier.classify(img, gotResult)
}

function imageReady() {
    image(img, 0, 0)
}

function setup() {
    createCanvas(500, 500)
    img = createImg('dog.jpg', imageReady)
    img.hide()
    background(0)

    classifier = ml5.imageClassifier('MobileNet', modelReady)
    
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    }

    createDiv(`Label: ${results[0].label}`)
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`)
}
