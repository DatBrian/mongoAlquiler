import { Collection, Db } from "mongodb";

class EmpleadoSchema {
  public database: Db;
  public entity: string;
  public Collection: Collection;

  constructor(database: Db) {
    this.database = database;
    this.entity = "empleado";
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
              "id_empleado",
              "nombre",
              "apellido",
              "doc",
              "direccion",
              "telefono",
              "cargo",
            ],
            properties: {
              id_empleado: {
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
                minimum: 10000000,
                maximum: 10000000000,
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
              cargo: {
                bsonType: "string",
                maxLength: 80,
                minLength: 1,
                pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\\s-]+$",
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
          id_empleado: 1,
          nombre: "Empleado1",
          apellido: "o",
          doc: 645782155,
          direccion: "Calle 11",
          telefono: 3226589547,
          cargo: "Agente de Entrega",
        },
        {
          id_empleado: 2,
          nombre: "Empleado2",
          apellido: "o",
          doc: 645782155,
          direccion: "Calle 11",
          telefono: 3226589547,
          cargo: "Agente de Mantenimiento",
        },
        {
          id_empleado: 3,
          nombre: "Empleado3",
          apellido: "o",
          doc: 645782155,
          direccion: "Calle 12",
          telefono: 3226589547,
          cargo: "Agente de Entrega",
        },
        {
          id_empleado: 4,
          nombre: "Empleado4",
          apellido: "o",
          doc: 645782155,
          direccion: "Calle 11",
          telefono: 3226589547,
          cargo: "Agente de Mantenimiento",
        },
        {
          id_empleado: 5,
          nombre: "Empleado5",
          apellido: "o",
          doc: 645782155,
          direccion: "Calle 11",
          telefono: 3226589547,
          cargo: "Agente de Mantenimiento",
        },
        {
          id_empleado: 6,
          nombre: "Empleado6",
          apellido: "o",
          doc: 645782155,
          direccion: "Calle 11",
          telefono: 3226589547,
          cargo: "Gerente",
        },
        {
          id_empleado: 7,
          nombre: "Empleado7",
          apellido: "o",
          doc: 645782155,
          direccion: "Calle 11",
          telefono: 3226589547,
          cargo: "Asistente",
        },
      ]);
    } catch (error) {
      throw error;
    }
  }
}
export default EmpleadoSchema;
