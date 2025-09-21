## 🧾 What is HTML `<canvas>`?

The `<canvas>` element is a container for **drawing graphics on the fly** using **JavaScript**.

Think of it like:

* A **blank whiteboard** inside your HTML page.
* You can draw **lines, shapes, text, images, animations, games**, etc.

---

## ✅ Basic Syntax

```html
<canvas id="myCanvas" width="400" height="200"></canvas>
```

Then you draw on it using JavaScript:

```html
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 150, 75); // (x, y, width, height)
</script>
```

---

## 🧠 Key Concepts

| Concept            | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `<canvas>`         | HTML element, blank drawing area                                         |
| `getContext('2d')` | Returns the 2D drawing context (or `'webgl'` for 3D)                     |
| `ctx` (context)    | All drawing is done through this object using methods like `.fillRect()` |

---

## ✏️ Common Drawing Functions

### 🔹 1. **Rectangles**

```js
ctx.fillRect(x, y, width, height);        // filled rectangle
ctx.strokeRect(x, y, width, height);      // outlined rectangle
ctx.clearRect(x, y, width, height);       // clears area
```

---

### 🔹 2. **Lines**

```js
ctx.beginPath();
ctx.moveTo(50, 50);   // start
ctx.lineTo(200, 100); // end
ctx.stroke();         // draw it
```

---

### 🔹 3. **Circles/Arcs**

```js
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI); // x, y, radius, startAngle, endAngle
ctx.fill();
```

---

### 🔹 4. **Text**

```js
ctx.font = "30px Arial";
ctx.fillStyle = "blue";
ctx.fillText("Hello", 50, 50);  // filled text

ctx.strokeText("Canvas", 50, 100); // outlined text
```

---

### 🔹 5. **Images**

```html
<img id="myImg" src="logo.png" style="display:none;">
<script>
  const img = document.getElementById("myImg");
  ctx.drawImage(img, 10, 10, 100, 100);
</script>
```

---

### 🔹 6. **Colors and Styles**

```js
ctx.fillStyle = "green";   // fill color
ctx.strokeStyle = "blue";  // border color
ctx.lineWidth = 4;         // thickness
```

---

### 🔹 7. **Gradients**

```js
let gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "blue");

ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

---

### 🔹 8. **Transformations**

```js
ctx.translate(50, 50);  // move origin
ctx.rotate(Math.PI / 4); // rotate 45 degrees
ctx.scale(2, 2);        // scale 2x
```

---

## ⚙️ Animation with `requestAnimationFrame`

```js
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x, 20, 50, 50);
  x += 1;
  requestAnimationFrame(animate);
}
animate();
```

> 🔄 Used for smooth animations like in games.

---

## 🎮 Real World Use Cases

| Use Case           | Canvas Role                              |
| ------------------ | ---------------------------------------- |
| Games              | Drawing sprites, collision detection     |
| Data Visualization | Charts, graphs (used in Chart.js, D3.js) |
| Image Editors      | Drawing, cropping, filters               |
| Simulations        | Physics, particles, fluid simulations    |
| Signatures         | Capturing user signature input           |

---

## ⚠️ Important Notes

* **Canvas is pixel-based** — once you draw, it's just like drawing on a bitmap. You can’t directly manipulate the "DOM" inside it.
* **Canvas doesn’t support accessibility or SEO** — for interactive UIs, use DOM or SVG.
* **Responsive design** — you have to manually resize and scale canvas elements.

---

## 📚 Bonus: Drawing a Simple Smile Face

```html
<canvas id="face" width="200" height="200"></canvas>
<script>
const canvas = document.getElementById("face");
const ctx = canvas.getContext("2d");

// face
ctx.beginPath();
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

// eyes
ctx.beginPath();
ctx.arc(70, 80, 10, 0, 2 * Math.PI);
ctx.arc(130, 80, 10, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

// mouth
ctx.beginPath();
ctx.arc(100, 110, 40, 0, Math.PI);
ctx.stroke();
</script>
```

---

## 🧠 Summary

| Feature            | Purpose                       |
| ------------------ | ----------------------------- |
| `<canvas>`         | HTML drawing surface          |
| `getContext("2d")` | Drawing API                   |
| Use JS to draw     | Lines, shapes, text, images   |
| Great for          | Games, charts, visual effects |
