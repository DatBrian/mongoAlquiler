import { Db, Collection } from "mongodb";

class AlquilerSchema{
    private database: Db;
    private collection: string;
    private options: object;

    constructor(database: Db) {
        this.database = database;
        this.collection = 'alquiler';
        this.options = {
            capped: true,
            size: 1900,
            max: 5
        }
    }

    public async generateCollection(): Promise<void>{
        try {
            await this.database.createCollection(this.collection, {
                
            })
        } catch (error) {
            
        }
    }
}