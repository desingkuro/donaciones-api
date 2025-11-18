import { DonacionesService } from "../../application/services/donaciones.service.js";
class DonacionesController extends DonacionesService {
    create(req, res) {
        try {
            DonacionesService.crearDonacion(req, res);
        }
        catch (err) {
            console.log(err);
        }
    }
    list(req, res) {
        try {
            DonacionesService.listarDonaciones(res);
        }
        catch (err) {
            console.log(err);
        }
    }
    delete(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({ error: 'El id es obligatorio' });
            }
            const id = parseInt(req.params.id);
            DonacionesService.delete(id, res);
        }
        catch (err) {
            console.log(err);
        }
    }
    get(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({ error: 'El id es obligatorio' });
            }
            const id = parseInt(req.params.id);
            DonacionesService.findById(id, res);
        }
        catch (err) {
            console.log(err);
        }
    }
    update(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({ error: 'El id es obligatorio' });
            }
            const id = parseInt(req.params.id);
            DonacionesService.update(id, req.body, res);
        }
        catch (err) {
            console.log(err);
        }
    }
}
const donacionesController = new DonacionesController();
export default donacionesController;
//# sourceMappingURL=donaciones.controller.js.map