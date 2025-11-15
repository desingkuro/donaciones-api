class Donacion {
    _idDonacion;
    _idTipoDonacion;
    _idDonador;
    _idCampania;
    _fechaCreacion;
    _state;
    _checker;
    constructor({ idDonacion, idTipoDonacion, idDonador, idCampania = null, fechaCreacion = new Date().toISOString(), state, checker }) {
        this._idDonacion = idDonacion || 0;
        this._idTipoDonacion = idTipoDonacion;
        this._idDonador = idDonador;
        this._idCampania = idCampania;
        this._fechaCreacion = fechaCreacion;
        this._state = state;
        this._checker = checker;
    }
    get idDonacion() { return this._idDonacion; }
    get idTipoDonacion() { return this._idTipoDonacion; }
    get idDonador() { return this._idDonador; }
    get idCampania() { return this._idCampania; }
    get fechaCreacion() { return this._fechaCreacion; }
    get state() { return this._state; }
    get checker() { return this._checker; }
    set idCampania(value) { this._idCampania = value; }
}
export default Donacion;
//# sourceMappingURL=donacion.entity.js.map