import type { Request, Response } from "express";
import { DonacionesService } from "../../application/services/donaciones.service.js";
declare class DonacionesController extends DonacionesService {
    create(req: Request, res: Response): void;
    list(req: Request, res: Response): void;
    delete(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
    get(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
    update(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
}
declare const donacionesController: DonacionesController;
export default donacionesController;
//# sourceMappingURL=donaciones.controller.d.ts.map