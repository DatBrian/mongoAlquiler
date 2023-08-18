import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class ClienteDTO {
  @Expose({ name: "id" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El id del cliente es obligatorio` };
    },
  })
  id_cliente: number;
  @Expose({ name: "nombre_cliente" })
  @IsDefined({
    message: () => {
      throw { status: 422, message: `El nombre_cliente es obligatorio` };
    },
  })
  nombre: string;
  @Expose({ name: "apellido_cliente" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El apellido_cliente del cliente es obligatorio`,
      };
    },
  })
  apellido: string;
  @Expose({ name: "documento" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El documento del cliente es obligatorio`,
      };
    },
  })
  doc: number;
  @Expose({ name: "direccion_cliente" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `La "direccion_cliente" del cliente es obligatorio`,
      };
    },
  })
  direccion: string;
  @Expose({ name: "contacto" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El contacto del cliente es obligatorio`,
      };
    },
  })
  telefono: number;
  @Expose({ name: "email" })
  @Transform(({ value }) => {
    if (value) return value;
    else "sin email";
  })
  Email: string;
  constructor(data: Partial<ClienteDTO>) {
    Object.assign(this, data);
    this.id_cliente = 1;
    this.nombre = "pedro";
    this.apellido = "perez";
    this.doc = 23232344324;
    this.direccion = "cra 22#23";
    this.telefono = 3231234233;
    this.Email = "hhuhu@weewe.com";
  }
}
