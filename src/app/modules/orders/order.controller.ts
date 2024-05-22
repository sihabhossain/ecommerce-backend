import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { OrderValidationSchema } from "./order.validation";
import { ZodError } from "zod";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    // validate data using zod
    const zodParsedData = OrderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrder(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      const errorMessage = error.errors.map((err) => err.message).join(", ");
      res.status(400).json({
        success: false,
        message: errorMessage,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Something went wrong",
        data: error.message,
      });
    }
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
