interface DonacionProps {
  idDonacion: string;
  idTipoDonacion: number | string;
  idDonador: number;
  idCampania?: number | null;
  fechaCreacion?: string;
}

class Donacion {
  private _idDonacion: string;
  private _idTipoDonacion: number | string;
  private _idDonador: number;
  private _idCampania: number | null;
  private _fechaCreacion: string;

  constructor({
    idDonacion,
    idTipoDonacion,
    idDonador,
    idCampania = null,
    fechaCreacion = new Date().toISOString()
  }: DonacionProps) {

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

  set idCampania(value: number | null) { this._idCampania = value; }
}

export default Donacion;
