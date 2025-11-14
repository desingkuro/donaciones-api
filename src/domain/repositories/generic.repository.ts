import type { IDataStructure } from "../interfaces/IDataStructure.js";

export class GenericRepository<T> {
    private structure: IDataStructure<T>;

    constructor(structure: IDataStructure<T>) {
        this.structure = structure;
    }

    create(item: T) {
        return this.structure.create(item);
    }
    findAll() {
        return this.structure.findAll();
    }
    findById(id: string | number) {
        return this.structure.findById(id);
    }
    update(id: string | number, item: Partial<T>) {
        return this.structure.update(id, item);
    }
    delete(id: string | number) {
        return this.structure.delete(id);
    }
}
