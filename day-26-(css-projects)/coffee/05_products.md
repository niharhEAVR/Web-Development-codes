## 🔹 The HTML

```html
<section class="products">
    <h1 class="title title-three">Our Products</h1>

    <section class="cards">
        <div class="card">
            <div class="card-img img-one"></div>
            <div class="card-title">
                <h1>Mocha</h1>
            </div>
            <div class="items">
                <p>Expresso</p>
                <p>Steamed Milk</p>
                <p>Chocolate Syrup</p>
            </div>
        </div>
        <!-- Two more cards just like this -->
    </section>
</section>
```

* The **outer `<section class="products">`** is the whole product section.
* Inside it →

  * A **big title**: “Our Products”.
  * A container (`<section class="cards">`) which holds **3 product cards**.
* Each **`.card`** =

  * A **circle product image** at the top.
  * A **name** (`Mocha`).
  * A short **ingredient list** (espresso, milk, syrup).

---

## 🔹 The CSS (what it does)

### 1. Section container

```css
.products {
    margin-top: 5rem;
}
```

* Pushes this section **down from the section above it** by 5rem (≈ 80px).

---

### 2. Section title

```css
.title-three {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 100px;
}
```

* Makes “Our Products” **big (4rem ≈ 64px)**.
* Centers it on the page.
* Adds **100px space below** so the cards don’t touch the title.

---

### 3. Cards container

```css
.cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
```

* Uses **flexbox** to arrange the `.card`s **side by side** in a row.
* `flex-wrap: wrap;` → if the screen is small, the cards **stack onto a new line**.
* `justify-content: space-around;` → puts equal spacing between the cards.

---

### 4. Each card

```css
.card {
    border: 2px solid var(--main-color);
    padding: 0 20px;
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 4rem;
    position: relative;
}
```

* Each card is a **box**: 300px wide, 400px tall.
* Has a **gold border** (your `--main-color`).
* Inside content is centered **vertically + horizontally**.
* Rounded corners.
* `margin-bottom: 4rem;` → space below cards when wrapping on smaller screens.
* `position: relative;` → needed so the image can be **absolutely placed on top**.

---

### 5. Product image (floating circle)

```css
.card-img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: -60px;
}
```

* Each card has a **100px circle image**.
* `position: absolute; top: -60px;` → makes it look like the image is **popping out above the card**.
* Different classes `.img-one`, `.img-two`, `.img-three` give different background images.
* Each has `border-radius: 50%;` so they are **perfect circles**.

---

### 6. Card title

```css
.card-title {
    font-size: 1.5rem;
    margin-top: 60px;
    margin-bottom: 10px;
    color: #fff;
}
```

* Displays the coffee name (Mocha).
* `margin-top: 60px;` leaves room so the floating image above doesn’t overlap.
* White text color.

---

### 7. Ingredients list

```css
.card .items p {
    color: var(--main-color);
    margin: 20px 0;
}
```

* Ingredients (Espresso, Milk, Syrup) are written in **gold color**.
* Spaced out with `margin: 20px 0`.

---

## ✅ In Simple Words

The **Products Section** shows your coffees in stylish **cards**:

* A **circle product image** floats above each card.
* The **name of the coffee** is displayed under the image.
* A short **list of ingredients** is shown in gold.
* Cards sit **side by side**, but wrap to new rows if the screen is smaller.

It looks like a **menu showcase** — clean, neat, and professional.
