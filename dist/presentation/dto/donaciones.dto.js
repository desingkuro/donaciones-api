class DonacionesDTO {
    idDonacion;
    idTipoDonacion;
    idDonador;
    idCampania;
    fechaCreacion;
    state;
    checker;
    constructor({ idDonacion, idTipoDonacion, idDonador, idCampania, fechaCreacion, state, checker }) {
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
//# sourceMappingURL=donaciones.dto.js.map