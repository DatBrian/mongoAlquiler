import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class SucursalDTO {
  @Expose({ name: "id" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El id de la sucursal es obligatorio` };
    },
  })
  id_sucursal: number;
  @Expose({ name: "nombre_sucursal" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El nombre_sucursal es obligatorio`,
      };
    },
  })
  nombre: string;
  @Expose({ name: "ubicacion" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `La ubicacion de la sucursal es obligatorio`,
      };
    },
  })
  direccion: string;
  @Expose({ name: "contacto" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El contacto de la sucursal es obligatorio`,
      };
    },
  })
  telefono: number;

  constructor(data: Partial<SucursalDTO>) {
    Object.assign(this, data);
    this.id_sucursal = 1;
    this.nombre = "pedro";
    this.direccion = "cra 22#23";
    this.telefono = 3231234233;
  }
}
