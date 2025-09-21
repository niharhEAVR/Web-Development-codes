## 🔍 What is `FileReader`?

`FileReader` is a **built-in JavaScript object** that lets web applications **read the contents of files stored on the user’s computer** via `<input type="file">` or drag-and-drop.

✅ **No server needed** — the file is read **directly in the browser memory**.

---

## 📦 Why is it Useful?

You can use `FileReader` to:

* Preview an image before uploading
* Show HTML file content before sending
* Read a `.txt` or `.csv` file and show it in the browser
* Convert a file into Base64

---

## 📖 Basic Usage Flow

1. User selects or drops a file
2. JavaScript gets the `File` object
3. Create a new `FileReader` instance
4. Call `.readAsText()`, `.readAsDataURL()`, etc.
5. Get the result inside `.onload` event

---

## 🧠 FileReader Methods

| Method                     | What It Does                                                            |
| -------------------------- | ----------------------------------------------------------------------- |
| `readAsText(file)`         | Reads the file as plain text (use for `.txt`, `.html`, `.csv`, `.json`) |
| `readAsDataURL(file)`      | Converts file to Base64 encoded string (useful for images)              |
| `readAsArrayBuffer(file)`  | Reads the file as a binary buffer (useful for blobs, media)             |
| `readAsBinaryString(file)` | (Deprecated) Reads as old-school binary string                          |

---

## 🧪 Example: Read Text File and Show Inside a `<div>`

```html
<input type="file" id="fileInput" />
<div id="output"></div>

<script>
  document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("output").textContent = e.target.result;
    };

    reader.readAsText(file);
  });
</script>
```

### What Happens Here:

* User selects a file.
* `FileReader` reads the file **as text**.
* `reader.onload` is triggered when reading finishes.
* The result is shown inside the `<div>`.

---

## 🧪 Example: Preview an Image Before Upload

```html
<input type="file" id="imgInput" />
<img id="preview" style="max-width: 200px;" />

<script>
  document.getElementById("imgInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("preview").src = e.target.result;
    };

    reader.readAsDataURL(file); // Convert image to base64
  });
</script>
```

---

## 📌 Important Properties of FileReader

| Property      | Description                                              |
| ------------- | -------------------------------------------------------- |
| `.result`     | The final file content after reading                     |
| `.onload`     | Called when file is successfully read                    |
| `.onerror`    | Called if something goes wrong                           |
| `.onprogress` | Use this to show file reading progress (for large files) |

---

## ⚠️ Security Notes

* Browsers **do not allow you to access file paths**.
* FileReader can only access files **explicitly provided by the user**.
* You **cannot read files outside the sandbox** like `C:\windows\secret.txt`.

---

## 🧠 Real Use Cases

| Use Case                              | Method                          |
| ------------------------------------- | ------------------------------- |
| Show image preview                    | `readAsDataURL()`               |
| Read user-uploaded JSON               | `readAsText()`                  |
| Display contents of `.html` or `.txt` | `readAsText()` + render in page |
| Upload CSV and process data           | `readAsText()` + parse rows     |
| Audio/video blob processing           | `readAsArrayBuffer()`           |

---

## 🚀 Want a Mini Project Idea?

👉 Create a mini app that:

* Lets user drop or upload a `.html` file
* Reads its content using `FileReader.readAsText()`
* Shows the HTML in an iframe using `iframe.srcdoc = result;`
