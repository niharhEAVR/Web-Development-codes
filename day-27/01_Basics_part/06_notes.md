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
