### **📌 `box-shadow` in CSS**  
The `box-shadow` property adds **shadow effects** to an element.  

### **Syntax:**  
```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```
### **Example:**  
```css
.box {
  width: 200px;
  height: 100px;
  background-color: lightblue;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
}
```
### **Explanation:**  
- `5px` → Moves shadow **right**.
- `5px` → Moves shadow **down**.
- `10px` → **Blurriness** (Higher = softer shadow).
- `2px` → **Spread** (Larger = bigger shadow).
- `rgba(0, 0, 0, 0.5)` → **Shadow color** (Black with 50% opacity).

✅ **Pro Tip:** Use `inset` for **inner shadows**.  
```css
box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);
```

🚀 **That's it!** Let me know if you need more details! 😊