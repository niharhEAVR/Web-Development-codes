### **Difference Between Loops and `map()`, `filter()`, `reduce()`**
| Feature         | `for`/`while` Loops | `map()`, `filter()`, `reduce()` |
|---------------|------------------|------------------------|
| **Type**      | Traditional loops | Array methods (higher-order functions) |
| **Returns**   | Nothing (unless explicitly used) | A **new** array or value |
| **Mutability** | Can modify the original array | Does **not** modify the original array |
| **Readability** | More lines of code | Shorter, more readable |
| **Performance** | Can be optimized manually | Uses internal optimizations |

---

## **1️⃣ `map()` – Transforms Each Element and Returns a New Array**
- **Applies a function** to each array element.
- **Returns a new array** with modified elements.
- **Does NOT modify the original array**.

### **Example: Doubling Numbers**
```javascript
let numbers = [1, 2, 3, 4, 5];

// Using map() to double each number
let doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (Original array remains unchanged)
```
👉 **Best for:** Transforming data, such as modifying numbers, strings, or objects.

---

## **2️⃣ `filter()` – Filters Elements Based on a Condition**
- **Returns a new array** containing only elements that meet a condition.
- **Does NOT modify the original array**.

### **Example: Filtering Even Numbers**
```javascript
let numbers = [1, 2, 3, 4, 5, 6];

// Using filter() to get even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
console.log(numbers); // [1, 2, 3, 4, 5, 6] (Original array remains unchanged)
```
👉 **Best for:** Removing unwanted elements while keeping the original array intact.

---

## **3️⃣ `reduce()` – Reduces an Array to a Single Value**
- **Processes each element** and accumulates a result.
- **Common use cases:** Summation, finding the maximum/minimum, merging data, etc.

### **Example: Sum of All Numbers**
```javascript
let numbers = [1, 2, 3, 4, 5];

// Using reduce() to sum all numbers
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15
```
👉 **How it works:**
1. `accumulator` starts at `0`.
2. Adds each `currentValue` to `accumulator`.
3. Returns the **final accumulated value**.

---

## **Key Differences Between `map()`, `filter()`, and `reduce()`**
| Method | Purpose | Returns | Modifies Original Array? |
|--------|---------|---------|-------------------------|
| `map()` | Transforms each element | **New array** of modified elements | ❌ No |
| `filter()` | Filters elements based on a condition | **New array** of filtered elements | ❌ No |
| `reduce()` | Reduces array to a single value | **Single value** (number, string, object, etc.) | ❌ No |

---

## **When to Use Which?**
- ✅ **Use `map()`** when you want to **transform** each item in an array.
- ✅ **Use `filter()`** when you want to **remove** items that don’t match a condition.
- ✅ **Use `reduce()`** when you want to **calculate a single value** from an array.

---

## **Example Combining `map()`, `filter()`, and `reduce()`**
Let's say we have an array of products, and we want to:
1. **Filter out products cheaper than ₹200**.
2. **Increase the price of the remaining products by 10%**.
3. **Calculate the total cost of all the remaining products**.

```javascript
let products = [
    { name: "Book", price: 150 },
    { name: "Phone", price: 1200 },
    { name: "Laptop", price: 45000 },
    { name: "Pen", price: 50 }
];

let totalCost = products
    .filter(product => product.price >= 200) // Step 1: Keep products priced ₹200+
    .map(product => ({ ...product, price: product.price * 1.1 })) // Step 2: Increase price by 10%
    .reduce((sum, product) => sum + product.price, 0); // Step 3: Calculate total price

console.log(totalCost); // 50820 (Total cost after filtering and modifying prices)
```
---
### **Final Thoughts**
- `map()`, `filter()`, and `reduce()` are **powerful array methods**, but they are **not loops** in the traditional sense.
- They are more **declarative**, meaning they focus on **what to do**, rather than **how to do it** (unlike loops).
- They **don't modify the original array**, making them great for **functional programming**.

🚀 **Use these instead of loops when working with arrays for cleaner, more readable code!**