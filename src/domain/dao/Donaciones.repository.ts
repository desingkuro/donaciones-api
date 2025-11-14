import type Donacion from "../entities/donacion.entity.js";
import { GenericRepository } from "../repositories/generic.repository.js";
import { DonacionesSQLStructure } from "./donaciones.dao.js";

export class DonacionesRepository extends GenericRepository<Donacion> {
    constructor() {
        super(new DonacionesSQLStructure());
    }
}
