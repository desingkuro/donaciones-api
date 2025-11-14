import pool from "../../config/connection/dbConnection.js";
import { sql_accesos } from "../repositories/sql_accesos.js";
export class DonacionesSQLStructure {
    async create(entity) {
        const result = await pool.query(sql_accesos.create, [
            entity.idDonacion,
            entity.idTipoDonacion,
            entity.idDonador,
            entity.idCampania,
            entity.fechaCreacion,
        ]);
        return result.rows?.[0] || entity;
    }
    async findAll() {
        const result = await pool.query(sql_accesos.getAll);
        return result.rows;
    }
    async findById(id) {
        const result = await pool.query(sql_accesos.getById, [id]);
        return result.rows?.[0] || null;
    }
    async update(id, partial) {
        const result = await pool.query(sql_accesos.update, [
            partial.idDonacion,
            partial.idTipoDonacion,
            partial.idDonador,
            partial.idCampania,
            partial.fechaCreacion,
            id,
        ]);
        return result.rows?.[0];
    }
    async delete(id) {
        const result = await pool.query(sql_accesos.delete, [id]);
        return result.rowCount > 0;
    }
}
//# sourceMappingURL=donaciones.dao.js.map