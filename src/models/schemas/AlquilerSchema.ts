import { Collection, Db } from "mongodb";

class AlquilerSchema {
  public database: Db;
  public collection: string;
  public Collection: Collection;

  constructor(database: Db) {
    this.database = database;
    this.collection = "alquiler";
    this.Collection = database.collection(this.collection);
  }

  public async generateCollection(): Promise<void> {
    try {
      await this.database.createCollection(this.collection, {
        capped: true,
        size: 16000,
        max: 100,
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: [
              "id_alquiler",
              "id_cliente_id",
              "id_automovil_id",
              "fecha_inicio",
              "fecha_fin",
              "costo",
              "estado",
            ],
            properties: {
              id_alquiler: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
              id_cliente_id: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
              id_automovil_id: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
              fecha_inicio: {
                bsonType: "string",
                description:
                  "Debe proporcionar un campo fecha de inicio válido",
              },
              fecha_fin: {
                bsonType: "string",
                description:
                  "Debe proporcionar un campo de fecha de finalización válido",
              },
              costo: {
                bsonType: "number",
                minimum: 50000,
                maximum: 41000000,
              },
              estado: {
                bsonType: "string",
                maxLength: 255,
                minLength: 1,
                pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\\s-]+$",
              },
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  public async createData(): Promise<void> {
    try {
      await this.Collection.insertMany([
        {
          id_alquiler: 2,
          id_cliente_id: 2,
          id_automovil_id: 2,
          fecha_inicio: "2024-03-15",
          fecha_fin: "2024-03-15",
          costo: 5100000,
          estado: "activo",
        },
        {
          id_alquiler: 3,
          id_cliente_id: 3,
          id_automovil_id: 3,
          fecha_inicio: "2024-03-15",
          fecha_fin: "2024-03-15",
          costo: 2100000,
          estado: "activo",
        },
        {
          id_alquiler: 4,
          id_cliente_id: 4,
          id_automovil_id: 4,
          fecha_inicio: "2024-03-15",
          fecha_fin: "2024-03-15",
          costo: 900000,
          estado: "activo",
        },
        {
          id_alquiler: 5,
          id_cliente_id: 5,
          id_automovil_id: 5,
          fecha_inicio: "2024-03-15",
          fecha_fin: "2024-03-15",
          costo: 1200000,
          estado: "Finalizado",
        },
      ]);
    } catch (error) {
      throw error;
    }
  }
}
export default AlquilerSchema;
