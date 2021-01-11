
export class UsuarioDtoCadastro {

    nome:String;
    email:String;
    senha:String;

    constructor (
        _nome:String,
        _email:String,
        _senha:String
    ) {
        this.nome = _nome;
        this.email = _email;
        this.senha = _senha
    }
}