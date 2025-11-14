import type { IDataStructure } from "../interfaces/IDataStructure.js";
export declare class GenericRepository<T> {
    private structure;
    constructor(structure: IDataStructure<T>);
    create(item: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: string | number): Promise<T | null>;
    update(id: string | number, item: Partial<T>): Promise<T>;
    delete(id: string | number): Promise<boolean>;
}
//# sourceMappingURL=generic.repository.d.ts.map