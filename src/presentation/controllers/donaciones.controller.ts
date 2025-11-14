import type { Request, Response } from "express";
import { DonacionesService } from "../../application/services/donaciones.service.js";

class DonacionesController extends DonacionesService {
  public create(req: Request, res: Response) {
    try {
      DonacionesService.crearDonacion(req, res);
    } catch (err) {
      console.log(err);
    }
  }

  public list(req: Request, res: Response) {
    try {
      DonacionesService.listarDonaciones(req, res);
    } catch (err) {
      console.log(err);
    }
  }
}

const donacionesController = new DonacionesController()
export default donacionesController;

