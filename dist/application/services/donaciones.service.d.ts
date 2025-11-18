import { type Request, type Response } from "express";
export declare class DonacionesService {
    protected static crearDonacion(request: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    protected static listarDonaciones(res: Response): Promise<Response>;
    protected static delete(id: number, res: Response): Promise<Response>;
    protected static findById(id: number, res: Response): Promise<Response>;
    protected static update(id: number, request: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=donaciones.service.d.ts.map