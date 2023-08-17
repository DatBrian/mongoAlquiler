// import dotenv from "dotenv";
// import { Router } from "express";
// import { SignJWT, jwtVerify } from "jose";
// import { dtos } from "../model/dto";

// dotenv.config();
// const appToken = Router();
// const appVerify = Router();
// const dtoList = dtos;

// const createInstance = (className) => {
//   const classMap = {
//     autos: dtoList.AutomovilDTO,
//     alquileres: dtoList.Alquiler,
//     datos_clientes: dtoList.Cliente,
//     datos_empleado: dtoList.Empleado,
//     devolucion: dtoList.Devoluciones,
//     reservacion: dtoList.Reservas,
//     entrega: dtoList.Entregas,
//     SucursalxAuto: dtoList.SucursalAuto,
//     Sucursales: dtoList.Sucursal,
//   };
//   const Class = classMap[className];
//   if (!Class) throw { status: 404, message: "Token solicitado no valido" };
//   return {
//     atributos: plainToClass(Class, {}, { ignoreDecorators: true }),
//     class: Class,
//   };
// };
// appToken.use("/:collection", async (req, res) => {
//   try {
//     const inst = createInstance(req.params.collection).atributos;
//     const encoder = new TextEncoder();
//     const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
//     const jwt = await jwtconstructor
//       .setProtectedHeader({ alg: "HS256", typ: "JWT" })
//       .setIssuedAt()
//       .setExpirationTime("30m")
//       .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
//     req.data = jwt;
//     res.status(201).send({ status: 201, message: jwt });
//   } catch (error) {
//     res.status(error.status).send(error);
//   }
// });

// appVerify.use("/", async (req, res, next) => {
//   const { authorization } = req.headers;
//   if (!authorization)
//     return res.status(400).send({ status: 400, token: "Token no enviado" });
//   try {
//     const encoder = new TextEncoder();
//     const jwtData = await jwtVerify(
//       authorization,
//       encoder.encode(process.env.JWT_PRIVATE_KEY)
//     );
//     req.data = jwtData;
//     next();
//   } catch (error) {
//     res.status(498).send({ status: 498, token: "Token caducado" });
//   }
// });

// export { appToken, appVerify, createInstance };
