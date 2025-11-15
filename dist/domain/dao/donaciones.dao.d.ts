import type { IDataStructure } from "../../domain/interfaces/IDataStructure.js";
import type Donacion from "../entities/donacion.entity.js";
export declare class DonacionesSQLStructure implements IDataStructure<Donacion> {
    create(entity: Donacion): Promise<any>;
    findAll(): Promise<any>;
    findById(id: string | number): Promise<any>;
    update(id: string | number, partial: Partial<Donacion>): Promise<any>;
    delete(id: string | number): Promise<any>;
}
//# sourceMappingURL=donaciones.dao.d.ts.map