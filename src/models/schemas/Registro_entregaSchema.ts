import { Collection, Db } from "mongodb";

class Registro_entregaSchema {
  public database: Db;
  public entity: string;
  public Collection: Collection;

  constructor(database: Db) {
    this.database = database;
    this.entity = "registro_entrega";
    this.Collection = database.collection(this.entity);
  }

  public async generateCollection(): Promise<void> {
    try {
      await this.database.createCollection(this.entity, {
        capped: true,
        size: 8000,
        max: 50,
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: [
              "id_registro",
              "id_alquiler_id",
              "id_empleado_id",
              "fecha_entrega",
              "combustible",
              "kilometraje",
            ],
            properties: {
              id_registro: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
              id_alquiler_id: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
              id_empleado_id: {
                bsonType: "int",
                minimum: 0,
                maximum: 100,
              },
              fecha_entrega: {
                bsonType: "string",
                description:
                  "Debe informar el campo Fecha_Fin y este debe ser un dato string",
              },
              combustible: {
                bsonType: "int",
                minimum: 1,
                maximum: 20,
              },
              kilometraje: {
                bsonType: "number",
                minimum: 1,
                maximum: 100000,
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
          id_registro: 1,
          id_alquiler_id: 1,
          id_empleado_id: 1,
          fecha_entrega: "2024-3-15",
          combustible: 5,
          kilometraje: 19000,
        },
        {
          id_registro: 2,
          id_alquiler_id: 2,
          id_empleado_id: 2,
          fecha_entrega: "2024-3-15",
          combustible: 5,
          kilometraje: 29532,
        },
        {
          id_registro: 3,
          id_alquiler_id: 3,
          id_empleado_id: 3,
          fecha_entrega: "2024-3-15",
          combustible: 5,
          kilometraje: 19454,
        },
        {
          id_registro: 4,
          id_alquiler_id: 4,
          id_empleado_id: 4,
          fecha_entrega: "2024-3-15",
          combustible: 5,
          kilometraje: 20000,
        },
        {
          id_registro: 5,
          id_alquiler_id: 5,
          id_empleado_id: 5,
          fecha_entrega: "2024-3-15",
          combustible: 5,
          kilometraje: 39643,
        },
      ]);
    } catch (error) {
      throw error;
    }
  }
}
export default Registro_entregaSchema;
