import { Router } from 'express';
import donacionesController from '../controllers/donaciones.controller.js';
import { donacionesCreateValidator, donacionesDeleteValidator } from '../validators/donacion.validator.js';


class RouterDonaciones {
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configurarRutas();
    }

    private configurarRutas() {
        this.rutaApi.post('/', donacionesCreateValidator,donacionesController.create);
        this.rutaApi.get('/', donacionesController.list);
        this.rutaApi.delete('/:id', donacionesDeleteValidator,donacionesController.delete);
        this.rutaApi.get('/:id', donacionesController.get);
        this.rutaApi.put('/:id', donacionesController.update);
    }

}

const routerDonaciones = new RouterDonaciones()
export default routerDonaciones.rutaApi;
