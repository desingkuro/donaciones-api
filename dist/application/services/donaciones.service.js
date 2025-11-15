import Donacion from "../../domain/entities/donacion.entity.js";
import {} from "express";
import DonacionesDTO from "../../presentation/dto/donaciones.dto.js";
import { DonacionesRepository } from "../../domain/dao/Donaciones.repository.js";
export class DonacionesService {
    static async crearDonacion(request, res) {
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
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error: error?.message });
        }
    }
    static async listarDonaciones(res) {
        try {
            const dao = new DonacionesRepository();
            const donaciones = await dao.findAll();
            return res.status(200).json(donaciones);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error: error?.message });
        }
    }
    static async delete(id, res) {
        try {
            const dao = new DonacionesRepository();
            const donaciones = await dao.delete(id);
            if (!donaciones || donaciones.length === 0) {
                return res.status(404).json({ error: 'Donacion no encontrada' });
            }
            return res.status(200).json({ message: 'Donacion eliminada correctamente', donaciones });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error: error?.message });
        }
    }
    static async findById(id, res) {
        try {
            const dao = new DonacionesRepository();
            const donaciones = await dao.findById(id);
            if (!donaciones || donaciones.length === 0) {
                return res.status(404).json({ error: 'Donacion no encontrada' });
            }
            return res.status(200).json(donaciones);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error: error?.message });
        }
    }
}
//# sourceMappingURL=donaciones.service.js.map