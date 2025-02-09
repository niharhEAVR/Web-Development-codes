
## **📌 CSS Animations & Keyframes Explained**

CSS **animations** allow elements to change their styles **gradually over time** without using JavaScript. This is done using the `@keyframes` rule.

---

## **1️⃣ `animation` Property**
The `animation` property is used to define the animation behavior.

### **Syntax:**
```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

### **Explanation of Each Part:**
| Property | Description | Example |
|----------|------------|---------|
| `name` | Name of the `@keyframes` animation | `moveRight` |
| `duration` | How long the animation takes | `3s`, `500ms` |
| `timing-function` | Speed curve of animation | `ease`, `linear`, `ease-in-out` |
| `delay` | Delay before animation starts | `1s`, `0s` |
| `iteration-count` | Number of times animation runs | `infinite`, `2`, `1` |
| `direction` | Direction of animation | `normal`, `reverse`, `alternate` |
| `fill-mode` | Keeps styles after animation ends | `forwards`, `backwards` |
| `play-state` | Start/stop animation | `running`, `paused` |

---

## **2️⃣ `@keyframes` Rule**
The `@keyframes` rule defines what styles should change during the animation.

### **Example:**
```css
@keyframes moveRight {
  from {
    left: 0px;
  }
  to {
    left: 300px;
  }
}
```
Here, the element moves from **left: 0px** to **left: 300px**.

---

## **3️⃣ Full Example of Animation**
```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  position: relative;
  
  /* Apply animation */
  animation: moveRight 3s ease-in-out 0s infinite alternate;
}

@keyframes moveRight {
  from {
    left: 0px;
  }
  to {
    left: 300px;
  }
}
```
### **📌 What Happens?**
- The `.box` moves from `left: 0px` to `left: 300px` in **3 seconds**.
- The animation runs **infinitely** and **reverses** direction after each run.

---

## **4️⃣ More Complex Example: Circle Moving in a Square Path**
```css
@keyframes moveCircle {
  0% {
    top: 0px;
    left: 0px;
  }
  25% {
    top: 0px;
    left: 300px;
  }
  50% {
    top: 300px;
    left: 300px;
  }
  75% {
    top: 300px;
    left: 0px;
  }
  100% {
    top: 0px;
    left: 0px;
  }
}

.circle {
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  border-radius: 50%;
  animation: moveCircle 5s linear infinite;
}
```
### **📌 What Happens?**
- The `.circle` moves **in a square path** (0%, 25%, 50%, 75%, 100%).
- The animation **loops infinitely**.

---

## **🚀 Summary**
✅ `animation` controls how animations behave.  
✅ `@keyframes` defines the actual animation sequence.  
✅ We can animate **position, size, opacity, colors, rotation, and more!**  

**Let me know if you need further explanation! 😊**


---
---
---





There are a few issues in your code that need fixing:

### **❌ Issues:**
1. **Box Overflow (`box1` & `box2`)**
   - You are moving `box1` and `box2` from `left: 0vw` to `left: 100vw`, but `100vw` means **the full width of the viewport**.
   - Since the `box` has a width of `200px`, it **overflows the screen**.

   **✅ Fix:** Adjust `left` values in animations:
   ```css
   @keyframes box1 {
     from {
       left: 0;
     }
     to {
       left: calc(100vw - 200px); /* Adjust to prevent overflow */
     }
   }

   @keyframes box2 {
     from {
       left: 0;
     }
     to {
       left: calc(100vw - 200px); /* Adjust to prevent overflow */
     }
   }
   ```

2. **Box2 Positioning Issue**
   - You set `top: 760px;` in `#box2`, but `100vh` is the full screen height, so if the viewport height is **less than 760px**, the box might be pushed outside the screen.
   - **✅ Fix:** Use `bottom` instead:
   ```css
   #box2 {
     bottom: 0;
   }
   ```

3. **Circle Animation `left: 100%` Issue**
   - `left: 100%` means the **entire element moves out of the viewport**, not stopping at the edge.
   - **✅ Fix:** Use `calc(100vw - 50px)` so it stays visible:
   ```css
   @keyframes circle1 {
     0% {
       top: 0%;
       left: 0%;
     }
     25% {
       top: 10%;
       left: calc(100vw - 50px);
     }
     50% {
       top: 65%;
       left: 0%;
     }
     100% {
       top: 75%;
       left: calc(100vw - 50px);
     }
   }
   ```

---

### **🔧 Final Fixes**
✅ **Fix animations** to prevent elements from going out of the screen.  
✅ **Avoid absolute `top` values** (use `bottom: 0;` for `box2`).  
✅ **Use `calc()` for accurate positioning**.  

After these fixes, your animation should work properly on all screen sizes! 🚀