

export class Usuario {
    id:Number;
    nome:String;
    email:String;
    senha:String;

    constructor(
        _id:Number,
        _nome:String,
        _email:String,
        _senha:String,
    ) {
        this.id = _id;
        this.nome = _nome;
        this.email = _email;
        this.senha = _senha;
    }


}