# 🔹 What is `transform` in CSS?

The **`transform` property** lets you **visually change (transform) an element** without disturbing the rest of the page layout.

It can move, rotate, scale, or skew elements in **2D and 3D space**.

👉 Important: Transforms don’t affect the element’s actual place in the DOM flow — only its **appearance**.

---

# 🔹 Basic Syntax

```css
selector {
  transform: function(value);
}
```

* `function(value)` → tells what kind of transformation to apply.
* You can chain multiple functions together.

---

# 🔹 Common 2D Transform Functions

### 1. **translate()** → Move element

Moves element on **X and/or Y axis**.

```css
.box {
  transform: translate(50px, 100px); /* Right 50px, Down 100px */
}
```

### 2. **rotate()** → Rotate element

Rotates clockwise by default.

```css
.box {
  transform: rotate(45deg); /* Rotates 45 degrees */
}
```

### 3. **scale()** → Resize element

Scales width (X) and height (Y).

```css
.box {
  transform: scale(1.5);      /* 150% bigger */
  transform: scale(1, 0.5);   /* Stretch width, shrink height */
}
```

### 4. **skew()** → Slant element

Tilts an element on X and/or Y axis.

```css
.box {
  transform: skew(20deg, 10deg); /* Slant in both directions */
}
```

### 5. **matrix()** → Advanced transform

A shorthand that combines translate, rotate, scale, and skew in one function (rarely written by hand).

---

# 🔹 3D Transforms

### 1. **translate3d() / translateX() / translateY() / translateZ()**

```css
.box {
  transform: translateZ(50px); /* Moves forward (towards you) */
}
```

### 2. **rotateX(), rotateY(), rotateZ()**

```css
.box {
  transform: rotateX(45deg); /* Tilt forward/back */
}
```

### 3. **scale3d()**

```css
.box {
  transform: scale3d(1.5, 1, 0.5); /* X, Y, Z scaling */
}
```

---

# 🔹 Combining Multiple Transforms

You can chain them:

```css
.box {
  transform: translate(50px, 50px) rotate(30deg) scale(1.2);
}
```

✔ Moves, rotates, and scales in one go.
⚠️ Order matters → rotate then translate ≠ translate then rotate.

---

# 🔹 With `transform-origin`

By default, transforms happen around the **center**.
You can change the pivot point:

```css
.box {
  transform: rotate(45deg);
  transform-origin: top left;
}
```

✔ Rotates around the **top-left corner** instead of the center.

---

# 🔹 Real-world Examples

### ✅ Button Hover Zoom

```css
button:hover {
  transform: scale(1.1);
}
```

### ✅ Card Flip (3D)

```css
.card {
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}
```

### ✅ Image Hover Tilt

```css
img:hover {
  transform: rotate(5deg) scale(1.05);
}
```

---

# 🔹 Important Notes

1. **Performance-friendly** → `transform` is GPU-accelerated.
2. Doesn’t affect document flow (other elements stay in place).
3. Can be combined with `transition` for smooth animations.

---

✅ In short:
The **`transform` property** in CSS changes how elements **look in 2D or 3D space** (move, rotate, scale, skew) without affecting the layout. It’s super useful for animations, hover effects, and interactive designs.
