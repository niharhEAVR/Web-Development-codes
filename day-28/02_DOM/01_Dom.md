### **Explanation of the Code (JavaScript DOM Manipulation)**
This code interacts with the **Document Object Model (DOM)**, which is the structured representation of HTML elements in JavaScript. Let's break it down **line by line**.

---

### **1️⃣ Changing the Document Title**
```javascript
document.title = "js DOM";
console.log(document.title);
```
✔ **What it does?**  
- This **changes the title** of the web page (what appears in the browser tab) to `"js DOM"`.
- Then, it logs the **new title** to the console.

📌 **Example:**  
If your webpage's title was **"My Page"**, it will now change to **"js DOM"**.

---

### **2️⃣ Logging the Document Body**
```javascript
console.log(document.body);
```
✔ **What it does?**  
- This **logs the entire `<body>` element** of the HTML document to the console.
- It allows you to inspect all the HTML elements inside `<body>`.

📌 **Example Output in Console:**  
```html
<body>
  <h1>Hello World</h1>
  <p>This is a paragraph.</p>
</body>
```

---

### **3️⃣ Changing Background Color**
```javascript
document.body.style.backgroundColor = "lightcoral";
```
✔ **What it does?**  
- This **changes the background color** of the webpage to `"lightcoral"`.  
- It modifies the **CSS style** dynamically using JavaScript.

📌 **Effect:**  
The webpage background color turns into **lightcoral** (a reddish color).

---

### **4️⃣ Inspecting the `window` Object**
```javascript
console.dir(window);
```
✔ **What it does?**  
- This logs the entire **`window` object**, which represents the browser window.  
- `console.dir()` is used to display all **properties and methods** of `window` in a structured way.

📌 **Example Properties of `window` Object:**
```javascript
Window {
  innerWidth: 1366,
  innerHeight: 768,
  location: Location,
  document: Document,
  history: History,
  navigator: Navigator,
  localStorage: Storage,
  sessionStorage: Storage,
  alert: function,
  confirm: function,
  prompt: function,
  // More properties...
}
```
- **`window.innerWidth` & `window.innerHeight`** → Current width & height of the browser window.
- **`window.location`** → Contains URL info (e.g., `window.location.href` shows the current webpage URL).
- **`window.document`** → Refers to the entire webpage document.
- **`window.alert()`** → Displays an alert box.

---

### **5️⃣ Logging the `document` Object**
```javascript
console.dir(window.document);
```
✔ **What it does?**  
- This logs the entire `document` object (same as `document` but inside `window`).
- `document` represents the **HTML structure of the webpage**.

📌 **Example Properties of `document` Object:**
```javascript
Document {
  title: "js DOM",
  body: <body>…</body>,
  URL: "https://example.com",
  domain: "example.com",
  images: HTMLCollection(0),
  forms: HTMLCollection(0),
  scripts: HTMLCollection(3),
  styleSheets: StyleSheetList(1),
  getElementById: function,
  querySelector: function,
  createElement: function,
  // More properties...
}
```
- **`document.title`** → `"js DOM"` (Page title).
- **`document.body`** → `<body>` content.
- **`document.URL`** → Current URL of the page.
- **`document.getElementById()`** → Retrieves an element by its `id`.
- **`document.querySelector()`** → Selects an element using a CSS selector.

---

### **Summary of What Happens in the Code**
| Code | What it does? |
|------|--------------|
| `document.title = "js DOM"` | Changes the **page title** to `"js DOM"`. |
| `console.log(document.title)` | Logs the **new title** to the console. |
| `console.log(document.body)` | Logs the **entire `<body>` content**. |
| `document.body.style.backgroundColor = "lightcoral"` | Changes the **background color** of the webpage. |
| `console.dir(window)` | Logs all **properties and methods of `window`** (the browser object). |
| `console.dir(window.document)` | Logs all **properties and methods of `document`** (the webpage structure). |
