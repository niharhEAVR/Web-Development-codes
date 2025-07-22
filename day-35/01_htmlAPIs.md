### 🧠 What Are HTML APIs?

**HTML APIs** are **browser-provided JavaScript interfaces** that allow you to interact with the browser or device features — like audio, video, location, drag-and-drop, and more — to build rich, dynamic web applications.

Although they’re called **HTML APIs**, they are **accessed via JavaScript**, not HTML itself.

---

### 🔍 Why Are They Called “HTML APIs”?

* They are **built into the browser** and designed to be used **alongside HTML and CSS**.
* The term "HTML API" reflects that they are **native to the web platform**, standardized with HTML5 and beyond.

---

### 🧰 Examples of Common HTML APIs:

| API                   | What It Does                 | Code Example                                    |
| --------------------- | ---------------------------- | ----------------------------------------------- |
| **Geolocation API**   | Get user’s location          | `navigator.geolocation.getCurrentPosition(...)` |
| **Drag and Drop API** | Make elements draggable      | `element.ondragstart = function(e) { ... }`     |
| **Canvas API**        | Draw graphics, charts, games | `ctx.fillRect(x, y, w, h)`                      |
| **Web Storage API**   | Store data in browser        | `localStorage.setItem('name', 'Nihar')`         |
| **Web Audio API**     | Work with sound              | `new AudioContext()`                            |
| **Fullscreen API**    | Make elements fullscreen     | `element.requestFullscreen()`                   |
| **MediaDevices API**  | Access camera & mic          | `navigator.mediaDevices.getUserMedia(...)`      |
| **Notification API**  | Show browser notifications   | `new Notification("Hello!")`                    |

---

### 🧑‍💻 How Do You Use an HTML API?

You use **JavaScript** to call the browser’s built-in API like this:

```js
// Example: Geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  });
}
```

---

### ✅ Benefits

* No need to install anything — works **natively** in most modern browsers.
* Allows you to build **powerful web apps** without extra libraries.
* They are **secure** and often **require user permission** (like location or camera).

---

### ⚠️ Things to Keep in Mind

* **Not all browsers support all APIs** (always check compatibility on [MDN](https://developer.mozilla.org)).
* Some APIs **require HTTPS**, especially ones that access hardware (e.g., Geolocation, Camera).
* You often need to **handle permissions** and **errors properly**.
