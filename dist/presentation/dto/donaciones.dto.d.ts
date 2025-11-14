export interface DonacionesDtoInterface {
    idDonacion: string;
    idTipoDonacion: number | string;
    idDonador: number;
    idCampania: number | null;
    fechaCreacion: string;
}
declare class DonacionesDTO implements DonacionesDtoInterface {
    idDonacion: string;
    idTipoDonacion: number | string;
    idDonador: number;
    idCampania: number | null;
    fechaCreacion: string;
    constructor({ idDonacion, idTipoDonacion, idDonador, idCampania, fechaCreacion }: DonacionesDtoInterface);
}
export default DonacionesDTO;
//# sourceMappingURL=donaciones.dto.d.ts.map