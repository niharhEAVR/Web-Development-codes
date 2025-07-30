## ✅ What is **Margin Collapse**?

When **two vertical margins meet**, instead of adding together, **only the larger margin is used**. This is called **"margin collapse"**.

---

## 🧱 Example: Two Boxes

```html
<div style="margin-bottom: 40px; background: lightblue;">Box 1</div>
<div style="margin-top: 20px; background: lightgreen;">Box 2</div>
```

### ❓Expected margin between boxes?

You might think:

```
40px (bottom of Box 1) + 20px (top of Box 2) = 60px
```

### ❗But what actually happens?

* The **larger margin wins**: `max(40px, 20px)`
* ✅ So the space between them is **only 40px**, **not 60px**

---

## 📌 Why?

This behavior reduces extra spacing in vertical flows. It only happens in **vertical margins**, **not horizontal ones**, and only when there's **no padding or border between the two**.

---

## 🧠 When margins DON'T collapse:

Margins **don’t collapse** if:

* Boxes are **side by side** (not vertical)
* There’s a **border**, **padding**, or **inline content** between them
* You use **flexbox** or **grid layout**

---

## ✅ Visual Summary

```
[ Box 1 ]
margin-bottom: 40px

[ Box 2 ]
margin-top: 20px

Space between them = 40px (not 60px)
```
