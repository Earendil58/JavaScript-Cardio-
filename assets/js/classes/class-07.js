class CuencaBancaria {

    #saldo;

    constructor(usuario, idCuenta, dueño, saldo) {
        this.usuario = usuario;
        this.idCuenta = idCuenta;
        this.dueño = dueño;
        this.#saldo = saldo; // SIRVE PARA SEÑALAR COMO A UTILIARSE COMO PRIVADO 
    }

    get saldo() {
        if (this.dueño) {
            return this.#saldo;
        }
        else {
            return 'No tiene permiso para visualizar saldo';
        }
    }

    set modifSaldo(nuevoSaldo) {
        if (this.dueño) {
            this.#saldo = nuevoSaldo;
        }
        else {
            return 'No se puede modificar el saldo';
        }
    }
}

const cliente1 = new CuencaBancaria('Menem', 101, true, 1012365);

console.log(cliente1._saldo);
console.log(cliente1.saldo);

cliente1.modifSaldo = 999999;
console.log(cliente1.saldo);

const cliente2 = new CuencaBancaria('Cavallo', 69, false, 123456);

console.log(cliente2._saldo);
console.log(cliente2.saldo);