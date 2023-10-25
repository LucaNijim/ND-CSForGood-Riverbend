const canvas = document.getElementById("visual");
const canvasCtx = canvas.getContext("2d");
WIDTH = canvas.width;
HEIGHT = canvas.height;

var source;
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioContext.createAnalyser();
analyser.minDecibels = -100;
analyser.maxDecibels = -10;
analyser.smoothingTimeConstant = 0.85;
if (!navigator?.mediaDevices?.getUserMedia) {
  // No audio allowed
  alert('Sorry, getUserMedia is required for the app.')
} else {
  var constraints = {audio: true};
  navigator.mediaDevices.getUserMedia(constraints)
    .then(
      function(stream) {
        // Initialize the SourceNode
        source = audioContext.createMediaStreamSource(stream);
        // Connect the source node to the analyzer
        source.connect(analyser);
        visualize();
      }
    )
    .catch(function(err) {
      alert('Sorry, microphone permissions are required for the app. Feel free to read on without playing :)')
    });
}

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

getAudioContext().resume();

function visualize(){

    drawVisual = requestAnimationFrame(visualize);

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = "black";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    const barWidth = (WIDTH / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    
    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;
    
        canvasCtx.fillStyle = `rgb(100, 50, 50)`;
        canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);
    
        x += barWidth + 1;
      }

}