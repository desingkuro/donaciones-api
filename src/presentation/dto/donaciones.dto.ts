export interface DonacionesDtoInterface{
    idDonacion: string;
    idTipoDonacion: number | string;
    idDonador: number;
    idCampania: number | null;
    fechaCreacion: string;
}

class DonacionesDTO implements DonacionesDtoInterface {
    idDonacion: string;
    idTipoDonacion: number | string;
    idDonador: number;
    idCampania: number | null;
    fechaCreacion: string;

    constructor(
        {idDonacion,
        idTipoDonacion,
        idDonador,
        idCampania,
        fechaCreacion}:DonacionesDtoInterface
    ) {
        this.idDonacion = idDonacion;
        this.idTipoDonacion = idTipoDonacion;
        this.idDonador = idDonador;
        this.idCampania = idCampania;
        this.fechaCreacion = fechaCreacion;
    }
}

export default DonacionesDTO;
