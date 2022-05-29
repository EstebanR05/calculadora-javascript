class Display {

    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.ValorAnterior = '';
    }

<<<<<<< Updated upstream
    agregarNumero(numero) {
        this.valorActual = numero;
=======
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.ValorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

<<<<<<< Updated upstream
    agregarNumero(numero) {

        if (numero === '.' && this.valorActual.includes('.')) return

=======
    computar(tipo){
       this.tipoOperacion !== 'igual' && this.calcular();
       this.tipoOperacion = tipo;
       this.ValorAnterior = this.valorActual || this.ValorAnterior;
       this.valorActual = '';
       this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) { return }
>>>>>>> Stashed changes
        this.valorActual = this.valorActual.toString() + numero.toString();
>>>>>>> Stashed changes
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.ValorAnterior;
    }

<<<<<<< Updated upstream
=======
    calcular() {
        const ValorAnterior = parseFloat(this.ValorAnterior);
        const valorActual = parseFloat(this.valorActual);
<<<<<<< Updated upstream

        if(isNaN(valorActual) || isNaN(ValorAnterior)) return
        this.valorActual = this.calculador();
    }

=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

        if (isNaN(valorActual) || isNaN(ValorAnterior)) {
            return;
            this.valorActual = this.calculador[this.tipoOperacion](ValorAnterior, valorActual);
        }
    }
}