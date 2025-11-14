class DonacionesDTO {
    idDonacion;
    idTipoDonacion;
    idDonador;
    idCampania;
    fechaCreacion;
    constructor({ idDonacion, idTipoDonacion, idDonador, idCampania, fechaCreacion }) {
        this.idDonacion = idDonacion;
        this.idTipoDonacion = idTipoDonacion;
        this.idDonador = idDonador;
        this.idCampania = idCampania;
        this.fechaCreacion = fechaCreacion;
    }
}
export default DonacionesDTO;
//# sourceMappingURL=donaciones.dto.js.map