import QueriesCommon from "../commons/QueriesCommon";
import { ClientError } from "../utils";

class AlquilerRepository extends QueriesCommon {
  constructor(collection: any) {
    super(collection);
  }

  public async getAll(): Promise<any[]> {
    try {
      return await this.getAll();
    } catch (error) {
      throw new ClientError("Error al obtener los alquileres");
    }
  }

    public async getByIdI(id:string): Promise<any>{
      try {
          return await this.getOneById(id);
      } catch (error) {
        throw new ClientError("Error al obtener el alquiler")
      }
    }

    public async insertOne(body: any): Promise<string | undefined>{
        try {
            return await this.insert(body);
        } catch (error) {
            throw new ClientError("Error al insertar el alquiler")
        }
    }

    public async updateOne(id: string, body: any): Promise<string>{
        try {
            return await this.update(id, body);
        } catch (error) {
            throw new ClientError("Error al actualizar el alquiler")
        }
    }
}
