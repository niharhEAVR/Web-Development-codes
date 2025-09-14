Let’s go through the **Coffee Section** step by step, in the same beginner-friendly way.

---

## 🔹 The HTML

```html
<section class="coffee-container">
    <!-- LEFT SIDE: Text content -->
    <div class="content-section">
        <div class="title-style">
            <h1 class="title-two">Perfect place <br> To enjoy your <br> coffee</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <button style="margin-top: 20px;">Learn More</button>
    </div>

    <!-- RIGHT SIDE: Image -->
    <section class="img-container">
        <img src="coffee-image.jpg" alt="img-2">
    </section>
</section>
```

* **`<section class="coffee-container">`** → wraps everything in one block.
* Inside it:

  1. **Left side**: `content-section` → title, paragraph, and button.
  2. **Right side**: `img-container` → coffee photo.

So the layout is:

```
[ Text (Title + Para + Button) ]   [ Coffee Image ]
```

---

## 🔹 The CSS (explained simply)

### 1. Section container

```css
.coffee-container {
    height: 100vh;
    margin-top: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
```

* `height: 100vh;` → section takes full screen height.
* `margin-top: 10rem;` → leaves space above (so it’s not stuck to the previous section).
* `display: flex;` → puts text and image **side by side**.
* `flex-wrap: wrap;` → if the screen is too small, text and image will **stack** vertically.
* `justify-content: space-around;` → spaces them out nicely.
* `align-items: center;` → aligns everything vertically in the middle.

---

### 2. Text content

```css
.content-section p {
    max-width: 500px;
    font-family: sans-serif;
    margin-top: 20px;
    color: #fff;
}
```

* The paragraph is limited to **500px wide** → easier to read.
* White text color.
* Has space (`margin-top`) above it.

```css
.title-two {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #fff;
    font-family: 'Playfair Display', serif;
}
```

* Big title: **“Perfect place To enjoy your coffee”**.
* Uses the fancy serif font.
* White color.
* Slight margin below, so it doesn’t stick to the paragraph.

---

### 3. Image side

```css
.img-container {
    flex-basis: 30%;
}

.img-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}
```

* `flex-basis: 30%;` → the image side takes about **30% of the row space**.
* Image is responsive:

  * `width: 100%` → fills the container.
  * `height: auto` → keeps natural proportions.
* `border-radius: 10px;` → gives the image slightly rounded corners.

---

## ✅ In simple words

The **Coffee Section** is another two-column layout:

* **Left side** → big heading, short text, and a “Learn More” button.
* **Right side** → a nice coffee image with rounded corners.
* The section is full screen height, centered, and adjusts for smaller screens.

It’s like a **promotional block** saying:
📢 *“This is the perfect place to enjoy your coffee — click Learn More!”*
