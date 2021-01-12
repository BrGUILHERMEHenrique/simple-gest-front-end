
export class ContaDtoCadastro {
    descricao: String;
    usuario: Number;
    tipoGasto: String;
    preco: Number;
    dataVencimento:Date;

    constructor(
        _descricao:String,
        _usuario:Number,
        _tipoGasto:String,
        _preco:Number,
        _dataVencimento:Date
    ) {
        this.descricao = _descricao;
        this.usuario = _usuario;
        this.tipoGasto = _tipoGasto;
        this.preco = _preco;
        this.dataVencimento = _dataVencimento;
    }
}