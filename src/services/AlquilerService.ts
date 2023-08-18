import { AlquilerRepository } from "../repositories";
import { AlquilerDTO } from "../model/dto";

class AlquilerService {
  private readonly repository: AlquilerRepository;

  constructor() {
    this.repository = new AlquilerRepository();
  }

  public async getAll(): Promise<AlquilerDTO[]> {
    return await this.repository.getAll();
  }

  public async getById(id: string): Promise<AlquilerDTO> {
    return await this.repository.getByIdI(id);
  }

  public async insertOne(body: any): Promise<string | undefined> {
    return await this.repository.insertOne(body);
  }

  public async updateOne(id: string, body: any): Promise<string> {
    return await this.repository.updateOne(id, body);
  }

  public async deleteOne(id: string): Promise<string | undefined> {
    return await this.repository.deleteOne(id);
  }
}
export default AlquilerService;
