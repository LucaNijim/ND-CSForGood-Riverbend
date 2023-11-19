
    document.getElementById('startButton').addEventListener('click', () => {
      // Ask for microphone permission
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(handleSuccess)
        .catch(handleError);
    });

    function handleSuccess(stream) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);

      // Connect the microphone to the analyser
      microphone.connect(analyser);

      // Set up the analyser
      analyser.fftSize = 2048;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      analyser.getByteTimeDomainData(dataArray);

      // Start analyzing the audio
      analyser.fftSize = 256;
      const buffer = new Float32Array(analyser.fftSize);
      const scriptNode = audioContext.createScriptProcessor(analyser.fftSize, 1, 1);

      scriptNode.onaudioprocess = function () {
        analyser.getFloatFrequencyData(buffer);

        // Find the dominant frequency
        const maxIndex = buffer.indexOf(Math.max(...buffer));
        const frequency = audioContext.sampleRate * maxIndex / analyser.fftSize;
        document.getElementById('freqvalue').innerText = 'Frequency Value: ' + frequency;
        // Map frequency to a musical note
        const note = getNoteFromFrequency(frequency);
        
        // Display the detected note on the web page
        document.getElementById('detectedNote').innerText = 'Detected Note: ' + note;
      };

      analyser.connect(scriptNode);
      scriptNode.connect(audioContext.destination);
    }

    function handleError(error) {
      console.error('Error accessing microphone:', error);
    }

    function getNoteFromFrequency(frequency) {
      const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
      const noteIndex = Math.round(12 * Math.log2(frequency / 440) + 69);
      const note = noteNames[noteIndex % 12];
      return note;
    }