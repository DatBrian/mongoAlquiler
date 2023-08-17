import { plainToClass, classToPlain } from "class-transformer";
import { DTO } from "../config/tokenConfig";
import { Response, NextFunction } from "express";
import { validate } from "class-validator";

class MiddlewareFactory {
  public verifyPayload(entity: string) {
    return (req: any, res: Response, next: NextFunction) => {
      if (!req.rateLimit) return;

      let { payload } = req.data;
      const { iat, exp, ...newPayload } = payload;
      payload = newPayload;

      let clone = JSON.stringify(
        classToPlain(
          plainToClass(DTO(entity).class, {}, { ignoreDecorators: true })
        )
      );
      let verify = clone === JSON.stringify(payload);

      req.data = undefined;

      if (!verify)
        res.status(406).send({ status: 406, message: "No Autorizado" });
      next();
    };
  }

  public validateData(entity: string) {
    return async (req: any, res: Response, next: NextFunction) => {
      try {
        let data = plainToClass(DTO(entity).class, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
      } catch (error: any) {
        res.status(error.status).send(error);
      }
    };
  }
}

export default new MiddlewareFactory();