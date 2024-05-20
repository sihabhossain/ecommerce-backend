import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for a variant
const variantSchema = new Schema(
  {
    type: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

// Define the schema for inventory details
const inventorySchema = new Schema(
  {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { _id: false }
);

// Define the schema for the main product
const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

// Create the Product model
export const Product = mongoose.model("Product", productSchema);
