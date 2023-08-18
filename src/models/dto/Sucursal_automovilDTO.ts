import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class SucursalAutomovilDTO {
  @Expose({ name: "id_sucursal" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "id_sucursal" es obligatorio` };
    },
  })
  id_sucursal_id: number;
  @Expose({ name: "id_automovil" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "id_automovil" es obligatorio` };
    },
  })
  id_automovil_id: number;
  @Expose({ name: "cantidad" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "cantidad" es obligatorio` };
    },
  })
  cantidad_disponible: number;

  constructor(data: Partial<SucursalAutomovilDTO>) {
    Object.assign(this, data);
    this.id_sucursal_id = 1;
    this.id_automovil_id = 1;
    this.cantidad_disponible = 1;
  }
}
