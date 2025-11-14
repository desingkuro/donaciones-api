import DonacionDB from "./donacion.db.js";
import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });
class PostgresLocal extends DonacionDB {
    constructor() {
        super();
    }
    connectDb() {
        const portDB = Number(process.env.PORT);
        const dataDB = String(process.env.DATABASE);
        const hostDB = String(process.env.HOST);
        const userDB = String(process.env.USER_DB);
        const passDB = String(process.env.USER_PASSWORD);
        return {
            user: userDB,
            password: passDB,
            database: dataDB,
            host: hostDB,
            port: portDB,
        };
    }
}
export default PostgresLocal;
//# sourceMappingURL=postgrestLocal.js.map