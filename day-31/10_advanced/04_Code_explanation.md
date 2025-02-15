# Explanation of GitHub API Request using XMLHttpRequest

## 1. Defining the API URL
```javascript
let requestUrl = 'https://api.github.com/users/Nihar-Debnath';
```

- **Explanation:** This line defines a variable `requestUrl` that holds the API URL. This URL is used to get information about the GitHub user `Nihar-Debnath`.

## 2. Creating an XMLHttpRequest Object

```js
const xhr = new XMLHttpRequest();
```

- **Explanation:** This creates a new `XMLHttpRequest` object (`xhr`), which is used to interact with servers. `XMLHttpRequest` allows for making HTTP requests in JavaScript, and it works asynchronously to load data without reloading the page.

## 3. Initializing the Request

```javascript
xhr.open('GET', requestUrl);
```

- **Explanation:** This line initializes the request.
  - `'GET'` specifies the HTTP method (in this case, a 'GET' request is used to retrieve data).
  - `requestUrl` is the API endpoint you're sending the request to.
  - This method doesn't send the request yet; it only prepares it.

## 4. Handling the Response

```javascript
xhr.onreadystatechange = function () {
```

- **Explanation:** The `onreadystatechange` property assigns a function that gets called whenever the state of the request changes. There are 5 ready states (represented by `xhr.readyState`):
  - `0`: Request is not initialized.
  - `1`: Server connection is established.
  - `2`: Request is received.
  - `3`: Request is being processed.
  - `4`: Request is finished, and the response is ready (this is the final state).
    The function checks if `xhr.readyState` equals 4, which means the request has been completed and the data is ready to be used.

## 5. Logging the Request State

```javascript
console.log(xhr.readyState);
```

- **Explanation:** This logs the current `readyState` to the console. It's useful for debugging to see the state of the request at various stages.

## 6. Checking When the Request is Complete

```javascript
if (xhr.readyState === 4) {
```

- **Explanation:** This checks if the `readyState` is 4, meaning the request has completed, and we have the response. Only when the request is done do we proceed with processing the response.

## 7. Parsing the JSON Response

```javascript
let data = JSON.parse(this.responseText);
```

- **Explanation:** The server response is in **JSON format**, so `this.responseText` holds the raw JSON string. The `JSON.parse()` method is used to convert the JSON string into a JavaScript object so you can work with it.

📌 **Note:** Inside the `onreadystatechange` event handler, `this.responseText` refers to `xhr.responseText`.

📌 **For more details on ********`this.responseText`********, check the ********`01_README.md`******** file.**

## 8. Extracting the Avatar URL

```javascript
let url = data["avatar_url"];
```

- **Explanation:** Extracts the `avatar_url` property from the `data` object. This holds the URL of the user's GitHub profile picture.

## 9. Extracting the Name

```javascript
let name = data["name"];
```

- **Explanation:** Extracts the `name` property from the `data` object, which contains the full name of the GitHub user (if available).

## 10. Extracting the Number of Followers

```javascript
let followers = data["followers"];
```

- **Explanation:** Extracts the `followers` property from the `data` object, representing how many people are following this GitHub user.

## 11. Selecting the HTML Element

```javascript
let image = document.querySelector('.card');
```

- **Explanation:** This selects the HTML element with the class `.card`. This is where the user’s information (profile picture, name, and followers) will be inserted.

## 12. Dynamically Updating the HTML

```javascript
image.innerHTML = `
  <img src="${url}" alt="User Profile Picture" />
  <h1>${name}</h1>
  <h3>Followers: ${followers}</h3>
  <p>Don't compare the picture and name 😜</p>
`;
```

- **Explanation:** This dynamically updates the inner HTML of the `.card` element, inserting:
  - An image (`<img>`) with the source (`src`) set to the user’s GitHub profile picture URL (`url`).
  - A heading (`<h1>`) displaying the user’s name.
  - Another heading (`<h3>`) showing the number of followers.
  - A paragraph (`<p>`) with a fun note about not comparing the picture and name.

## 13. Sending the Request

```javascript
xhr.send();
```

- **Explanation:** Finally, this sends the request to the server. Now, the `XMLHttpRequest` object makes the GET request to the GitHub API, and when the response is ready, the `onreadystatechange` function is triggered to handle the response.



## need of `xhr.send()`

Great question! Let’s break it down step by step so it’s clear how `send()` and `onreadystatechange` work together.

---

### **Step-by-Step Execution of `XMLHttpRequest`**

1. **Create an XMLHttpRequest Object**  
   ```javascript
   const xhr = new XMLHttpRequest();
   ```
   - This creates the `xhr` object, which will handle the request.

2. **Open the Request**  
   ```javascript
   xhr.open('GET', requestUrl);
   ```
   - This initializes the request but does **not** send it yet.

3. **Set the `onreadystatechange` Handler**  
   ```javascript
   xhr.onreadystatechange = function () {
       console.log("Ready state:", xhr.readyState);
   };
   ```
   - This defines what should happen **whenever** the `readyState` of `xhr` changes.

4. **Send the Request**  
   ```javascript
   xhr.send();
   ```
   - This actually **sends** the request to the server.
   - As the request is processed, the `onreadystatechange` function will automatically run multiple times as `xhr.readyState` changes.

---

### **How `onreadystatechange` Works**
Once `xhr.send();` is called, the request goes through several stages. The `onreadystatechange` function is triggered every time `readyState` updates:

| `readyState` | Meaning | When does it happen? |
|-------------|---------|----------------------|
| `0` | **UNSENT** – Request created but not sent | Right after `new XMLHttpRequest()` |
| `1` | **OPENED** – Request initialized | After calling `xhr.open()` |
| `2` | **HEADERS_RECEIVED** – Server received the request | After `xhr.send()` is called and the server responds |
| `3` | **LOADING** – Processing the request | The response is being processed (downloading data) |
| `4` | **DONE** – Request finished, response ready | When the entire response is received |

---

### **Execution Flow Example**
```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/Nihar-Debnath');

xhr.onreadystatechange = function () {
    console.log("Ready state changed to:", xhr.readyState);

    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("Response received:", xhr.responseText);
    }
};

xhr.send();
```

### **What Happens Step by Step**
1. `xhr.open()` sets up the request.
2. `xhr.onreadystatechange` is assigned a function (but not executed yet).
3. `xhr.send()` is called, sending the request.
4. `xhr.onreadystatechange` executes multiple times as `readyState` changes:
   - Logs **"Ready state changed to: 1"**
   - Logs **"Ready state changed to: 2"**
   - Logs **"Ready state changed to: 3"**
   - Logs **"Ready state changed to: 4"**  
     - Now, the response is fully received and can be processed.

---

### **Final Answer**
- `xhr.send();` **triggers** the request.
- `onreadystatechange` **runs automatically** every time `xhr.readyState` updates.
- The key point is that `onreadystatechange` does **not** start the request. Instead, it just listens for changes in state.
