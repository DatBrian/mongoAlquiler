import { Collection, Db } from "mongodb";

class Registro_devolucionSchema {
  public database: Db;
  public collection: string;
  public Collection: Collection;

  constructor(database: Db) {
    this.database = database;
    this.collection = "registro_devolucion";
    this.Collection = database.collection(this.collection);
  }

  public async generateCollection(): Promise<void> {
    try {
      await this.database.createCollection(this.collection, {
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
              "fecha_devolucion",
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
              fecha_devolucion: {
                bsonType: "string",
                description:
                  "Debe informar el campo Fecha_Fin y este debe ser un dato string",
              },
              combustible: {
                bsonType: "double",
                minimum: 1,
                maximum: 20,
              },
              Monto_Adicional: {
                bsonType: "number",
                minimum: 1000,
                maximum: 41000000,
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
      console.error(`Error al generar el esquema ${this.collection}`);
      throw error;
    }
  }

  public async createData(): Promise<void> {
    try {
      await this.Collection.insertMany([
        {
          id_registro: 2,
          id_alquiler_id: 2,
          id_empleado_id: 2,
          fecha_devolucion: "2024-3-15",
          combustible: 1.2,
          kilometraje: 30000,
          Monto_Adicional: 10000,
        },
        {
          id_registro: 3,
          id_alquiler_id: 3,
          id_empleado_id: 3,
          fecha_devolucion: "2024-3-15",
          combustible: 2.2,
          kilometraje: 20000,
        },
        {
          id_registro: 4,
          id_alquiler_id: 4,
          id_empleado_id: 4,
          fecha_devolucion: "2024-3-15",
          combustible: 6.2,
          kilometraje: 21232,
        },
        {
          id_registro: 5,
          id_alquiler_id: 5,
          id_empleado_id: 5,
          fecha_devolucion: "2024-3-15",
          combustible: 8.2,
          kilometraje: 40000,
        },
      ]);
    } catch (error) {
      throw error;
    }
  }
}
export default Registro_devolucionSchema;
