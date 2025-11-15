export interface IDataStructure<T> {
    create(item: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: string | number): Promise<T[] | null>;
    update(id: string | number, item: Partial<T>): Promise<T>;
    delete(id: string | number): Promise<T[]>;
}
//# sourceMappingURL=IDataStructure.d.ts.map