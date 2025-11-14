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
            DonacionesService.listarDonaciones(req, res);
        }
        catch (err) {
            console.log(err);
        }
    }
}
const donacionesController = new DonacionesController();
export default donacionesController;
//# sourceMappingURL=donaciones.controller.js.map