### What is Case Sensitivity in HTML?

**Case sensitivity** refers to whether uppercase and lowercase letters are treated as different. In HTML, **case sensitivity is mostly *not* enforced**, but there are **some exceptions**.

---

## 🔵 1. **HTML Tags — Not Case Sensitive**

In **HTML (not XHTML)**, tag names are **not case-sensitive**.

✅ These are treated the same:

```html
<HTML>
<BoDy>
<h1>Hello</h1>
</BoDy>
</HTML>
```

All of the above will render properly in a browser.

> 💡 **Best Practice**: Use **lowercase** tag names for consistency and readability (and XHTML compatibility).

---

## 🔵 2. **Attribute Names — Not Case Sensitive**

HTML attribute names are **also not case-sensitive**.

✅ These are treated the same:

```html
<input TYPE="text">
<input type="text">
<input TyPe="text">
```

> 💡 Again, best practice is to use **lowercase**.

---

## 🔵 3. **Attribute Values — Case Sensitive (Sometimes)**

* Some attribute values **are case-sensitive**, depending on their use.

### Examples:

#### 🔹 `id` and `class` — **Case Sensitive**

```html
<div id="Header"></div>
```

* `#Header` and `#header` in CSS are **not the same** — CSS is case-sensitive with selectors like `id` and `class`.

#### 🔹 `type`, `rel`, `href`, etc. — **Usually Not Case Sensitive**

```html
<link rel="STYLESHEET" href="style.css">
```

This still works in browsers.

---

## 🔵 4. **Text Content — Always Case Sensitive**

Text inside tags is **just plain text**, so case matters:

```html
<p>Hello</p>
<p>hello</p>
```

These are not the same words.

---

## 🔵 5. **JavaScript & CSS in HTML — Case Sensitive**

Languages used inside HTML, like JavaScript and CSS, **are case-sensitive**.

```html
<script>
  let Name = "John";
  console.log(name); // Error! "name" is not the same as "Name"
</script>
```

---

## 🔵 6. **XHTML — Case Sensitive**

If you're writing in **XHTML (an XML-based version of HTML)**, then **everything is case-sensitive**:

```xml
<!-- Valid XHTML -->
<html>
  <body>
    <input type="text" />
  </body>
</html>

<!-- INVALID XHTML -->
<HTML> <!-- wrong -->
<BR> <!-- wrong -->
```

---

## ✅ Summary Table

| Element          | Case Sensitive? | Notes                            |
| ---------------- | --------------- | -------------------------------- |
| HTML tags        | ❌ No            | `<H1>` = `<h1>`                  |
| Attribute names  | ❌ No            | `TYPE` = `type`                  |
| Attribute values | ⚠️ Sometimes    | `id`, `class` are case-sensitive |
| CSS selectors    | ✅ Yes           | `#Header` ≠ `#header`            |
| JavaScript       | ✅ Yes           | `myVar` ≠ `myvar`                |
| XHTML            | ✅ Yes           | `<input>` ≠ `<INPUT>`            |
