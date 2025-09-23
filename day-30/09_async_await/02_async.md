### 📌 First, what the code is doing?

You wrote an `async` function called `main()` which simulates a task with **different steps happening at different times**.
It mixes `setTimeout()` (delays) and `await` (waiting for promise).

---

### 🔹 Step-by-Step Timeline

When you call `main()`, here’s what happens:

---

#### **At 0 sec**

* `main()` is called.
* Immediately schedules 3 `setTimeout`s:

  * After 1 sec → `Starting of Task 1`
  * After 2 sec → `Running...`
  * After 3 sec → `Loading Data`

Then, `main()` hits this line:

```js
let data = await getData(6000);
```

👉 This **pauses execution for 6 seconds** until the promise resolves.

---

#### **At 1 sec**

```
Starting of Task 1
```

---

#### **At 2 sec**

```
Running...
```

---

#### **At 3 sec**

```
Loading Data
```

---

#### **At 6 sec (since await started at 0 sec, finishes here)**

The promise inside `getData(6000)` resolves:

```
202 Resolved and data succesfully loaded
```

---

#### **After promise resolves (still at \~6 sec)**

Two more `setTimeout`s are scheduled:

* After **1 sec** → `Processing Data`
* After **3 sec** → `End of Task 1`

⚠️ These are relative to when they are scheduled (so actually fire at **7 sec** and **9 sec**).

---

#### **At 7 sec**

```
Processing Data
```

---

#### **At 9 sec**

```
End of Task 1
```

---

### 📌 Final Output Order with Timeline

```
1s → Starting of Task 1
2s → Running...
3s → Loading Data
6s → 202 Resolved and data succesfully loaded
7s → Processing Data
9s → End of Task 1
```

---

### 🔹 Why total ≈ 9 seconds?

* First 3 logs happen within **3 sec**.
* Then program **waits 6 sec** (for the `await`).
* After that, extra delays push final log to **9 sec total**.

---

✅ In simple words:
Your code is simulating a **task pipeline**:

1. Start → Run → Load (first 3 sec).
2. Wait 6 sec for "data to load".
3. After that, process and finish (till 9 sec).
