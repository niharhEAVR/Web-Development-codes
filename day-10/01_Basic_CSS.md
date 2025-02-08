CSS (Cascading Style Sheets) is used to style HTML elements. Here are the basics you should know:

---

## **1. CSS Syntax**
A CSS rule consists of:
- **Selector** → The HTML element to style.
- **Property** → The style to apply.
- **Value** → The setting for the property.

Example:
```css
p {
  color: blue; /* Text color */
  font-size: 16px; /* Font size */
}
```

---

## **2. Ways to Add CSS**
There are **three** ways to apply CSS:

### **1. Inline CSS (Inside an HTML Tag)**
Applied directly inside the `style` attribute of an HTML element.
```html
<p style="color: red;">This is red text.</p>
```
**Best for quick fixes, but not recommended for large projects.**

---

### **2. Internal CSS (Inside `<style>` in `<head>` section)**
```html
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
```
**Good for single-page styling but not scalable.**

---

### **3. External CSS (Linked File)**
A separate `.css` file linked to an HTML file.
```html
<link rel="stylesheet" href="styles.css">
```
**Best practice for larger projects.**

---

## **3. Selectors in CSS**
### **1. Universal Selector (`*`)**
Selects all elements.
```css
* {
  margin: 0;
  padding: 0;
}
```

### **2. Element Selector**
Targets a specific element.
```css
h1 {
  color: blue;
}
```

### **3. Class Selector (`.`)**
Targets elements with a specific class.
```css
.my-class {
  font-size: 20px;
}
```
Used in HTML:
```html
<p class="my-class">This is styled.</p>
```

### **4. ID Selector (`#`)**
Targets a specific element with an ID.
```css
#unique-id {
  background-color: yellow;
}
```
Used in HTML:
```html
<p id="unique-id">This is unique.</p>
```

### **5. Grouping Selector**
Applies styles to multiple elements.
```css
h1, h2, p {
  font-family: Arial, sans-serif;
}
```

### **6. Descendant Selector**
Styles elements inside another element.
```css
div p {
  color: purple;
}
```

---

## **4. Common CSS Properties**
### **1. Text & Font Styling**
```css
p {
  color: red;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
```

### **2. Box Model (Margin, Padding, Border)**
```css
div {
  width: 200px;
  height: 100px;
  margin: 10px;
  padding: 20px;
  border: 2px solid black;
}
```

### **3. Backgrounds**
```css
body {
  background-color: lightgray;
  background-image: url('image.jpg');
  background-size: cover;
}
```

### **4. Flexbox (For Layouts)**
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

## **5. CSS Units**
- **px** → Pixels (Fixed size)
- **%** → Percentage (Relative size)
- **em** → Relative to the parent element
- **rem** → Relative to the root (`html`) element
- **vh/vw** → Viewport height/width

Example:
```css
p {
  font-size: 2em; /* Twice the size of the parent font */
}
```

---

## **6. Responsive Design**
### **1. Media Queries**
Used for different screen sizes.
```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

### **2. Flexbox & Grid**
Used for layouts.
```css
.container {
  display: flex;
  justify-content: space-between;
}
```

---

## **7. CSS Animations & Transitions**
### **1. Transitions**
```css
button {
  background-color: blue;
  transition: background-color 0.5s;
}
button:hover {
  background-color: red;
}
```

### **2. Animations**
```css
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}
div {
  animation: slide 2s infinite;
}
```

---

## **8. Best Practices**
✅ Use **external CSS files** for scalability.  
✅ Use **classes (`.class`) instead of IDs (`#id`)** for reusable styles.  
✅ Keep your CSS **organized and modular**.  
✅ Use **flexbox and grid** for layouts instead of `float`.  
✅ Write **responsive CSS** for different screen sizes.
