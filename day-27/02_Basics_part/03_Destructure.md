## **Destructuring in JavaScript**
Destructuring is a feature that **extracts values from objects or arrays and assigns them to variables in a simpler way.**

---

### **🔹 Array Destructuring**
Allows you to extract values from an array into variables **in a single line**.

#### **Example:**
```javascript
let colors = ["Red", "Green", "Blue"];

// Without destructuring
let firstColor = colors[0];
let secondColor = colors[1];

console.log(firstColor, secondColor); // Red Green

// With destructuring
let [c1, c2, c3] = colors;
console.log(c1, c2, c3); // Red Green Blue
```

#### **Skipping Elements**
```javascript
let numbers = [10, 20, 30, 40];

let [first, , third] = numbers; // Skipping the second element
console.log(first, third); // 10 30
```

#### **Using Rest `...` Operator**
```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let [firstFruit, ...remainingFruits] = fruits;
console.log(firstFruit); // Apple
console.log(remainingFruits); // ["Banana", "Mango", "Orange"]
```

---

### **🔹 Object Destructuring**
Allows you to extract properties from an object into variables.

#### **Example:**
```javascript
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

// Without destructuring
let name1 = person.name;
let age1 = person.age;
console.log(name1, age1); // Alice 25

// With destructuring
let { name, age, city } = person;
console.log(name, age, city); // Alice 25 New York
```

#### **Using Default Values**
```javascript
let student = { name: "John", age: 20 };

// If `grade` is missing, it will default to "Not Assigned"
let { name: studentName, age: studentAge, grade = "Not Assigned" } = student;
console.log(studentName, studentAge, grade); // John 20 Not Assigned
```

#### **Nested Object Destructuring**
```javascript
let user = {
  id: 1,
  profile: {
    username: "dev123",
    email: "dev@example.com"
  }
};

// Extracting nested properties
let { profile: { username, email } } = user;
console.log(username, email); // dev123 dev@example.com
```

---

### **Key Takeaways**
| Feature | Array Destructuring | Object Destructuring |
|---------|-------------------|-------------------|
| Syntax | `[var1, var2] = array` | `{ prop1, prop2 } = object` |
| Order Matters? | ✅ Yes | ❌ No (Uses property names) |
| Default Values? | ✅ Yes | ✅ Yes |
| Can Skip Elements? | ✅ Yes | ❌ No |