
# **PostHive - Blog Posting Backend API** 🐝

Welcome to **PostHive's Backend API**! 🚀 This API powers a **social blog platform** where users can **create, update, delete, and explore** posts while interacting with others through **follows and likes**.

## **Features**

- ✍️ **Post Management** – Users can create, update, delete, and view their blog posts.
- 👥 **User Interaction** – Follow other users to stay updated on their latest posts.
- 👍 **Likes & Engagement** – Like posts and engage with the blogging community.
- 🔍 **Explore & Discover** – Browse and explore content from other users.

## **Tech Stack**

PostHive's backend is built using the following technologies:

- **Express.js** – A fast and minimalist web framework for Node.js.
- **Prisma ORM** – A modern database toolkit for type-safe queries and efficient database management.
- **TypeScript** – Ensures robust and scalable backend development.
- **PostgreSQL** – A powerful and reliable relational database.

## **Getting Started**

Follow these steps to set up **PostHive's Backend API** locally:

### **1. Clone the Repository**

```bash
git clone https://github.com/ShivaTejMatam/PostHive.git
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Set Up Environment Variables**

Create a `.env` file and configure it with your **database URL** and **secret keys**.

Example `.env` file:

```
DATABASE_URL=your_database_url_here
JWT_SECRET=your_secret_key_here
```

### **4. Run Database Migrations**

```bash
npx prisma migrate dev --name init
```

### **5. Start the Development Server**

```bash
npm run dev
```

## **API Endpoints**

### **Authentication**
- `POST /api/auth/register` – Register a new user.
- `POST /api/auth/login` – Authenticate and get a JWT token.

### **Posts**
- `POST /api/posts` – Create a new post.
- `GET /api/posts` – Get all posts.
- `GET /api/posts/:id` – Get a specific post by ID.
- `PUT /api/posts/:id` – Update a post.
- `DELETE /api/posts/:id` – Delete a post.

### **User Actions**
- `POST /api/users/follow/:id` – Follow a user.
- `POST /api/users/unfollow/:id` – Unfollow a user.
- `GET /api/users/:id/followers` – Get followers of a user.
- `GET /api/users/:id/following` – Get users a user is following.
- `POST /api/posts/:id/like` – Like a post.
- `POST /api/posts/:id/unlike` – Unlike a post.

## **Contributing**

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Submit a pull request for review.

## **License**

This project is open-source and available under the **MIT License**.

---

🎉 **Happy Blogging with PostHive!** 🚀

