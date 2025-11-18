import pgPromise from "pg-promise";
import { optionsPG } from "./optionsPG.js";
import NeonDatabase from "./neonDatabase.js";
const pgp = pgPromise(optionsPG);
const dbConecction = new NeonDatabase().connectDb();
const pool = pgp(dbConecction);
pool
    .connect()
    .then(() => {
    console.log("Conectado a: " + "NeonDatabase");
})
    .catch((miError) => {
    console.log('Error al conectar a la base de datos:', miError);
});
export default pool;
//# sourceMappingURL=dbConnection.js.map