

export class Usuario {
    id:Number;
    nome:String;
    email:String;
    senha:String;
    saldo:Number;

    constructor(
        _id:Number,
        _nome:String,
        _email:String,
        _senha:String,
        _saldo:Number
    ) {
        this.id = _id;
        this.nome = _nome;
        this.email = _email;
        this.senha = _senha;
        this.saldo = _saldo;
    }


}