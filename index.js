import { createCanvas, registerFont, Image } from "canvas";
import * as fs from 'fs';

const canvas = createCanvas(1050, 200);

const ctx = canvas.getContext('2d')
const imageUrl = './41e7407f-706a-478a-9836-1dc900f46c72 (2).jpeg'
const image = new Image()
image.onload = function() {
    ctx.drawImage(image, 0, 0, 1050, 200)
}
image.src = imageUrl
// const myFont = new FontFace(
//   "Pangolin",
//   "url(https://fonts.gstatic.com/s/pangolin/v6/cY9GfjGcW0FPpi-tWMfN79z4i6BH.woff2)"
// )
// await myFont.load()
// document.fonts.add(myFont)
registerFont("RubikBurned-Regular.ttf", { family: "RubikBurned" });
ctx.fillStyle = "#EEEEEE";
ctx.font = "30px RubikBurned";
ctx.textBaseline = 'top'
ctx.fillText("A chicken", 100, 100);

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("./image.png", buffer);