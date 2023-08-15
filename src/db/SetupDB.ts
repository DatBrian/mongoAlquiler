import { Db } from "mongodb";

class SetupDB{
    private db: Db;

    constructor(database:Db) {
        this.db = database;
    }

    public async setupCollections(): Promise<void>{
        try {
            
        } catch (error) {
            
        }
    }
}