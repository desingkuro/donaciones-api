import DonacionDB from "./donacion.db.js";
import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });
export default class NeonDatabase extends DonacionDB {
    connectionData;
    constructor() {
        super();
        this.connectionData = process.env.NEON_DATABASE_URL || 'postgresql://';
    }
    connectDb() {
        return {
            connectionString: this.connectionData
        };
    }
}
//# sourceMappingURL=neonDatabase.js.map