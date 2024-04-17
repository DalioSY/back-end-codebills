import { TransactionModel } from "../database/schemas/transactions.schema";
import { TransactionsService } from "../services/transactions.services";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { TransactionRepository } from "../database/repositories/transactions.repository";

export class TransactionFactory {
  private static transactionService: TransactionsService;

  static getServiceInstance() {
    if (this.transactionService) {
      return this.transactionService;
    }
    const repository = new TransactionRepository(TransactionModel);
    const categoriesRepository = new CategoriesRepository(CategoryModel);
    const service = new TransactionsService(repository, categoriesRepository);

    this.transactionService = service;

    return service;
  }
}
