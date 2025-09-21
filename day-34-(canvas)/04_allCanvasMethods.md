Got it, bro. Since the W3Schools link isn't loading right now, I'll **explain each and every `<canvas>` method and property** from that reference **step by step** with:

* 💡 What it does
* 🤔 Why it's used
* ✅ Example
* 🖼️ What the output would look like

---

## 🎯 1. `getContext("2d")`

### 💡 What:

Returns a 2D drawing context object which lets you draw on the canvas.

### 🤔 Why:

Without this, you can't access any of the canvas drawing methods.

### ✅ Example:

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

---

## 🔳 2. `fillRect(x, y, width, height)`

### 💡 What:

Draws a **filled** rectangle.

### 🤔 Why:

Used when you want a solid-colored rectangle.

### ✅ Example:

```js
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 100, 60);
```

### 🖼️ Output:

A red rectangle starting at (20, 20) with width 100 and height 60.

---

## 🪟 3. `strokeRect(x, y, width, height)`

### 💡 What:

Draws the **border (outline)** of a rectangle.

### 🤔 Why:

Use it when you don't want a filled shape, only the outer edge.

### ✅ Example:

```js
ctx.strokeStyle = "blue";
ctx.strokeRect(20, 20, 100, 60);
```

### 🖼️ Output:

A blue-outlined rectangle.

---

## 🧼 4. `clearRect(x, y, width, height)`

### 💡 What:

**Erases** pixels in the specified rectangle to transparent.

### 🤔 Why:

Used to "clean" part or all of the canvas — for example, to clear live drawings.

### ✅ Example:

```js
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### 🖼️ Output:

Clears the entire canvas.

---

## 🖊️ 5. `beginPath()`

### 💡 What:

Starts a **new path** (like starting a new shape or drawing).

### 🤔 Why:

Required before drawing lines, curves, or shapes to separate new drawings from old ones.

### ✅ Example:

```js
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.stroke();
```

### 🖼️ Output:

A straight line from (50, 50) to (150, 50)

---

## 🧭 6. `moveTo(x, y)`

### 💡 What:

Moves the "drawing pen" to a new position without drawing.

### 🤔 Why:

Sets the starting point of your path or shape.

---

## 📏 7. `lineTo(x, y)`

### 💡 What:

Draws a straight line from the current position to (x, y).

### ✅ Example:

```js
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(100, 100);
ctx.stroke();
```

### 🖼️ Output:

A diagonal line from top-left to bottom-right.

---

## 🟠 8. `arc(x, y, radius, startAngle, endAngle [, anticlockwise])`

### 💡 What:

Draws a part of a circle (or a full circle).

### 🤔 Why:

Used for creating circles, curves, pie charts, etc.

### ✅ Example:

```js
ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2);
ctx.stroke();
```

### 🖼️ Output:

A circle centered at (75,75) with radius 50.

---

## 🎯 9. `fill()`

### 💡 What:

Fills the current path with the current `fillStyle`.

### ✅ Example:

```js
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2);
ctx.fill();
```

### 🖼️ Output:

A filled green circle.

---

## ✏️ 10. `stroke()`

### 💡 What:

Draws the outline of the current path using `strokeStyle`.

---

## 🎨 11. `fillStyle` & `strokeStyle`

### 💡 What:

Set the color or gradient for `fill()` and `stroke()`.

---

## ✍️ 12. Text Functions

### ✅ `fillText(text, x, y)`:

Draws filled text.

```js
ctx.font = "20px Arial";
ctx.fillText("Hello World", 50, 50);
```

### ✅ `strokeText(text, x, y)`:

Draws outlined text.

---

## 🎚️ 13. `lineWidth`, `lineCap`, `lineJoin`

### 💡 What:

Control how lines are drawn:

* `lineWidth` = thickness
* `lineCap` = shape at line ends
* `lineJoin` = shape at line corners

---

## 🧪 14. Transformations

* `translate(x, y)` — Move origin
* `rotate(angle)` — Rotate canvas
* `scale(x, y)` — Stretch/squish shapes

---

## 🧩 15. `drawImage()`

Draws an image onto the canvas.

```js
const img = new Image();
img.src = "img.jpg";
img.onload = () => ctx.drawImage(img, 0, 0, 100, 100);
```

---

## 🧬 16. `getImageData()`, `putImageData()`

Used for **pixel-level editing** like filters, copying parts, or reading color data.

---

## 🧼 17. `save()` and `restore()`

Saves and restores canvas state (colors, styles, transformations).

---

## 📦 18. `toDataURL()`

Exports the canvas as a base64 image string.

```js
const imgData = canvas.toDataURL("image/png");
```

---
---
---



### 🔁 `createLinearGradient(x0, y0, x1, y1)`

💡 Creates a linear color gradient from point A `(x0, y0)` to point B `(x1, y1)`.

🤔 Used to fill shapes with a smooth transition between colors.

✅

```js
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "blue");
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

---

### 🎨 `createRadialGradient(x0, y0, r0, x1, y1, r1)`

💡 Creates a circular gradient between two circles.

🤔 Useful for spotlight or bubble-like effects.

✅

```js
const radGrad = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
radGrad.addColorStop(0, "yellow");
radGrad.addColorStop(1, "green");
ctx.fillStyle = radGrad;
ctx.fillRect(10, 120, 200, 100);
```

---

### 🖼️ `createPattern(image, repetition)`

💡 Creates a repeating pattern using an image.

🤔 Used to fill shapes with textures or repeated designs.

✅

```js
const img = new Image();
img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 200, 200);
};
img.src = "image.png";
```

---

### 📸 `drawImage(image, x, y, [width], [height])`

💡 Draws an image to the canvas.

🤔 Used to display images or sprites.

✅

```js
const img = new Image();
img.onload = () => ctx.drawImage(img, 10, 10, 100, 100);
img.src = "photo.jpg";
```

---

### 🧪 `getImageData(x, y, width, height)`

💡 Gets pixel-level RGBA data from the canvas.

🤔 Useful for filters, color picking, image processing.

✅

```js
const imageData = ctx.getImageData(0, 0, 100, 100);
console.log(imageData.data); // Uint8ClampedArray of RGBA values
```

---

### 🎯 `putImageData(imageData, x, y)`

💡 Puts pixel data back onto the canvas.

🤔 Used to restore or modify images.

✅

```js
ctx.putImageData(imageData, 150, 0);
```

---

### 🧼 `clearRect(x, y, width, height)`

💡 Clears a rectangular area to transparent.

🤔 Used to erase parts of the canvas.

✅

```js
ctx.clearRect(0, 0, 500, 500); // Clear full canvas
```

---

### 📦 `canvas.toDataURL(type)`

💡 Converts canvas drawing to image URL.

🤔 Used to export as PNG, JPEG, etc.

✅

```js
const imgURL = canvas.toDataURL("image/png");
```

---

### 🖊️ `lineCap = 'butt' | 'round' | 'square'`

💡 Defines the shape of the end of lines.

✅

```js
ctx.lineCap = 'round';
```

---

### 📐 `lineJoin = 'bevel' | 'round' | 'miter'`

💡 Defines how two connecting lines are joined.

✅

```js
ctx.lineJoin = 'bevel';
```

---

### 📏 `lineWidth`

💡 Controls the thickness of strokes.

✅

```js
ctx.lineWidth = 5;
```

---

### 🔍 `shadowColor`, `shadowBlur`, `shadowOffsetX`, `shadowOffsetY`

💡 Add shadows to drawings.

✅

```js
ctx.shadowColor = "gray";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
```

---

### ✨ `globalAlpha`

💡 Sets transparency for all drawing operations.

✅

```js
ctx.globalAlpha = 0.5;
ctx.fillRect(20, 20, 100, 100); // semi-transparent
```

---

### 🧠 `save()` and `restore()`

💡 Save and revert the drawing state (styles, transforms, etc).

✅

```js
ctx.save();
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
ctx.restore(); // goes back to previous fillStyle
```

---

### ↔️ `translate(x, y)`

💡 Moves the canvas origin to a new location.

✅

```js
ctx.translate(100, 100);
```

---

### 🔄 `rotate(angle)`

💡 Rotates the canvas (in radians).

✅

```js
ctx.rotate(Math.PI / 4); // 45 degrees
```

---

### 🔍 `scale(x, y)`

💡 Stretches or shrinks the drawing context.

✅

```js
ctx.scale(2, 0.5); // double width, half height
```

---

### 🎭 `clip()`

💡 Creates a clipping region — only what’s inside the path will be visible.

✅

```js
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.clip();
ctx.fillRect(50, 50, 200, 200); // Only part inside circle is drawn
```

---

### 🔀 `isPointInPath(x, y)`

💡 Checks if a point is inside the current path.

✅

```js
ctx.beginPath();
ctx.rect(10, 10, 100, 100);
ctx.closePath();
console.log(ctx.isPointInPath(50, 50)); // true
```
