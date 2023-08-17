import { Collection, Db } from "mongodb";
import { ClientError } from "../../utils";

class SucursalSchema {
  public database: Db;
  public collection: string;
  public Collection: Collection;

  constructor(database: Db) {
    this.database = database;
    this.collection = "sucursal";
    this.Collection = database.collection(this.collection);
  }

  public async generateCollection(): Promise<void> {
    try {
      await this.database.createCollection(this.collection, {
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
      throw new ClientError(`Error al generar el esquema ${this.collection}`);
    }
  }

  public async createData(): Promise<void> {
    try {
      console.log(this.Collection);

      await this.Collection.insertOne({
        id_sucursal: 1,
        nombre: "qerwerwerew",
        direccion: "calle 15# 21",
        telefono: 3185767865,
      });
    } catch (error) {
      throw new ClientError("error al generar la data");
    }
  }
}
export default SucursalSchema;