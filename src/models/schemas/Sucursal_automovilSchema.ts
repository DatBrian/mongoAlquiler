import { Collection, Db } from "mongodb";

class Sucursal_automovilSchema {
  public database: Db;
  public entity: string;
  public Collection: Collection;

  constructor(database: Db) {
    this.database = database;
    this.entity = "sucursal_automovil";
    this.Collection = database.collection(this.entity);
  }

  public async generateCollection(): Promise<void> {
    try {
      await this.database.createCollection(this.entity, {
        capped: true,
        size: 1000,
        max: 10,
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: [
              "id_sucursal_id",
              "id_automovil_id",
              "cantidad_disponible",
            ],
            properties: {
              id_sucursal_id: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
              id_automovil_id: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
              cantidad_disponible: {
                bsonType: "int",
                minimum: 0,
                maximum: 40,
              },
            },
          },
        },
      });
    } catch (error) {
      console.error(`Error al generar el esquema ${this.entity}`);
      throw error;
    }
  }

  public async createData(): Promise<void> {
    try {
      await this.Collection.insertMany([
        {
          id_sucursal_id: 2,
          id_automovil_id: 2,
          cantidad_disponible: 9,
        },
        {
          id_sucursal_id: 3,
          id_automovil_id: 3,
          cantidad_disponible: 15,
        },
        {
          id_sucursal_id: 3,
          id_automovil_id: 4,
          cantidad_disponible: 20,
        },
        {
          id_sucursal_id: 2,
          id_automovil_id: 5,
          cantidad_disponible: 4,
        },
      ]);
    } catch (error) {
      throw error;
    }
  }
}
export default Sucursal_automovilSchema;
