import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { ProductValidationSchema } from "./product.validation";

// creating a product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // validate data using zod
    const zodParsedData = ProductValidationSchema.parse(productData);

    const result = await ProductServices.createProduct(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message, // accessing the error message
    });
  }
};

// get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm: string | undefined = req.query.searchTerm as string;

    const result = await ProductServices.getAllProducts(searchTerm);

    // conditionally sending message
    let message = "Products fetched successfully!";
    if (searchTerm) {
      message = `Products matching search term '${searchTerm}' fetched successfully!`;
    }

    res.status(200).json({
      success: true,
      message: message,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProduct(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProduct = req.body;
    const zodParsedData = ProductValidationSchema.parse(updatedProduct);
    const result = await ProductServices.updateProduct(
      productId,
      zodParsedData
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: zodParsedData,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProduct(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// exports
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
