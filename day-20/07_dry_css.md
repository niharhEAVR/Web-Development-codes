In CSS, **DRY = Don’t Repeat Yourself**.
It’s not an official CSS feature, but a **principle / best practice** to write **clean, reusable, and maintainable CSS**.

---

## 🔹 What does DRY CSS mean?

It means:
👉 Avoid writing the same style rules again and again.
👉 Use techniques (classes, variables, functions, mixins, etc.) to **reuse** code.

---

## 🔹 Why DRY CSS?

* **Easier to maintain** → Change once, update everywhere.
* **Smaller file size** → Less duplication.
* **More consistent design** → Same look everywhere.

---

## 🔹 Example 1: Non-DRY CSS (bad)

```css
h1 {
  color: blue;
  font-size: 24px;
  margin-bottom: 20px;
}
h2 {
  color: blue;
  font-size: 20px;
  margin-bottom: 20px;
}
```

👉 We’re repeating `color: blue;` and `margin-bottom: 20px;`.

---

## 🔹 Example 2: DRY CSS (good)

```css
h1, h2 {
  color: blue;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
}
h2 {
  font-size: 20px;
}
```

✔ Common properties are written once.
✔ Specific differences are applied separately.

---

## 🔹 Example 3: Using Variables (more DRY)

```css
:root {
  --main-color: blue;
  --spacing: 20px;
}

h1, h2 {
  color: var(--main-color);
  margin-bottom: var(--spacing);
}
```

✔ If you change `--main-color`, it updates everywhere.

---

## 🔹 Techniques to Write DRY CSS

1. **Group selectors** → `h1, h2 { ... }`
2. **CSS Variables** → `--main-color`
3. **Utility classes** (like in Tailwind CSS) → `.mb-4 { margin-bottom: 1rem; }`
4. **Mixins / Functions** (if using Sass/LESS)
5. **Use `:is()` or `:where()`** to combine selectors

---

✅ In short:
**DRY CSS = writing CSS in a way that avoids repetition, improves consistency, and makes maintenance easier.**
