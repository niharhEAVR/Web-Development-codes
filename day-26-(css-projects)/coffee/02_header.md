You’ve already got your **nav bar** at the top. Now comes the **header section**, which is like the “hero section” of a website → the big area you usually see first, with a background image, some text, and a button.

---

### 🔹 The HTML

```html
<header class="header">
    <h1 class="main-headings">Start Your Day</h1>
    <h1 class="primary-headings">With Your Coffee</h1>
    <button class="main-btn">Shop Now</button>
</header>
```

This creates:

* A **header block** (`<header>` tag with class `header`).
* Inside it:

  1. A heading → “Start Your Day”
  2. Another heading → “With Your Coffee”
  3. A button → “Shop Now”

So it’s like a **welcome section** with a call-to-action button.

---

### 🔹 The CSS (explained simply)

#### 1. Background of the header

```css
.header {
    background: url('...coffee image...') no-repeat center;
    background-size: cover;
    height: 100vh;
    ...
}
```

* Uses a coffee image as **background**.
* `no-repeat` → image won’t repeat.
* `center` → centers the image.
* `background-size: cover;` → makes the image fill the entire area.
* `height: 100vh;` → header takes up **the full screen height** (“vh” means viewport height).

👉 So this makes it a **full-page banner** with a background image.

---

#### 2. Layout with flexbox

```css
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
```

* Turns header into a **flexbox container**.
* Places its children (`h1`, `h1`, `button`) in a **column** (top-to-bottom).
* Centers them horizontally and vertically.
* Aligns text in the middle.

---

#### 3. The headings

```css
.main-headings {
    position: absolute;
    top: 7rem;
    font-size: 4rem;
}
.primary-headings {
    position: absolute;
    bottom: 4rem;
    font-size: 4rem;
}
```

* `.main-headings` (Start Your Day) → stuck near the **top of the screen** (7rem from the top).
* `.primary-headings` (With Your Coffee) → stuck near the **bottom of the screen** (4rem from bottom).
* Both are **big text** (`4rem` ≈ 64px).

---

#### 4. The button

```css
.main-btn {
    position: absolute;
    bottom: 2rem;
    padding: 10px 30px;
    background: var(--main-color);
    transform: translateY(60px);
}
```

* Placed near the **bottom** of the screen (2rem from bottom).
* Styled with padding and background color (gold).
* `transform: translateY(60px);` → pushes it a little further down, so it doesn’t overlap the text.

---

### ✅ In Simple Words

* The **header section** is like a **hero banner**.
* It fills the entire screen with a coffee background image.
* The text **“Start Your Day”** is big and near the top.
* The text **“With Your Coffee”** is big and near the bottom.
* A gold **“Shop Now” button** is floating at the bottom center.
* Everything is centered and easy to read.

---
---
---

> **The screen means you saying that the 100vh screen not the actual window becasue actual window is containing the navbar and the header along with?**

Exactly 👍 you’ve caught the important difference!

When we say:

```css
.header {
   height: 100vh;
}
```

* **`100vh`** = **100% of the viewport height** (the visible browser window height).
* It doesn’t care about the navbar or anything else — it always tries to fill the **entire screen height** by itself.

---

### 🔹 What happens in your page right now

* First → the **navbar** sits at the very top.
* Then → the **header section** starts **below the navbar**, but it still tries to take up `100vh` (the whole screen).
* So visually →

  * You see the navbar + header together.
  * This means you actually scroll a little, because total page height = **navbar height + 100vh**.

---

### ✅ So in short:

* **Window / Viewport height** = what `100vh` refers to.
* **Actual webpage height** = navbar height + header height + rest of sections.