import type { Request, Response } from "express";
import { DonacionesService } from "../../application/services/donaciones.service.js";
declare class DonacionesController extends DonacionesService {
    create(req: Request, res: Response): void;
    list(req: Request, res: Response): void;
}
declare const donacionesController: DonacionesController;
export default donacionesController;
//# sourceMappingURL=donaciones.controller.d.ts.map