## 🔹 What is a Media Query?

A **media query** in CSS is like a conditional rule — it tells the browser:

> “Apply these styles only if the device screen matches certain conditions (width, orientation, etc).”

It lets you make your page **responsive** (look good on all screen sizes).

---

## 🔹 Your Code’s Media Queries

You have two media queries:

### 1.

```css
@media screen and (orientation: landscape) {
  body {
    border: 2px solid purple;
  }
}
```

**Breakdown:**

* `@media` → starts the media query.
* `screen` → the type of device/media.
  👉 This targets **screens only** (not printers, speech readers, etc).
* `(orientation: landscape)` → condition.
  👉 Applies when the device is **wider than it is tall** (landscape mode).

**Effect:**
When the screen is in **landscape orientation**, your `<body>` gets a **purple border**.

---

### 2.

```css
@media only screen and (max-width: 455px) {
  body {
    background-color: lightpink;
  }
  .container {
    flex-direction: column;
  }
  .box {
    background-color: rgb(228, 72, 72);
  }
}
```

**Breakdown:**

* `only` → optional keyword, used to prevent old browsers (that don’t support media queries) from applying these rules. (In modern browsers, `only` makes no difference.)
* `screen` → again, target is screens.
* `(max-width: 455px)` → condition.
  👉 Apply these styles only when the **viewport width is 455px or smaller** (like mobile phones).

**Effect (on small screens ≤ 455px):**

* The **background** becomes **light pink**.
* `.container` changes from row (`flex-direction: row` by default) to **column** → boxes stack vertically.
* `.box` color changes to **red (rgb(228,72,72))**.

---

## 🔹 Keywords You Used

* `@media` → starts the query.
* `screen` → media type (can also be `print`, `speech`, `all`).
* `only` → used for backward compatibility (safe to ignore now).
* `(orientation: landscape)` → condition for screen orientation.
* `(max-width: 455px)` → condition for maximum screen width.

---

## 🔹 How They Work Together

* On **normal desktop view** (> 455px, portrait):

  * Background: dark gray
  * Boxes: steelblue

* On **landscape orientation**:

  * A purple border appears around `<body>`

* On **mobile/small screen (≤ 455px)**:

  * Background turns light pink
  * Boxes stack vertically
  * Boxes turn red

---

👉 In simple words:
**Media queries are “if statements” in CSS.**
They say: *“If screen size is small, do this. If orientation is landscape, do that.”*

---
---
---


Media queries are made of **media types** + **media features/keywords**. You already saw `screen`, `only`, `and`, `(max-width: …)`, `(orientation: …)`. There are many more.

---

## 🔹 Media Types

These define *what kind of device/output* you’re targeting:

* `all` → default, matches all devices.
* `screen` → for screens (computers, tablets, phones).
* `print` → for print preview/printing.
* `speech` → for screen readers that read text aloud.

---

## 🔹 Media Features (Conditions you can test)

These are the **keywords inside parentheses**:

### 📏 Size-related

* `width`, `height` → width/height of the **viewport**.
* `device-width`, `device-height` → physical device’s screen size (rarely used now).
* `min-width`, `max-width` → minimum/maximum width (most common for responsive design).
* `min-height`, `max-height` → same, but for height.

Example:

```css
@media (min-width: 768px) { ... }  /* tablets and bigger */
@media (max-width: 480px) { ... }  /* mobile phones */
```

---

### 📐 Orientation

* `orientation: portrait` → taller than wide.
* `orientation: landscape` → wider than tall.

---

### 🎨 Resolution & Display

* `resolution` → pixel density (e.g., `300dpi`, `2dppx`).
* `color` → checks if device supports color.
* `color-index` → number of colors available.
* `monochrome` → checks if the device is black/white only.

Example:

```css
@media (min-resolution: 2dppx) { ... }  /* Retina / HiDPI displays */
```

---

### 🌞 Light & Contrast

* `prefers-color-scheme` → detects if user prefers light or dark mode.

  ```css
  @media (prefers-color-scheme: dark) {
    body { background: black; color: white; }
  }
  ```
* `prefers-contrast` → detects if user prefers high or low contrast.
* `prefers-reduced-motion` → checks if user disabled animations for accessibility.

  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; }
  }
  ```

---

### 🖥 Interaction

* `hover` → does the device support hover? (`hover: none` for touch screens).
* `pointer` → precision of pointing device (`fine` = mouse, `coarse` = finger).

Example:

```css
@media (hover: hover) and (pointer: fine) {
  button:hover { background: blue; }
}
```

---

### 🧩 Logical Keywords

* `and` → combine multiple conditions.

  ```css
  @media screen and (max-width: 600px) { ... }
  ```
* `not` → negates the query.

  ```css
  @media not screen and (max-width: 600px) { ... }
  ```
* `only` → prevents older browsers from applying unsupported queries.

---

✅ So, **common in responsive web design** are:
`min-width`, `max-width`, `orientation`, `prefers-color-scheme`, `hover`, `pointer`.

✅ **Less common but useful**: `resolution`, `prefers-reduced-motion`, `light-level`, `aspect-ratio`.
