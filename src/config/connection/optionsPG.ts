import pgPromise from "pg-promise";
import { camelizeColums, type IClient } from "./camelCase.js";

export const optionsPG: pgPromise.IInitOptions<IClient> = {
  receive(e) {
    camelizeColums(e.data);
  },
};
