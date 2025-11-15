import Donacion from "../../domain/entities/donacion.entity.js";
import { type Request, type Response } from "express";
import DonacionesDTO from "../../presentation/dto/donaciones.dto.js";
import { DonacionesRepository } from "../../domain/dao/Donaciones.repository.js";

export class DonacionesService {

  protected static async crearDonacion(request: Request, res: Response) {
    const requestDto = request.body;
    const dto = new DonacionesDTO(requestDto);
    const dao = new DonacionesRepository();

    const entity = new Donacion({
      idTipoDonacion: dto.idTipoDonacion,
      idDonador: dto.idDonador,
      idCampania: dto.idCampania,
      fechaCreacion: dto.fechaCreacion,
      state: dto.state,
      checker: dto.checker,
    });

    try {
      const result = await dao.create(entity);
      return res.status(201).json(result);
    } catch (error: any) {
      console.log(error)
      return res.status(500).json({ error: error?.message });
    }
  }

  protected static async listarDonaciones(res: Response): Promise<Response> {
    try {
      const dao = new DonacionesRepository();
      const donaciones = await dao.findAll();
      return res.status(200).json(donaciones);
    } catch (error: any) {
      console.log(error)
      return res.status(500).json({ error: error?.message });
    }
  }

  protected static async delete(id: number, res: Response): Promise<Response> {
    try {
      const dao = new DonacionesRepository();
      const donaciones = await dao.delete(id);
      if (!donaciones || donaciones.length === 0) {
        return res.status(404).json({ error: 'Donacion no encontrada' });
      }
      return res.status(200).json({ message: 'Donacion eliminada correctamente', donaciones });
    } catch (error: any) {
      console.log(error)
      return res.status(500).json({ error: error?.message });
    }
  }

  protected static async findById(id: number, res: Response): Promise<Response> {
    try {
      const dao = new DonacionesRepository();
      const donaciones = await dao.findById(id);
      if (!donaciones || donaciones.length === 0) {
        return res.status(404).json({ error: 'Donacion no encontrada' });
      }
      return res.status(200).json(donaciones);
    } catch (error: any) {
      console.log(error)
      return res.status(500).json({ error: error?.message });
    }
  }

  protected static async update(id: number, request: Request, res: Response): Promise<Response> {
    try {
      const dao = new DonacionesRepository();
      const donaciones = await dao.update(id, request.body);
      if (!donaciones) {
        return res.status(404).json({ error: 'Donacion no encontrada' });
      }
      return res.status(200).json({ message: 'Donacion actualizada correctamente', donaciones });
    } catch (error: any) {
      console.log(error)
      return res.status(500).json({ error: error?.message });
    }
  }
}
