# 🎯 What is `mix-blend-mode` in CSS?

👉 The **`mix-blend-mode`** property in CSS defines **how an element’s content should blend with the content behind it** (its background or parent element).

It’s similar to **layer blending modes in Photoshop** or other image editors.

---

## 🔹 Syntax

```css
selector {
  mix-blend-mode: value;
}
```

---

## 🔹 Common Values

* **`normal`** → default, no blending (just sits on top).
* **`multiply`** → multiplies colors → makes result darker.
* **`screen`** → inverse of multiply → makes result lighter.
* **`overlay`** → mix of multiply + screen (high contrast).
* **`darken`** → keeps the darker parts.
* **`lighten`** → keeps the lighter parts.
* **`difference`** → subtracts colors (creates contrasty effect).
* **`exclusion`** → softer version of difference.
* **`hue`**, **`saturation`**, **`color`**, **`luminosity`** → blend specific color properties.

---

# 🖼 Example

### Example 1: Text blending with background

```html
<div class="bg">
  <h1 class="blend">Blend Mode Example</h1>
</div>
```

```css
.bg {
  background: url('https://picsum.photos/400/300');
  width: 400px;
  height: 300px;
  color: white;
}

.blend {
  mix-blend-mode: overlay;
  font-size: 2rem;
}
```

👉 Text **interacts** with the background image colors instead of just covering it.

---

### Example 2: Two overlapping boxes

```html
<div class="box red"></div>
<div class="box blue"></div>
```

```css
.box {
  width: 150px;
  height: 150px;
  position: absolute;
}

.red {
  background: red;
  left: 50px;
  top: 50px;
}

.blue {
  background: blue;
  left: 100px;
  top: 100px;
  mix-blend-mode: multiply;
}
```

👉 Where red & blue overlap, the result becomes **dark purple** (blended).

---

# ✅ Summary

* `mix-blend-mode` = defines how an element’s content blends with what’s **behind it**.
* Works like Photoshop blending modes.
* Useful for **creative effects**, **overlays**, **text on images**, **artistic UI designs**.
