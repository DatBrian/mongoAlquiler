import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class Registro_entregasDTO {
  @Expose({ name: "id" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "id" del registro es obligatorio` };
    },
  })
  id_registro: number;
  @Expose({ name: "id_alquiler" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "id_alquiler" es obligatorio` };
    },
  })
  id_alquiler_id: number;
  @Expose({ name: "id_empleado" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El "id_empleado" es obligatorio` };
    },
  })
  id_empleado_id: number;
  @Expose({ name: "fecha_inicio" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `La "fecha_inicio" es un campo obligatorio`,
      };
    },
  })
  fecha_entrega: Date;
  @Expose({ name: "registro_combustible" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El "registro_combustible" del alquiler es obligatorio`,
      };
    },
  })
  combustible: number;
  @Expose({ name: "registro_kilometraje" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El "registro_kilometraje" del alquiler es obligatorio`,
      };
    },
  })
  kilometraje: number;

  constructor(data: Partial<Registro_entregasDTO>) {
    Object.assign(this, data);
    this.id_registro = 1;
    this.id_alquiler_id = 1;
    this.id_empleado_id = 1;
    this.fecha_entrega = new Date(2023, 9, 21);
    this.combustible = 70000;
    this.kilometraje = 30000;
  }
}
