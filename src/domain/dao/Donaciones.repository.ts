import pool from "../../config/connection/dbConnection.js";
import type Donacion from "../entities/donacion.entity.js";
import { GenericRepository } from "../repositories/generic.repository.js";
import { sql_accesos } from "../repositories/sql_accesos.js";
import { DonacionesSQLStructure } from "./donaciones.dao.js";
export class DonacionesRepository extends GenericRepository<Donacion> {

    constructor(){
        const structure = new DonacionesSQLStructure()
        super(structure)
    }

    async create(item: Donacion): Promise<Donacion> {
        return await pool.task(async(consult:any)=>{
            const result = await consult.query(sql_accesos.create, [item.idTipoDonacion, item.idDonador, item.idCampania, item.fechaCreacion, item.state, item.checker])
            return result
        })
    }

    async findAll(): Promise<Donacion[]> {
        return  await pool.task(async(consult:any)=>{
            const result = await consult.query(sql_accesos.getAll)
            return result
        })
    }

    async delete(id:number): Promise<Donacion[]> {
        return await pool.task(async(consult:any)=>{
            const result = await consult.query(sql_accesos.delete, [id])
            return result
        })
    }

    async findById(id:number): Promise<Donacion[] | null> {
        return await pool.task(async(consult:any)=>{
            const result = await consult.query(sql_accesos.getById, [id])
            return result
        })
    }

    async update(id: string | number, item: Partial<Donacion>): Promise<Donacion> {
        return await pool.task(async(consult:any)=>{
            const result = await consult.query(sql_accesos.update, [id,item.idTipoDonacion, item.idDonador, item.idCampania, item.fechaCreacion, item.state, item.checker])
            return result
        })
    }
}
