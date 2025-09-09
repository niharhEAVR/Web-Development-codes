
# 🎯 What is `calc()` in CSS?

`calc()` is a **CSS function** that lets you perform **mathematical calculations** directly in your CSS.

👉 It allows you to mix **different units** (like `%`, `px`, `em`, `vh`) in a single property.

---

## 🔹 Syntax

```css
property: calc(expression);
```

* The **expression** can include:

  * `+` (addition)
  * `-` (subtraction)
  * `*` (multiplication)
  * `/` (division)

⚠️ Rules:

* Must have **spaces around operators** (`+ - * /`).
* You can mix units (like `50% - 20px`).
* Works with any CSS property that accepts numeric values.

---

# 🖼 Examples

### Example 1: Width Calculation

```css
.box {
  width: calc(100% - 50px);
  height: 200px;
  background: lightblue;
}
```

👉 Box takes up **full width minus 50px**.

---

### Example 2: Centering with Margins

```css
.container {
  width: 500px;
}
.child {
  width: calc(50% - 10px);
  margin: 5px;
  background: orange;
}
```

👉 Each child gets **half of container width**, minus margins.

---

### Example 3: Mixing Units

```css
.text {
  font-size: calc(10px + 1vw);
}
```

👉 Font size = **10px + 1% of viewport width**, so it scales with screen size.

---

### Example 4: Equal Columns

```css
.column {
  float: left;
  width: calc(33.33% - 20px); /* 3 columns with some gap */
  margin: 10px;
  background: pink;
}
```

---

### Example 5: Positioning

```css
.box {
  position: absolute;
  left: calc(50% - 100px); /* center horizontally */
  width: 200px;
}
```

👉 Box is centered by shifting 50% of the parent width, then adjusting by half its own width.

---

# ✅ Summary

* `calc()` lets you **do math in CSS**.
* Operators: `+`, `-`, `*`, `/`.
* Useful for **responsive design**, **mixing units**, and **precise layouts**.
* Needs **spaces around operators**.

---

👉 Do you want me to also explain the **difference between `calc()` and `clamp()`** (since both are often used together in modern responsive CSS)?
