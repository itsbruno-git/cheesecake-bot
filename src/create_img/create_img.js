const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const { promises } = require("stream");
const { analyseChat } = require("./chat_analyzer");

/* Configuración de parametros de la creacion de imagenes */
const CHAT_IMAGES_PATH = "temp/img";
const LINE_LENGTH_MAX = 30;
const H_MARGIN = 30;
const V_MARGIN = 30;
const LINE_HEIGHT = 50;
const CHAR_LENGTH = 25;
const BLOCK_OFFSET = 40;
const IMAGE_MARGIN = 50;

exports.createChat = (chatMessages) => {
  let { linesCount, messages } = analyseChat(chatMessages, LINE_LENGTH_MAX);

  let { width, height } = getCanvasDimensions(
    linesCount * LINE_HEIGHT + messages.length * BLOCK_OFFSET,
    LINE_LENGTH_MAX * CHAR_LENGTH + IMAGE_MARGIN*2,
    H_MARGIN,
    V_MARGIN
  );

  return new Promise((resolve, reject) => {
    let profilePictures = messages.map((msg) => loadImage(msg.avatar));
    Promise.all(profilePictures).then((pictures) => {
      console.log(pictures);
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#3d414a";
      ctx.fillRect(0, 0, width, height);
      let y = V_MARGIN;

      messages.forEach((msgBlock, index) => {

        drawMessagesBlock({
          canvasContext: ctx,
          messageBlock: msgBlock.block.lines,
          blockLinesCount: msgBlock.block.linesCount,
          authorName: msgBlock.author,
          authorAvatar: pictures[index],
          authorColor: msgBlock.displayColor == "#000000" ? '#fff' : msgBlock.displayColor,
          lineHeight: LINE_HEIGHT,
          lineLengthMax: LINE_LENGTH_MAX * CHAR_LENGTH,
          initPosition: { X: 0, Y: y },
        });
        y += (msgBlock.block.linesCount + 1) * LINE_HEIGHT + BLOCK_OFFSET;
      });

      let img_stream = canvas.toBuffer("image/png");
      let filename = `chatmessage-${Date.now()}.png`;
      let filepath = `${CHAT_IMAGES_PATH}/${filename}`;
      fs.writeFileSync(filepath, img_stream);

      resolve({ path: filepath, name: filename });
    });
  });
};

exports.deleteImage = (filepath) => {
  fs.unlinkSync(filepath);
};

function getCanvasDimensions(linesHeight, lineLengthMax, hMargin, vMargin) {
  return {
    width: lineLengthMax + 2 * hMargin,
    height: linesHeight + 2 * vMargin,
  };
}

function drawMessagesBlock({
  canvasContext,
  messageBlock,
  blockLinesCount,
  authorName,
  authorAvatar,
  authorColor,
  lineHeight,
  lineLengthMax,
  initPosition,
}) {
  let blockWidth = lineLengthMax + 2 * lineHeight + 2 * IMAGE_MARGIN;
  let blockHeight = (blockLinesCount + 1) * lineHeight;
  let initX = initPosition.X,
    initY = initPosition.Y;

  //fondo del bloque
  canvasContext.fillStyle = "#3d414a";
  canvasContext.fillRect(initX, initY, blockWidth, blockHeight);

  //canvasContext.drawImage(authorAvatar, initX, initY, 2*lineHeight, 2*lineHeight);
  initX = IMAGE_MARGIN;
  

  canvasContext.save();
  canvasContext.beginPath();
  canvasContext.arc(lineHeight + initX, lineHeight + initY + 15, lineHeight, 0, Math.PI * 2, true);
  canvasContext.closePath();
  canvasContext.clip();

  canvasContext.drawImage(authorAvatar, initX , initY + 15, 2*lineHeight, 2*lineHeight);

  canvasContext.beginPath();
  canvasContext.arc(initX , initY + 15, lineHeight, 0, Math.PI * 2, true);
  canvasContext.clip();
  canvasContext.closePath();
  canvasContext.restore();



  //nombre de author
  canvasContext.fillStyle = authorColor;
  canvasContext.font = "38px Sans-serif";
  canvasContext.fillText(authorName, 2 * lineHeight +2 * IMAGE_MARGIN, lineHeight + initY);

  //mensaje
  canvasContext.font = "38px Sans-serif";
  canvasContext.fillStyle = "#bfbfbf";
  messageBlock.forEach((message, index) => {
    canvasContext.fillText(
      message,
      2 * lineHeight + 2 * IMAGE_MARGIN,
      lineHeight * (index + 2) + initY
    );
  });
}
