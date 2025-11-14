interface DonacionProps {
    idDonacion: string;
    idTipoDonacion: number | string;
    idDonador: number;
    idCampania?: number | null;
    fechaCreacion?: string;
}
declare class Donacion {
    private _idDonacion;
    private _idTipoDonacion;
    private _idDonador;
    private _idCampania;
    private _fechaCreacion;
    constructor({ idDonacion, idTipoDonacion, idDonador, idCampania, fechaCreacion }: DonacionProps);
    get idDonacion(): string;
    get idTipoDonacion(): string | number;
    get idDonador(): number;
    get idCampania(): number | null;
    get fechaCreacion(): string;
    set idCampania(value: number | null);
}
export default Donacion;
//# sourceMappingURL=donacion.entity.d.ts.map