# Getting Started with Create React App
Student Name: Pavan Savaliya
Student Number: 8944001
Date: 19-07-2024

#Technology stack
Frontend: ReactJs
Backend: Node.js
Database: MongoDB Atlas

#Database Schema Design
#in the backend have folder call model
admin model: firstName, lastName, fullName, email, password, mobile
product model: name, description, size, price, image


#Github URL: https://github.com/pgsavaliya/Web_Project

#Frontend Configured 
#install packages: npm i
#run Project: npm run start
#for admin login Id Password
email: admin@gmail.com
password: admin@123

#Backend Configured
#install packages: npm i
#run Project: npm start


# URL to run Admin Panel
http://localhost:3000/admin/login

# URL to run User
http://localhost:3000/


## Manual Test Cases
## Admin Side
### 1. Login Page
- **Description**: Verify Admin login page is properly navigate and work with api's
- **Steps**:
  1. Navigate to `http://localhost:3000/admin/login`.
  2. Ensure that the page loads successfully.
  3. Verify that the login form is work properly.
  4. Check that after fullfill true admin login details navigate to home page or admin details is worng then show proper error to user.


### 2. Add Product Page
- **Description**: Verify Admin Add Product page is properly working.
- **Steps**:
  1. Navigate to `http://localhost:3000/admin/add`.
  2. Ensure that the page loads successfully and verify add product form is display properly.
  3. Check that after fullfill true product details navigate to home page and product is added or not.


### 3. Add Product Page
- **Description**: Verify Admin Checkout page is properly working with checkout data.
- **Steps**:
  1. Navigate to `http://localhost:3000/admin/checkouts`.
  2. Ensure that the page loads successfully.
  3. Verify that all checkout get it from api's is correct or not.

### 4. Check Logout Button
- **Description**: Verify Admin Logout buttone is working properly or not.
- **Steps**:
  1. Navigate to `http://localhost:3000/admin/`.
  2. Ensure that the logout button is properly visible or not.
  3. After clicking that logout button page is navigate to login page or clear token session.

## user side
### 1. Home Page
- **Description**: Verify that the home page is working properly with all product with that category.
- **Steps**:
  1. Navigate to `http://localhost:3000/`.
  2. Ensure that the page loads successfully.
  3. Verify that all product is display properly with that category.

### 2. Product Details Page
- **Description**: Verify that Product details page is woring with that product data.
- **Steps**:
  1. Navigate to `http://localhost:3000/`.
  2. Click any of that product 'View Details' button.
  3. Ensure that the page loads successfully.
  4. Verify that product data is visible properly with that inage and price.

### 3. Add to Cart Button
- **Description**: Verify that add to cart button is working properly with that product add in cart.
- **Steps**:
  1. Navigate to `http://localhost:3000/`.
  2. Click any of that product 'Add to Cart' button.
  3. Ensure that button is clickabe or not and after click that button that product is added in cart.

### 4. Cart Page
- **Description**: Verify that cart page is woring and all cart product is display with some functionality.
- **Steps**:
  1. Navigate to `http://localhost:3000/ProductCart`.
  2. Verify that page is lode properly.
  3. Ensure that all cart product is display properly with some button like +, -, and Remove.
  4. Ensure that total is display correct.

### 5. Cart Page (+, -, and Remove) Button
- **Description**: Verify that all buttons is in working cindition.
- **Steps**:
  1. Navigate to `http://localhost:3000/ProductCart`.
  2. Verify in that page this all button is visible and place properly.
  3. Ensure that all buttons is in woring condition with increment and decrement that product quentity and remove that product from cart.

### 6. Checkout Page 
- **Description**: Verify that cart page is woring.
- **Steps**:
  1. Navigate to `http://localhost:3000/checkout`.
  2. Verify that page is load properly.
  3. Ensure that all product details is correct and have form to take needed user information.