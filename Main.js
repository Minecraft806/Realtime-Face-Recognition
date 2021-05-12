//https://teachablemachine.withgoogle.com/models/LlIRNdYOG/

function preload() {

}

function setup() {
canvas=createCanvas(250,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LlIRNdYOG/model.json",modelLoaded);
}

function draw() {
image(video,0,275,275,250);
classifier.classify(video,gotResults);
}

function modelLoaded() {
    console.log("Model Has Been Loaded Correctly");
}

function gotResults(error,results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(4);
    }
}