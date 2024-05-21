import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// creating a order
const createOrder = async (payload: TOrder) => {
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
