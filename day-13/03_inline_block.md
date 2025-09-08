
### 🔹 **Block Elements**

* Always start on a **new line**.
* Take up the **full width** of the parent container.
* Examples: `<div>`, `<p>`, `<h1> - <h6>`, `<section>`

👉 They “block” the next element from coming beside them.

---

### 🔹 **Inline Elements**

* Do **not** start on a new line.
* Only take up as much **width as their content**.
* Examples: `<span>`, `<a>`, `<strong>`, `<em>`

👉 They stay **in line** with text or other inline elements.

---

### 🔹 **Inline-Block Elements**

This is a **mix of both** inline and block.

1. Like **inline** → it does **not break to a new line** (can sit next to other elements).
2. Like **block** → it **accepts width and height** properties.

📌 Examples:

* `<img>` is naturally an inline-block element.
* If you set `display: inline-block;` on a `<div>`, it will:

  * Sit inline with others.
  * But still respect **width, height, padding, margin** like a block.

---

### 🔹 Example Visualization

```html
<style>
  .block {
    display: block;
    background: lightblue;
    width: 150px;
    height: 50px;
  }

  .inline {
    display: inline;
    background: lightgreen;
    width: 150px; /* ❌ ignored */
    height: 50px; /* ❌ ignored */
  }

  .inline-block {
    display: inline-block;
    background: pink;
    width: 150px; /* ✅ works */
    height: 50px; /* ✅ works */
  }
</style>

<div class="block">Block</div>
<span class="inline">Inline</span>
<span class="inline-block">Inline-block</span>
<span class="inline-block">Another inline-block</span>
```

---

✅ **Result behavior**:

* `Block`: one under another.
* `Inline`: sits next to text, but can’t have fixed width/height.
* `Inline-block`: sits next to others **but with controllable box size**.
