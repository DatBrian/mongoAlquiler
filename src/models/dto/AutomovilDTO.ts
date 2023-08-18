import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class AutomovilDTO {
  @Expose({ name: "id" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El id del automovil es obligatorio`,
      };
    },
  })
  id_automovil: number;
  @Expose({ name: "marca_automovil" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `La marca_automovil es obligatoria`,
      };
    },
  })
  marca: string;
  @Expose({ name: "modelo_automovil" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El modelo_automovil es obligatorio`,
      };
    },
  })
  modelo: string;
  @Expose({ name: "año" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El año del automovil es obligatorio`,
      };
    },
  })
  anio: number;
  @Expose({ name: "tipo_automovil" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El "tipo_automovil" del automovil es obligatorio`,
      };
    },
  })
  tipo: string;
  @Expose({ name: "capacidad_automovil" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El "capacidad_automovil" del automovil es obligatorio`,
      };
    },
  })
  capacidad: number;
  @Expose({ name: "costo" })
  @IsDefined({
    message: () => {
      throw {
        status: 422,
        message: `El costo del automovil es obligatorio`,
      };
    },
  })
  costo: number;
  constructor(data: Partial<AutomovilDTO>) {
    Object.assign(this, data);
    this.id_automovil = 1;
    this.marca = "Chevrolet";
    this.modelo = "Picanto";
    this.anio = 2020;
    this.tipo = "Automovil";
    this.capacidad = 5;
    this.costo = 70000;
  }
}