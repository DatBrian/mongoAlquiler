import { Collection, Db } from "mongodb";

class SucursalSchema {
  public database: Db;
  public entity: string;
  public Collection: Collection;

  constructor(database: Db) {
    this.database = database;
    this.entity = "sucursal";
    this.Collection = database.collection(this.entity);
  }

  public async generateCollection(): Promise<void> {
    try {
      await this.database.createCollection(this.entity, {
        capped: true,
        size: 1102,
        max: 6,
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["id_sucursal", "nombre", "direccion", "telefono"],
            properties: {
              id_sucursal: {
                bsonType: "int",
                minimum: 0,
                maximum: 20,
              },
              nombre: {
                bsonType: "string",
                maxLength: 58,
                minLength: 1,
                pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\\s-]+$",
              },
              direccion: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
              },
              telefono: {
                bsonType: "number",
                minimum: 3000000000,
                maximum: 4000000000,
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
      await this.Collection.insertOne({
        id_sucursal: 1,
        nombre: "qerwerwerew",
        direccion: "calle 15# 21",
        telefono: 3185767865,
      });
    } catch (error) {
      throw error;
    }
  }
}
export default SucursalSchema;
