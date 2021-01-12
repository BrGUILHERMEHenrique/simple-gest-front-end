import { Usuario } from "./Usuario.model";

export class Retirada {
    id:Number;
    descricao:String;
    tipoGasto:String;
    quantia:Number;
    usuario:Usuario;


    constructor(
        _id:Number,
        _descricao:String,
        _tipoGasto:String,
        _quantia:Number,
        _usuario:Usuario
    ) {
        this.id = _id;
        this.descricao = _descricao;
        this.tipoGasto = _tipoGasto;
        this.quantia = _quantia;
        this.usuario = _usuario;
    }
}