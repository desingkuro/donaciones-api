import dotenv from "dotenv";
import pgPromise from "pg-promise";
import { optionsPG } from "./optionsPG.js";
import PostgresLocal from "./postgrestLocal.js";
const pgp = pgPromise(optionsPG);
const dbConecction = new PostgresLocal().connectDb();
const pool = pgp(dbConecction);
pool
    .connect()
    .then((mithen) => {
    console.log("Conectado a: " + dbConecction.database);
})
    .catch((miError) => {
    console.log(miError);
});
export default pool;
//# sourceMappingURL=dbConnection.js.map