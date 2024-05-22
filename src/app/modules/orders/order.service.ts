import { ProductServices } from "../products/product.service";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// creating a order
const createOrder = async (payload: TOrder) => {
  const { productId, quantity } = payload;

  // Retrieve the product details
  const product = await ProductServices.getSingleProduct(productId);

  // Check if the product exists
  if (!product) {
    throw new Error("Product not found");
  }

  // Check if there is enough stock
  if (product.inventory.quantity < quantity) {
    throw new Error("Insufficient stock");
  }

  // Update the product quantity and inStock status
  product.inventory.quantity -= quantity;
  product.inventory.inStock = product.inventory.quantity > 0;

  // Save the updated product
  await ProductServices.updateProduct(productId, {
    inventory: product.inventory,
  });

  const result = await Order.create(payload);
  return result;
};

const getAllOrders = async (email: string) => {
  let query = {};

  // using regex to query
  if (email) {
    query = { email: { $regex: email, $options: "i" } };
  }

  const result = await Order.find(query);
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrders,
};
