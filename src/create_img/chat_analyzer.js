exports.analyseChat =(messages, lineLengthMax) =>{
    let result = [];
    let lastProcessedMessage;
    let messageblock = [];
    let reducer = (previous, current) => previous + current;
  
    messages.forEach((message, index) => {
      if (lastProcessedMessage != undefined) {
        if (message.author != lastProcessedMessage.author) {
          result.push({
            author: lastProcessedMessage.author,
            block: messageblock,
            avatar: lastProcessedMessage.authorAvatar,
            displayColor: lastProcessedMessage.displayColor
          });
          messageblock = [];
        }
      }
    
      lastProcessedMessage = message;
      messageblock.push(message.content);
      if (index == messages.length - 1) {
        result.push({
          author: lastProcessedMessage.author,
          block: messageblock,
          avatar: lastProcessedMessage.authorAvatar,
          displayColor: lastProcessedMessage.displayColor
        });
      }
    });
    result.forEach((message) => {
      message.block = linesPerMessageCount(message.block, lineLengthMax);
    });
    
    let totalLinesCount = result.map((value) => value.block.linesCount + 1).reduce(reducer);

    return { 
      linesCount:totalLinesCount,
      messages:result
    }
  
  }
  
  function linesPerMessageCount(messages, lineLengthMax) {

    let line = [];
    messages.forEach((msg) => {
      let words = msg.split(" ");
      let wordsPerLine = [];
  
      let z = 0;
      for (let i = 0; i < words.length; i++) {
        z += words[i].length;
        if (z > lineLengthMax) {
          line.push(wordsPerLine.join(" "));
          wordsPerLine = [];
          z = 0;
        }
        wordsPerLine.push(words[i]);
      }
      line.push(wordsPerLine.join(" "));
    });
    
    return {
      linesCount: line.length,
      lines: line,
    };
  }
  