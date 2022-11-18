
(() => {
    const [ nameBot, nameUser ] = [ 'James', 'Dayvid' ]
    const miniConfig = {
        lang: ['en-PT', 'pt-PT']
    }
    const command = {
        takeRest: `${nameBot} take a break`,
        activeBot: `hey ${nameBot}`,
    }
    
    const startBtn = document.querySelector('#start');
    const output = document.querySelector('#output');
    function start() {
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = miniConfig.lang[1];
      recognition.continuous = true;
      recognition.start();
      // This event happens when you talk in the microphone
      recognition.onresult = function (event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            // Here you can get the string of what you told
            const content = event.results[i][0].transcript.trim();
            if (content == command.activeBot) return output.textContent = 'Hi, Sir!'
            if (content == command.takeRest) return output.textContent = 'Ok, Sir!', recognition.stop()
            if (content == `${nameBot} how are you`) return output.textContent = "I'm good, Sir"
            if (content == `hello ${nameBot}`) return output.textContent = `Hello, ${nameUser}`
            if (content == `${nameBot}`) return output.textContent = "Yes, Sir!"
            output.textContent = content;
          }
        }
      };
    };
    start()
    startBtn.addEventListener('click', () => start());
  })();