# Product Management API

## Prerequisites

Before running the application, make sure you have the following installed on your system:

- Node.js (v14 or later)
- npm (Node Package Manager) or yarn

## Installation

1. Clone the repository to your local machine:

git clone https://github.com/sihabhossain/product-management-backend.git

2. Navigate to the project directory:

3. Install dependencies using npm or yarn:

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add environment-specific configurations to the `.env` file. For example:

PORT=5000
DATABASE_URL=

Make sure to replace the `DATABASE_URL` with your MongoDB connection URL if it's different.

## Running the Application

To start the server, run the following command:

The server will start running on the port specified in the `.env` file (default is 3000).

The server will start running on the port specified in the `.env` file (default is 3000).

## API Endpoints

### Product Endpoints

- `POST /api/products` - Create a new product.
- `GET /api/products` - Get all products. Optionally, provide a `searchTerm` query parameter to search for products.
- `GET /api/products/:productId` - Get a single product by ID.
- `PUT /api/products/:productId` - Update a product by ID.
- `DELETE /api/products/:productId` - Delete a product by ID.

### Order Endpoints

- `POST /api/orders` - Create a new order.
- `GET /api/orders` - Get all orders. Optionally, provide an `email` query parameter to filter orders by email.
- `GET /api/orders/:orderId` - Get a single order by ID.
