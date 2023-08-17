import { Collection, Db } from "mongodb";

class AutomovilSchema {
  public database: Db;
  public collection: string;
  public Collection: Collection;

  constructor(database: Db) {
    this.database = database;
    this.collection = "automovil";
    this.Collection = database.collection(this.collection);
  }

  public async generateCollection(): Promise<void> {
    try {
      await this.database.createCollection(this.collection, {
        capped: true,
        size: 1600,
        max: 10,
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: [
              "id_automovil",
              "marca",
              "modelo",
              "anio",
              "tipo",
              "capacidad",
              "precio",
            ],
            properties: {
              id_automovil: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
              marca: {
                bsonType: "string",
                maxLength: 85,
                minLength: 1,
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\\s-]+$",
              },
              modelo: {
                bsonType: "string",
                maxLength: 25,
                minLength: 1,
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\\s-]+$",
              },
              anio: {
                bsonType: "int",
                minimum: 1885,
                maximum: 2024,
              },
              tipo: {
                bsonType: "string",
                maxLength: 30,
                minLength: 1,
                pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\\s-]+$",
              },
              capacidad: {
                bsonType: "int",
                minimum: 0,
                maximum: 40,
              },
              precio: {
                bsonType: "int",
                minimum: 50000,
                maximum: 400000,
              },
            },
          },
        },
      });
    } catch (error) {
      console.error(`Error al generar el esquema ${this.collection}`);
      throw error;
    }
  }

  public async createData(): Promise<void> {
    try {
      await this.Collection.insertMany([
        {
          id_automovil: 1,
          marca: "Chevrolet",
          modelo: "captiva",
          anio: 2021,
          tipo: "Automovil",
          capacidad: 4,
          precio: 140000,
        },
        {
          id_automovil: 3,
          marca: "Kia",
          modelo: "picanto",
          anio: 2021,
          tipo: "Automovil",
          capacidad: 4,
          precio: 90000,
        },
        {
          id_automovil: 4,
          marca: "Ford",
          modelo: "Fiesta",
          anio: 2014,
          tipo: "Automovil",
          capacidad: 6,
          precio: 160000,
        },
        {
          id_automovil: 5,
          marca: "Chevrolet",
          modelo: "camaro",
          anio: 2017,
          tipo: "Automovil",
          capacidad: 4,
          precio: 130000,
        },
      ]);
    } catch (error) {
      throw error;
    }
  }
}
export default AutomovilSchema;