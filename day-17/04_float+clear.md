# 🏄 Float in CSS

## 🔹 What is `float`?

The `float` property is used to **push an element to the left or right side** of its container, allowing other inline content (like text) to wrap around it.

👉 Think of how newspapers put an image on the left, and text flows beside it.

---

## 🔹 Values of `float`

* `left` → Floats element to the left.
* `right` → Floats element to the right.
* `none` → Default, no floating.
* `inline-start` / `inline-end` → Float based on writing direction.

---

## Example of `float`

```html
<img src="https://via.placeholder.com/100" class="left-img">
<p>
  This text will wrap around the image because the image is floated to the left.
  The paragraph text adjusts itself accordingly.
</p>
```

```css
.left-img {
  float: left;
  margin-right: 10px;
}
```

🔎 Result → Image stays at **left**, and text flows beside it.

---

# 🧹 Clear in CSS

## 🔹 Why `clear`?

When you use floats, sometimes following elements **wrap around unexpectedly**.
The `clear` property is used to **stop wrapping** and push the element below the floated elements.

---

## 🔹 Values of `clear`

* `left` → Prevents wrapping around left-floated elements.
* `right` → Prevents wrapping around right-floated elements.
* `both` → Prevents wrapping around **both**.
* `none` → Default, allows wrapping.

---

## Example with `clear`

```html
<img src="https://via.placeholder.com/100" class="left-img">
<p>This text wraps around the floated image.</p>
<p class="clear-para">This paragraph is below the image, not wrapped.</p>
```

```css
.left-img {
  float: left;
  margin-right: 10px;
}

.clear-para {
  clear: left; /* pushes below floated image */
}
```

🔎 Result →

* First paragraph wraps around image.
* Second paragraph is **forced below** the image.

---

# ✅ Final Summary

* **Float** moves an element left or right, and lets text/content flow around it.
* **Clear** is used after floating, to prevent unwanted wrapping (push element below float).
