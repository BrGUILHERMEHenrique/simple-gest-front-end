

export class UsuarioDtoLogin {
    email:String;
    senha:String;

    constructor(
        _email:String,
        _senha:String
    ) {
        this.email = _email;
        this.senha = _senha;
    }

}