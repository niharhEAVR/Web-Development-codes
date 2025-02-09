### **📌 `text-shadow` in CSS**  
The `text-shadow` property adds a shadow to text.

---

### **Syntax:**  
```css
text-shadow: offset-x offset-y blur-radius color;
```

### **Example:**
```css
h1 {
  color: blue;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}
```
📌 **Explanation:**  
- `3px` → Moves shadow **right**.
- `3px` → Moves shadow **down**.
- `5px` → **Blurriness** (Higher = softer shadow).
- `rgba(0, 0, 0, 0.5)` → **Shadow color** (Black with 50% opacity).

---

### **🔥 Multiple Shadows**
```css
h1 {
  text-shadow: 2px 2px red, -2px -2px blue;
}
```
📌 **Effect:** Red shadow bottom-right, Blue shadow top-left.

✅ **Pro Tip:** Use soft shadows for glow effects!  
```css
h1 {
  text-shadow: 0px 0px 10px gold;
}
```

🚀 **That’s it!** Let me know if you need more details! 😊