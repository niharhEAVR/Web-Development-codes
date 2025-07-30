CSS (Cascading Style Sheets) is used to style HTML elements.

## **1. CSS Syntax**
A CSS rule consists of:
- **Selector** → The HTML element to style.
- **Property** → The style to apply.
- **Value** → The setting for the property.

Example:
```css
p {
  color: blue; /* Text color */
  font-size: 16px; /* Font size */
}
```

---

## 🧩 2. **Ways to Add CSS + Their Order (Specificity)**

### ✅ There are **3 main ways** to apply CSS to HTML:

| Method           | Syntax Example                                              | Specificity | Priority (↑ = higher) |
| ---------------- | ----------------------------------------------------------- | ----------- | --------------------- |
| **Inline CSS**   | `<h1 style="color: red;">Hello</h1>`                        | HIGH        | ↑↑↑                   |
| **Internal CSS** | Inside `<style>` in `<head>`                                | MEDIUM      | ↑↑                    |
| **External CSS** | Linked CSS file: `<link rel="stylesheet" href="style.css">` | MEDIUM      | ↑                     |

### 🧠 **Important Rule: Cascade and Specificity**

When conflicts happen:

1. Inline CSS wins over internal or external.
2. If two rules target the same element:

   * **More specific selector wins**.
   * **Later rule in the file wins** if specificity is the same.

---

## 🧮 **CSS Specificity Weight Order (Who Wins)**

| Selector Type                             | Specificity Score | Example                             |
| ----------------------------------------- | ----------------- | ----------------------------------- |
| Inline Style                              | `1000`            | `<p style="color: red;">`           |
| ID selector (`#id`)                       | `0100`            | `#main {}`                          |
| Class (`.class`), Attribute, Pseudo-class | `0010`            | `.title`, `[type="text"]`, `:hover` |
| Element tag                               | `0001`            | `p`, `h1`, `ul`                     |
| Universal (`*`)                           | `0000`            | `* {}`                              |

✅ **Tip**: `!important` overrides everything — use sparingly!

---

### 3. CSS Units

## ✅ 1. `px` → Pixels (Fixed size)

* **Absolute** size.
* Not affected by parent size.

### Example:

```html
<div style="font-size: 20px;">
  <p style="font-size: 14px;">This is 14px text</p>
</div>
```

✔ `14px` will be **exactly 14px**, no matter what the parent is.

---

## ✅ 2. `%` → Percentage (Relative to Parent)

* Relative to the **parent's dimension** (width, height, etc.).

### Example:

```html
<div style="width: 400px;">
  <div style="width: 50%;">Child (200px wide)</div>
</div>
```

✔ `50%` of `400px` = `200px`.

📌 For `font-size: 120%`, it means 120% of the **parent's font size**.

---

## ✅ 3. `em` → Relative to the Parent's Font Size

* `1em` = font-size of **the parent**.

### Example:

```html
<div style="font-size: 20px;">
  <p style="font-size: 2em;">This text is 40px</p>
</div>
```

✔ `2em` = `2 × 20px` = `40px`.

⚠️ **Nesting multiplies**:

```html
<div style="font-size: 20px;">
  <div style="font-size: 2em;"> <!-- 40px -->
    <p style="font-size: 0.5em;"> <!-- 0.5 × 40 = 20px -->
      Text is 20px
    </p>
  </div>
</div>
```

---

## ✅ 4. `rem` → Relative to Root (`html`) Font Size

* `1rem` = font-size of the `html` tag.
* Doesn’t get affected by nesting.

### Example:

```html
<html style="font-size: 16px;">
  <body>
    <div style="font-size: 2rem;">Text is 32px</div>
  </body>
</html>
```

✔ Always `2 × 16px` = `32px`, no matter how deep it's nested.

---

## ✅ 5. `vh` and `vw` → Viewport Height / Width

* `1vh` = 1% of the **viewport height**.
* `1vw` = 1% of the **viewport width**.

### Example:

```html
<div style="width: 50vw; height: 20vh;">Box</div>
```

✔ On a screen that's 1000px wide and 800px tall:

* `50vw` = `500px`
* `20vh` = `160px`

---

## 🔁 Quick Comparison Table:

| Unit  | Relative To             | Affected by Parent? | Responsive? |
| ----- | ----------------------- | ------------------- | ----------- |
| `px`  | Fixed pixels            | ❌ No                | ❌ No        |
| `%`   | Parent’s size           | ✅ Yes               | ✅ Yes       |
| `em`  | Parent’s font-size      | ✅ Yes               | ✅ Yes       |
| `rem` | Root (`html`) font-size | ❌ No                | ✅ Yes       |
| `vh`  | Viewport height         | ❌ No                | ✅ Yes       |
| `vw`  | Viewport width          | ❌ No                | ✅ Yes       |
