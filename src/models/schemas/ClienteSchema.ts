import { Collection, Db } from "mongodb";

class ClienteSchema {
  public database: Db;
  public entity: string;
  public Collection: Collection;

  constructor(database: Db) {
    this.database = database;
    this.entity = "cliente";
    this.Collection = database.collection(this.entity);
  }

  public async generateCollection(): Promise<void> {
    try {
      await this.database.createCollection(this.entity, {
        capped: true,
        size: 16000,
        max: 100,
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: [
              "id_cliente",
              "nombre",
              "apellido",
              "doc",
              "direccion",
              "telefono",
            ],
            properties: {
              id_cliente: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
              nombre: {
                bsonType: "string",
                maxLength: 255,
                minLength: 1,
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\\s-]+$",
              },
              apellido: {
                bsonType: "string",
                maxLength: 255,
                minLength: 1,
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\\s-]+$",
              },
              doc: {
                bsonType: "number",
              },
              direccion: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
              },
              telefono: {
                bsonType: "number",
              },
              Email: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
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
          id_cliente: 2,
          nombre: "cliente2",
          apellido: "apellido",
          doc: 125356895,
          direccion: "Calle 11",
          telefono: 3000000002,
          Email: "correo@gmail.com",
        },
        {
          id_cliente: 3,
          nombre: "cliente3",
          apellido: "apellido",
          doc: 125356895,
          direccion: "Calle 11",
          telefono: 3000000002,
          Email: "correo@gmail.com",
        },
        {
          id_cliente: 4,
          nombre: "cliente4",
          apellido: "apellido",
          doc: 125356895,
          direccion: "Calle 11",
          telefono: 3000000002,
          Email: "correo@gmail.com",
        },
        {
          id_cliente: 5,
          nombre: "cliente5",
          apellido: "apellido",
          doc: 125356895,
          direccion: "Calle 11",
          telefono: 3000000002,
          Email: "correo@gmail.com",
        },
        {
          id_cliente: 6,
          nombre: "cliente6",
          apellido: "apellido",
          doc: 125356895,
          direccion: "Calle 11",
          telefono: 3000000002,
          Email: "correo@gmail.com",
        },
      ]);
    } catch (error) {
      throw error;
    }
  }
}
export default ClienteSchema;
