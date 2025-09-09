This is an **HTML + CSS** document demonstrating the use of **CSS Media Queries** to create a **responsive layout**. Let's break it down step by step:

---

### **1️⃣ Default Styles (Before Media Queries Apply)**
```css
body {
  background-color: beige;
}

.container {
  display: flex;
}

.box {
  width: 250px;
  height: 250px;
  background-color: steelblue;
  padding: 10px;
  margin: 10px;
}
```
📌 **Explanation:**  
- The `body` background color is set to **beige**.
- The `.container` uses `display: flex;`, which arranges `.box` elements **horizontally**.
- Each `.box` has:
  - `width: 250px`
  - `height: 250px`
  - `background-color: steelblue`
  - `margin` and `padding` for spacing.

---

### **2️⃣ Media Query: Landscape Mode**
```css
@media screen and (orientation: landscape) {
  body {
    border: 2px solid purple;
  }
}
```
📌 **Effect:**  
If the screen is in **landscape mode** (wider than taller), a **purple border (2px solid) is added to the body**.

---

### **3️⃣ Media Query: Small Screens (max-width: 455px)**
```css
@media only screen and (max-width: 455px) {
  body {
    background-color: lightpink;
  }

  .container {
    flex-direction: column;
  }

  .box {
    background-color: rgb(111, 71, 255);
  }
}
```
📌 **Effect:** If the **screen width is 455px or smaller**:
1. The `body` background changes to **light pink**.
2. The `.container` layout switches to **column mode** (`flex-direction: column;`).
3. Each `.box` color changes to **purple-blue (`rgb(111, 71, 255)`)**.

---

### **📌 Summary of Behavior**
| Condition | Effect |
|-----------|--------|
| **Normal (Desktop, Large Screens)** | Background: **Beige**, Boxes: **Steelblue**, Layout: **Row (Flexbox Default)** |
| **Landscape Mode** | Adds a **purple border** around the body |
| **Small Screens (`≤ 455px`)** | Background: **Lightpink**, Boxes: **Purple-Blue**, Layout: **Column (Stacked Boxes)** |

---

### **🚀 Try Testing It Yourself**
- Open the file in a browser.
- Resize the screen **below 455px** → Background & layout will change.
- Rotate your device to **landscape mode** → Purple border appears.

🔹 **This code is useful for making layouts responsive based on screen size and orientation.** 🚀 Let me know if you need more details! 😃