# Node.js, MongoDB, and JWT API

This project demonstrates how to build a RESTful API using Node.js, MongoDB, and JSON Web Tokens (JWT). It features domain-specific structures such as Users, Roles, and Orders, implementing key functionalities like authentication, CRUD operations, and role-based access control. MongoDB is used as the database, and the project follows a clean architecture with separated concerns.

## Features

- **Authentication**: User login and authentication using JWT.
- **User Management**: Create, read, update, and delete users.
- **Role Management**: Role-based access control (RBAC) for managing user roles.
- **Order Management**: CRUD operations for orders.
- **Environment Configuration**: Manage environment-specific variables.

---

## Folder Structure

```bash
.
├── config/            # Application configuration (e.g., JWT secret, database settings)
├── db/                # MongoDB database connection logic
├── domain/            # Core business logic and domain-driven design
│   ├── model/         # Database models (schemas for User, Role, and Order)
│   ├── repositories/  # Data access layer (interacts with the database)
│   ├── usecase/       # Application services (business logic for each domain)
├── handlers/          # Request handlers (interacts with domain and prepares responses)
├── middlewares/       # Custom middleware (authentication, authorization, etc.)
├── node_modules/      # Node.js dependencies
├── routers/           # Express routers (define routes for each domain)
├── tmp/               # Temporary files (if required)
├── .env               # Environment variables
├── .gitignore         # Ignored files for Git
├── env.example        # Example environment configuration file
├── package.json       # Node.js project metadata and scripts
├── package-lock.json  # Dependency tree lock file
├── postman.json       # Postman collection for API testing
├── README.md          # Project documentation (this file)
├── server.js          # Entry point for the Node.js server

## Installation

### Clone the repository:

```bash
git clone https://github.com/Jolycky/starter-pack-js-jo-day3 
cd api-node-mongo-jwt

### Install the dependencies:

```bash
npm install

### Set up the environment variables:

```bash
cp env.example .env

### Start the server:

```bash
npm start

The server will start at http://localhost:3000.

## API Endpoints

### Authentication
- `POST /auth/login` - Log in a user and return a JWT.

### Users
- `POST /users` - Create a new user.
- `GET /users` - Get a list of all users.
- `GET /users/:id` - Get details of a specific user.
- `PUT /users/:id` - Update a user.
- `DELETE /users/:id` - Delete a user.

### Orders
- `POST /orders` - Create a new order.
- `GET /orders` - Get a list of all orders.
- `GET /orders/:id` - Get details of a specific order.
- `PUT /orders/:id` - Update an order.
- `DELETE /orders/:id` - Delete an order.

### Roles
- `POST /roles` - Create a new role.
- `GET /roles` - Get a list of all roles.
- `GET /roles/:id` - Get details of a specific role.
- `PUT /roles/:id` - Update a role.
- `DELETE /roles/:id` - Delete a role.

## Additional Information

### Environment Variables
Variable | Description | Example
--- | --- | ---
PORT | Port for the server | 3000
MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/dbname
JWT_SECRET | Secret key for JWT | your-secret-key
TOKEN_EXPIRE | Token expiration time | 1h

### Middleware
- **Authentication Middleware**: Verifies JWT and allows access to protected routes.
- **Authorization Middleware**: Checks user roles and permissions for role-based access control.

### Testing
The project includes a Postman collection (postman.json) that can be imported into Postman for testing the API.

1. Open Postman.
2. Click on "Import" and select the postman.json file.
3. Run the available requests.

### License
This project is licensed under the MIT License.