export class RetiradaDto {
    descricao:String;
	tipoGasto:String;
	quantia:Number;
	usuario:Number;
    constructor(
        _descricao:String,
        _tipoGasto:String,
        _quantia:Number,
        _usuario:Number
    ) {
        this.descricao = _descricao;
        this.tipoGasto = _tipoGasto;
        this.quantia = _quantia;
        this.usuario = _usuario;
    }
}