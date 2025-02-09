### 📌 **CSS Media Queries: The Ultimate Guide**  

**Media Queries** in CSS allow you to make your website **responsive**, meaning it adapts to different screen sizes, resolutions, and devices.  

---

## **🔹 1. What Are Media Queries?**
Media queries apply different CSS styles based on **screen width, height, orientation, resolution, and more**.

### **Basic Syntax:**
```css
@media (condition) {
    /* CSS rules go here */
}
```

For example:
```css
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```
📌 **Effect:** If the screen width is **600px or smaller**, the background color will change to light blue.

---

## **🔹 2. Common Media Query Conditions**
You can target different aspects of a device using conditions:

| **Condition** | **Description** | **Example** |
|-------------|-------------|-------------|
| `max-width` | Applies styles when screen width is **smaller** than the given value | `@media (max-width: 768px) {}` |
| `min-width` | Applies styles when screen width is **larger** than the given value | `@media (min-width: 1024px) {}` |
| `max-height` | Targets screens **shorter** than a given height | `@media (max-height: 500px) {}` |
| `min-height` | Targets screens **taller** than a given height | `@media (min-height: 800px) {}` |
| `orientation` | Targets portrait or landscape modes | `@media (orientation: portrait) {}` |
| `aspect-ratio` | Targets specific aspect ratios | `@media (aspect-ratio: 16/9) {}` |

---

## **🔹 3. Example: Responsive Navigation**
```css
/* Default styles */
.navbar {
    background-color: blue;
    padding: 10px;
    text-align: center;
}

/* Mobile Styles: Smaller than 600px */
@media (max-width: 600px) {
    .navbar {
        background-color: red;
    }
}
```
📌 **Effect:** On small screens (`≤ 600px`), the navbar will turn **red**.

---

## **🔹 4. Combining Multiple Conditions**
You can use **AND (`and`)** and **OR (`,`)** to combine conditions.

### **🔸 Using `and` (Both conditions must be true)**
```css
@media (min-width: 600px) and (max-width: 1024px) {
    body {
        background-color: green;
    }
}
```
📌 **Effect:** Background turns **green** for screen sizes between **600px and 1024px**.

### **🔸 Using `,` (OR - Apply if any condition is true)**
```css
@media (max-width: 480px), (orientation: portrait) {
    body {
        font-size: 14px;
    }
}
```
📌 **Effect:** The font size is **14px** if the screen width is **480px or smaller** OR if the device is in **portrait mode**.

---

## **🔹 5. Breakpoints (Standard Screen Sizes)**
Designers commonly use **breakpoints** to define when styles should change:

| **Device Type** | **Breakpoint (px)** |
|---------------|------------------|
| Small Phones | `max-width: 480px` |
| Tablets | `min-width: 600px` |
| Laptops | `min-width: 1024px` |
| Desktops | `min-width: 1280px` |

### **Example: Responsive Design**
```css
/* Mobile First Design */
body {
    font-size: 14px;
}

/* Tablet View */
@media (min-width: 600px) {
    body {
        font-size: 16px;
    }
}

/* Laptop View */
@media (min-width: 1024px) {
    body {
        font-size: 18px;
    }
}
```
📌 **Effect:** 
- **Mobile (`<600px`)** → Font size is `14px`
- **Tablet (`≥600px`)** → Font size is `16px`
- **Laptop (`≥1024px`)** → Font size is `18px`

---

## **🔹 6. Dark Mode Media Query**
To support **dark mode**, you can use:
```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: black;
        color: white;
    }
}
```
📌 **Effect:** If the user has dark mode enabled, the background turns **black**.

---

## **🔹 7. Media Queries for High-Resolution Screens**
For **Retina Displays** or high DPI screens:
```css
@media only screen and (-webkit-min-device-pixel-ratio: 2),
       only screen and (min-resolution: 192dpi) {
    img {
        width: 100px;
        height: auto;
    }
}
```
📌 **Effect:** Adjusts images for **high-resolution** screens.

---

## **🔹 8. Best Practices**
✔ **Use Mobile-First Design:** Start with mobile styles and scale up using `min-width`.  
✔ **Keep Queries Organized:** Use consistent breakpoints across your project.  
✔ **Avoid Too Many Queries:** Use **flexbox and grid** for layout before relying on media queries.  
✔ **Test on Real Devices:** Use browser DevTools to simulate different screen sizes.

---

## **🔹 9. Final Example: Fully Responsive Page**
```css
/* Default styles */
body {
    background-color: white;
    font-size: 16px;
}

/* Small devices */
@media (max-width: 480px) {
    body {
        background-color: lightgray;
        font-size: 14px;
    }
}

/* Tablets */
@media (min-width: 600px) {
    body {
        background-color: lightblue;
        font-size: 18px;
    }
}

/* Laptops & Desktops */
@media (min-width: 1024px) {
    body {
        background-color: lightgreen;
        font-size: 20px;
    }
}
```
📌 **Effect:**  
- **Mobile (`<480px`)** → Light gray  
- **Tablets (`≥600px`)** → Light blue  
- **Laptops (`≥1024px`)** → Light green  

---

## **💡 Conclusion**
- Media queries make websites **responsive**.
- They target **screen width, height, orientation, resolution, and more**.
- Use **breakpoints** to define when styles change.
- Start with **mobile-first** design.

---

### **🎯 Need more help? Let me know! 🚀**