# Next Task - Product Management App

## Project Description
Next Task is a simple **Next.js 15** application demonstrating public and protected pages with authentication using **NextAuth.js**. Users can view products, see product details, and, after logging in, add new products to the database. The project includes features such as:

- Credential-based login with **bcrypt** password hashing.
- Protected pages accessible only when logged in.
- Product listing and detailed view.
- Add Product form with loading spinner and toast notifications.
- Light/Dark theme support using CSS variables.

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/next-task.git
cd next-task
2.  **Install dependencies**
npm install
# or
yarn install
3.Set up environment variables
Create a .env.local file at the project root:
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
NEXTAUTH_SECRET=your_nextauth_secret
4.Run the development server
npm run dev
# or
yarn dev

Route Summary
Route	Method	Description	Authentication
/	GET	Landing page with Navbar, Hero, Product Highlights, Footer	Public
/login	GET/POST	User login using NextAuth credentials	Public
/register	GET/POST	User registration with hashed password	Public
/products	GET	List all products	Public
/products/[id]	GET	Product details page	Public
/dashboard/add-product	GET/POST	Add new product form and submission          Protected (login required)
