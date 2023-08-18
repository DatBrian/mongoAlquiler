import { Request, Response } from "express";
import { AlquilerService } from "../services";
import { catchedAsync } from "../utils";

class AlquilerController {
  private readonly service: AlquilerService;

  constructor() {
    this.service = new AlquilerService();
  }

  public getAll = catchedAsync(async (_req: Request, res: Response) => {
    const response = await this.service.getAll();
    res.json(response);
  });

  public getById = catchedAsync(async (req: Request, res: Response) => {
    const response = await this.service.getById(req.params.id);
    res.json(response);
  });

  public insertOne = catchedAsync(async (req: Request, res: Response) => {
    const response = await this.service.insertOne(req.body);
    res.json(response);
  });

  public updateOne = catchedAsync(async (req: Request, res: Response) => {
    const response = await this.service.updateOne(req.params.id, req.body);
    res.json(response);
  });

  public deleteOne = catchedAsync(async (req: Request, res: Response) => {
    const response = await this.service.deleteOne(req.params.id);
    res.json(response);
  });
}
export default AlquilerController;
