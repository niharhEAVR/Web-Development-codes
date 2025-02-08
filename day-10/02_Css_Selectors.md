In CSS, we can write selectors in **various ways** to target elements efficiently. Here are the **main types of CSS selectors**:

---

## **1. Universal Selector (`*`)**
- Selects **all** elements on the page.
```css
* {
  margin: 0;
  padding: 0;
}
```

---

## **2. Type (Element) Selector**
- Targets specific HTML **tags**.
```css
h1 {
  color: blue;
}
p {
  font-size: 18px;
}
```

---

## **3. Class Selector (`.`)**
- Targets elements with a **specific class**.
```css
.my-class {
  background-color: yellow;
}
```
HTML:
```html
<p class="my-class">This is a paragraph.</p>
```

---

## **4. ID Selector (`#`)**
- Targets an element with a **specific ID** (must be unique).
```css
#unique-id {
  color: red;
}
```
HTML:
```html
<p id="unique-id">This is unique.</p>
```

---

## **5. Grouping Selector**
- Targets **multiple elements** at once.
```css
h1, h2, p {
  font-family: Arial, sans-serif;
}
```

---

## **6. Descendant Selector (Space ` `)**
- Selects elements **inside another element**.
```css
div p {
  color: green;
}
```
HTML:
```html
<div>
  <p>This paragraph inside div will be green.</p>
</div>
```

---

## **7. Child Selector (`>`)**  
- Selects **direct** child elements.
```css
div > p {
  color: blue;
}
```
HTML:
```html
<div>
  <p>This will be blue.</p>
  <span><p>This will NOT be blue.</p></span>
</div>
```

---

## **8. Adjacent Sibling Selector (`+`)**
- Selects the **next immediate sibling**.
```css
h1 + p {
  color: purple;
}
```
HTML:
```html
<h1>Heading</h1>
<p>This paragraph will be purple.</p>
<p>This paragraph will NOT be affected.</p>
```

---

## **9. General Sibling Selector (`~`)**
- Selects **all siblings** after a specific element.
```css
h1 ~ p {
  color: brown;
}
```
HTML:
```html
<h1>Heading</h1>
<p>This paragraph will be brown.</p>
<p>This one too!</p>
```

---

## **10. Attribute Selector**
- Targets elements based on their **attributes**.

### **a) Exact Match (`[attribute=value]`)**
```css
input[type="text"] {
  border: 2px solid blue;
}
```
HTML:
```html
<input type="text">
<input type="password"> <!-- Not affected -->
```

### **b) Starts With (`^=`)**
```css
a[href^="https"] {
  color: green;
}
```
(Affects all links starting with `https`.)

### **c) Ends With (`$=`)**
```css
img[src$=".png"] {
  border-radius: 10px;
}
```
(Affects all images ending with `.png`.)

### **d) Contains (`*=`)**
```css
button[class*="btn"] {
  background-color: red;
}
```
(Affects elements with `"btn"` in their class name.)

---

## **11. Pseudo-classes**
- **Target elements based on their state**.

### **a) `:hover` (When mouse is over an element)**
```css
button:hover {
  background-color: orange;
}
```

### **b) `:first-child` (First child of a parent)**
```css
p:first-child {
  font-weight: bold;
}
```

### **c) `:last-child` (Last child of a parent)**
```css
p:last-child {
  color: blue;
}
```

### **d) `:nth-child(n)` (Selects the nth child)**
```css
li:nth-child(2) {
  color: red;
}
```

### **e) `:focus` (When an input is focused)**
```css
input:focus {
  border: 2px solid green;
}
```

---

## **12. Pseudo-elements**
- Select and style a **specific part of an element**.

### **a) `::first-letter` (First letter of a paragraph)**
```css
p::first-letter {
  font-size: 2em;
}
```

### **b) `::first-line` (First line of a paragraph)**
```css
p::first-line {
  color: blue;
}
```

### **c) `::before` (Add content before an element)**
```css
h1::before {
  content: "🔥 ";
}
```

### **d) `::after` (Add content after an element)**
```css
h1::after {
  content: " 🎉";
}
```

---

## **Summary Table**

| Selector Type         | Example                      | Purpose |
|----------------------|----------------------------|---------|
| **Universal**        | `* {}`                      | Selects all elements |
| **Element**         | `h1 {}`                      | Selects an element type |
| **Class**          | `.class {}`                  | Selects elements with a class |
| **ID**             | `#id {}`                      | Selects an element with an ID |
| **Grouping**       | `h1, p {}`                   | Selects multiple elements |
| **Descendant**     | `div p {}`                   | Selects nested elements |
| **Child**         | `div > p {}`                 | Selects direct children |
| **Adjacent**      | `h1 + p {}`                  | Selects the next sibling |
| **General Sibling** | `h1 ~ p {}`                  | Selects all later siblings |
| **Attribute**     | `input[type="text"] {}`      | Selects based on attributes |
| **Pseudo-classes** | `button:hover {}`           | Selects elements in a specific state |
| **Pseudo-elements** | `p::first-letter {}`       | Selects parts of elements |

---

## **Conclusion**
There are many ways to write CSS selectors, and using the **right selector** helps in **writing clean and efficient CSS**.  

Would you like a practical example of these selectors in action? 😊