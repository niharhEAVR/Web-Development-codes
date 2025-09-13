# **🎬 CSS `@keyframes` – In-Depth Guide**  

The **`@keyframes`** rule in CSS is used to **define animations** by specifying key steps during the animation process. It allows you to smoothly transition between different styles at different points in time.  

---

# **📌 1. Basic Syntax of `@keyframes`**
```css
@keyframes animation-name {
  from {
    /* Initial state */
  }
  to {
    /* Final state */
  }
}
```
Alternatively, you can use **percentage-based keyframes**:  
```css
@keyframes animation-name {
  0% {
    /* Initial state */
  }
  50% {
    /* Midway state */
  }
  100% {
    /* Final state */
  }
}
```

---

# **📌 2. Applying Animation with `animation` Property**
Once you define keyframes, you must **apply the animation** using the `animation` property.

```css
.element {
  animation: animation-name duration timing-function delay iteration-count direction fill-mode;
}
```

### **💡 Breakdown of Properties**
| Property | Description | Example |
|----------|------------|---------|
| `animation-name` | Name of the keyframes | `fadeIn`, `slide` |
| `duration` | How long the animation runs | `2s`, `500ms` |
| `timing-function` | Speed curve of animation | `ease`, `linear`, `ease-in-out` |
| `delay` | Delay before animation starts | `1s`, `0s` |
| `iteration-count` | How many times animation runs | `infinite`, `1`, `3` |
| `direction` | How animation plays | `normal`, `reverse`, `alternate` |
| `fill-mode` | Retains styles before/after animation | `none`, `forwards`, `backwards` |

---

# **📌 3. Keyframe Animation Examples**  

### **✅ 1. Fading Effect (Opacity Animation)**
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn 2s ease-in-out;
}
```
📌 **What Happens?**  
- The element **gradually appears** over `2s`.  

---

### **✅ 2. Moving (Sliding) Animation**
```css
@keyframes slideRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}

.box {
  animation: slideRight 3s ease-in-out infinite alternate;
}
```
📌 **What Happens?**  
- The element **moves 200px to the right** over `3s`.  
- `infinite alternate` → Keeps moving back & forth.  

---

### **✅ 3. Bounce Effect**
```css
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}

.ball {
  animation: bounce 1s ease-in-out infinite;
}
```
📌 **What Happens?**  
- The element **jumps up & down** like a bouncing ball.  

---

### **✅ 4. Color Changing Animation**
```css
@keyframes colorChange {
  0% {
    background-color: red;
  }
  50% {
    background-color: blue;
  }
  100% {
    background-color: green;
  }
}

.box {
  animation: colorChange 4s linear infinite;
}
```
📌 **What Happens?**  
- The background **changes color** from **red → blue → green**.  

---

### **✅ 5. Rotating Animation**
```css
@keyframes rotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: rotate360 2s linear infinite;
}
```
📌 **What Happens?**  
- The element **spins 360° continuously**.  

---

# **📌 4. Understanding `animation-direction`**
The `animation-direction` property defines **the order in which an animation runs**.

| Value | Description |
|--------|------------|
| `normal` | Runs **from start to end** (default) |
| `reverse` | Runs **from end to start** |
| `alternate` | Runs **forward first, then backward** |
| `alternate-reverse` | Runs **backward first, then forward** |

### **Example:**
```css
.box {
  animation: bounce 2s ease-in-out infinite alternate;
}
```
📌 **What Happens?**  
- The **bounce animation plays forward, then backward**, creating a **smooth looping effect**.

---

# **📌 5. `animation-fill-mode`**
Defines whether an element **retains the animated styles** before/after the animation.

| Value | Description |
|--------|------------|
| `none` | No styles retained (default) |
| `forwards` | Keeps final state after animation ends |
| `backwards` | Applies first keyframe before animation starts |
| `both` | Applies both `forwards` & `backwards` |

### **Example:**
```css
.box {
  animation: fadeIn 3s ease forwards;
}
```
📌 **What Happens?**  
- The element **remains visible** after fading in.  

---

# **📌 6. Shorthand `animation` Property**
Instead of writing each property separately, you can use **shorthand**:

### **Full Animation Declaration**
```css
.box {
  animation: bounce 2s ease-in-out 1s infinite alternate forwards;
}
```

### **Breakdown:**
- `bounce` → Keyframes name  
- `2s` → Duration  
- `ease-in-out` → Timing function  
- `1s` → Delay  
- `infinite` → Repeats forever  
- `alternate` → Plays forward & backward  
- `forwards` → Keeps final style  

---

# **🚀 Summary**
✅ **`@keyframes` defines animations**  
✅ **Use `animation` property to apply it**  
✅ **Different timing functions affect speed**  
✅ **`animation-direction` controls playback order**  
✅ **`animation-fill-mode` determines style retention**  
✅ **Multiple animations can be combined**  

💡 **Animations make websites more engaging and dynamic. Let me know if you need more details or examples!** 🚀