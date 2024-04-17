import { z } from "zod";

export const createCategorySchema = {
  title: z.string(),
  color: z.string().regex(/^#[A-Fa-f0-9]{6}$/),
};

const creatCategoryObject = z.object(createCategorySchema);
export type CreateCategoryDTO = z.infer<typeof creatCategoryObject>;
