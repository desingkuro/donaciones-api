import pool from "../../config/connection/dbConnection.js";
import { GenericRepository } from "../repositories/generic.repository.js";
import { sql_accesos } from "../repositories/sql_accesos.js";
import { DonacionesSQLStructure } from "./donaciones.dao.js";
export class DonacionesRepository extends GenericRepository {
    constructor() {
        const structure = new DonacionesSQLStructure();
        super(structure);
    }
    async create(item) {
        return await pool.task(async (consult) => {
            const result = await consult.query(sql_accesos.create, [item.idTipoDonacion, item.idDonador, item.idCampania, item.fechaCreacion, item.state, item.checker]);
            return result;
        });
    }
    async findAll() {
        return await pool.task(async (consult) => {
            const result = await consult.query(sql_accesos.getAll);
            return result;
        });
    }
    async delete(id) {
        return await pool.task(async (consult) => {
            const result = await consult.query(sql_accesos.delete, [id]);
            return result;
        });
    }
    async findById(id) {
        return await pool.task(async (consult) => {
            const result = await consult.query(sql_accesos.getById, [id]);
            return result;
        });
    }
    async update(id, item) {
        return await pool.task(async (consult) => {
            const result = await consult.query(sql_accesos.update, [id, item.idTipoDonacion, item.idDonador, item.idCampania, item.fechaCreacion, item.state, item.checker]);
            return result;
        });
    }
}
//# sourceMappingURL=Donaciones.repository.js.map