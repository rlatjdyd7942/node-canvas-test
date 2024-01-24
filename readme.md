# Node Canvas Image Generate

## How to run
```bash
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman
npm install canvas
node index.js
```

## Details below

https://www.npmjs.com/package/canvas
```bash
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman
npm install canvas
```

##### package.json
```json
{
  // ...
  "type": "module",
  // ...
}
```

```javascript
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
registerFont("RubikBurned-Regular.ttf", { family: "RubikBurned" });
ctx.fillStyle = "#EEEEEE";
ctx.font = "30px RubikBurned";
ctx.textBaseline = 'top'
ctx.fillText("A chicken", 100, 100);

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("./image.png", buffer);
```
