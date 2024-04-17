import { CategoriesRepository } from "./../database/repositories/categories.repository";
import { Category } from "../enitities/category.entity";

import { CreateCategoryDTO } from "../ditos/categories.dto";
import { AppError } from "../errors/app.error";
import { StatusCodes } from "http-status-codes";

export class CategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async create({ title, color }: CreateCategoryDTO): Promise<Category> {
    const foundCategory = await this.categoriesRepository.findByTitle(title);

    if (foundCategory) {
      throw new AppError("Category already exists", StatusCodes.BAD_REQUEST);
    }
    const category = new Category({
      title,
      color,
    });

    const createdCategory = await this.categoriesRepository.create(category);

    return createdCategory;
  }
  async index(): Promise<Category[]> {
    const categories = await this.categoriesRepository.index();

    return categories;
  }
}
