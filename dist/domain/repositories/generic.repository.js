export class GenericRepository {
    structure;
    constructor(structure) {
        this.structure = structure;
    }
    create(item) {
        return this.structure.create(item);
    }
    findAll() {
        return this.structure.findAll();
    }
    findById(id) {
        return this.structure.findById(id);
    }
    update(id, item) {
        return this.structure.update(id, item);
    }
    delete(id) {
        return this.structure.delete(id);
    }
}
//# sourceMappingURL=generic.repository.js.map