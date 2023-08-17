import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class ReservasDTO {
  @Expose({ name: "id" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El id de la devolucion es obligatorio`,
      };
    },
  })
  id_reserva: number;
  @Expose({ name: "id_cliente" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "id_cliente" es obligatorio` };
    },
  })
  id_cliente_id: number;
  @Expose({ name: "id_automovil" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "id_automovil" es obligatorio` };
    },
  })
  id_automovil_id: number;
  @Expose({ name: "fecha_reservacion" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `La "fecha_reservacion" es un campo obligatorio`,
      };
    },
  })
  fecha_reserva: string;
  @Expose({ name: "inicio" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El inicio es un campo obligatorio`,
      };
    },
  })
  fecha_inicio: string;
  @Expose({ name: "fin" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El fin es un campo obligatorio`,
      };
    },
  })
  fecha_fin: string;
  @Expose({ name: "estado_reserva" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El estado_reserva del alquiler es obligatorio`,
      };
    },
  })
  estado: string;

  constructor(data: Partial<ReservasDTO>) {
    Object.assign(this, data);
    this.id_reserva = 1;
    this.id_cliente_id = 1;
    this.id_automovil_id = 1;
    this.fecha_reserva = "2023-9-21";
    this.fecha_inicio = "2023-9-21";
    this.fecha_fin = "2023-9-21";
    this.estado = "activo";
  }
}
