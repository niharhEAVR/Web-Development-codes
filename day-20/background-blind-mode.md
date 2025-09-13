# 🎯 What is `background-blend-mode` in CSS?

👉 The **`background-blend-mode`** property defines **how multiple background layers of the same element blend together** (color + images).

It’s like Photoshop’s blending modes, but applied to **background layers only**.

---

## 🔹 Syntax

```css
selector {
  background-blend-mode: value;
}
```

---

## 🔹 Values (same as `mix-blend-mode`)

* `normal` → default, no blending
* `multiply` → darker blend
* `screen` → lighter blend
* `overlay` → high contrast mix
* `darken`, `lighten`
* `color`, `hue`, `saturation`, `luminosity`
* `difference`, `exclusion`

---

# 🖼 Example

### Example 1: Image + Color Overlay

```html
<div class="box"></div>
```

```css
.box {
  width: 400px;
  height: 250px;
  background-image: 
    url("https://picsum.photos/400/250"), /* image */
    linear-gradient(rgba(255,0,0,0.6), rgba(0,0,255,0.6)); /* gradient overlay */
  
  background-blend-mode: multiply;
}
```

👉 The gradient **multiplies with the image**, giving a dramatic color overlay effect.

---

### Example 2: Multiple Images

```css
.box {
  width: 400px;
  height: 250px;
  background-image: 
    url("https://picsum.photos/400/250"),
    url("https://picsum.photos/200/125?grayscale");
  
  background-blend-mode: screen;
}
```

👉 Two background images blend together with a **lighten effect**.

---

# ✅ Difference: `mix-blend-mode` vs `background-blend-mode`

| Property                | Blends What?                                                                  |
| ----------------------- | ----------------------------------------------------------------------------- |
| `mix-blend-mode`        | The **whole element** with what’s behind it (siblings, parent background).    |
| `background-blend-mode` | The **background layers** inside the same element (image + color + gradient). |

---

# 📌 Summary

* **`background-blend-mode`** = blend *background layers* of a single element.
* Useful for **image overlays**, **color filters**, **artistic effects**.
* Common combo = `background-image` (photo) + `linear-gradient` (color overlay) + `background-blend-mode`.
