import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrder(orderData);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "Something went wrong",
      data: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email: string | undefined = req.query.email as string;

    const result = await OrderServices.getAllOrders(email);

    let message = "Orders fetched successfully!";
    if (email) {
      message = `Order matching email'${email}' fetched successfully!`;
    }

    res.status(200).json({
      success: true,
      message: message,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "Something went wrong",
      data: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
