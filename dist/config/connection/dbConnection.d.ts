import pgPromise from "pg-promise";
declare const pool: pgPromise.IDatabase<import("./camelCase.js").IClient, import("pg-promise/typescript/pg-subset.js").IClient> & import("./camelCase.js").IClient;
export default pool;
//# sourceMappingURL=dbConnection.d.ts.map