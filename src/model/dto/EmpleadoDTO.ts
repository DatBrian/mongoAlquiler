import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class EmpleadoDTO {
  @Expose({ name: "id" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El id del empleado es obligatorio` };
    },
  })
  id_empleado: number;
  @Expose({ name: "nombre_empleado" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El nombre_empleado es obligatorio` };
    },
  })
  nombre: string;
  @Expose({ name: "apellido_empleado" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El "apellido_empleado es obligatorio`,
      };
    },
  })
  apellido: string;
  @Expose({ name: "documento" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El documento del empleado es obligatorio`,
      };
    },
  })
  doc: number;
  @Expose({ name: "direccion_empleado" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `La "direccion_empleado" del empleado es obligatorio`,
      };
    },
  })
  direccion: string;
  @Expose({ name: "contacto_empleado" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El contacto_empleado es obligatorio`,
      };
    },
  })
  telefono: number;
  @Expose({ name: "cargo_empleado" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El cargo_empleado es obligatorio`,
      };
    },
  })
  cargo: string;
  constructor(data: Partial<EmpleadoDTO>) {
    Object.assign(this, data);
    this.id_empleado = 1;
    this.nombre = "pedro";
    this.apellido = "perez";
    this.doc = 23232344324;
    this.direccion = "cra 22#23";
    this.telefono = 3231234233;
    this.cargo = "gerente interino";
  }
}
