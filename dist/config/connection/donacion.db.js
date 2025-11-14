class DonacionDB {
    constructor() {
        if (new.target === DonacionDB) {
            throw new Error("Cannot instantiate AbstractBase directly.");
        }
    }
    connectDb() { }
    ;
}
export default DonacionDB;
//# sourceMappingURL=donacion.db.js.map