In JavaScript, strings are indeed **immutable**, which means that once a string is created, its characters cannot be modified individually. However, you can create **a new string** by using string methods like `.replace()`.

Here’s what happens in your example:

```javascript
let b = "BANANA";
b = b.replace("BA", "69");
console.log(b); // Outputs: "69NANA"
```

### Explanation
- **`b.replace("BA", "69")`**: This method creates a **new string** with the specified replacement (changing `"BA"` to `"69"`), rather than modifying `b` in place.
- **`b =`**: The new string returned by `.replace()` is then assigned back to `b`, effectively replacing the old value of `b` with this new string.

### Immutability and Reassignment
While the original `"BANANA"` string itself isn’t changed, we’re reassigning `b` to hold the new modified string `"69NANA"`. This doesn’t alter the original string in memory, it just points `b` to a new string. So, immutability holds true here, but reassignment allows us to work with a modified version.


### **All JavaScript String Methods (With Examples)**  
JavaScript provides various built-in string methods for **manipulating and handling strings**. Here’s a **comprehensive list** of them:  

---

## **1️⃣ String Length**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.length` | Returns the number of characters in a string | `"Hello".length` | `5` |

📌 **Example:**
```javascript
let text = "Hello, World!";
console.log(text.length); // 13
```

---

## **2️⃣ String Case Conversion**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.toUpperCase()` | Converts to uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `.toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` | `"hello"` |

📌 **Example:**
```javascript
let str = "JavaScript";
console.log(str.toUpperCase()); // "JAVASCRIPT"
console.log(str.toLowerCase()); // "javascript"
```

---

## **3️⃣ String Search Methods**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.indexOf()` | Finds the first occurrence | `"Hello".indexOf("l")` | `2` |
| `.lastIndexOf()` | Finds the last occurrence | `"Hello".lastIndexOf("l")` | `3` |
| `.includes()` | Checks if substring exists | `"JavaScript".includes("Script")` | `true` |
| `.startsWith()` | Checks if starts with substring | `"Hello".startsWith("He")` | `true` |
| `.endsWith()` | Checks if ends with substring | `"Hello".endsWith("lo")` | `true` |

📌 **Example:**
```javascript
let sentence = "I love JavaScript!";
console.log(sentence.includes("Java")); // true
console.log(sentence.startsWith("I")); // true
console.log(sentence.endsWith("!")); // true
```

---

## **4️⃣ String Extraction Methods**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.slice(start, end)` | Extracts part of a string | `"Hello".slice(1,4)` | `"ell"` |
| `.substring(start, end)` | Similar to `slice()` but **no negative index support** | `"Hello".substring(1,4)` | `"ell"` |
| `.substr(start, length)` | Extracts a specific length | `"Hello".substr(1,3)` | `"ell"` |

📌 **Example:**
```javascript
let text = "JavaScript";
console.log(text.slice(0, 4)); // "Java"
console.log(text.substring(0, 4)); // "Java"
console.log(text.substr(4, 6)); // "Script"
```

---

## **5️⃣ String Replace Methods**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.replace("old", "new")` | Replaces the first match | `"Hello".replace("l", "X")` | `"HeXlo"` |
| `.replaceAll("old", "new")` | Replaces **all** matches | `"Hello".replaceAll("l", "X")` | `"HeXXo"` |

📌 **Example:**
```javascript
let message = "Hello World, Hello JavaScript!";
console.log(message.replace("Hello", "Hi")); // "Hi World, Hello JavaScript!"
console.log(message.replaceAll("Hello", "Hi")); // "Hi World, Hi JavaScript!"
```

---

## **6️⃣ String Concatenation**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.concat(str1, str2)` | Joins strings | `"Hello".concat(" ", "World")` | `"Hello World"` |
| `+` | Concatenation operator | `"Hello" + " World"` | `"Hello World"` |

📌 **Example:**
```javascript
let firstName = "John";
let lastName = "Doe";
console.log(firstName.concat(" ", lastName)); // "John Doe"
console.log(firstName + " " + lastName); // "John Doe"
```

---

## **7️⃣ String Trimming Methods**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.trim()` | Removes spaces from **both sides** | `"  Hello  ".trim()` | `"Hello"` |
| `.trimStart()` | Removes spaces from **start** | `"  Hello".trimStart()` | `"Hello"` |
| `.trimEnd()` | Removes spaces from **end** | `"Hello  ".trimEnd()` | `"Hello"` |

📌 **Example:**
```javascript
let text = "  JavaScript  ";
console.log(text.trim()); // "JavaScript"
console.log(text.trimStart()); // "JavaScript  "
console.log(text.trimEnd()); // "  JavaScript"
```

---

## **8️⃣ String Splitting**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.split(separator)` | Splits a string into an array | `"a,b,c".split(",")` | `["a", "b", "c"]` |

📌 **Example:**
```javascript
let csv = "apple,banana,grape";
console.log(csv.split(",")); // ["apple", "banana", "grape"]
```

---

## **9️⃣ String Padding**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.padStart(length, "char")` | Pads at **start** | `"5".padStart(3, "0")` | `"005"` |
| `.padEnd(length, "char")` | Pads at **end** | `"5".padEnd(3, "0")` | `"500"` |

📌 **Example:**
```javascript
let num = "7";
console.log(num.padStart(4, "0")); // "0007"
console.log(num.padEnd(4, "X")); // "7XXX"
```

---

## **🔟 String Repeat**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.repeat(n)` | Repeats the string `n` times | `"Hi ".repeat(3)` | `"Hi Hi Hi "` |

📌 **Example:**
```javascript
let text = "Ha";
console.log(text.repeat(3)); // "HaHaHa"
```

---

## **🔟 String Match & Search**
| Method | Description | Example | Output |
|--------|------------|---------|--------|
| `.match(regexp)` | Returns an array of matches | `"hello".match(/l/g)` | `["l", "l"]` |
| `.search(regexp)` | Returns index of first match | `"hello".search(/l/)` | `2` |

📌 **Example:**
```javascript
let text = "The rain in Spain";
console.log(text.match(/ain/g)); // ["ain", "ain"]
console.log(text.search(/rain/)); // 4
```

## 🔹 1. Your String

```js
let text = "The rain in Spain";
```

So the text looks like this (with index positions):

```
Index:  0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16
Chars:  T   h   e       r   a   i   n       i   n       S   p   a   i   n
```

---

## 🔹 2. `match()` Example

```js
console.log(text.match(/ain/g));
```

### Explanation:

* `/ain/g` → a **regular expression** that looks for `"ain"`.

  * `g` = **global flag**, meaning find *all matches*, not just the first one.
* `match()` → returns **an array of all matches**.

In `"The rain in Spain"`, `"ain"` appears twice:

1. `"rain"` → contains `"ain"` (at index 5–7).
2. `"Spain"` → contains `"ain"` (at index 13–15).

✅ Output:

```js
["ain", "ain"]
```

---

## 🔹 3. `search()` Example

```js
console.log(text.search(/rain/));
```

### Explanation:

* `/rain/` → regex looking for `"rain"`.
* `search()` → returns the **index of the first match**, or `-1` if not found.

In the string:

```
The rain in Spain
    ^--- starts at index 4
```

✅ Output:

```js
4
```

---

## 🔹 4. Difference Between `.match()` and `.search()`

| Method     | What it Returns                              |
| ---------- | -------------------------------------------- |
| `match()`  | An **array of matches** (or `null` if none). |
| `search()` | The **index of the first match** (or `-1`).  |

---

## 🔹 5. More Examples

```js
let str = "banana";

// Find all "a"s
console.log(str.match(/a/g)); // ["a", "a", "a"]

// Search for "na"
console.log(str.search(/na/)); // 2 (first "na" starts at index 2)
```

---

✅ **Summary**:

* `/pattern/flags` = RegEx in JS.
* `.match()` → returns the matches.
* `.search()` → returns the index of the first match.

---

# 🔹 Common RegEx Flags in JavaScript

A regex looks like:

```js
/pattern/flags
```

---

## 1. **`g` → Global search**

* Finds **all matches**, not just the first one.

```js
let str = "banana";
console.log(str.match(/a/));   // ["a"] → only first match
console.log(str.match(/a/g));  // ["a", "a", "a"] → all matches
```

---

## 2. **`i` → Case-insensitive**

* Ignores uppercase/lowercase differences.

```js
let str = "Hello hello";
console.log(str.match(/hello/));   // ["hello"] → matches only lowercase
console.log(str.match(/hello/i));  // ["Hello"] → matches regardless of case
```

---

## 3. **`m` → Multiline mode**

* `^` and `$` match at **line breaks** too (not just start/end of whole string).

```js
let str = "first line\nsecond line";
console.log(str.match(/^second/));   // null → without m, only start of whole string
console.log(str.match(/^second/m));  // ["second"] → works on 2nd line too
```

---

## 4. **`s` → Dotall mode**

* Normally, `.` matches everything **except newline**.
* With `s`, `.` also matches newlines.

```js
let str = "hello\nworld";
console.log(str.match(/hello.world/));   // null → "." does not cross newline
console.log(str.match(/hello.world/s));  // ["hello\nworld"]
```

---

## 5. **`u` → Unicode**

* Allows working with full Unicode (like emojis, special symbols).
* Without `u`, regex may break with 2-byte characters.

```js
let str = "💖";
console.log(/^.$/.test(str));    // false → fails without unicode flag
console.log(/^.$/u.test(str));   // true  → works with unicode flag
```

---

## 6. **`y` → Sticky search**

* Matches from the **current position only** (no skipping ahead like `g`).

```js
let str = "abcabc";
let regexG = /a/g;
let regexY = /a/y;

regexG.lastIndex = 2;
regexY.lastIndex = 2;

console.log(regexG.test(str)); // true  → finds "a" at index 3
console.log(regexY.test(str)); // false → sticky: fails, because index 2 ≠ "a"
```

---

# 🔹 Summary Table

| Flag | Meaning                               | Example    |
| ---- | ------------------------------------- | ---------- |
| `g`  | Global (find all matches)             | `/a/g`     |
| `i`  | Ignore case                           | `/hello/i` |
| `m`  | Multiline                             | `/^word/m` |
| `s`  | Dotall (let `.` match `\n`)           | `/a.b/s`   |
| `u`  | Unicode (handle emojis, symbols)      | `/./u`     |
| `y`  | Sticky (match exactly at `lastIndex`) | `/a/y`     |

---

✅ With these flags, you can make regex much more powerful and flexible.


---

## **Final Summary**
| Category | Methods |
|----------|---------|
| **Length** | `.length` |
| **Case Conversion** | `.toUpperCase()`, `.toLowerCase()` |
| **Searching** | `.indexOf()`, `.lastIndexOf()`, `.includes()`, `.startsWith()`, `.endsWith()` |
| **Extraction** | `.slice()`, `.substring()`, `.substr()` |
| **Replacement** | `.replace()`, `.replaceAll()` |
| **Concatenation** | `.concat()`, `+` |
| **Trimming** | `.trim()`, `.trimStart()`, `.trimEnd()` |
| **Splitting** | `.split()` |
| **Padding** | `.padStart()`, `.padEnd()` |
| **Repetition** | `.repeat()` |
| **Matching** | `.match()`, `.search()` |
