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
|----------|-------------|---------|--------|
| `&&` | AND | `(true && false)`   | `false`|
|  `or` | OR  | `(true or false)`   | `true` |
| `!`  | NOT | `!true`             | `false`|

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



## 🔹 1. What are Bitwise Operators?

Bitwise operators work **directly on the binary representation of numbers** (0s and 1s).
JavaScript converts numbers into **32-bit signed integers** for bitwise operations, does the operation on those 32 bits, and then converts back to a standard Number.

For example:

```js
5 -> binary: 00000000000000000000000000000101
3 -> binary: 00000000000000000000000000000011
```

---

## 🔹 2. Types of Bitwise Operators

### (a) AND (`&`)

Compares each bit of two numbers.
**1 & 1 → 1**, else → 0.

```js
5 & 3   // 1
```

Explanation:

```
  0101   (5)
& 0011   (3)
= 0001   (1)
```

---

### (b) OR (`|`)

Compares each bit.
**1 | 1 → 1**, **1 | 0 → 1**, **0 | 0 → 0**.

```js
5 | 3   // 7
```

```
  0101   (5)
| 0011   (3)
= 0111   (7)
```

---

### (c) XOR (`^`) – Exclusive OR

Gives `1` if the bits are **different**, `0` if same.

```js
5 ^ 3   // 6
```

```
  0101   (5)
^ 0011   (3)
= 0110   (6)
```

---

### (d) NOT (`~`)

Flips all bits (1 → 0, 0 → 1).
⚠️ Since numbers are signed 32-bit, this is effectively `-(n+1)`.

```js
~5   // -6
```

```
  00000000000000000000000000000101   (5)
~ 11111111111111111111111111111010   (-6)
```

---

### (e) Left Shift (`<<`)

Shifts bits to the left, filling with 0s on the right.
Equivalent to multiplying by `2^n`.

```js
5 << 1   // 10
```

```
  0101 (5)
<< 1
= 1010 (10)
```

---

### (f) Signed Right Shift (`>>`)

Shifts bits to the right, keeping the sign (fills with 1 for negatives, 0 for positives).
Equivalent to dividing by `2^n` (floor for positives).

```js
5 >> 1   // 2
```

```
  0101 (5)
>> 1
= 0010 (2)
```

Negative example:

```js
-5 >> 1   // -3
```

---

### (g) Zero-Fill Right Shift (`>>>`)

Shifts bits to the right, always filling with 0s.
Doesn’t preserve sign, so negative numbers become large positives.

```js
-5 >>> 1
```

Becomes a big positive number: `2147483645`.

---

## 🔹 3. Practical Uses of Bitwise Operators

1. **Fast multiplication/division by powers of 2**

   ```js
   5 << 1 // 10  (5 * 2)
   8 >> 2 // 2   (8 / 4)
   ```

2. **Checking even/odd**

   ```js
   (5 & 1) === 1   // odd
   (8 & 1) === 0   // even
   ```

3. **Swapping values without a temp variable**

   ```js
   let a = 5, b = 3;
   a = a ^ b;
   b = a ^ b;
   a = a ^ b;
   // a = 3, b = 5
   ```

4. **Flags & permissions (like in games, OS, etc.)**

---

✅ So, bitwise operators are just tools to manipulate the **binary-level representation** of numbers — very fast and useful in low-level programming, optimizations, and handling flags.
