import { z } from "zod";

// Define a Zod schema for the product
export const ProductValidationSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
  price: z.number().positive(),
  category: z.string().min(1),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string().min(1),
      value: z.string().min(1),
    })
  ),
  inventory: z.object({
    quantity: z.number().int().positive(),
    inStock: z.boolean(),
  }),
});
