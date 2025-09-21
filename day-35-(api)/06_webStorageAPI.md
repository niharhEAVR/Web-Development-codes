## 🧠 What is **HTML Web Storage**?

HTML Web Storage allows **JavaScript to store data locally in the user's browser** — either for a session or permanently.

It comes in **two types**:

| Type             | Lifetime      | Accessible Until            | Storage Limit (approx) |
| ---------------- | ------------- | --------------------------- | ---------------------- |
| `localStorage`   | **Permanent** | Until manually cleared      | \~5–10 MB per domain   |
| `sessionStorage` | **Temporary** | Until browser tab is closed | \~5 MB per tab         |

---

## ✅ Why use Web Storage?

* Stores key–value pairs in the browser.
* Works even without internet.
* Faster than cookies (no server requests).
* Great for saving theme preferences, cart items, login state, etc.

---

## 🧪 Basic Usage: `localStorage`

```js
// Store data
localStorage.setItem("username", "nihar");

// Retrieve data
const name = localStorage.getItem("username"); // "nihar"

// Delete one item
localStorage.removeItem("username");

// Clear all items
localStorage.clear();
```

🧠 Note: Keys and values are always stored as **strings**.

---

## 🧪 Basic Usage: `sessionStorage`

```js
// Works same as localStorage but is temporary
sessionStorage.setItem("theme", "dark");

console.log(sessionStorage.getItem("theme")); // "dark"
```

---

## ⚠️ Difference between `localStorage` and `sessionStorage`

| Feature  | `localStorage`            | `sessionStorage`            |
| -------- | ------------------------- | --------------------------- |
| Lifespan | Until manually cleared    | Until browser/tab is closed |
| Scope    | Page origin (same domain) | Same tab only               |
| Use Case | Cart, preferences, login  | Temporary tab-based state   |

---

## 🔥 Advanced Examples

---

### 1️⃣ **Storing a User Object (with JSON)**

You can’t directly store objects (only strings), so use `JSON.stringify()` and `JSON.parse()`.

```js
const user = {
  name: "Nihar",
  age: 21,
  loggedIn: true
};

// Save
localStorage.setItem("user", JSON.stringify(user));

// Retrieve
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "Nihar"
```

---

### 2️⃣ **Theme Toggle (Dark/Light Mode)**

```html
<button id="toggleTheme">Toggle Theme</button>

<script>
  const btn = document.getElementById("toggleTheme");

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.body.className = savedTheme;

  btn.onclick = () => {
    const newTheme = document.body.className === "dark" ? "light" : "dark";
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };
</script>
```

👆 This saves the user’s theme even after they refresh or reopen.

---

### 3️⃣ **Simple To-do List with `localStorage`**

```html
<input id="task" placeholder="Enter task" />
<button onclick="addTask()">Add Task</button>
<ul id="list"></ul>

<script>
  const list = document.getElementById("list");

  function addTask() {
    const task = document.getElementById("task").value;
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }

  function renderTasks() {
    list.innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      list.appendChild(li);
    });
  }

  renderTasks();
</script>
```

✅ Keeps all tasks saved even after closing the browser.

---

### 4️⃣ **Track Number of Page Visits**

```js
let count = localStorage.getItem("visitCount");
if (!count) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}
localStorage.setItem("visitCount", count);
document.body.innerText = `You visited this page ${count} times.`;
```

---

## 📦 When NOT to Use Web Storage

* ❌ For sensitive data (like passwords, tokens)
* ❌ When you need relational data or large datasets
* ❌ Shared access across users or devices

---

## 🛡️ Bonus: Secure Alternatives

If you're storing sensitive data:

* Use **Cookies** (with `HttpOnly` and `Secure` flags)
* Or use **IndexedDB** (for large structured data)
* Or encrypt values before storing (manually)

---

## 🧪 Want Me to Build You a Mini Web Storage Project?

I can help you build:

* Login/logout system with localStorage
* Offline note-taking app
* Simple quiz that remembers user score
* Dark mode with auto-switch
