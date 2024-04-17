import { Router } from "express";

import packageJson from "../../package.json";
import { StatusCodes } from "http-status-codes";

export const baseRoutes = Router();

baseRoutes.get("/", (_, res) => {
  const { name, version, description, author } = packageJson;
  res.status(StatusCodes.OK).json({
    name,
    version,
    description,
    author,
  });
});
