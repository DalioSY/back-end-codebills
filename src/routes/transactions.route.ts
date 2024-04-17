import { Router } from "express";

import { ParamsType, validator } from "../middlewares/validator.middleware";
import {
  createTransactionsSchema,
  getDashboardSchema,
  getFinancialEvolutionSchema,
  indexTransactionsSchema,
} from "../ditos/transactions.dto";
import { TransactionController } from "../controllers/transactions.controller";
import { TransactionFactory } from "../factories/transactions.factory";

export const transactionsRoutes = Router();

const controller = new TransactionController(
  TransactionFactory.getServiceInstance()
);

transactionsRoutes.post(
  "/",
  validator({
    schema: createTransactionsSchema,
    type: ParamsType.BODY,
  }),
  controller.create
);

transactionsRoutes.get(
  "/",
  validator({
    schema: indexTransactionsSchema,
    type: ParamsType.QUERY,
  }),
  controller.index
);

transactionsRoutes.get(
  "/dashboard",
  validator({
    schema: getDashboardSchema,
    type: ParamsType.QUERY,
  }),
  controller.getDashboard
);

transactionsRoutes.get(
  "/financial-evolution",
  validator({
    schema: getFinancialEvolutionSchema,
    type: ParamsType.QUERY,
  }),
  controller.getFinancialEvolution
);
