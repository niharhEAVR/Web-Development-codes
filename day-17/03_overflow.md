# 🌊 Overflow in CSS

## 🔹 What is `overflow`?

When the **content inside an element is bigger than the box size** (width/height), CSS needs to decide **what to do with the extra content**.
The `overflow` property controls this behavior.

---

## 🔹 Values of `overflow`

1. **`visible`** (default)

   * Content spills **outside** the box if it’s too big.
   * No clipping or scrollbars.
   * Browser just lets it “overflow”.

   ```html
   <div class="box visible">This is a very long text that overflows outside.</div>
   ```

   ```css
   .box {
     width: 150px;
     height: 50px;
     border: 2px solid black;
     overflow: visible; /* default */
   }
   ```

   🔎 Result → Text will **leak outside the box**.

---

2. **`hidden`**

   * Extra content is **cut off** (clipped).
   * No scrollbars.

   ```css
   .box {
     width: 150px;
     height: 50px;
     border: 2px solid black;
     overflow: hidden;
   }
   ```

   🔎 Result → Text stays **inside** box but extra part is **not visible**.

---

3. **`scroll`**

   * Content is clipped, but **scrollbars always appear** (both horizontal & vertical).
   * Even if not needed, scrollbars show up.

   ```css
   .box {
     width: 150px;
     height: 50px;
     border: 2px solid black;
     overflow: scroll;
   }
   ```

   🔎 Result → You can **scroll** inside the box to see hidden text.

---

4. **`auto`**

   * Smart option. Scrollbars only appear **if needed**.
   * If text fits → no scrollbar. If text overflows → scrollbar appears.

   ```css
   .box {
     width: 150px;
     height: 50px;
     border: 2px solid black;
     overflow: auto;
   }
   ```

   🔎 Result → Scrollbar shows **only when text doesn’t fit**.

---

5. **`overflow-x` and `overflow-y`**

   * You can separately control **horizontal** and **vertical** overflow.

   ```css
   .box {
     width: 150px;
     height: 50px;
     border: 2px solid black;
     overflow-x: scroll; /* horizontal */
     overflow-y: hidden; /* vertical */
   }
   ```

---

✅ **Summary Table**

| Value     | Effect                               |
| --------- | ------------------------------------ |
| `visible` | Content spills out (default).        |
| `hidden`  | Extra content is clipped, no scroll. |
| `scroll`  | Always shows scrollbars.             |
| `auto`    | Scrollbars only if needed.           |
