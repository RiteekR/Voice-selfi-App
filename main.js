var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
}
recognition.onresult = function(event) {

    console.log(event);
    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content=="take my selfie"){
        console.log("taking Selfie");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking you Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
    camera = document.getElementById("camera");
     Webcam.set({ width:400, height:400, image_format : 'jpeg', jpeg_quality:90 });

