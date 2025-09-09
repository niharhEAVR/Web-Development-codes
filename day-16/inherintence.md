## 🌱 What is Inheritance in CSS?

**Inheritance in CSS** means that **some CSS properties applied to a parent element are automatically passed down (inherited) by its child elements**.
This helps avoid writing the same CSS multiple times.

---

## 🖼 Example

```html
<div class="parent">
  <p>This is a paragraph inside the parent.</p>
  <span>This is a span inside the parent.</span>
</div>
```

```css
.parent {
  color: blue;
  font-family: Arial, sans-serif;
}
```

🔹 Result: Both `<p>` and `<span>` inside `.parent` will display text in **blue Arial font** — even though you didn’t style them directly.

---

## ✅ Properties That Are Inherited by Default

Not all properties inherit. Usually **text-related properties** inherit:

* `color`
* `font-family`
* `font-size`
* `font-style`
* `font-weight`
* `line-height`
* `visibility`

---

## ❌ Properties That Do NOT Inherit by Default

Most **box-model, layout, and background properties** do not inherit:

* `margin`
* `padding`
* `border`
* `background`
* `width`, `height`
* `display`
* `position`

---

## 🎛 Forcing Inheritance (or Not)

You can **control inheritance** using special keywords:

* `inherit` → forces a property to inherit from parent.
* `initial` → resets the property to its default value.
* `unset` → acts as `inherit` if the property is normally inheritable, otherwise `initial`.

### Example:

```css
p {
  background-color: inherit; /* will take parent's background */
  margin: initial;           /* resets margin to default (usually 16px) */
  color: unset;              /* acts like inherit since color is inheritable */
}
```

---

## 🌟 Why is Inheritance Useful?

* Reduces repetition in CSS.
* Makes it easier to maintain a consistent style (like fonts/colors).
* Helps in creating a clean "cascading" styling structure.

---
---
---




* **`initial`**
* **`unset`**

Let’s carefully go through them with examples.

---

## 1️⃣ `initial`

* Meaning: **reset the property to its default value defined by CSS** (not the browser stylesheet).
* It does **not** look at the parent at all.
* Example:

```html
<div class="parent">
  <p class="child">Hello World</p>
</div>
```

```css
.parent {
  color: red;   /* parent text color */
}

.child {
  color: initial;
}
```

👉 Result:

* Normally, `<p>` would inherit `red`.
* But `color: initial;` resets it back to **browser default** (usually `black`).

---

## 2️⃣ `unset`

* Meaning:

  * If the property is **normally inherited** (like `color`, `font-family`), then `unset` acts like `inherit`.
  * If the property is **not normally inherited** (like `margin`, `border`), then `unset` acts like `initial`.

So it’s a **smart keyword** that adapts.

### Example:

```html
<div class="parent">
  <p class="child">Hello World</p>
</div>
```

```css
.parent {
  color: red;
  margin: 50px;
}

.child {
  color: unset;   /* acts like inherit, so -> red */
  margin: unset;  /* acts like initial, so -> 0 (browser default) */
}
```

👉 Result:

* Child text color = `red` (inherited).
* Child margin = `0` (reset to default, not 50px).

---

✅ **Summary Table**

| Keyword   | Effect                                                        |
| --------- | ------------------------------------------------------------- |
| `inherit` | Always takes value from parent.                               |
| `initial` | Always resets to CSS default (browser stylesheet).            |
| `unset`   | Acts as `inherit` if property is inheritable, else `initial`. |
