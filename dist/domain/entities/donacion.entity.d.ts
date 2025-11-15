interface DonacionProps {
    idDonacion?: number;
    idTipoDonacion: number;
    idDonador: number;
    idCampania?: number | null;
    fechaCreacion?: string;
    state: string;
    checker: number;
}
declare class Donacion {
    private _idDonacion?;
    private _idTipoDonacion;
    private _idDonador;
    private _idCampania;
    private _fechaCreacion;
    private _state;
    private _checker;
    constructor({ idDonacion, idTipoDonacion, idDonador, idCampania, fechaCreacion, state, checker }: DonacionProps);
    get idDonacion(): number | undefined;
    get idTipoDonacion(): number;
    get idDonador(): number;
    get idCampania(): number | null;
    get fechaCreacion(): string;
    get state(): string;
    get checker(): number;
    set idCampania(value: number | null);
}
export default Donacion;
//# sourceMappingURL=donacion.entity.d.ts.map