# Blog API Documentation
## Introduction
The Blog API allows users to create, read, update, and delete blog posts. It is built using Node.js and Express, with MongoDB as the database. The API is structured to provide a seamless experience for managing blog content.

Sample solution for the [Blog API](https://roadmap.sh/projects/blogging-platform-api) challenge from [roadmap.sh](https://roadmap.sh/).

---
## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running locally or access to a MongoDB Atlas cluster

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/stateman24/blog-platform-api.git
   ```

2. Navigate to the project directory:
   ```bash
   cd blog-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. The API will be accessible at `http://localhost:5000`.

---

## API Endpoints

### Base URL
`http://localhost:5000`

### Endpoints

#### 1. Create a Blog Post
**URL:** `/posts`

**Method:** `POST`

**Description:** Create a new blog post.

**Request Body:**
```json
{
  "title": "string",
  "content": "string",
  "author": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

---

#### 2. Get All Blog Posts
**URL:** `/posts`

**Method:** `GET`

**Description:** Retrieve all blog posts.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "string",
      "title": "string",
      "content": "string",
      "author": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

---

#### 3. Get a Single Blog Post
**URL:** `/posts/6766c8464451aef40dc82449`

**Method:** `GET`

**Description:** Retrieve a single blog post by its ID.

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

---

#### 4. Update a Blog Post
**URL:** `/posts/6766c8464451aef40dc82449`

**Method:** `PUT`

**Description:** Update an existing blog post by its ID.

**Request Body:**
```json
{
  "title": "string",
  "content": "string",
  "author": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

---

#### 5. Delete a Blog Post
**URL:** `/posts/6766c8464451aef40dc82449`

**Method:** `DELETE`

**Description:** Delete a blog post by its ID.

**Response:**
```json
{
  "success": true,
  "message": "Blog post deleted successfully."
}
```

---

## Technologies Used
- **Node.js**: Server-side JavaScript runtime
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling tool

---

## Author
Ajibewa Daniel Ayodeji

Feel free to contribute or report issues for the Blog API! 🚀
