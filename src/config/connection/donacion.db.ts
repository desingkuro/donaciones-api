abstract class DonacionDB {
  constructor() {
    if (new.target === DonacionDB) {
      throw new Error("Cannot instantiate AbstractBase directly.");
    }
  }
  connectDb(): void {};
}

export default DonacionDB;
