import Donacion from "../../domain/entities/donacion.entity.js";
import { response, type Request, type Response } from "express";
import DonacionesDTO from "../../presentation/dto/donaciones.dto.js";
import { DonacionesRepository } from "../../domain/dao/Donaciones.repository.js";

export class DonacionesService {
  protected static async crearDonacion(request: Request, res: Response) {
    const requestDto = request.body;
    const dto = new DonacionesDTO(requestDto);
    const dao = new DonacionesRepository();

    const entity = new Donacion({
      idDonacion: dto.idDonacion,
      idTipoDonacion: dto.idTipoDonacion,
      idDonador: dto.idDonador,
      idCampania: dto.idCampania,
      fechaCreacion: dto.fechaCreacion,
    });

    try {
      const result = await dao.create(entity);
      return await response.status(201).json(result);
    } catch (error: any) {
      return response.status(500).json({ error: error?.message });
    }
  }

  protected static async listarDonaciones(request: Request, res: Response) {
    try {
      const dao = new DonacionesRepository();
      const donaciones = await dao.findAll();
      return response.status(200).json(donaciones);
    } catch (error: any) {
      return response.status(500).json({ error: error?.message });
    }
  }
}
