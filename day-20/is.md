## 🔹 What is `:is()` in CSS?

`:is()` is a **CSS pseudo-class function** used to group multiple selectors together in a clean way.

It helps shorten long, repetitive selectors and makes your CSS easier to read.

---

## 🔹 Syntax

```css
:is(selector1, selector2, selector3) {
  property: value;
}
```

* It applies the given style to any element that matches **one of the selectors inside**.

---

## 🔹 Example 1: Simple usage

Instead of writing:

```css
h1, h2, h3 {
  color: blue;
}
```

You can write:

```css
:is(h1, h2, h3) {
  color: blue;
}
```

Both do the same thing → all `<h1>`, `<h2>`, and `<h3>` will be blue.

---

## 🔹 Example 2: Inside another selector

```css
article :is(h1, h2, h3) {
  color: darkgreen;
}
```

✔ This will color all headings **inside `<article>`** as dark green.

---

## 🔹 Example 3: With classes

```css
:is(.btn, .link, button) {
  padding: 10px;
  border-radius: 5px;
}
```

✔ Any element with class `.btn`, `.link`, or the `<button>` tag will get the same styles.

---

## 🔹 Why use `:is()`?

1. **Cleaner CSS** → Avoids repeating long parent selectors.
2. **Readability** → Easier to maintain.
3. **Browser support** → Works in all modern browsers (except IE).

---

⚡ **Special note:**
The **specificity** of `:is()` is equal to the **most specific selector inside it**, not the pseudo-class itself.
Example:

```css
:is(div#box, .card, p) { ... }
```

👉 Specificity comes from `div#box` (ID level), because that’s the strongest inside.

---

✅ In short:
`:is()` lets you combine multiple selectors in one place without repeating code.
