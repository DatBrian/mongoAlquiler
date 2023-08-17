import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class AlquilerDTO {
  @Expose({ name: "alquiler_id" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El "alquiler_id" es obligatorio`,
      };
    },
  })
  id_alquiler: number;
  @Expose({ name: "cliente_id" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "id_cliente" es obligatorio` };
    },
  })
  id_cliente_id: number;
  @Expose({ name: "automovil_id" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "id_automovil" es obligatorio` };
    },
  })
  id_automovil_id: number;
  @Expose({ name: "inicio_alquiler" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "inicio_alquiler" es obligatorio` };
    },
  })
  fecha_inicio: string;
  @Expose({ name: "fin_alquiler" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "fin_alquiler" es obligatorio` };
    },
  })
  fecha_fin: string;
  @Expose({ name: "costo_final" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El "costo_final" del alquiler es obligatorio`,
      };
    },
  })
  costo: number;
  @Expose({ name: "estado_alquiler" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "estado_alquiler" es obligatorio` };
    },
  })
  estado: string;
  constructor(data: Partial<AlquilerDTO>) {
    Object.assign(this, data);
    this.id_alquiler = 1;
    this.id_cliente_id = 1;
    this.id_automovil_id = 1;
    this.fecha_inicio = "2023, 9, 21";
    this.fecha_fin = "2023, 9, 23";
    this.costo = 70000;
    this.estado = "activo";
  }
}
