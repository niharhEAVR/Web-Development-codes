### **How Does JavaScript Get Attached to `index.html`?**
1. **Entry Point (`src/index.js`)**:
   - In React apps created with Create React App, `src/index.js` (or `src/main.jsx` in newer setups) is the main entry point for JavaScript.
   - It looks like this:
     ```javascript
     import React from 'react';
     import ReactDOM from 'react-dom/client';
     import './index.css';
     import App from './App';

     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(
       <React.StrictMode>
         <App />
       </React.StrictMode>
     );
     ```
   - This file renders the React component tree into the `root` div in `public/index.html`.

2. **Template (`public/index.html`)**:
   - `public/index.html` serves as the static HTML file. It typically includes:
     ```html
     <div id="root"></div>
     ```
   - The `id="root"` div is where the React app dynamically attaches and renders via JavaScript.

3. **Webpack and `react-scripts`**:
   - `react-scripts` uses webpack under the hood to bundle your JavaScript and inject it into `index.html`.
   - During the build or development process, the JavaScript files are automatically included in `index.html` as `<script>` tags.

4. **Dynamic Injection**:
   - You don't need to manually include `<script>` tags in `index.html`. When the app is served, webpack ensures the JavaScript files (e.g., `main.js`) are included.

---

### **What Happens During Build?**
When you run:
```bash
npm run build
```
- `react-scripts` bundles all your JavaScript and CSS files.
- It minifies and optimizes them.
- It updates `index.html` to include the appropriate references to the bundled files.

---

### **Summary**
While `react-scripts` handles the process of bundling and injecting JavaScript into `index.html`, it is not solely responsible for attaching JavaScript. It orchestrates the entire development and build process for your React app.

Let me know if you need a deeper dive into any of these concepts!