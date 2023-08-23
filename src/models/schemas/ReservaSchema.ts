import { Collection, Db } from "mongodb";

class ReservaSchema {
  public database: Db;
  public entity: string;
  public Collection: Collection;

  constructor(database: Db) {
    this.database = database;
    this.entity = "reserva";
    this.Collection = database.collection(this.entity);
  }

  public async generateCollection(): Promise<void> {
    try {
      await this.database.createCollection(this.entity, {
        capped: true,
        size: 20000,
        max: 100,
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: [
              "id_reserva",
              "id_cliente_id",
              "id_automovil_id",
              "fecha_reserva",
              "fecha_inicio",
              "fecha_fin",
              "estado",
            ],
            properties: {
              id_reserva: {
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
              fecha_reserva: {
                bsonType: "string",
                description:
                  "Debe informar el campo fecha_reserva y este debe ser un dato string",
              },
              fecha_inicio: {
                bsonType: "string",
                description:
                  "Debe informar el campo fecha_inicio y este debe ser un dato string",
              },
              fecha_fin: {
                bsonType: "string",
                description:
                  "Debe informar el campo fecha_fin y este debe ser un dato string",
              },
              estado: {
                bsonType: "string",
                maxLength: 30,
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
          id_reserva: 2,
          id_cliente_id: 2,
          id_automovil_id: 2,
          fecha_reserva: "2023-7-15",
          fecha_inicio: "2024-1-15",
          fecha_fin: "2024-1-20",
          estado: "Confirmado",
        },
        {
          id_reserva: 3,
          id_cliente_id: 3,
          id_automovil_id: 3,
          fecha_reserva: "2023-7-15",
          fecha_inicio: "2024-1-15",
          fecha_fin: "2024-1-20",
          estado: "Confirmado",
        },
        {
          id_reserva: 4,
          id_cliente_id: 4,
          id_automovil_id: 4,
          fecha_reserva: "2023-7-15",
          fecha_inicio: "2024-1-15",
          fecha_fin: "2024-1-20",
          estado: "Apartado",
        },
        {
          id_reserva: 5,
          id_cliente_id: 5,
          id_automovil_id: 5,
          fecha_reserva: "2023-7-15",
          fecha_inicio: "2024-1-15",
          fecha_fin: "2024-1-20",
          estado: "Confirmado",
        },
        {
          id_reserva: 6,
          id_cliente_id: 4,
          id_automovil_id: 2,
          fecha_reserva: "2023-7-15",
          fecha_inicio: "2024-1-15",
          fecha_fin: "2024-1-20",
          estado: "Apartado",
        },
      ]);
    } catch (error) {
      throw error;
    }
  }
}
export default ReservaSchema;
