export interface DonacionesDtoInterface {
    idDonacion?: number;
    idTipoDonacion: number;
    idDonador: number;
    idCampania: number | null;
    fechaCreacion: string;
    state: string;
    checker: number;
}
declare class DonacionesDTO implements DonacionesDtoInterface {
    idDonacion: number;
    idTipoDonacion: number;
    idDonador: number;
    idCampania: number | null;
    fechaCreacion: string;
    state: string;
    checker: number;
    constructor({ idDonacion, idTipoDonacion, idDonador, idCampania, fechaCreacion, state, checker }: DonacionesDtoInterface);
}
export default DonacionesDTO;
//# sourceMappingURL=donaciones.dto.d.ts.map