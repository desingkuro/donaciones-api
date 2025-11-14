import dotenv from "dotenv";
import pgPromise from "pg-promise";
import { optionsPG } from "./optionsPG.js";
import PostgresLocal from "../../domain/dao/postgrestLocal.js";

const pgp = pgPromise(optionsPG);
const dbConecction = new PostgresLocal().connectDb();
const pool = pgp(dbConecction);

pool
  .connect()
  .then((mithen: any) => {
    console.log("Conectado a: " + dbConecction.database);
  })
  .catch((miError: any) => {
    console.log(miError);
  });

export default pool;
