import DonacionDB from "./donacion.db.js";
import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });

export default class NeonDatabase extends DonacionDB {
    private connectionData: string;

    constructor(){
        super();
        this.connectionData = process.env.NEON_DATABASE_URL || 'postgresql://'
    }
    connectDb() {
        return {
            connectionString: this.connectionData
        }
    }
}
