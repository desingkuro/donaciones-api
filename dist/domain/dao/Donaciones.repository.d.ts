import type Donacion from "../entities/donacion.entity.js";
import { GenericRepository } from "../repositories/generic.repository.js";
export declare class DonacionesRepository extends GenericRepository<Donacion> {
    constructor();
    create(item: Donacion): Promise<Donacion>;
    findAll(): Promise<Donacion[]>;
    delete(id: number): Promise<Donacion[]>;
    findById(id: number): Promise<Donacion[] | null>;
}
//# sourceMappingURL=Donaciones.repository.d.ts.map