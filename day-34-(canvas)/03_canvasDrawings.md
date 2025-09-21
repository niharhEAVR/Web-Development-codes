# 🧱 Canvas Basics

### 🔹 Create and Access the Canvas

```html
<canvas id="myCanvas" width="400" height="300"></canvas>

<script>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");  // 2D drawing context
</script>
```

The `ctx` object gives access to all the drawing methods.

---

# ✏️ Drawing Shapes

---

## 🔸 1. **Rectangles**

### ✅ `fillRect(x, y, width, height)`

Draws a **filled** rectangle.

```js
ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 100, 60);
```

### ✅ `strokeRect(x, y, width, height)`

Draws only the **border**.

```js
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.strokeRect(50, 50, 100, 60);
```

### ✅ `clearRect(x, y, width, height)`

**Clears** part of the canvas (makes it transparent).

```js
ctx.clearRect(60, 60, 30, 30);
```

---

## 🔸 2. **Paths and Lines**

You can draw **custom shapes** using paths.

### ✅ Example:

```js
ctx.beginPath();
ctx.moveTo(20, 20);      // start point
ctx.lineTo(120, 20);     // draw line
ctx.lineTo(70, 70);      // another line
ctx.closePath();         // optional: connect back to start
ctx.stroke();            // draw outline
ctx.fill();              // fill inside
```

---

## 🔸 3. **Circles and Arcs**

### ✅ `ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)`

* Angles are in **radians**.
* `0` = right, `Math.PI` = half circle, `2*Math.PI` = full.

```js
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();
```

---

# 🖋️ Drawing Styles

---

## 🔸 1. **Colors**

```js
ctx.fillStyle = "red";         // fill color
ctx.strokeStyle = "black";     // border color
ctx.lineWidth = 3;             // border thickness
```

---

## 🔸 2. **Transparency (Alpha)**

```js
ctx.globalAlpha = 0.5; // 0 = fully transparent, 1 = opaque
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 100, 100);
```

---

## 🔸 3. **Gradients**

### ✅ Linear Gradient

```js
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "yellow");
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

### ✅ Radial Gradient

```js
const radial = ctx.createRadialGradient(100, 100, 10, 100, 100, 70);
radial.addColorStop(0, "white");
radial.addColorStop(1, "blue");
ctx.fillStyle = radial;
ctx.fillRect(0, 0, 200, 200);
```

---

# ✍️ Drawing Text

---

## 🔸 1. **Basic Text**

```js
ctx.font = "30px Arial";
ctx.fillStyle = "purple";
ctx.fillText("Hello Canvas", 50, 50);  // (text, x, y)

ctx.strokeText("Outline Text", 50, 100);
```

---

## 🔸 2. **Text Alignments**

```js
ctx.textAlign = "center";     // left, right, center, start, end
ctx.textBaseline = "middle"; // top, bottom, middle, alphabetic
```

---

# 🖼️ Drawing Images

---

## 🔸 1. **Insert an Image**

```html
<img id="logo" src="logo.png" style="display:none;" />
```

```js
const img = document.getElementById("logo");
img.onload = () => {
  ctx.drawImage(img, 10, 10, 100, 100);  // (img, x, y, w, h)
}
```

---

# 🌀 Transformations

Used to **move**, **rotate**, or **scale** drawings.

---

## 🔸 1. **Translate (Move Origin)**

```js
ctx.translate(100, 50);  // shift origin
ctx.fillRect(0, 0, 50, 50); // this appears at (100, 50)
```

---

## 🔸 2. **Rotate**

```js
ctx.rotate(Math.PI / 4); // 45 degrees in radians
```

> ⚠️ Must call `translate()` before `rotate()` to rotate around a center point.

---

## 🔸 3. **Scale**

```js
ctx.scale(2, 2);  // 2x width and height
```

---

## 🔸 4. **Reset Transform**

```js
ctx.setTransform(1, 0, 0, 1, 0, 0); // reset to default
```

---

# 🧽 Pixel Manipulation

---

## 🔸 1. **Read Pixels**

```js
const imageData = ctx.getImageData(0, 0, 100, 100);
console.log(imageData.data); // Uint8ClampedArray with RGBA values
```

---

## 🔸 2. **Manipulate and Write Pixels**

```js
let data = imageData.data;
for (let i = 0; i < data.length; i += 4) {
  data[i] = 255;      // Red
  data[i+1] = 0;      // Green
  data[i+2] = 0;      // Blue
  data[i+3] = 255;    // Alpha
}
ctx.putImageData(imageData, 0, 0);
```

---

# 🎞️ Animation

---

## 🔸 1. `requestAnimationFrame()`

Used for smooth, efficient animations.

### ✅ Example: Moving Box

```js
let x = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x, 50, 50, 50);
  x += 2;
  requestAnimationFrame(animate);
}

animate();
```

---

# 🧱 Hit Testing / Interaction

Canvas does **not** have built-in clickable elements. You must manually detect interaction.

```js
canvas.addEventListener("click", function(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (x > 50 && x < 100 && y > 50 && y < 100) {
    alert("You clicked the square!");
  }
});
```

---

# 🧠 Summary Table of Features

| Feature         | Method / Property                              |
| --------------- | ---------------------------------------------- |
| Draw shapes     | `fillRect`, `strokeRect`, `arc`, `lineTo`      |
| Styles/colors   | `fillStyle`, `strokeStyle`, `lineWidth`        |
| Gradients       | `createLinearGradient`, `createRadialGradient` |
| Text            | `fillText`, `strokeText`, `font`               |
| Images          | `drawImage`, `getImageData`, `putImageData`    |
| Transformations | `translate`, `rotate`, `scale`                 |
| Animation       | `requestAnimationFrame()`                      |
| Interaction     | `canvas.addEventListener()`                    |

---

# 🚀 What Can You Build?

* Animated logo
* Drawing app (like MS Paint)
* Interactive charts
* 2D games (like Flappy Bird or Pong)
* Signature capture
* Visual simulations (e.g., particles, physics)
