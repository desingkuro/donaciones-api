interface DonacionProps {
  idDonacion?: number;
  idTipoDonacion: number;
  idDonador: number;
  idCampania?: number | null;
  fechaCreacion?: string;
  state: string;
  checker: number;
}

class Donacion {
  private _idDonacion?: number;
  private _idTipoDonacion: number;
  private _idDonador: number;
  private _idCampania: number | null;
  private _fechaCreacion: string;
  private _state: string;
  private _checker: number;

  constructor({
    idDonacion,
    idTipoDonacion,
    idDonador,
    idCampania = null,
    fechaCreacion = new Date().toISOString(),
    state,
    checker
  }: DonacionProps) {

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

  set idCampania(value: number | null) { this._idCampania = value; }
}

export default Donacion;
