import { GenericRepository } from "../repositories/generic.repository.js";
import { DonacionesSQLStructure } from "./donaciones.dao.js";
export class DonacionesRepository extends GenericRepository {
    constructor() {
        super(new DonacionesSQLStructure());
    }
}
//# sourceMappingURL=Donaciones.repository.js.map