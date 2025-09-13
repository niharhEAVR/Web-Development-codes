### **All JavaScript Operators (With Examples)**
JavaScript has several types of operators, categorized as follows:

| Operator Type         | Description |
|----------------------|-------------|
| **Arithmetic Operators** | Perform basic math operations |
| **Assignment Operators** | Assign values to variables |
| **Comparison Operators** | Compare values and return `true` or `false` |
| **Logical Operators** | Combine multiple conditions |
| **Bitwise Operators** | Perform operations on binary numbers |
| **String Operators** | Concatenation of strings |
| **Ternary Operator** | A shorthand for `if-else` |
| **Type Operators** | Check and convert data types |
| **Nullish Coalescing Operator** | Handles `null` and `undefined` |

---

## **1️⃣ Arithmetic Operators**
Used for basic mathematical calculations.

| Operator | Description | Example | Output |
|----------|------------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `6 * 2` | `12` |
| `/` | Division | `8 / 2` | `4` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |
| `**` | Exponentiation (Power) | `2 ** 3` | `8` |
| `++` | Increment | `let x = 5; x++` | `6` |
| `--` | Decrement | `let y = 10; y--` | `9` |

📌 **Example:**
```javascript
let a = 10;
let b = 3;
console.log(a % b); // 1
console.log(2 ** 4); // 16
```

---

## **2️⃣ Assignment Operators**
Used to assign values to variables.

| Operator | Example | Equivalent To |
|----------|---------|--------------|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 4` | `x = x * 4` |
| `/=` | `x /= 2` | `x = x / 2` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 2` | `x = x ** 2` |

📌 **Example:**
```javascript
let x = 10;
x += 5;  // x = x + 5
console.log(x); // 15
```

---

## **3️⃣ Comparison Operators**
Used to compare values, returning `true` or `false`.

| Operator | Description | Example | Output |
|----------|------------|---------|--------|
| `==` | Equal to (loose check) | `5 == "5"` | `true` |
| `===` | Strictly equal to | `5 === "5"` | `false` |
| `!=` | Not equal to | `5 != "5"` | `false` |
| `!==` | Strictly not equal | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `>=` | Greater than or equal | `10 >= 10` | `true` |
| `<=` | Less than or equal | `8 <= 10` | `true` |

📌 **Example:**
```javascript
console.log(10 == "10");  // true (type conversion)
console.log(10 === "10"); // false (strict check)
console.log(10 !== "10"); // true
```

---

## **4️⃣ Logical Operators**
Used to combine multiple conditions.

| Operator | Description | Example | Output |
|----------|------------|---------|--------|
| `&&` | AND | `(true && false)` | `false` |
| `||` | OR | `(true || false)` | `true` |
| `!` | NOT | `!true` | `false` |

📌 **Example:**
```javascript
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");
} else {
    console.log("Cannot drive");
}
```

---

## **5️⃣ Bitwise Operators**
Used for bit-level operations.

| Operator | Example | Binary Operation | Output |
|----------|---------|------------------|--------|
| `&` | `5 & 1` | `0101 & 0001` | `0001` (1) |
| `|` | `5 | 1` | `0101 | 0001` | `0101` (5) |
| `^` | `5 ^ 1` | `0101 ^ 0001` | `0100` (4) |
| `~` | `~5` | `~0101` | `1010` (-6) |
| `<<` | `5 << 1` | `0101 << 1` | `1010` (10) |
| `>>` | `5 >> 1` | `0101 >> 1` | `0010` (2) |

📌 **Example:**
```javascript
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
```

---

## **6️⃣ String Operators**
Used for string concatenation.

| Operator | Description | Example | Output |
|----------|------------|---------|--------|
| `+` | Concatenation | `"Hello" + " World"` | `"Hello World"` |
| `+=` | Concatenation Assignment | `str += "!"` | `"Hello!"` |

📌 **Example:**
```javascript
let str = "Hello";
str += " World";
console.log(str); // "Hello World"
```

---

## **7️⃣ Ternary Operator (Shorthand for `if-else`)**
Syntax:  
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```
📌 **Example:**
```javascript
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
```

---

## **8️⃣ Type Operators**
| Operator | Description | Example |
|----------|------------|---------|
| `typeof` | Returns the type of a variable | `typeof "hello"` → `"string"` |
| `instanceof` | Checks if an object belongs to a specific class | `arr instanceof Array` |

📌 **Example:**
```javascript
console.log(typeof 42); // "number"
console.log([] instanceof Array); // true
```

---

## **9️⃣ Nullish Coalescing Operator (`??`)**
- Returns the right-hand side if the left-hand side is `null` or `undefined`.

📌 **Example:**
```javascript
let user;
console.log(user ?? "Guest"); // "Guest"

user = "Alice";
console.log(user ?? "Guest"); // "Alice"
```

---

### **Final Summary**
| Category | Operators |
|----------|-----------|
| Arithmetic | `+ - * / % ** ++ --` |
| Assignment | `= += -= *= /= %= **=` |
| Comparison | `== === != !== > < >= <=` |
| Logical | `&& || !` |
| Bitwise | `& | ^ ~ << >>` |
| String | `+ +=` |
| Ternary | `condition ? true : false` |
| Type | `typeof instanceof` |
| Nullish | `??` |

Let me know if you need more details! 🚀