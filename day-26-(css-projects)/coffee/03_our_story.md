let’s go through the **“Our Story” section** step by step in beginner-friendly terms.

---

### 🔹 The HTML structure

```html
<section id="our-story">
    <div class="img-container">
        <div class="img"></div>
    </div>
    <div class="section-content">
        <div class="title-style">
            <h1 class="title">Our Story</h1>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur...
        </p>
        <button>Learn More</button>
    </div>
</section>
```

* `<section>` → groups everything as **one section of the website**.
* Inside, two main parts:

  1. **Image side** → `<div class="img"></div>` (a styled circle image).
  2. **Content side** → title (“Our Story”), paragraph text, and a button.

So visually it’s like:

```
[   Circle Image   ]   [  Title + Text + Button  ]
```

---

### 🔹 The CSS (explained simply)

#### 1. Section container

```css
#our-story {
    height: 100vh;
    margin-top: 15%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
```

* `height: 100vh;` → section takes the **full screen height**.
* `margin-top: 15%;` → pushes it down from the top (so it doesn’t overlap header/navbar).
* `display: flex;` → arranges children (`img-container` and `section-content`) **side by side**.
* `flex-wrap: wrap;` → if the screen is too small (mobile), items stack on top of each other.
* `justify-content: space-around;` → adds equal spacing between items.
* `align-items: center;` → vertically centers the content.

---

#### 2. The image

```css
.img {
    width: 400px;
    height: 400px;
    background: url(...coffee image...) no-repeat center;
    background-size: cover;
    border-radius: 50%;
}
```

* Creates a **400x400px box**.
* Fills it with a **coffee background image**.
* `border-radius: 50%` → makes it a **perfect circle**.
* `background-size: cover` → makes sure the image fills the circle nicely.

So you see a **round coffee picture**. ☕

---

#### 3. Title

```css
.title {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    color: #fff;
    transform: translateX(-20px);
}
```

* Big heading: **“Our Story”**.
* Uses a fancy serif font.
* White color.
* `transform: translateX(-20px);` → nudges it slightly to the left for style.

---

#### 4. Paragraph

```css
.section-content p {
    max-width: 500px;
    color: #fff;
    font-family: sans-serif;
    line-height: 20px;
    margin: 20px 0;
}
```

* Text is limited to a **maximum width of 500px** (so it doesn’t stretch too wide).
* White text, simple sans-serif font.
* `line-height: 20px;` → spaces lines for readability.
* Margin adds spacing around it.

---

#### 5. Button

```css
button {
    padding: 10px 30px;
    background-color: var(--main-color);
    border: none;
    cursor: pointer;
}
```

* Standard rectangular button.
* Gold background (your main theme color).
* No border, and cursor changes to a pointer on hover.

---

### ✅ In simple words

The **“Our Story” section** is like an **about us** block:

* On one side → a **round coffee image**.
* On the other side → a **title**, a **short paragraph**, and a **button** (“Learn More”).
* The whole thing is centered nicely using flexbox.

It’s basically showing **image + description side by side** in a clean layout.