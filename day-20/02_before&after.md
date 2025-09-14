The **`::before`** and **`::after`** selectors in CSS are **pseudo-elements**. They let you insert **extra content** before or after the actual content of an element, **without adding new HTML tags**.

---

## 🔹 Syntax

```css
selector::before {
  content: "something";
  /* styling */
}

selector::after {
  content: "something";
  /* styling */
}
```

---

## 🔹 Key Rule

Both **require the `content` property** (even if it’s empty) to display anything.

```css
content: "";  /* empty but required */
```

---

## 🔹 Example 1: Adding text

```css
h1::before {
  content: "🔥 ";
}
h1::after {
  content: " 🎉";
}
```

If you have:

```html
<h1>Welcome</h1>
```

👉 It will render as:
**🔥 Welcome 🎉**

---

## 🔹 Example 2: Decorative shapes

```css
button::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background: red;
  margin-right: 5px;
}
```

👉 Adds a little red square before every `<button>`.

---

## 🔹 Example 3: Quotes

```css
blockquote::before {
  content: "“";
  font-size: 2rem;
  color: gray;
}
blockquote::after {
  content: "”";
  font-size: 2rem;
  color: gray;
}
```

👉 Surrounds quotes automatically.

---

## 🔹 Example 4: Underline/Highlight with `::after`

```css
h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: blue;
  margin-top: 5px;
}
```

👉 Creates a decorative line under headings.

---

## 🔹 Common Uses of `::before` and `::after`

* Add **icons** without extra HTML.
* Insert **decorative lines, shapes, or backgrounds**.
* Create **tooltips or badges**.
* Add **open/close quotes** for text.
* Make **complex button effects**.

---

✅ In short:

* **`::before`** → inserts content **before** the element’s content.
* **`::after`** → inserts content **after** the element’s content.
* Both need **`content`** and are great for **styling without touching HTML**.
