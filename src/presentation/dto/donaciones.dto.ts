export interface DonacionesDtoInterface{
    idDonacion?: number;
    idTipoDonacion: number;
    idDonador: number;
    idCampania: number | null;
    fechaCreacion: string;
    state: string;
    checker: number;
}

class DonacionesDTO implements DonacionesDtoInterface {
    idDonacion: number;
    idTipoDonacion: number;
    idDonador: number;
    idCampania: number | null;
    fechaCreacion: string;
    state: string; 
    checker: number;

    constructor(
        {idDonacion,
        idTipoDonacion,
        idDonador,
        idCampania,
        fechaCreacion,
        state,
        checker}:DonacionesDtoInterface
    ) {
        this.idDonacion = idDonacion || 0;
        this.idTipoDonacion = idTipoDonacion;
        this.idDonador = idDonador;
        this.idCampania = idCampania;
        this.fechaCreacion = fechaCreacion;
        this.state = state;
        this.checker = checker;
    }
}

export default DonacionesDTO;
