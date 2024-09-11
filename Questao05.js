class Room {
    constructor(){
        this.ligada = false;
        this.quente = false;
    }
}

class interruptor {
    constructor() {
        this.estado = 'desligado';
    }
    ligar(){
        this.estado = 'ligado';
    }
    desligar() {
        this.estado = 'desligado';
    }
}

function sherlockholmes(){
    let lampada1 = new Room();
    let lampada2 = new Room();
    let lampada3 = new Room();
    let interruptor1 = new interruptor();
    let interruptor2 = new interruptor();
    let interruptor3 = new interruptor();

    interruptor1.ligar();
    lampada1.quente = true;
    lampada1.ligada = true;

    setTimeout(() =>{
        interruptor1.desligar();
        interruptor3.ligar();

        lampada2.ligada = true;

        let result = {
            'interruptor1': lampada1.quente ? (lampada1.ligada ? 'lampada 1' : 'Desconhecido') : 'Desconhecido',
            'interruptor2': lampada2.ligada ? 'lampada2': 'Desconhecido',
            'interruptor3': lampada3.ligada ? 'lampada3' : 'Desconhecido'
        };
        console.log('Verificação das lampadas: ', result);
    }, 1000);
}

sherlockholmes();