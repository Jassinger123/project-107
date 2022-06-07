function start(){
    navigator.mediaDevices({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JqwmG1y0r/",model_ready)
};

function model_ready(){
    classifier=classify(got_result);
}

function got_result(){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
}