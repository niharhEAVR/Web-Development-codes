# **📌 CSS Transitions Explained**  

CSS **transitions** allow elements to change **smoothly** from one style to another over a period of time. Unlike animations, transitions only happen when a property changes (e.g., on hover or click).  

---

## **1️⃣ `transition` Property**
The `transition` property is used to define **how** and **which properties** should change.

### **Syntax:**
```css
transition: property duration timing-function delay;
```

### **Explanation of Each Part:**
| Property | Description | Example |
|----------|------------|---------|
| `property` | CSS property to animate | `all`, `background-color`, `width` |
| `duration` | Time for transition to complete | `0.5s`, `2s` |
| `timing-function` | Speed curve of the transition | `ease`, `linear`, `ease-in-out` |
| `delay` | Wait time before transition starts | `0s`, `1s` |

---

## **2️⃣ Simple Example: Button Color Change**
```css
button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
}

button:hover {
  background-color: red;
}
```
### **📌 What Happens?**
- When you hover over the button, the **background color** smoothly changes from **blue → red** over **0.5s**.

---

## **3️⃣ Transition Multiple Properties**
```css
.box {
  width: 100px;
  height: 100px;
  background-color: steelblue;
  transition: width 1s, background-color 1s;
}

.box:hover {
  width: 200px;
  background-color: tomato;
}
```
### **📌 What Happens?**
- On hover, the `.box` **expands** in width and **changes color** over **1 second**.

---

## **4️⃣ Using `all` to Transition Everything**
```css
.box {
  width: 100px;
  height: 100px;
  background-color: green;
  transition: all 1s ease-in-out;
}

.box:hover {
  width: 200px;
  height: 200px;
  background-color: orange;
  border-radius: 50%;
}
```
### **📌 What Happens?**
- On hover, the box **changes size, color, and shape (border-radius)** smoothly.

---

## **5️⃣ Transition with Delay**
```css
.box {
  width: 100px;
  height: 100px;
  background-color: purple;
  transition: background-color 1s ease-in-out 0.5s;
}

.box:hover {
  background-color: yellow;
}
```
### **📌 What Happens?**
- The background color changes from **purple → yellow**, but **after 0.5s delay**.

---

## **6️⃣ `timing-function` (Speed Curve Effects)**
| Timing Function | Description | Effect |
|----------------|------------|--------|
| `ease` | Starts slow, speeds up, then slows down | 🔄 Smooth |
| `linear` | Constant speed | 📏 Steady |
| `ease-in` | Starts slow, then speeds up | 🚀 Fast end |
| `ease-out` | Starts fast, then slows down | 🎢 Slow end |
| `ease-in-out` | Starts & ends slow, fast in the middle | 🎡 Smooth |

Example:
```css
.box {
  transition: all 1s ease-in-out;
}
```

---

## **🚀 Summary**
✅ **Transitions** allow smooth property changes.  
✅ **Use `transition` on hover, click, or any property change.**  
✅ **Multiple properties can be transitioned together.**  
✅ **Use `timing-function` for different effects.**  

**Let me know if you need more examples! 😊**