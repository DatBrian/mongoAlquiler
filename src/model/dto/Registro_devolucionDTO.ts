import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Devoluciones {
  @Expose({ name: "id" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El id de la devolucion es obligatorio` };
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
  @Expose({ name: "fecha_dev" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `La fecha_dev es un campo obligatorio`,
      };
    },
  })
  fecha_devolucion: string;
  @Expose({ name: "registro_combustible" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El registro_combustible del alquiler es obligatorio`,
      };
    },
  })
  combustible: number;
  @Expose({ name: "registro_kilometraje" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El registro_kilometraje del alquiler es obligatorio`,
      };
    },
  })
  kilometraje: number;
  @Expose({ name: "costo_adicional" })
  @Transform(({ value }) => {
    if (value) return value;
    else 0;
  })
  Monto_Adicional: number;

  constructor(data: Partial<Devoluciones>) {
    Object.assign(this, data);
    this.id_registro = 1;
    this.id_alquiler_id = 1;
    this.id_empleado_id = 1;
    this.fecha_devolucion = "2023-09-21";
    this.combustible = 70000;
    this.kilometraje = 30000;
    this.Monto_Adicional = 10000;
  }
}
