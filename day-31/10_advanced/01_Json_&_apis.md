### **What is JSON?**
JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data. It is easy to read and write for both humans and machines. JSON is widely used in APIs and web services to transmit data between a client and a server.

#### **Example of JSON:**
```json
{
  "name": "John Doe",
  "age": 25,
  "email": "johndoe@example.com",
  "skills": ["JavaScript", "Python", "Java"]
}
```
#### **Key Features of JSON:**
- Uses key-value pairs.
- Data is enclosed in curly braces `{}`.
- Supports arrays `[]` and nested objects.
- Language-independent (though it originates from JavaScript).

---

### **What is an API?**
API (Application Programming Interface) is a set of rules that allows two applications to communicate with each other. APIs define how requests and responses should be structured, often using JSON or XML.

#### **Example of an API Request and Response (Using JSON)**  
A client (like a web app) sends a request to a server:

📌 **Request (GET request to fetch user data)**
```
GET https://api.example.com/users/123
```

📌 **Response (Server replies with JSON data)**
```json
{
  "id": 123,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

#### **Types of APIs:**
1. **REST API** – Uses HTTP methods like GET, POST, PUT, DELETE.
2. **SOAP API** – Uses XML-based messaging.
3. **GraphQL API** – Allows fetching only the required data.
4. **WebSockets** – Used for real-time communication.

#### **How JSON and API Work Together?**
Most APIs use JSON as the data format to send and receive information between clients (e.g., browsers, mobile apps) and servers.
