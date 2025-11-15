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
      DonacionesService.listarDonaciones(res);
    } catch (err) {
      console.log(err);
    }
  }

  public delete(req: Request, res: Response) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ error: 'El id es obligatorio' });
      }
      const id = parseInt(req.params.id);
      DonacionesService.delete(id, res);
    } catch (err) {
      console.log(err);
    }
  }

  public get(req: Request, res: Response) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ error: 'El id es obligatorio' });
      }
      const id = parseInt(req.params.id);
      DonacionesService.findById(id, res);
    } catch (err) {
      console.log(err);
    }
  }

  public update(req: Request, res: Response) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ error: 'El id es obligatorio' });
      }
      const id = parseInt(req.params.id);
      DonacionesService.update(id, req.body, res);
    } catch (err) {
      console.log(err);
    }
  }
}


const donacionesController = new DonacionesController()
export default donacionesController;

