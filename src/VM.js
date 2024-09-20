export class VM {
    constructor() {
        this.register = []; // Pila para almacenar valores
        this.environment = [Array.from({ length: 10 }, () => [])];  // Pila para almacenar variables y scope
    }

    execute(instruction) {
        const parts = instruction.split(' ');

        switch (parts[0]) {
            case 'LDV':  // Cargar un valor en el registro
                this.register.push(parseInt(parts[1], 10));
                break;
            case 'BST':  // Guardar el valor en el entorno con índices
                this.environment[parts[1]][parts[2]] = this.register.pop();
                break;
            case 'BLD':  // Restaurar el valor del entorno basado en los índices
                if (this.environment[parts[1]][parts[2]] !== undefined) {
                    this.register.push(this.environment[parts[1]][parts[2]]);
                } 
                break;
            case 'ADD':
                this.register.push(this.register.pop() + this.register.pop());
                break;
            case 'MUL':
                this.register.push(this.register.pop() * this.register.pop());
                break;
            case 'PRN':  // Imprimir el valor del registro
                console.log(this.register.pop());
                break;
            case 'HLT':  // Detener la ejecución
                console.log('>>> VM HALTED');
                return;
            default:
                console.error(`Unknown instruction: ${parts[0]}`);
        }
    }

    run(instructions) {
        for (const instruction of instructions) {
            this.execute(instruction);
        }
    }
}
