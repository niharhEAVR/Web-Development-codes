### **1. React-like Virtual DOM Object**
- The `reactElement` object resembles React's virtual DOM structure:
  ```javascript
  const reactElement = {
      type: 'a',
      props: {
          href: 'https://google.com',
          target: '_blank'
      },
      children: 'Click me to visit google'
  }
  ```
  - In React, this structure is created when you write JSX like:
    ```jsx
    <a href="https://google.com" target="_blank">
      Click me to visit google
    </a>
    ```
  - React transforms the JSX into a similar object using Babel or another compiler.

---

### **2. Custom Render Function**
- The `customRender` function performs tasks similar to React's `ReactDOM.render`:
  - It creates a DOM element (`document.createElement`).
  - It assigns attributes (`domElement.setAttribute`).
  - It handles children by setting `innerHTML`.

  React itself goes further by:
  - Managing updates and reconciling changes.
  - Using efficient diffing algorithms to optimize rendering.
