import pgPromise from "pg-promise";
import { camelizeColums } from "./camelCase.js";
export const optionsPG = {
    receive(e) {
        camelizeColums(e.data);
    },
};
//# sourceMappingURL=optionsPG.js.map