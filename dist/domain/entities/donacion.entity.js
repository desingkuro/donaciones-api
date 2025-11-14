class Donacion {
    _idDonacion;
    _idTipoDonacion;
    _idDonador;
    _idCampania;
    _fechaCreacion;
    constructor({ idDonacion, idTipoDonacion, idDonador, idCampania = null, fechaCreacion = new Date().toISOString() }) {
        this._idDonacion = idDonacion;
        this._idTipoDonacion = idTipoDonacion;
        this._idDonador = idDonador;
        this._idCampania = idCampania;
        this._fechaCreacion = fechaCreacion;
    }
    get idDonacion() { return this._idDonacion; }
    get idTipoDonacion() { return this._idTipoDonacion; }
    get idDonador() { return this._idDonador; }
    get idCampania() { return this._idCampania; }
    get fechaCreacion() { return this._fechaCreacion; }
    set idCampania(value) { this._idCampania = value; }
}
export default Donacion;
//# sourceMappingURL=donacion.entity.js.map