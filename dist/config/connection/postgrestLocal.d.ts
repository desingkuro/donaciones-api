import DonacionDB from "./donacion.db.js";
declare class PostgresLocal extends DonacionDB {
    constructor();
    connectDb(): {
        user: string;
        password: string;
        database: string;
        host: string;
        port: number;
    };
}
export default PostgresLocal;
//# sourceMappingURL=postgrestLocal.d.ts.map