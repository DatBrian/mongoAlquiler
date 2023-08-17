import { Request as ExpressRequest } from "express";

export interface Request extends ExpressRequest {
  session: any;
  token?: string;
  data?: any;
}
