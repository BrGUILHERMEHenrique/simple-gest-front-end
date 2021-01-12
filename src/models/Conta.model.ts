import { Usuario } from "./Usuario.model";

export class Conta {
    id:Number;
    descricao:String;
    usuario: Usuario;
    tipoGasto: String;
    preco: Number;

    constructor(
        _id:Number,
        _descricao:String,
        _usuario:Usuario,
        _tipoGasto:String,
        _preco:Number,
    ) {
        this.id = _id;
        this.descricao = _descricao;
        this.usuario = _usuario;
        this.tipoGasto = _tipoGasto;
        this.preco = _preco;
    }
}