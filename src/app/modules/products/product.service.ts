import { TProduct } from "./products.interface";
import { Product } from "./products.model";

// creating a product
const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// get all products
const getAllProducts = async (searchTerm: string) => {
  let query = {};

  // using regex to query
  if (searchTerm) {
    query = { name: { $regex: searchTerm, $options: "i" } };
  }

  const result = await Product.find(query);
  return result;
};

// get all products
const getSingleProduct = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

// get all products
const updateProduct = async (
  productId: string,
  updatedProduct: Partial<TProduct>
) => {
  const result = await Product.updateOne({ _id: productId }, updatedProduct);
  return result;
};

// delete product
const deleteProduct = async (productId: string) => {
  const result = await Product.deleteOne({ _id: productId });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
