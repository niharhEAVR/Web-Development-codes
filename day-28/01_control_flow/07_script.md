## 🔹 Case 1: **Using Spread Operator**

```js
.map(student => ({ ...student, score: student.score + 5 }))
```

👉 `...student` means:

* Take **all properties** from the original `student` object (`name`, `score`)
* Put them into a **new object**
* Then overwrite `score` with `student.score + 5`

### ✅ Example Output

```js
[
  { name: 'Bob', score: 60 },
  { name: 'Charlie', score: 65 },
  { name: 'Eve', score: 75 }
]
```

🔎 **Key point**:

* You keep both `name` and updated `score`.
* Original `students` array is untouched.

---

## 🔹 Case 2: **Without Spread Operator**

```js
.map(student => ({ student, score: student.score + 5 }))
```

👉 Now you are creating a new object with **two properties**:

* `student`: the **entire original student object** (nested inside)
* `score`: the **new score**

### ❌ Example Output

```js
[
  { student: { name: 'Bob', score: 55 }, score: 60 },
  { student: { name: 'Charlie', score: 60 }, score: 65 },
  { student: { name: 'Eve', score: 70 }, score: 75 }
]
```

Here each object looks like:

```js
{
  student: { name: "Bob", score: 55 }, // original student nested inside
  score: 60                            // new property alongside it
}
```

🔎 **Key point**:

* Instead of copying `name` and `score` directly, you **nest the original object** under a new property called `student`.
* This means you now have a "double layer": `obj.student.name` instead of just `obj.name`.

---

## 🔹 Visual Comparison

With spread (`...student`):

```js
{ name: 'Bob', score: 60 }
```

Without spread:

```js
{ student: { name: 'Bob', score: 55 }, score: 60 }
```

---

✅ **In Summary**:

* **With spread operator** → you get a **flat object** with copied properties and updated score.
* **Without spread operator** → you get a **nested structure** (`student` object inside another object).
