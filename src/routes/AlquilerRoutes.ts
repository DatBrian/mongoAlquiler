import { Router } from "express";
// import RouterCommon from "../commons/RouterCommon";
import { AlquilerController } from "../controllers";
// import { AlquilerDTO } from "../model/dto";

class AlquilerRoutes {
  public path: string;
  public router: Router;
  private readonly controller: AlquilerController;

  constructor() {
    this.path = "/alquiler";
    this.router = Router();
    this.controller = new AlquilerController();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(`${this.path}/all`, this.controller.getAll);
  }
}
export default AlquilerRoutes;
