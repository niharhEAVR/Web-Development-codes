## 🔹 What is `:not()` in CSS?

`:not()` is a **CSS pseudo-class** that selects elements **that do NOT match a given selector**.
It’s also called the **negation pseudo-class**.

---

## 🔹 Syntax

```css
selector:not(condition) {
  property: value;
}
```

* `condition` is the thing you want to **exclude**.
* It applies the styles to everything else that matches the base `selector`.

---

## 🔹 Example 1: Exclude one element

```css
p:not(.highlight) {
  color: gray;
}
```

✔ All `<p>` will be gray, **except** the ones with class `highlight`.

---

## 🔹 Example 2: Exclude a tag

```css
li:not(:last-child) {
  margin-right: 10px;
}
```

✔ Adds spacing to all `<li>`, **except the last one** (useful for menus).

---

## 🔹 Example 3: Exclude multiple

`:not()` can take **only one simple selector** at a time, but you can chain it:

```css
button:not(.primary):not(.secondary) {
  background: gray;
}
```

✔ Styles all buttons **except** `.primary` and `.secondary`.

---

## 🔹 Example 4: Combined with `:is()`

You can combine `:not()` with `:is()` for multiple exclusions:

```css
div:not(:is(.box, .card)) {
  border: 1px solid red;
}
```

✔ Adds border to `<div>` except those with `.box` or `.card`.

---

## 🔹 Real-world use

* Styling **all inputs except checkboxes**:

```css
input:not([type="checkbox"]) {
  border: 1px solid black;
}
```

* Styling **all links except inside nav**:

```css
a:not(nav a) {
  color: blue;
}
```

---

✅ In short:

* `:not()` = **“select everything EXCEPT this”**.
* Helps avoid writing long selectors with exclusions.
* Works great with `:is()` for cleaner code.