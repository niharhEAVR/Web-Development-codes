## 🔹 The HTML

```html
<footer>
    <div class="footer-container">
        <div class="container">
            <h1 class="heading-info">About <span>Us</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div class="container">
            <h1 class="heading-info">Contact <span>Us</span></h1>
            <p>123 Coffee St, New York, NY 10001</p>
            <p>Email: info@coffee.com</p>
        </div>
        <div class="container">
            <h1 class="heading-info">Follow <span>Us</span></h1>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
    </div>
    <p class="copyright">© 2025 Coffee. All rights reserved.</p>
</footer>
```

* **`<footer>`** → marks this as the footer section of the website.
* Inside it, you have **three mini sections (`.container`)**:

  1. **About Us** → short description.
  2. **Contact Us** → address + email.
  3. **Follow Us** → social links (Facebook, Twitter, Instagram).
* At the very bottom → a **copyright line**.

So visually:

```
[ About Us   |   Contact Us   |   Follow Us ]
                (Copyright text below)
```

---

## 🔹 The CSS (explained simply)

### 1. Footer itself

```css
footer {
    height: 50vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 5rem;
}
```

* `height: 50vh;` → footer takes **half the screen height**.
* `display: flex;` → arranges items inside (the `footer-container` and copyright) horizontally.
* `flex-wrap: wrap;` → if screen is small, items stack on top of each other.
* `justify-content: center;` → centers content horizontally.
* `align-items: center;` → vertically centers items inside.
* `color: #fff;` → all text is white.
* `margin-top: 5rem;` → leaves space above footer from previous section.

---

### 2. Footer container

```css
.footer-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
}
```

* Makes the **three `.container` blocks** sit **side by side**.
* `justify-content: space-around;` → spreads them evenly across the width.
* `width: 100%;` → takes up the full page width.

---

### 3. Individual mini sections

```css
footer .container {
    margin: 0 20px;
    max-width: 300px;
    text-align: center;
}
```

* Each `.container` (About, Contact, Follow) has a **max width of 300px**.
* `margin: 0 20px;` → spacing between them.
* `text-align: center;` → centers all text inside.

---

### 4. Headings

```css
footer .heading-info {
    margin-bottom: 20px;
}
```

* Adds space below each heading (“About Us”, “Contact Us”, “Follow Us”).

---

### 5. Paragraph text

```css
footer p {
    line-height: 20px;
}
```

* Makes sure each line of text has **20px spacing** → easier to read.

---

### 6. Highlight color

```css
span {
    color: var(--main-color);
}
```

* Any `<span>` inside gets the **main theme color (gold)**.
* That’s why “Us” in your headings is gold. ✨

---

### 7. Copyright

```html
<p class="copyright">© 2025 Coffee. All rights reserved.</p>
```

* Simple white text, centered below everything.

---

## ✅ In simple words

The **Footer Section** is the bottom part of your site.

* It has **3 main blocks**: About, Contact, and Follow.
* They are arranged **side by side on desktop** but will **stack on smaller screens** (thanks to flex-wrap).
* The word “Us” in headings is highlighted in gold.
* At the bottom, a **copyright line** is shown.

It looks clean, structured, and easy to read.
